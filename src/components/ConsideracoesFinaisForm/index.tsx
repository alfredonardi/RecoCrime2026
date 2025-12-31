import React from 'react';
import { FormSectionProps } from '../../types';
import AutocompleteTextarea from '../shared/AutocompleteTextarea';

const ConsideracoesFinaisForm: React.FC<FormSectionProps> = ({ data, onChange }) => {
  return (
    <section id="consideracoes-finais">
      <h2>9. Considerações Finais</h2>
      
      <fieldset className="form-group">
        <legend className="mb-4"><strong>Das investigações preliminares</strong></legend>
        <div className="space-y-4">
          <AutocompleteTextarea
            id="investigacoesPreliminares"
            placeholder="Escreva suas considerações sobre as investigações preliminares"
            value={data.investigacoesPreliminares || ''}
            onChange={(e) => onChange('investigacoesPreliminares', e.target.value)}
          />
        </div>
      </fieldset>

      <fieldset className="form-group">
        <legend className="mb-4"><strong>Considerações Finais</strong></legend>
        <div className="space-y-4">
          <AutocompleteTextarea
            id="consideracoesFinais"
            placeholder="Digite suas considerações finais"
            value={data.consideracoesFinais || ''}
            onChange={(e) => onChange('consideracoesFinais', e.target.value)}
          />
        </div>
      </fieldset>
    </section>
  );
};

export default ConsideracoesFinaisForm;