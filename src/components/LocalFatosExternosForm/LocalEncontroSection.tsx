import React from 'react';
import { FormSectionProps } from '../../types';
import SelectWithSpecification from '../shared/SelectWithSpecification';

const LocalEncontroSection: React.FC<FormSectionProps> = ({ data, onChange }) => {
  return (
    <fieldset className="form-group">
      <legend className="mb-4"><strong>Detalhes do local de encontro da vítima</strong></legend>
      <div className="space-y-4">
        <SelectWithSpecification
          label="Tipo de local:"
          id="localEncontroCorpo"
          value={data.localEncontroCorpo || ''}
          specificationValue={data.especificacaoLocalEncontroCorpo || ''}
          onChange={(value) => onChange('localEncontroCorpo', value)}
          onSpecificationChange={(value) => onChange('especificacaoLocalEncontroCorpo', value)}
          options={[
            { value: 'Guia', label: 'Guia' },
            { value: 'Sarjeta', label: 'Sarjeta' },
            { value: 'Calçada', label: 'Calçada' },
            { value: 'Esgoto', label: 'Esgoto' },
            { value: 'outros', label: 'Outro' }
          ]}
        />

        <SelectWithSpecification
          label="Pavimentação:"
          id="pavimentacao"
          value={data.pavimentacao || ''}
          specificationValue={data.especificacaoPavimentacao || ''}
          onChange={(value) => onChange('pavimentacao', value)}
          onSpecificationChange={(value) => onChange('especificacaoPavimentacao', value)}
          options={[
            { value: 'Asfalto', label: 'Asfalto' },
            { value: 'Concreto', label: 'Concreto' },
            { value: 'Paralelepípedo', label: 'Paralelepípedo' },
            { value: 'Terra', label: 'Terra' },
            { value: 'outros', label: 'Outra' }
          ]}
        />

        <SelectWithSpecification
          label="Tipo de relevo:"
          id="tipoRelevo"
          value={data.tipoRelevo || ''}
          specificationValue={data.especificacaoTipoRelevo || ''}
          onChange={(value) => onChange('tipoRelevo', value)}
          onSpecificationChange={(value) => onChange('especificacaoTipoRelevo', value)}
          options={[
            { value: 'Plano', label: 'Plano' },
            { value: 'Montanhoso', label: 'Montanhoso' },
            { value: 'Acidentado', label: 'Acidentado' },
            { value: 'Vale', label: 'Vale' },
            { value: 'outros', label: 'Outro' }
          ]}
        />
      </div>
    </fieldset>
  );
};

export default LocalEncontroSection;