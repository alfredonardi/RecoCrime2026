import { useState, useEffect } from 'react';
import { FormData, FormValue } from '../types';

const STORAGE_KEY = 'reco_form_data';

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

export const useForm = () => {
  const [formData, setFormData] = useState<FormData>(getInitialState);
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
  }, [formData]);

  const handleChange = (field: keyof FormData, value: FormValue) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
    
    if (errors[field]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[field];
        return newErrors;
      });
    }
  };

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