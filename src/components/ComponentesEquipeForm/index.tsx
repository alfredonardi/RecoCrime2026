import React from 'react';
import { FormSectionProps } from '../../types';
import DelegaciaSection from './DelegaciaSection';
import PolicialCientificaSection from './PolicialCientificaSection';
import PapiloscopistaSection from './PapiloscopistaSection';

const ComponentesEquipeForm: React.FC<FormSectionProps> = ({ data, onChange }) => {
  return (
    <section id="componentes-equipe">
      <h2>2. Grupo Especializado em Assessoramento de Local de Crime (GEAcrim)</h2>
      <DelegaciaSection data={data} onChange={onChange} />
      <PolicialCientificaSection data={data} onChange={onChange} />
      <PapiloscopistaSection data={data} onChange={onChange} />
    </section>
  );
};

export default ComponentesEquipeForm;