import React from 'react';
import { FormSectionProps } from '../../types';
import TatuagensDeformidadesSection from '../shared/sections/TatuagensDeformidadesSection';
import VestimentasAderecosSection from './sections/VestimentasAderecosSection';

const IdentificadoresExternosForm: React.FC<FormSectionProps> = ({ data, onChange }) => {
  return (
    <section id="identificadores-externos">
      <h2>6iev. Identificadores Externos da Vítima</h2>
      <div className="space-y-4">
        <TatuagensDeformidadesSection data={data} onChange={onChange} />
        <VestimentasAderecosSection data={data} onChange={onChange} />
      </div>
    </section>
  );
};

export default IdentificadoresExternosForm;