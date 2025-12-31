import React from 'react';
import { FormSectionProps } from '../../types';
import SelectWithSpecification from '../shared/SelectWithSpecification';

const LocalCorpoSection: React.FC<FormSectionProps> = ({ data, onChange }) => {
  return (
    <fieldset className="form-group">
      <legend className="mb-4"><strong>Local de encontro da vítima</strong></legend>
      <div className="space-y-4">
        <SelectWithSpecification
          label="Local:"
          id="localCorpo"
          value={data.localCorpo || ''}
          specificationValue={data.especificacaoLocal || ''}
          onChange={(value) => onChange('localCorpo', value)}
          onSpecificationChange={(value) => onChange('especificacaoLocal', value)}
          options={[
            { value: 'Banco do motorista', label: 'Banco do motorista' },
            { value: 'Banco do passageiro', label: 'Banco do passageiro' },
            { value: 'Banco traseiro', label: 'Banco traseiro' },
            { value: 'Porta-malas', label: 'Porta-malas' },
            { value: 'aoLadoVeículo', label: 'Ao lado do veículo' },
            { value: 'próximoVeículo', label: 'Próximo ao veículo' },
            { value: 'distanteVeículo', label: 'Distante do veículo' },
            { value: 'outros', label: 'Outro' }
          ]}
        />
      </div>
    </fieldset>
  );
};

export default LocalCorpoSection;