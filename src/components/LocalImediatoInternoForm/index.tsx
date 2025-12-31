import React from 'react';
import { FormSectionProps } from '../../types';
import ImovelSection from './ImovelSection';
import ComodoCorpoSection from './ComodoCorpoSection';
import ObjetosCenaSection from './ObjetosCenaSection';
import VestigiosSection from './VestigiosSection';
import VestigiosSangueSection from './VestigiosSangueSection';
import VestigiosBiologicosSection from './VestigiosBiologicosSection';
import ObjetosOutrosComodosSection from './ObjetosOutrosComodosSection';
import MaterialLeituraSection from './MaterialLeituraSection';
import InformacoesPertinentesSection from './InformacoesPertinentesSection';

const LocalImediatoInternoForm: React.FC<FormSectionProps> = ({ data, onChange }) => {
  return (
    <section id="local-imediato-interno">
      <h2>5i. Local imediato interno</h2>
      <div className="space-y-4">
        <ImovelSection data={data} onChange={onChange} />
        <ComodoCorpoSection data={data} onChange={onChange} />
        <ObjetosCenaSection data={data} onChange={onChange} />
        <VestigiosSection data={data} onChange={onChange} />
        <VestigiosSangueSection data={data} onChange={onChange} />
        <VestigiosBiologicosSection data={data} onChange={onChange} />
        <ObjetosOutrosComodosSection data={data} onChange={onChange} />
        <MaterialLeituraSection data={data} onChange={onChange} />
        <InformacoesPertinentesSection data={data} onChange={onChange} />
      </div>
    </section>
  );
};

export default LocalImediatoInternoForm;