import React from 'react';
import { FormSectionProps } from '../../types';
import EstadoRigidezSection from './sections/EstadoRigidezSection';
import PosicaoCorpoSection from './sections/PosicaoCorpoSection';
import EstadoCorpoSection from './sections/EstadoCorpoSection';
import DificultarIdentificacaoSection from './sections/DificultarIdentificacaoSection';
import SinaisViolenciaSection from './sections/SinaisViolenciaSection';
import CondicoesRestricaoSection from './sections/CondicoesRestricaoSection';
import MedidasContraforensesSection from '../LocalImediatoInternoForm/MedidasContraforensesSection';
import ColetaMaterialSection from './sections/ColetaMaterialSection';
import LesoesSection from '../shared/sections/LesoesSection';

const DetalhesForensesForm: React.FC<FormSectionProps> = ({ data, onChange }) => {
  return (
    <section id="detalhes-forenses">
      <h2>7. Detalhes Forenses</h2>
      <EstadoRigidezSection data={data} onChange={onChange} />
      <PosicaoCorpoSection data={data} onChange={onChange} />
      <EstadoCorpoSection data={data} onChange={onChange} />
      <DificultarIdentificacaoSection data={data} onChange={onChange} />
      <SinaisViolenciaSection data={data} onChange={onChange} />
      <CondicoesRestricaoSection data={data} onChange={onChange} />
      <MedidasContraforensesSection data={data} onChange={onChange} />
      <LesoesSection data={data} onChange={onChange} />
      <ColetaMaterialSection data={data} onChange={onChange} />
    </section>
  );
};

export default DetalhesForensesForm;