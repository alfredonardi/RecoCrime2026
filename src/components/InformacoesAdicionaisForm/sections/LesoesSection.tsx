import React from 'react';
import { FormSectionProps } from '../../../types';
import DynamicList from '../../shared/DynamicList';

const LesoesSection: React.FC<FormSectionProps> = ({ data, onChange }) => {
  return (
    <fieldset className="form-group">
      <legend><strong>Sede e Descrição das Lesões Aparentes</strong></legend>
      <DynamicList
        items={data.lesoes || []}
        onChange={(items) => onChange('lesoes', items)}
        addButtonText="Adicionar Lesão"
        fields={[
          { name: 'local', placeholder: 'Local da lesão', type: 'textarea' },
          { name: 'descricao', placeholder: 'Descrição da lesão', type: 'textarea' }
        ]}
      />
    </fieldset>
  );
};

export default LesoesSection;