import React from 'react';
import { FormSectionProps } from '../../../types';
import SelectWithSpecification from '../../shared/SelectWithSpecification';

const AcaoVitimaSection: React.FC<FormSectionProps> = ({ data, onChange }) => {
  return (
    <fieldset className="form-group">
      <SelectWithSpecification
        label="Ação da vítima no local:"
        id="acaoVitima"
        value={data.acaoVitima || ''}
        specificationValue={data.descricaoAcaoVitimaOutros || ''}
        onChange={(value) => onChange('acaoVitima', value)}
        onSpecificationChange={(value) => onChange('descricaoAcaoVitimaOutros', value)}
        options={[
          { value: 'Trabalhando', label: 'Trabalhando' },
          { value: 'Visitando amigos ou família', label: 'Visitando amigos ou família' },
          { value: 'Passando pelo local', label: 'Passando pelo local' },
          { value: 'Praticando esporte', label: 'Praticando esporte' },
          { value: 'Fazendo compras', label: 'Fazendo compras' },
          { value: 'Turismo', label: 'Turismo' },
          { value: 'Atividades ilícitas', label: 'Atividades ilícitas' },
          { value: 'naoIdentificada', label: 'Não identificada' },
          { value: 'outros', label: 'Outra(s)' }
        ]}
      />
    </fieldset>
  );
};

export default AcaoVitimaSection;