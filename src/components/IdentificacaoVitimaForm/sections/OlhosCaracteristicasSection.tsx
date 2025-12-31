import React from 'react';
import { FormSectionProps } from '../../../types';
import SelectWithSpecification from '../../shared/SelectWithSpecification';

const OlhosCaracteristicasSection: React.FC<FormSectionProps> = ({ data, onChange }) => {
  return (
    <div className="form-section">
      <SelectWithSpecification
        label="Cor dos Olhos:"
        id="corOlhos"
        value={data.corOlhos || ''}
        specificationValue={data.especificarCorOlhos || ''}
        onChange={(value) => onChange('corOlhos', value)}
        onSpecificationChange={(value) => onChange('especificarCorOlhos', value)}
        options={[
          { value: 'Castanho', label: 'Castanho' },
          { value: 'Azul', label: 'Azul' },
          { value: 'Verde', label: 'Verde' },
          { value: 'Preto', label: 'Preto' },
          { value: 'outros', label: 'Outro' }
        ]}
      />

      <label htmlFor="caracteristicasVisiveis">
        <strong>Descrição Adicional de Características Visíveis:</strong>
      </label>
      <textarea
        id="caracteristicasVisiveis"
        className="normal-input"
        placeholder="Descreva características visíveis adicionais, se desejar."
        value={data.caracteristicasVisiveis || ''}
        onChange={(e) => onChange('caracteristicasVisiveis', e.target.value)}
      />
    </div>
  );
};

export default OlhosCaracteristicasSection;