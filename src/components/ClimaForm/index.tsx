import React from 'react';
import { FormSectionProps } from '../../types';
import PeriodoLuzSection from './PeriodoLuzSection';
import ClimaSection from './ClimaSection';
import VisibilidadeSection from './VisibilidadeSection';
import TemperaturaSection from './TemperaturaSection';

const ClimaForm: React.FC<FormSectionProps> = ({ data, onChange }) => {
  return (
    <section id="doclima">
      <h2>3. Do Clima</h2>
      <fieldset className="form-group">
        <legend className="mb-4"><strong>Características</strong></legend>
        <div className="space-y-4">
          <div className="mb-4">
            <PeriodoLuzSection data={data} onChange={onChange} />
          </div>
          <div className="mb-4">
            <ClimaSection data={data} onChange={onChange} />
          </div>
          <div className="mb-4">
            <VisibilidadeSection data={data} onChange={onChange} />
          </div>
          <div className="mb-4">
            <TemperaturaSection data={data} onChange={onChange} />
          </div>
        </div>
      </fieldset>
    </section>
  );
};

export default ClimaForm;