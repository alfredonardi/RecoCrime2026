import React from 'react';
import { FormSectionProps } from '../../types';
import RegistroBensSection from './sections/RegistroBensSection';
import TestemunhasSection from './sections/TestemunhasSection';

const InformacoesAdicionaisForm: React.FC<FormSectionProps> = ({ data, onChange }) => {
  return (
    <section id="informacoesAdicionais">
      <h2>8. Informações Adicionais</h2>
      <RegistroBensSection data={data} onChange={onChange} />
      <TestemunhasSection data={data} onChange={onChange} />
    </section>
  );
};

export default InformacoesAdicionaisForm;