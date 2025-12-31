import React from 'react';
import { FormSectionProps } from '../../../types';
import DynamicList from '../DynamicList';

const AderecosSection: React.FC<FormSectionProps> = ({ data, onChange }) => {
  return (
    <fieldset className="form-group">
      <legend className="mb-4"><strong>Adereços</strong></legend>
      <DynamicList
        items={data.aderecos || []}
        onChange={(items) => onChange('aderecos', items)}
        addButtonText="Adicionar Adereço"
        fields={[
          { name: 'tipo', placeholder: 'Tipo de adereço', type: 'textarea' },
          { name: 'descricao', placeholder: 'Descrição', type: 'textarea' }
        ]}
      />
    </fieldset>
  );
};

export default AderecosSection;
