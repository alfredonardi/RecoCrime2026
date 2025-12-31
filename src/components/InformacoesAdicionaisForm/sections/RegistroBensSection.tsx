import React from 'react';
import { FormSectionProps } from '../../../types';
import DynamicList from '../../shared/DynamicList';

const RegistroBensSection: React.FC<FormSectionProps> = ({ data, onChange }) => {
  return (
    <fieldset className="form-group">
      <legend><strong>Registro de bens e evidências</strong></legend>
      
      <label><strong>Apreensões</strong></label>
      <DynamicList
        items={data.apreensoes || []}
        onChange={(items) => onChange('apreensoes', items)}
        addButtonText="Adicionar Apreensão"
        fields={[
          { name: 'descricao', placeholder: 'Descrição do item apreendido', type: 'textarea' }
        ]}
      />

      <label><strong>Arrecadações</strong></label>
      <DynamicList
        items={data.arrecadacoes || []}
        onChange={(items) => onChange('arrecadacoes', items)}
        addButtonText="Adicionar Arrecadação"
        fields={[
          { name: 'descricao', placeholder: 'Descrição do item arrecadado', type: 'textarea' }
        ]}
      />
    </fieldset>
  );
};

export default RegistroBensSection;