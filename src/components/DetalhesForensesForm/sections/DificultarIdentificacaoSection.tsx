import React from 'react';
import { FormSectionProps } from '../../../types';
import AutocompleteTextarea from '../../shared/AutocompleteTextarea';

const DificultarIdentificacaoSection: React.FC<FormSectionProps> = ({ data, onChange }) => {
  return (
    <fieldset className="form-group">
      <legend><strong>Evidências de ação para dificultar a identificação da vítima</strong></legend>
      <div>
        <label htmlFor="dificultarIdentificacaoTextarea" className="block text-sm font-medium text-gray-700 mb-4">
          <strong>Descreva as evidências:</strong>
        </label>
        <AutocompleteTextarea
          id="dificultarIdentificacaoTextarea"
          placeholder="Descreva as evidências de ação para dificultar a identificação (ex: Desfiguração, Amputação de Dedos, Remoção de Dentes, Queimaduras, Ácido, etc)"
          value={data.descricaoAcoesIdentificacao || ''}
          onChange={(e) => onChange('descricaoAcoesIdentificacao', e.target.value)}
          rows={3}
        />
      </div>
    </fieldset>
  );
};

export default DificultarIdentificacaoSection;