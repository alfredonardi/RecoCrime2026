import React from 'react';
import { FormSectionProps } from '../../../types';

const ProfissaoSection: React.FC<FormSectionProps> = ({ data, onChange }) => {
  return (
    <div className="form-section">
      <label htmlFor="profissao"><strong>Profissão:</strong></label>
      <textarea
        id="profissao"
        className="normal-input"
        placeholder="Descreva a profissão da vítima"
        value={data.profissao || ''}
        onChange={(e) => onChange('profissao', e.target.value)}
        rows={2}
      />
    </div>
  );
};

export default ProfissaoSection;