import React from 'react';
import { FormSectionProps } from '../../types';
import AutocompleteTextarea from '../shared/AutocompleteTextarea';

const ObjetosOutrosComodosSection: React.FC<FormSectionProps> = ({ data, onChange }) => {
  return (
    <fieldset className="form-group">
      <legend className="mb-4"><strong>Objetos encontrados em outros cômodos</strong></legend>
      <div>
        <label htmlFor="objetosOutrosComodosTextarea" className="block text-sm font-medium text-gray-700 mb-4">
          <strong>Descreva os objetos encontrados:</strong>
        </label>
        <AutocompleteTextarea
          id="objetosOutrosComodosTextarea"
          placeholder="Descreva os objetos encontrados em outros cômodos (ex: Armas, Drogas, Manchas de sangue, Documentos, Ferramentas, Eletrônicos, Pertences de Terceiros, etc)"
          value={data.descricaoObjetosOutrosComodos || ''}
          onChange={(e) => onChange('descricaoObjetosOutrosComodos', e.target.value)}
          rows={3}
        />
      </div>
    </fieldset>
  );
};

export default ObjetosOutrosComodosSection;