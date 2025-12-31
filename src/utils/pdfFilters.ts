// Utility functions to filter empty content from PDF

// Type for values that can be checked for emptiness
type CheckableValue = string | number | boolean | null | undefined | CheckableValue[] | Record<string, unknown>;

// Check if a value should be considered "filled"
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

// Filter out empty values from an object
export const filterEmptyValues = <T extends Record<string, CheckableValue>>(data: T): Partial<T> => {
  const filtered: Partial<T> = {};

  for (const [key, value] of Object.entries(data)) {
    if (hasValue(value as CheckableValue)) {
      filtered[key as keyof T] = value as T[keyof T];
    }
  }

  return filtered;
};

// Check if a section should be rendered based on its fields
export const shouldRenderSection = (data: Record<string, CheckableValue>, fields: string[]): boolean => {
  return fields.some(field => {
    const value = data[field];
    return value !== undefined && hasValue(value);
  });
};

// Get initial/default value for a field
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

// Check if a field has changed from its initial value
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

// Check if a section has any changes from initial state
export const hasSectionChanges = (data: Record<string, CheckableValue>, fields: string[]): boolean => {
  return fields.some(field => {
    const value = data[field];
    const fieldType = Array.isArray(value) ? 'array' : typeof value;
    return hasChanged(value, fieldType);
  });
};

// Function to check if a specific page has content
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