import React from 'react';
import { FormSectionProps } from '../../../types';

const InvestigacoesPreliminares: React.FC<FormSectionProps> = ({ data, onChange }) => {
  return (
    <fieldset className="form-group">
      <label><strong>Das investigações preliminares</strong></label>
      <textarea
        id="textoInvestigacoesPreliminares"
        className="large-input"
        placeholder="Escreva suas considerações sobre as investigações preliminares."
        value={data.investigacoesPreliminares || ''}
        onChange={(e) => onChange('investigacoesPreliminares', e.target.value)}
      />
    </fieldset>
  );
};

export default InvestigacoesPreliminares;