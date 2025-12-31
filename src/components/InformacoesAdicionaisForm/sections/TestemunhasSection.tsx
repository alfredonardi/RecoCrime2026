import React from 'react';
import { FormSectionProps } from '../../../types';
import DynamicList from '../../shared/DynamicList';

const TestemunhasSection: React.FC<FormSectionProps> = ({ data, onChange }) => {
  return (
    <fieldset className="form-group">
      <legend className="mb-4"><strong>Identificação de Testemunhas</strong></legend>
      <DynamicList
        items={data.testemunhas || []}
        onChange={(items) => onChange('testemunhas', items)}
        addButtonText="Adicionar Testemunha"
        fields={[
          { name: 'nome', placeholder: 'Nome da testemunha', type: 'text' },
          { name: 'contato', placeholder: 'Contato', type: 'text' },
          { name: 'observacoes', placeholder: 'Observações', type: 'textarea' }
        ]}
      />
    </fieldset>
  );
};

export default TestemunhasSection;