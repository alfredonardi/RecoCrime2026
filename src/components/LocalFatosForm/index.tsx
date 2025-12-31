import React from 'react';
import { FormSectionProps } from '../../types';
import InformacoesGeraisSection from './InformacoesGeraisSection';
import EstabelecimentosSection from './EstabelecimentosSection';
import PessoasPresentesSection from './PessoasPresentesSection';
import InformacoesPertinentesSection from './InformacoesPertinentesSection';
import AnimaisSection from './AnimaisSection';

const LocalFatosForm: React.FC<FormSectionProps> = ({ data, onChange }) => {
  return (
    <section id="local-fatos">
      <h2>5. Do Local dos Fatos</h2>
      <div className="space-y-4">
        <InformacoesGeraisSection data={data} onChange={onChange} />
        <EstabelecimentosSection data={data} onChange={onChange} />
        <PessoasPresentesSection data={data} onChange={onChange} />
        <AnimaisSection data={data} onChange={onChange} />
        <InformacoesPertinentesSection data={data} onChange={onChange} />
      </div>
    </section>
  );
};

export default LocalFatosForm;