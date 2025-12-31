import React from 'react';
import { FormSectionProps } from '../../types';
import SelectWithSpecification from '../shared/SelectWithSpecification';

const ComodoCorpoSection: React.FC<FormSectionProps> = ({ data, onChange }) => {
  return (
    <fieldset className="form-group">
      <legend className="mb-4"><strong>Cômodo onde foi encontrado o corpo</strong></legend>
      <div className="space-y-4">
        <SelectWithSpecification
          label="Local:"
          id="comodoCorpo"
          value={data.comodoCorpo || ''}
          specificationValue={data.encontroDoCorpo || ''}
          onChange={(value) => onChange('comodoCorpo', value)}
          onSpecificationChange={(value) => onChange('encontroDoCorpo', value)}
          options={[
            { value: 'Sala de Estar', label: 'Sala de estar' },
            { value: 'Cozinha', label: 'Cozinha' },
            { value: 'Banheiro', label: 'Banheiro' },
            { value: 'Quarto', label: 'Quarto' },
            { value: 'Suíte', label: 'Suíte' },
            { value: 'Sala de Jantar', label: 'Sala de jantar' },
            { value: 'Garagem', label: 'Garagem' },
            { value: 'Escritório', label: 'Escritório' },
            { value: 'Porão', label: 'Porão' },
            { value: 'Sótão', label: 'Sótão' },
            { value: 'Varanda', label: 'Varanda' },
            { value: 'Jardim', label: 'Jardim' },
            { value: 'Pátio', label: 'Pátio' },
            { value: 'outros', label: 'Outro' }
          ]}
        />
      </div>
    </fieldset>
  );
};

export default ComodoCorpoSection;