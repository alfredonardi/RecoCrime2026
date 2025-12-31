import React from 'react';
import { FormSectionProps } from '../../types';
import AutocompleteTextarea from '../shared/AutocompleteTextarea';

const AcidentesGeograficosSection: React.FC<FormSectionProps> = ({ data, onChange }) => {
  return (
    <fieldset className="form-group">
      <legend className="mb-4"><strong>Acidente(s) Geográfico(s)</strong></legend>
      <div>
        <label htmlFor="acidentesGeograficosTextarea" className="block text-sm font-medium text-gray-700 mb-4">
          <strong>Descreva os acidentes geográficos:</strong>
        </label>
        <AutocompleteTextarea
          id="acidentesGeograficosTextarea"
          placeholder="Descreva os acidentes geográficos (ex: Rio, Lago, Monte, Represa, Córrego, etc)"
          value={data.descricaoAcidentesGeograficos || ''}
          onChange={(e) => onChange('descricaoAcidentesGeograficos', e.target.value)}
          rows={3}
        />
      </div>
    </fieldset>
  );
};

export default AcidentesGeograficosSection;