/**
 * PDF Content Filtering Utilities
 *
 * This module provides a suite of utility functions for filtering and validating form data
 * before rendering PDF reports. It helps determine which sections and fields contain
 * meaningful content that should be included in the generated PDF document.
 *
 * Key features:
 * - Recursive value checking for nested data structures
 * - Section-level content validation
 * - Field change detection from initial state
 * - Page-specific content mapping for multi-page PDF layouts
 *
 * @module pdfFilters
 */

/**
 * Represents any value type that can be checked for emptiness or meaningful content.
 *
 * This recursive type definition allows checking of:
 * - Primitive values (string, number, boolean)
 * - Null and undefined
 * - Arrays of checkable values (recursive)
 * - Objects with string keys and unknown values
 *
 * @typedef {string | number | boolean | null | undefined | CheckableValue[] | Record<string, unknown>} CheckableValue
 */
type CheckableValue = string | number | boolean | null | undefined | CheckableValue[] | Record<string, unknown>;

/**
 * Determines if a value contains meaningful content that should be included in a PDF report.
 *
 * This function recursively evaluates values to determine if they represent "filled" or
 * meaningful data. It handles various data types and edge cases specific to form inputs.
 *
 * Evaluation rules by type:
 * - **Arrays**: Must have length > 0 AND at least one element with meaningful content
 * - **Strings**: Must be non-empty after trimming AND not equal to the default "Selecione..." placeholder
 * - **Numbers**: Must be a valid number (not NaN)
 * - **Booleans**: Only `true` is considered meaningful content (false indicates "not selected")
 * - **Null/Undefined**: Always considered empty
 * - **Objects**: At least one property value must contain meaningful content (recursive)
 *
 * @param {CheckableValue} value - The value to check for meaningful content
 * @returns {boolean} `true` if the value contains meaningful content, `false` otherwise
 *
 * @example
 * // String checks
 * hasValue("Some text")      // true
 * hasValue("")               // false
 * hasValue("Selecione...")   // false (default placeholder)
 * hasValue("  ")             // false (whitespace only)
 *
 * @example
 * // Array checks
 * hasValue([1, 2, 3])        // true
 * hasValue([])               // false
 * hasValue([null, "", {}])   // false (all elements are empty)
 * hasValue(["", "text"])     // true (has one meaningful element)
 *
 * @example
 * // Boolean checks
 * hasValue(true)             // true
 * hasValue(false)            // false
 *
 * @example
 * // Object checks
 * hasValue({ name: "John" }) // true
 * hasValue({ name: "" })     // false
 * hasValue({})               // false
 */
export const hasValue = (value: CheckableValue): boolean => {
  // Handle arrays
  if (Array.isArray(value)) {
    return value.length > 0 && value.some(item => hasValue(item));
  }
  
  // Handle strings - check if not empty and not default "Selecione..."
  if (typeof value === 'string') {
    const trimmed = value.trim();
    return trimmed !== '' && trimmed !== 'Selecione...';
  }
  
  // Handle numbers
  if (typeof value === 'number') {
    return !isNaN(value);
  }
  
  // Handle booleans - only true values are considered filled
  if (typeof value === 'boolean') {
    return value === true;
  }
  
  // Handle null/undefined
  if (value === null || value === undefined) {
    return false;
  }
  
  // Handle objects
  if (typeof value === 'object') {
    return Object.values(value).some(v => hasValue(v as CheckableValue));
  }
  
  return false;
};

/**
 * Filters an object to remove all properties with empty or meaningless values.
 *
 * This function creates a new object containing only the key-value pairs where the value
 * is considered meaningful (according to the `hasValue` function). This is useful for
 * cleaning form data before PDF generation, ensuring only filled fields are included.
 *
 * @template T - An object type with string keys and CheckableValue values
 * @param {T} data - The object to filter
 * @returns {Partial<T>} A new object containing only properties with meaningful values
 *
 * @example
 * const formData = {
 *   name: "John Doe",
 *   age: 30,
 *   address: "",
 *   city: "Selecione...",
 *   active: false,
 *   tags: []
 * };
 *
 * const filtered = filterEmptyValues(formData);
 * // Result: { name: "John Doe", age: 30 }
 * // Removed: address (empty), city (placeholder), active (false), tags (empty array)
 *
 * @example
 * const nestedData = {
 *   user: { name: "Jane", email: "" },
 *   items: [1, 2, 3],
 *   empty: null
 * };
 *
 * const filtered = filterEmptyValues(nestedData);
 * // Result: { user: { name: "Jane", email: "" }, items: [1, 2, 3] }
 * // Note: Nested object filtering is not recursive; only top-level keys are filtered
 */
export const filterEmptyValues = <T extends Record<string, CheckableValue>>(data: T): Partial<T> => {
  const filtered: Partial<T> = {};

  for (const [key, value] of Object.entries(data)) {
    if (hasValue(value as CheckableValue)) {
      filtered[key as keyof T] = value as T[keyof T];
    }
  }

  return filtered;
};

