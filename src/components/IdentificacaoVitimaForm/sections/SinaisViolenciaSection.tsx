import React from 'react';
import { FormSectionProps } from '../../../types';
import CheckboxWithSpecification from '../../shared/CheckboxWithSpecification';

const SinaisViolenciaSection: React.FC<FormSectionProps> = ({ data, onChange }) => {
  const handleCheckboxChange = (field: string) => (checked: boolean) => {
    const sinais = new Set(data.sinaisViolencia || []);
    if (checked) {
      sinais.add(field);
    } else {
      sinais.delete(field);
    }
    onChange('sinaisViolencia', Array.from(sinais));
  };

  return (
    <fieldset className="form-group">
      <label><strong>Sinais de violência:</strong></label>
      <div>
        {[
          'Violência Sexual', 'Enforcamento', 'Estrangulamento', 'Tortura',
          'Arma de Fogo', 'Golpes', 'Facadas'
        ].map(sinal => (
          <CheckboxWithSpecification
            key={sinal}
            id={`sinal-${sinal}`}
            label={sinal}
            checked={(data.sinaisViolencia || []).includes(sinal)}
            onChange={handleCheckboxChange(sinal)}
          />
        ))}
        <CheckboxWithSpecification
          id="outrosSinaisViolencia"
          label="Outro(s)"
          checked={(data.sinaisViolencia || []).includes('outros')}
          onChange={handleCheckboxChange('outros')}
          specification={data.descricaoOutrosSinaisViolencia}
          onSpecificationChange={(value) => onChange('descricaoOutrosSinaisViolencia', value)}
          showSpecification={(data.sinaisViolencia || []).includes('outros')}
        />
      </div>
    </fieldset>
  );
};

export default SinaisViolenciaSection;