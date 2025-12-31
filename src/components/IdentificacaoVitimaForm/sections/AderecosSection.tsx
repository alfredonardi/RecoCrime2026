import React from 'react';
import { FormSectionProps } from '../../../types';
import DynamicList from '../../shared/DynamicList';

const AderecosSection: React.FC<FormSectionProps> = ({ data, onChange }) => {
  return (
    <fieldset>
      <div id="aderecosContainer">
        <DynamicList
          items={data.aderecos || []}
          onChange={(items) => onChange('aderecos', items)}
          addButtonText="Adicionar Adereço"
          fields={[
            { name: 'tipo', placeholder: 'Tipo de Adereço', type: 'textarea' },
            { name: 'descricao', placeholder: 'Descrição', type: 'textarea' }
          ]}
        />
      </div>
    </fieldset>
  );
};

export default AderecosSection;