/**
 * Determines if a PDF section should be rendered based on whether any of its fields contain data.
 *
 * This function is used to conditionally render entire sections of the PDF report. A section
 * should only be included in the PDF if at least one of its associated fields has meaningful
 * content. This prevents empty sections from cluttering the final document.
 *
 * @param {Record<string, CheckableValue>} data - The complete form data object
 * @param {string[]} fields - Array of field names that belong to this section
 * @returns {boolean} `true` if at least one field has meaningful content, `false` if all fields are empty
 *
 * @example
 * const formData = {
 *   victimName: "John Doe",
 *   victimAge: 30,
 *   witnessName: "",
 *   witnessContact: ""
 * };
 *
 * // Check if victim section should render
 * shouldRenderSection(formData, ['victimName', 'victimAge']);
 * // Returns: true (both fields have content)
 *
 * // Check if witness section should render
 * shouldRenderSection(formData, ['witnessName', 'witnessContact']);
 * // Returns: false (all fields are empty)
 *
 * @example
 * // Partial data in section
 * const data = { field1: "", field2: "data", field3: null };
 * shouldRenderSection(data, ['field1', 'field2', 'field3']);
 * // Returns: true (field2 has content)
 */
export const shouldRenderSection = (data: Record<string, CheckableValue>, fields: string[]): boolean => {
  return fields.some(field => {
    const value = data[field];
    return value !== undefined && hasValue(value);
  });
};

/**
 * Returns the initial/default value for a form field based on its type.
 *
 * This function provides the default empty state for different field types. These initial
 * values are used when detecting whether a field has been modified from its original state.
 *
 * @param {string} fieldType - The type of the field ('string', 'array', 'boolean', 'number', 'select', or other)
 * @returns {string | boolean | null | never[] | undefined} The initial value appropriate for the field type:
 *   - `'string'` → `''` (empty string)
 *   - `'array'` → `[]` (empty array)
 *   - `'boolean'` → `false`
 *   - `'number'` → `null`
 *   - `'select'` → `''` (empty string)
 *   - Other types → `undefined`
 *
 * @example
 * getInitialValue('string')   // Returns: ''
 * getInitialValue('array')    // Returns: []
 * getInitialValue('boolean')  // Returns: false
 * getInitialValue('number')   // Returns: null
 * getInitialValue('select')   // Returns: ''
 * getInitialValue('unknown')  // Returns: undefined
 */
export const getInitialValue = (fieldType: string): string | boolean | null | never[] | undefined => {
  switch (fieldType) {
    case 'string':
      return '';
    case 'array':
      return [];
    case 'boolean':
      return false;
    case 'number':
      return null;
    case 'select':
      return '';
    default:
      return undefined;
  }
};

/**
 * Checks if a field value has changed from its initial/default state.
 *
 * This function compares a current value against the expected initial value for its type
 * to determine if the user has modified the field. It's useful for detecting which fields
 * have been edited in a form.
 *
 * The function first compares against the initial value, then applies type-specific logic:
 * - Arrays: Must have at least one element
 * - Strings: Must be non-empty after trimming and not the "Selecione..." placeholder
 * - Booleans: Only `true` is considered a change (false is the default state)
 * - Other types: Must not be null or undefined
 *
 * @param {CheckableValue} value - The current value to check
 * @param {string} fieldType - The type of the field (used to determine initial value)
 * @returns {boolean} `true` if the value has changed from its initial state, `false` otherwise
 *
 * @example
 * // String field changes
 * hasChanged("John Doe", "string")     // true (changed from empty string)
 * hasChanged("", "string")             // false (still at initial value)
 * hasChanged("Selecione...", "string") // false (placeholder is considered empty)
 *
 * @example
 * // Array field changes
 * hasChanged([1, 2, 3], "array")       // true (has elements)
 * hasChanged([], "array")              // false (still empty)
 *
 * @example
 * // Boolean field changes
 * hasChanged(true, "boolean")          // true (changed from false)
 * hasChanged(false, "boolean")         // false (still at initial value)
 *
 * @example
 * // Number field changes
 * hasChanged(42, "number")             // true (changed from null)
 * hasChanged(null, "number")           // false (still at initial value)
 */
export const hasChanged = (value: CheckableValue, fieldType: string): boolean => {
  const initialValue = getInitialValue(fieldType);
  
  if (value === initialValue) {
    return false;
  }
  
  if (Array.isArray(value)) {
    return value.length > 0;
  }
  
  if (typeof value === 'string') {
    return value.trim() !== '' && value !== 'Selecione...';
  }
  
  if (typeof value === 'boolean') {
    return value === true;
  }
  
  return value !== null && value !== undefined;
};

