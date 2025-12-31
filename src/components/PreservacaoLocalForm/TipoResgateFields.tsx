import React from 'react';
import { FormSectionProps } from '../../types';
import SelectWithSpecification from '../shared/SelectWithSpecification';

const TipoResgateFields: React.FC<FormSectionProps> = ({ data, onChange }) => {
  return (
    <>
      <SelectWithSpecification
        label="Realizado por(pela):"
        id="tipoResgate"
        value={data.tipoResgate || ''}
        specificationValue={data.especificacaoTipoResgate || ''}
        onChange={(value) => onChange('tipoResgate', value)}
        onSpecificationChange={(value) => onChange('especificacaoTipoResgate', value)}
        options={[
          { value: 'BM', label: 'Bombeiro' },
          { value: 'UR', label: 'Resgate (UR)' },
          { value: 'USA', label: 'Suporte Avançado (USA)' },
          { value: 'PM', label: 'Polícia Militar' },
          { value: 'PC', label: 'Polícia Civil' },
          { value: 'GCM1', label: 'Guarda Civil Metropolitana' },
          { value: 'outros', label: 'Outro' }
        ]}
      />

      <label htmlFor="encarregado"><strong>Encarregado:</strong></label>
      <input
        type="text"
        id="encarregado"
        className="large-input"
        value={data.encarregado || ''}
        onChange={(e) => onChange('encarregado', e.target.value)}
      />
    </>
  );
};

export default TipoResgateFields;