import React from 'react';
import { FormSectionProps } from '../../types';
import NaturezaDelitoSection from './NaturezaDelitoSection';
import DataHoraSection from './DataHoraSection';
import LocalFatosSection from './LocalFatosSection';
import ComunicacoesEventosSection from './ComunicacoesEventosSection';

const InformacoesPreliminaresForm: React.FC<FormSectionProps> = ({ data, onChange }) => {
  return (
    <section id="informacoes-preliminares">
      <h1>RECOGNIÇÃO VISUOGRÁFICA DE LOCAL DE CRIME</h1>
      <h2>1. Informações Preliminares</h2>
      
      <NaturezaDelitoSection data={data} onChange={onChange} />
      <DataHoraSection data={data} onChange={onChange} />
      <LocalFatosSection data={data} onChange={onChange} />
      <ComunicacoesEventosSection data={data} onChange={onChange} />
    </section>
  );
};

export default InformacoesPreliminaresForm;