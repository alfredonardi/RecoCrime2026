import React from 'react';
import { FormSectionProps } from '../../types';
import LocalEncontroSection from './LocalEncontroSection';
import AcidentesGeograficosSection from './AcidentesGeograficosSection';
import CorpoMovidoSection from './CorpoMovidoSection';

const LocalFatosExternosForm: React.FC<FormSectionProps> = ({ data, onChange }) => {
  return (
    <section id="local-fatos-externos">
      <h2>5e. Local imediato externo</h2>
      <div className="space-y-4">
        <LocalEncontroSection data={data} onChange={onChange} />
        <AcidentesGeograficosSection data={data} onChange={onChange} />
        <CorpoMovidoSection data={data} onChange={onChange} />
      </div>
    </section>
  );
};

export default LocalFatosExternosForm;