/**
 * Determines if any field in a section has been modified from its initial state.
 *
 * This function checks whether a section of the form contains any user-modified data.
 * It's useful for highlighting sections that have been edited or for determining which
 * sections need to be saved or validated.
 *
 * The function automatically infers each field's type from its current value and then
 * checks if that field has changed from its initial state using the `hasChanged` function.
 *
 * @param {Record<string, CheckableValue>} data - The complete form data object
 * @param {string[]} fields - Array of field names that belong to this section
 * @returns {boolean} `true` if at least one field in the section has been modified, `false` if all fields are at their initial state
 *
 * @example
 * const formData = {
 *   name: "John Doe",      // Changed from ""
 *   age: null,             // Still at initial value
 *   active: false,         // Still at initial value
 *   tags: ["new"]          // Changed from []
 * };
 *
 * hasSectionChanges(formData, ['name', 'age']);
 * // Returns: true (name has changed)
 *
 * hasSectionChanges(formData, ['age', 'active']);
 * // Returns: false (both still at initial values)
 *
 * hasSectionChanges(formData, ['name', 'tags']);
 * // Returns: true (both have changed)
 */
export const hasSectionChanges = (data: Record<string, CheckableValue>, fields: string[]): boolean => {
  return fields.some(field => {
    const value = data[field];
    const fieldType = Array.isArray(value) ? 'array' : typeof value;
    return hasChanged(value, fieldType);
  });
};

/**
 * Checks if a specific page of the PDF report contains any meaningful content.
 *
 * This function maps logical page names to their associated form fields and checks if
 * any of those fields contain data. It's used to determine whether a page should be
 * included in the generated PDF document, allowing for dynamic page layouts based on
 * which sections the user has filled out.
 *
 * **Page Mappings:**
 * - **first**: Preliminary information (offense nature, date/time, location, police units, team members)
 * - **second**: Environmental conditions (period, lighting, weather, visibility, temperature, victim state, preservation)
 * - **third**: External location details (area type, social profile, infrastructure, terrain, body location)
 * - **fourth**: Internal location and vehicle details (environment type, construction, hygiene, vehicle information)
 * - **fifth**: Victim identification (name, sex, age, nationality, tattoos, clothing, accessories)
 * - **rest**: Forensic details and final information (rigor mortis, time of death, body position/state, evidence, seizures, witnesses, investigations, conclusions)
 *
 * @param {Record<string, CheckableValue>} data - The complete form data object
 * @param {string} page - The page identifier ('first', 'second', 'third', 'fourth', 'fifth', or 'rest')
 * @returns {boolean} `true` if the page has at least one field with content, `false` if the page is empty
 *
 * @example
 * const formData = {
 *   naturezaDelito: "Homicídio",
 *   data: "2024-01-15",
 *   // ... other fields
 * };
 *
 * hasPageContent(formData, 'first');
 * // Returns: true (has offense nature and date)
 *
 * hasPageContent(formData, 'second');
 * // Returns: false (no weather/environmental data filled)
 *
 * @example
 * // Unknown page identifier
 * hasPageContent(formData, 'unknown');
 * // Returns: false (page doesn't exist in mapping)
 */
export const hasPageContent = (data: Record<string, CheckableValue>, page: string): boolean => {
  // Define which fields belong to each page
  const pageFields = {
    first: [
      'naturezaDelito', 'data', 'hora', 'localFatos', 'circunscricaoPolicial',
      'boDP', 'boDHPP', 'delegado', 'escrivao', 'policiaisCivis', 'perito',
      'fotografo', 'papiloscopistas'
    ],
    second: [
      'periodo', 'luz', 'clima', 'visibilidade', 'temperatura', 'sensacaoTermica',
      'umidadeAr', 'estadoVitima', 'preservadoPor', 'tentativaResgate'
    ],
    third: [
      'area', 'perfilSocial', 'iluminacaoPublica', 'redeEsgoto', 'pavimentacao1',
      'trafegoVeiculos', 'localEncontroCorpo', 'pavimentacao', 'tipoRelevo',
      'corpoMovido'
    ],
    fourth: [
      'tipoAmbiente', 'tipoConstrucao', 'caracteristicasMoradia', 'condicaoHigiene',
      'localCorpo', 'tipoVeiculo', 'marcaVeiculo', 'placa', 'corVeiculo', 'motorLigado'
    ],
    fifth: [
      'identificacaoVitima', 'nome', 'sexo', 'idade', 'naturalidadeEstado',
      'tatuagensDeformidades', 'vestimentas', 'aderecos'
    ],
    rest: [
      'rigidez', 'hipotermia', 'tempoMorte', 'posicaoCorpo', 'estadoCorpo',
      'materialPericia', 'lesoes', 'apreensoes', 'arrecadacoes', 'testemunhas',
      'investigacoesPreliminares', 'consideracoesFinais'
    ]
  };

  // Get the fields for the current page
  const fields = pageFields[page as keyof typeof pageFields];
  if (!fields) return false;

  // Check if any field in the page has content
  return fields.some(field => {
    const value = data[field];
    return hasValue(value);
  });
};