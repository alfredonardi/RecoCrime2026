import React from 'react';
import { FormSectionProps } from '../../../types';
import AutocompleteTextarea from '../../shared/AutocompleteTextarea';

const ColetaMaterialSection: React.FC<FormSectionProps> = ({ data, onChange }) => {
  return (
    <fieldset className="form-group">
      <legend className="mb-4"><strong>Coleta de Material para Perícia</strong></legend>
      <div>
        <label htmlFor="materialPericiaTextarea" className="block text-sm font-medium text-gray-700 mb-4">
          <strong>Descreva os materiais coletados:</strong>
        </label>
        <AutocompleteTextarea
          id="materialPericiaTextarea"
          placeholder="Descreva os materiais coletados para perícia (ex: Impressões Papilares, Sangue, Esperma, Cabelo, Saliva, Tecidos, Unhas, etc)"
          value={data.descricaoMaterialPericia || ''}
          onChange={(e) => onChange('descricaoMaterialPericia', e.target.value)}
          rows={3}
        />
      </div>
    </fieldset>
  );
};

export default ColetaMaterialSection;