import React from 'react';
import { FormSectionProps } from '../../types';
import EstadoVitimaSection from './EstadoVitimaSection';
import PreservacaoSection from './PreservacaoSection';
import DetalhesResgateSection from './DetalhesResgateSection';

const PreservacaoLocalForm: React.FC<FormSectionProps> = ({ data, onChange }) => {
  return (
    <section id="preservacao-local">
      <h2>4. Da Preservação do Local</h2>
      <div className="space-y-4">
        <EstadoVitimaSection data={data} onChange={onChange} />
        <PreservacaoSection data={data} onChange={onChange} />
        <DetalhesResgateSection data={data} onChange={onChange} />
      </div>
    </section>
  );
};

export default PreservacaoLocalForm;