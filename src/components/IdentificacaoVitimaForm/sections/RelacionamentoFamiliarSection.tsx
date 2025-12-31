import React from 'react';
import { FormSectionProps } from '../../../types';
import SelectWithSpecification from '../../shared/SelectWithSpecification';

const RelacionamentoFamiliarSection: React.FC<FormSectionProps> = ({ data, onChange }) => {
  return (
    <fieldset>
      <SelectWithSpecification
        label="Relacionamento com a família:"
        id="relacionamentoFamilia"
        value={data.relacionamentoFamilia || ''}
        specificationValue={data.descricaoOutrosRelacionamento || ''}
        onChange={(value) => onChange('relacionamentoFamilia', value)}
        onSpecificationChange={(value) => onChange('descricaoOutrosRelacionamento', value)}
        options={[
          { value: 'Harmonioso', label: 'Harmonioso' },
          { value: 'Conflituoso', label: 'Conflituoso' },
          { value: 'Distante', label: 'Distante' },
          { value: 'Indiferente', label: 'Indiferente' },
          { value: 'outros', label: 'Outros' }
        ]}
      />

      <SelectWithSpecification
        label="A vítima residia com:"
        id="residenciaVitima"
        value={data.residenciaVitima || ''}
        specificationValue={data.descricaoResidenciaVitimaOutros || ''}
        onChange={(value) => onChange('residenciaVitima', value)}
        onSpecificationChange={(value) => onChange('descricaoResidenciaVitimaOutros', value)}
        options={[
          { value: 'Família', label: 'Família' },
          { value: 'Amigos', label: 'Amigos' },
          { value: 'Parceiro(a)', label: 'Parceiro(a)' },
          { value: 'Sozinho(a)', label: 'Sozinho(a)' },
          { value: 'Colegas de quarto', label: 'Colegas de quarto' },
          { value: 'outros', label: 'Outros' }
        ]}
      />
    </fieldset>
  );
};

export default RelacionamentoFamiliarSection;