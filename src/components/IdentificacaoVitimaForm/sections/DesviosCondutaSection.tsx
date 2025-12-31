import React from 'react';
import { FormSectionProps } from '../../../types';
import CheckboxWithSpecification from '../../shared/CheckboxWithSpecification';

const DesviosCondutaSection: React.FC<FormSectionProps> = ({ data, onChange }) => {
  const handleCheckboxChange = (field: string) => (checked: boolean) => {
    const desvios = new Set(data.desviosConduta || []);
    if (checked) {
      desvios.add(field);
    } else {
      desvios.delete(field);
    }
    onChange('desviosConduta', Array.from(desvios));
  };

  return (
    <fieldset>
      <label><strong>Desvios de Conduta:</strong></label>
      <div className="checkbox-group">
        {[
          'Agressividade', 'Compulsividade', 'Isolamento Social', 'Impulsividade',
          'Desobediência Civil', 'Vandalismo', 'Manipulação', 'Mentiras Frequentes',
          'Furto', 'Fraude', 'Abuso de Substâncias', 'Negligência'
        ].map(desvio => (
          <CheckboxWithSpecification
            key={desvio}
            id={`desvio-${desvio}`}
            label={desvio}
            checked={(data.desviosConduta || []).includes(desvio)}
            onChange={(checked) => handleCheckboxChange(desvio)(checked)}
          />
        ))}
        <CheckboxWithSpecification
          id="outrosDesvios"
          label="Outros"
          checked={(data.desviosConduta || []).includes('outros')}
          onChange={(checked) => handleCheckboxChange('outros')(checked)}
          specification={data.descricaoOutrosDesvios}
          onSpecificationChange={(value) => onChange('descricaoOutrosDesvios', value)}
          showSpecification={(data.desviosConduta || []).includes('outros')}
        />
      </div>
      <textarea
        id="informacoesPertinentesDesvios"
        className="large-input"
        placeholder="Detalhes sobre os desvios de conduta"
        value={data.informacoesPertinentesDesvios || ''}
        onChange={(e) => onChange('informacoesPertinentesDesvios', e.target.value)}
      />
    </fieldset>
  );
};

export default DesviosCondutaSection;