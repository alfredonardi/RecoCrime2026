import React from 'react';
import { FormSectionProps } from '../../types';
import AutocompleteTextarea from '../shared/AutocompleteTextarea';

const EstabelecimentosSection: React.FC<FormSectionProps> = ({ data, onChange }) => {
  return (
    <fieldset className="form-group">
      <legend className="mb-4"><strong>Perto de:</strong></legend>
      <div>
        <label htmlFor="estabelecimentosTextarea" className="block text-sm font-medium text-gray-700 mb-4">
          <strong>Descreva os estabelecimentos próximos:</strong>
        </label>
        <AutocompleteTextarea
          id="estabelecimentosTextarea"
          placeholder="Descreva os estabelecimentos próximos (ex: Escola, Bar/Adega, Casa noturna, Estabelecimento religioso, etc)"
          value={data.descricaoEstabelecimentos || ''}
          onChange={(e) => onChange('descricaoEstabelecimentos', e.target.value)}
          rows={3}
        />
      </div>
    </fieldset>
  );
};

export default EstabelecimentosSection;