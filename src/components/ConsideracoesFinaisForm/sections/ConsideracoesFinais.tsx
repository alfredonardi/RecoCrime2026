import React from 'react';
import { FormSectionProps } from '../../../types';

const ConsideracoesFinais: React.FC<FormSectionProps> = ({ data, onChange }) => {
  return (
    <fieldset className="form-group">
      <label><strong>Considerações Finais</strong></label>
      <textarea
        id="textoConsideracoesFinais"
        className="large-input"
        placeholder="Escreva as considerações finais."
        value={data.consideracoesFinais || ''}
        onChange={(e) => onChange('consideracoesFinais', e.target.value)}
      />
    </fieldset>
  );
};

export default ConsideracoesFinais;