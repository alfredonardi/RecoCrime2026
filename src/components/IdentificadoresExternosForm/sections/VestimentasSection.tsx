import React from 'react';
import { FormSectionProps } from '../../../types';
import DynamicList from '../../shared/DynamicList';

const VestimentasSection: React.FC<FormSectionProps> = ({ data, onChange }) => {
  return (
    <fieldset className="form-group">
      <legend className="mb-4"><strong>Vestimentas</strong></legend>
      <DynamicList
        items={data.vestimentas || []}
        onChange={(items) => onChange('vestimentas', items)}
        addButtonText="Adicionar Vestimenta"
        fields={[
          { name: 'tipo', placeholder: 'Tipo de vestimenta', type: 'textarea' },
          { name: 'descricao', placeholder: 'Descrição', type: 'textarea' }
        ]}
      />
    </fieldset>
  );
};

export default VestimentasSection;