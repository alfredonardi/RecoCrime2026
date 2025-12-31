import React from 'react';
import { FormSectionProps } from '../../types';
import CheckboxWithSpecification from '../shared/CheckboxWithSpecification';

const AnimaisSection: React.FC<FormSectionProps> = ({ data, onChange }) => {
  const handleCheckboxChange = (field: string) => (checked: boolean) => {
    onChange(field, checked);
  };

  return (
    <fieldset className="form-group">
      <legend><strong>Animais no local</strong></legend>
      <div>
        <CheckboxWithSpecification
          id="cachorro"
          label="Cachorro"
          checked={data.cachorro || false}
          onChange={handleCheckboxChange('cachorro')}
        />
        <CheckboxWithSpecification
          id="gato"
          label="Gato"
          checked={data.gato || false}
          onChange={handleCheckboxChange('gato')}
        />
        <CheckboxWithSpecification
          id="passaro"
          label="Pássaro"
          checked={data.passaro || false}
          onChange={handleCheckboxChange('passaro')}
        />
        <CheckboxWithSpecification
          id="peixe"
          label="Peixe"
          checked={data.peixe || false}
          onChange={handleCheckboxChange('peixe')}
        />
        <CheckboxWithSpecification
          id="inseto"
          label="Insetos"
          checked={data.inseto || false}
          onChange={handleCheckboxChange('inseto')}
        />
        <CheckboxWithSpecification
          id="vermes"
          label="Vermes"
          checked={data.vermes || false}
          onChange={handleCheckboxChange('vermes')}
        />
        <CheckboxWithSpecification
          id="necrofagos"
          label="Necrófagos"
          checked={data.necrofagos || false}
          onChange={handleCheckboxChange('necrofagos')}
        />
        <CheckboxWithSpecification
          id="outrosAnimais"
          label="Outros"
          checked={data.outrosAnimais || false}
          onChange={handleCheckboxChange('outrosAnimais')}
          specification={data.outrosAnimaisNoLocal}
          onSpecificationChange={(value) => onChange('outrosAnimaisNoLocal', value)}
          showSpecification={data.outrosAnimais}
        />
      </div>
    </fieldset>
  );
};

export default AnimaisSection;