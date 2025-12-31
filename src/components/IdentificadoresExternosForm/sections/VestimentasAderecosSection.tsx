import React from 'react';
import { FormSectionProps } from '../../../types';
import DynamicList from '../../shared/DynamicList';

const VestimentasAderecosSection: React.FC<FormSectionProps> = ({ data, onChange }) => {
  return (
    <fieldset className="form-group">
      <legend className="mb-4"><strong>Vestimentas e Adereços</strong></legend>
      <DynamicList
        items={[...(data.vestimentas || []), ...(data.aderecos || [])]}
        onChange={(items) => {
          // Separar os itens em vestimentas e adereços baseado no tipo
          const vestimentas = items.filter(item => item.tipo?.toLowerCase().includes('vestimenta'));
          const aderecos = items.filter(item => !item.tipo?.toLowerCase().includes('vestimenta'));
          onChange('vestimentas', vestimentas);
          onChange('aderecos', aderecos);
        }}
        addButtonText="Adicionar Vestimenta/Adereço"
        fields={[
          { name: 'tipo', placeholder: 'Tipo (ex: Vestimenta - Calça, Adereço - Colar)', type: 'textarea' },
          { name: 'descricao', placeholder: 'Descrição', type: 'textarea' }
        ]}
      />
    </fieldset>
  );
};

export default VestimentasAderecosSection;