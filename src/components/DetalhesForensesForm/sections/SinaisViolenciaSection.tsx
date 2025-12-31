import React from 'react';
import { FormSectionProps } from '../../../types';
import AutocompleteTextarea from '../../shared/AutocompleteTextarea';

const SinaisViolenciaSection: React.FC<FormSectionProps> = ({ data, onChange }) => {
  return (
    <fieldset className="form-group">
      <legend><strong>Sinais de violência</strong></legend>
      <div>
        <label htmlFor="sinaisViolenciaTextarea" className="block text-sm font-medium text-gray-700 mb-4">
          <strong>Descreva os sinais de violência:</strong>
        </label>
        <AutocompleteTextarea
          id="sinaisViolenciaTextarea"
          placeholder="Descreva os sinais de violência (ex: Violência Sexual, Enforcamento, Estrangulamento, Tortura, Arma de Fogo, Golpes, Facadas, etc)"
          value={data.descricaoSinaisViolencia || ''}
          onChange={(e) => onChange('descricaoSinaisViolencia', e.target.value)}
          rows={3}
        />
      </div>
    </fieldset>
  );
};

export default SinaisViolenciaSection;