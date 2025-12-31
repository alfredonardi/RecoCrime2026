import React from 'react';
import { FormSectionProps } from '../../types';
import AutocompleteTextarea from '../shared/AutocompleteTextarea';

const InformacoesPertinentesSection: React.FC<FormSectionProps> = ({ data, onChange }) => {
  return (
    <fieldset className="form-group">
      <legend className="mb-4"><strong>Informações pertinentes</strong></legend>
      <div>
        <label htmlFor="informacoesPertinentesLocalInterno" className="block text-sm font-medium text-gray-700 mb-4">
          <strong>Observações:</strong>
        </label>
        <AutocompleteTextarea
          id="informacoesPertinentesLocalInterno"
          placeholder="Informações adicionais relevantes sobre o local interno"
          value={data.informacoesPertinentesLocalInterno || ''}
          onChange={(e) => onChange('informacoesPertinentesLocalInterno', e.target.value)}
        />
      </div>
    </fieldset>
  );
};

export default InformacoesPertinentesSection;