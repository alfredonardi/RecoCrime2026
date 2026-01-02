import { useState, useEffect } from 'react';
import { FormData, FormValue } from '../types';

/**
 * LocalStorage key used for persisting form data across browser sessions.
 * The stored data contains all form fields from the RECO (Relatório de Exame de Corpo de Delito) form.
 */
const STORAGE_KEY = 'reco_form_data';

/**
 * Initializes form state from localStorage or creates a new state with default values.
 *
 * **Initialization Priority:**
 * 1. If data exists in localStorage under 'reco_form_data', restore it
 * 2. Otherwise, create new state with current date/time and empty dynamic arrays
 *
 * **Default Values:**
 * - `data`: Current date in ISO format (YYYY-MM-DD)
 * - `hora`: Current time in 24-hour format (HH:MM)
 * - `tatuagensDeformidades`: Empty array for tattoos/deformities records
 * - `vestimentas`: Empty array for clothing items
 * - `aderecos`: Empty array for accessories/personal effects
 * - `lesoes`: Empty array for injury/lesion records
 * - `testemunhas`: Empty array for witness information
 *
 * @returns {FormData} Initial form state either from localStorage or with default values
 *
 * @example
 * // First time initialization (no saved data)
 * const state = getInitialState();
 * // Returns: { data: "2026-01-02", hora: "14:30", tatuagensDeformidades: [], ... }
 *
 * @example
 * // Subsequent initialization (with saved data)
 * const state = getInitialState();
 * // Returns: { data: "2026-01-01", hora: "10:15", naturezaDelito: "Homicídio", ... }
 */
const getInitialState = (): FormData => {
  const savedData = localStorage.getItem(STORAGE_KEY);
  if (savedData) {
    return JSON.parse(savedData);
  }

  // Get current date and time
  const now = new Date();
  const currentDate = now.toISOString().split('T')[0];
  const currentTime = now.toTimeString().slice(0, 5);

  return {
    data: currentDate,
    hora: currentTime,
    // Initialize arrays for dynamic lists
    tatuagensDeformidades: [],
    vestimentas: [],
    aderecos: [],
    lesoes: [],
    testemunhas: [],
  };
};

/**
 * Custom React hook for managing forensic crime scene report (RECO) form state.
 *
 * This hook provides centralized state management for the entire RECO form with automatic
 * persistence to localStorage, error handling, and form reset functionality.
 *
 * **Key Features:**
 * - **Automatic Persistence**: All form changes are automatically saved to localStorage
 * - **Auto-Initialization**: New forms start with current date/time pre-filled
 * - **Error Management**: Field errors are automatically cleared when the field value changes
 * - **Confirmation Dialog**: Reset operation requires user confirmation to prevent accidental data loss
 * - **Type Safety**: Full TypeScript support with type-safe field updates
 *
 * **Storage Behavior:**
 * - Data persists across browser sessions and page reloads
 * - Storage key: 'reco_form_data'
 * - Data is saved as JSON string
 * - On component unmount, data remains in localStorage for future sessions
 *
 * **Dynamic Arrays:**
 * The following fields are pre-initialized as empty arrays to support dynamic list components:
 * - `tatuagensDeformidades`: Tattoos and deformities on the victim
 * - `vestimentas`: Clothing items worn by the victim
 * - `aderecos`: Accessories and personal effects
 * - `lesoes`: Injuries and lesions found on the victim
 * - `testemunhas`: Witness information and contact details
 *
 * @returns {Object} Form state and control methods
 * @returns {FormData} formData - Current form data including all fields from the RECO form
 * @returns {Record<string, string>} errors - Validation errors keyed by field name
 * @returns {Function} handleChange - Updates a specific form field and clears its error
 * @returns {Function} resetForm - Resets the entire form after user confirmation
 *
 * @example
 * // Basic usage in a form component
 * function MyFormComponent() {
 *   const { formData, errors, handleChange, resetForm } = useForm();
 *
 *   return (
 *     <div>
 *       <input
 *         type="text"
 *         value={formData.naturezaDelito || ''}
 *         onChange={(e) => handleChange('naturezaDelito', e.target.value)}
 *       />
 *       {errors.naturezaDelito && <span>{errors.naturezaDelito}</span>}
 *       <button onClick={resetForm}>Reset Form</button>
 *     </div>
 *   );
 * }
 *
 * @example
 * // Updating complex field values (arrays, objects)
 * const { formData, handleChange } = useForm();
 *
 * // Add a new witness
 * const newWitness = { nome: 'João Silva', contato: '11999999999', observacoes: 'Viu o suspeito' };
 * handleChange('testemunhas', [...(formData.testemunhas || []), newWitness]);
 *
 * // Update boolean field
 * handleChange('viasAcessoPavimentada', true);
 *
 * @example
 * // Handling validation errors
 * const { errors, handleChange } = useForm();
 *
 * // Error is automatically cleared when field is updated
 * handleChange('data', '2026-01-02'); // Clears errors.data if it exists
 *
 * @see {@link FormData} for complete form structure and available fields
 * @see {@link FormValue} for supported value types
 */
export const useForm = () => {
  const [formData, setFormData] = useState<FormData>(getInitialState);
  const [errors, setErrors] = useState<Record<string, string>>({});

  // Auto-save to localStorage whenever form data changes
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
  }, [formData]);

  /**
   * Updates a specific form field and automatically clears any associated validation error.
   *
   * **Behavior:**
   * - Updates the specified field in formData
   * - If the field has a validation error, removes it from the errors object
   * - Triggers localStorage persistence via useEffect
   *
   * @param {keyof FormData} field - The form field to update
   * @param {FormValue} value - The new value for the field (can be string, number, boolean, array, or object)
   *
   * @example
   * handleChange('naturezaDelito', 'Homicídio');
   * handleChange('temperatura', '25');
   * handleChange('escola', true);
   * handleChange('testemunhas', [...existingWitnesses, newWitness]);
   */
  const handleChange = (field: keyof FormData, value: FormValue) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));

    // Clear field error when user makes changes
    if (errors[field]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[field];
        return newErrors;
      });
    }
  };

  /**
   * Resets the entire form to initial state after user confirmation.
   *
   * **Behavior:**
   * 1. Shows browser confirmation dialog warning about data loss
   * 2. If user confirms:
   *    - Removes all data from localStorage
   *    - Resets formData to initial state (current date/time, empty arrays)
   *    - Clears all validation errors
   * 3. If user cancels, no changes are made
   *
   * **Warning:** This action is irreversible. All form data will be permanently deleted.
   *
   * @example
   * // Called from a reset button
   * <button onClick={resetForm}>Nova RECO</button>
   *
   * // User sees: "Tem certeza que deseja gerar uma nova RECO? Todos os dados preenchidos serão excluídos."
   */
  const resetForm = () => {
    if (window.confirm('Tem certeza que deseja gerar uma nova RECO? Todos os dados preenchidos serão excluídos.')) {
      localStorage.removeItem(STORAGE_KEY);
      setFormData(getInitialState());
      setErrors({});
    }
  };

  return {
    formData,
    errors,
    handleChange,
    resetForm
  };
};