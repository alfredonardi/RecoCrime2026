import React from 'react';
import { FormSectionProps } from '../../types';
import AutocompleteTextarea from '../shared/AutocompleteTextarea';

const AnimaisSection: React.FC<FormSectionProps> = ({ data, onChange }) => {
  return (
    <fieldset className="form-group">
      <legend className="mb-4"><strong>Animais no local</strong></legend>
      <div>
        <label htmlFor="animaisLocalTextarea" className="block text-sm font-medium text-gray-700 mb-4">
          <strong>Descreva os animais presentes:</strong>
        </label>
        <AutocompleteTextarea
          id="animaisLocalTextarea"
          placeholder="Descreva os animais presentes no local (ex: Cachorro, Gato, Pássaro, Peixe, Insetos, Vermes, Necrófagos, etc)"
          value={data.descricaoAnimaisLocal || ''}
          onChange={(e) => onChange('descricaoAnimaisLocal', e.target.value)}
          rows={3}
        />
      </div>
    </fieldset>
  );
};

export default AnimaisSection;