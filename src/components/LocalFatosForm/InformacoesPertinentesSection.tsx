import React from 'react';
import { FormSectionProps } from '../../types';
import AutocompleteTextarea from '../shared/AutocompleteTextarea';

const InformacoesPertinentesSection: React.FC<FormSectionProps> = ({ data, onChange }) => {
  return (
    <fieldset className="form-group">
      <legend className="mb-4"><strong>Informações pertinentes</strong></legend>
      <div>
        <label htmlFor="informacoesPertinentesLocalFatos" className="block text-sm font-medium text-gray-700 mb-4">
          <strong>Observações:</strong>
        </label>
        <AutocompleteTextarea
          id="informacoesPertinentesLocalFatos"
          placeholder="Informações adicionais relevantes sobre o local dos fatos"
          value={data.informacoesPertinentesLocalFatos || ''}
          onChange={(e) => onChange('informacoesPertinentesLocalFatos', e.target.value)}
        />
      </div>
    </fieldset>
  );
};

export default InformacoesPertinentesSection;