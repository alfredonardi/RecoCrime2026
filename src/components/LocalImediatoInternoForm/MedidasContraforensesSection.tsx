import React from 'react';
import { FormSectionProps } from '../../types';
import AutocompleteTextarea from '../shared/AutocompleteTextarea';

const MedidasContraforensesSection: React.FC<FormSectionProps> = ({ data, onChange }) => {
  return (
    <fieldset className="form-group">
      <legend className="mb-4"><strong>Medidas contraforenses</strong></legend>
      <div>
        <AutocompleteTextarea
          id="medidasContraforensesTextarea"
          placeholder="Descreva as medidas contraforenses (ex: Inutilização do CCTV, Uso de luvas, Limpeza da cena do crime, Destruição de evidências, etc)"
          value={data.medidasContraforenses || ''}
          onChange={(e) => onChange('medidasContraforenses', e.target.value)}
          rows={3}
        />
      </div>
    </fieldset>
  );
};

export default MedidasContraforensesSection;