import React from 'react';
import { FormSectionProps } from '../../types';
import AutocompleteTextarea from '../shared/AutocompleteTextarea';

const ObjetosCenaSection: React.FC<FormSectionProps> = ({ data, onChange }) => {
  return (
    <fieldset className="form-group">
      <legend className="mb-4"><strong>Objetos na cena</strong></legend>
      <div>
        <label htmlFor="objetosCenaTextarea" className="block text-sm font-medium text-gray-700 mb-4">
          <strong>Descreva os objetos encontrados:</strong>
        </label>
        <AutocompleteTextarea
          id="objetosCenaTextarea"
          placeholder="Descreva os objetos encontrados na cena (ex: Arma, Drogas, Ferramenta, Documento, Eletrônico, Pertences de Terceiros, Pendrive, etc)"
          value={data.descricaoObjetosCena || ''}
          onChange={(e) => onChange('descricaoObjetosCena', e.target.value)}
          rows={3}
        />
      </div>
    </fieldset>
  );
};

export default ObjetosCenaSection;