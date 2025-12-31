import React from 'react';
import { FormSectionProps } from '../../../types';

const GenitoresSection: React.FC<FormSectionProps> = ({ data, onChange }) => {
  return (
    <div className="form-section">
      <label><strong>Genitores</strong></label>
      <label htmlFor="pai"><strong>Pai:</strong></label>
      <input
        type="text"
        id="pai"
        className="normal-input"
        value={data.pai || ''}
        onChange={(e) => onChange('pai', e.target.value)}
      />
      
      <label htmlFor="mae"><strong>Mãe:</strong></label>
      <input
        type="text"
        id="mae"
        className="normal-input"
        value={data.mae || ''}
        onChange={(e) => onChange('mae', e.target.value)}
      />
    </div>
  );
};

export default GenitoresSection;