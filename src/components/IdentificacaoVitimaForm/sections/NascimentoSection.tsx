import React, { useEffect } from 'react';
import { FormSectionProps } from '../../../types';

const NascimentoSection: React.FC<FormSectionProps> = ({ data, onChange }) => {
  useEffect(() => {
    if (data.dataNascimento) {
      const birthDate = new Date(data.dataNascimento);
      const today = new Date();
      let age = today.getFullYear() - birthDate.getFullYear();
      const monthDiff = today.getMonth() - birthDate.getMonth();
      
      if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        age--;
      }
      
      onChange('idade', age);
    }
  }, [data.dataNascimento]);

  return (
    <div className="form-section">
      <label htmlFor="dataNascimento"><strong>Data de nascimento:</strong></label>
      <input
        type="date"
        id="dataNascimento"
        className="normal-input"
        value={data.dataNascimento || ''}
        onChange={(e) => onChange('dataNascimento', e.target.value)}
      />
      
      <label htmlFor="idade"><strong>Idade:</strong></label>
      <input
        type="number"
        id="idade"
        className="normal-input"
        value={data.idade || ''}
        onChange={(e) => onChange('idade', parseInt(e.target.value))}
        disabled={!!data.dataNascimento}
      />
    </div>
  );
};

export default NascimentoSection;