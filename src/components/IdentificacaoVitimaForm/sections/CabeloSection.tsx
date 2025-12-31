import React from 'react';
import { FormSectionProps } from '../../../types';
import SelectWithSpecification from '../../shared/SelectWithSpecification';

const CabeloSection: React.FC<FormSectionProps> = ({ data, onChange }) => {
  return (
    <div className="form-section">
      <SelectWithSpecification
        label="Tipo de Cabelo:"
        id="tipoCabelo"
        value={data.tipoCabelo || ''}
        specificationValue={data.especificarTipoCabelo || ''}
        onChange={(value) => onChange('tipoCabelo', value)}
        onSpecificationChange={(value) => onChange('especificarTipoCabelo', value)}
        options={[
          { value: 'Liso', label: 'Liso' },
          { value: 'Ondulado', label: 'Ondulado' },
          { value: 'Cacheado', label: 'Cacheado' },
          { value: 'Crespo', label: 'Crespo' },
          { value: 'outros', label: 'Outro' }
        ]}
      />

      <SelectWithSpecification
        label="Comprimento do Cabelo:"
        id="comprimentoCabelo"
        value={data.comprimentoCabelo || ''}
        specificationValue={data.especificarComprimentoCabelo || ''}
        onChange={(value) => onChange('comprimentoCabelo', value)}
        onSpecificationChange={(value) => onChange('especificarComprimentoCabelo', value)}
        options={[
          { value: 'Curto', label: 'Curto' },
          { value: 'Médio', label: 'Médio' },
          { value: 'Longo', label: 'Longo' },
          { value: 'outros', label: 'Outro' }
        ]}
      />

      <SelectWithSpecification
        label="Cor do Cabelo:"
        id="corCabelo"
        value={data.corCabelo || ''}
        specificationValue={data.especificarCorCabelo || ''}
        onChange={(value) => onChange('corCabelo', value)}
        onSpecificationChange={(value) => onChange('especificarCorCabelo', value)}
        options={[
          { value: 'Preto', label: 'Preto' },
          { value: 'Castanho', label: 'Castanho' },
          { value: 'Loiro', label: 'Loiro' },
          { value: 'Ruivo', label: 'Ruivo' },
          { value: 'Grisalho', label: 'Grisalho' },
          { value: 'outros', label: 'Outra' }
        ]}
      />
    </div>
  );
};

export default CabeloSection;