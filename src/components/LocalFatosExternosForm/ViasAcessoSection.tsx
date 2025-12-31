import React from 'react';
import { FormSectionProps } from '../../types';

const ViasAcessoSection: React.FC<FormSectionProps> = ({ data, onChange }) => {
  return (
    <fieldset className="form-group">
      <legend><strong>Vias de Acesso</strong></legend>
      
      <div className="checkbox-group">
        <label>
          <input
            type="checkbox"
            checked={data.viasAcessoPavimentada || false}
            onChange={(e) => onChange('viasAcessoPavimentada', e.target.checked)}
          />
          Pavimentada
        </label>

        <label>
          <input
            type="checkbox"
            checked={data.viasAcessoNaoPavimentada || false}
            onChange={(e) => onChange('viasAcessoNaoPavimentada', e.target.checked)}
          />
          Não Pavimentada
        </label>
      </div>

      <label htmlFor="observacoesViasAcesso"><strong>Observações:</strong></label>
      <textarea
        id="observacoesViasAcesso"
        className="large-input"
        value={data.observacoesViasAcesso || ''}
        onChange={(e) => onChange('observacoesViasAcesso', e.target.value)}
      />
    </fieldset>
  );
};

export default ViasAcessoSection;