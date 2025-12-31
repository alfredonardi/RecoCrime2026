import React from 'react';
import { FormSectionProps } from '../../types';
import AutocompleteTextarea from '../shared/AutocompleteTextarea';

const MaterialLeituraSection: React.FC<FormSectionProps> = ({ data, onChange }) => {
  return (
    <fieldset className="form-group">
      <legend className="mb-4"><strong>Livros/Jornais/Revistas no local</strong></legend>
      <div>
        <label htmlFor="materialLeituraTextarea" className="block text-sm font-medium text-gray-700 mb-4">
          <strong>Descreva os materiais de leitura encontrados:</strong>
        </label>
        <AutocompleteTextarea
          id="materialLeituraTextarea"
          placeholder="Descreva os materiais de leitura encontrados (ex: Livros, Jornais, Revistas, Materiais Acadêmicos, Recreativos, etc)"
          value={data.descricaoMaterialLeitura || ''}
          onChange={(e) => onChange('descricaoMaterialLeitura', e.target.value)}
          rows={3}
        />
      </div>
    </fieldset>
  );
};

export default MaterialLeituraSection;