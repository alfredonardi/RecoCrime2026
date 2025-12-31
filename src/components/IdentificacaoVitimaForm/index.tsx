import React from 'react';
import { FormSectionProps } from '../../types';
import AcaoVitimaSection from './AcaoVitimaSection';
import IdentificacaoBasicaSection from './IdentificacaoBasicaSection';
import DadosPessoaisSection from './DadosPessoaisSection';
import DescricaoFisicaSection from './DescricaoFisicaSection';
import CaracteristicasPsicologicasSection from './CaracteristicasPsicologicasSection';

const IdentificacaoVitimaForm: React.FC<FormSectionProps> = ({ data, onChange }) => {
  return (
    <section id="identificacao-vitima">
      <h2>6. Informações Importantes sobre a Vítima</h2>
      <div className="space-y-6">
        <AcaoVitimaSection data={data} onChange={onChange} />
        <IdentificacaoBasicaSection data={data} onChange={onChange} />
        <DadosPessoaisSection data={data} onChange={onChange} />
        <DescricaoFisicaSection data={data} onChange={onChange} />
        <CaracteristicasPsicologicasSection data={data} onChange={onChange} />
      </div>
    </section>
  );
};

export default IdentificacaoVitimaForm;