import React from 'react';
import { FormSectionProps } from '../../types';
import TatuagensDeformidadesSection from './sections/TatuagensDeformidadesSection';
import VestimentasSection from './sections/VestimentasSection';
import AderecosSection from './sections/AderecosSection';

const IdentificadoresExternosSection: React.FC<FormSectionProps> = ({ data, onChange }) => {
  return (
    <fieldset className="form-group" id="identificadoresExternos">
      <legend><strong>Identificadores externos</strong></legend>
      <TatuagensDeformidadesSection data={data} onChange={onChange} />
      <VestimentasSection data={data} onChange={onChange} />
      <AderecosSection data={data} onChange={onChange} />
    </fieldset>
  );
};

export default IdentificadoresExternosSection;