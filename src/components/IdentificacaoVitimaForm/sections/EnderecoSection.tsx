import React from 'react';
import { FormSectionProps } from '../../../types';

const EnderecoSection: React.FC<FormSectionProps> = ({ data, onChange }) => {
  return (
    <div className="form-section">
      <label htmlFor="vitimaEndereco"><strong>Endereço:</strong></label>
      <input
        type="text"
        id="vitimaEndereco"
        className="normal-input"
        value={data.vitimaEndereco || ''}
        onChange={(e) => onChange('vitimaEndereco', e.target.value)}
      />
    </div>
  );
};

export default EnderecoSection;