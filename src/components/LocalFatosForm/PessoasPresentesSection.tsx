import React from 'react';
import { FormSectionProps } from '../../types';
import AutocompleteTextarea from '../shared/AutocompleteTextarea';

const PessoasPresentesSection: React.FC<FormSectionProps> = ({ data, onChange }) => {
  return (
    <fieldset className="form-group">
      <legend className="mb-4"><strong>Presente(s) no Local</strong></legend>
      <div>
        <label htmlFor="pessoasPresentesTextarea" className="block text-sm font-medium text-gray-700 mb-4">
          <strong>Descreva as pessoas presentes:</strong>
        </label>
        <AutocompleteTextarea
          id="pessoasPresentesTextarea"
          placeholder="Descreva as pessoas presentes no local (ex: Curiosos, Parentes, Vizinhos, Imprensa, etc)"
          value={data.descricaoPessoasPresentes || ''}
          onChange={(e) => onChange('descricaoPessoasPresentes', e.target.value)}
          rows={3}
        />
      </div>
    </fieldset>
  );
};

export default PessoasPresentesSection;