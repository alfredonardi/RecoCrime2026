import React from 'react';
import { FormSectionProps } from '../../types';
import LocalCorpoSection from './LocalCorpoSection';
import VeiculoIdentificacaoSection from './VeiculoIdentificacaoSection';
import VeiculoDetalhesSection from './VeiculoDetalhesSection';
import VeiculoEstadoSection from './VeiculoEstadoSection';

const LocalVeiculoForm: React.FC<FormSectionProps> = ({ data, onChange }) => {
  return (
    <section id="local-veiculo">
      <h2>5v. Local Imediato Veículo</h2>
      <div className="space-y-4">
        <LocalCorpoSection data={data} onChange={onChange} />
        <VeiculoIdentificacaoSection data={data} onChange={onChange} />
        <VeiculoDetalhesSection data={data} onChange={onChange} />
        <VeiculoEstadoSection data={data} onChange={onChange} />
      </div>
    </section>
  );
};

export default LocalVeiculoForm;