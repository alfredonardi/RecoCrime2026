import React from 'react';
import { FormSectionProps } from '../../../types';
import AutocompleteTextarea from '../../shared/AutocompleteTextarea';

const EstadoCorpoSection: React.FC<FormSectionProps> = ({ data, onChange }) => {
  return (
    <fieldset className="form-group">
      <legend><strong>Estado do Corpo</strong></legend>
      <div>
        <label htmlFor="estadoCorpoTextarea" className="block text-sm font-medium text-gray-700 mb-4">
          <strong>Descreva o estado do corpo:</strong>
        </label>
        <AutocompleteTextarea
          id="estadoCorpoTextarea"
          placeholder="Descreva o estado do corpo (ex: Descoberto, Enterrado, Na água, Inchado, Não inchado, Em decomposição, Semi-enterrado, etc)"
          value={data.descricaoEstadoCorpo || ''}
          onChange={(e) => onChange('descricaoEstadoCorpo', e.target.value)}
          rows={3}
        />
      </div>
    </fieldset>
  );
};

export default EstadoCorpoSection;