import React from 'react';
import { FormSectionProps } from '../../../types';
import DynamicList from '../DynamicList';

const TatuagensDeformidadesSection: React.FC<FormSectionProps> = ({ data, onChange }) => {
  return (
    <fieldset className="form-group">
      <legend className="mb-4"><strong>Tatuagens e Deformidades</strong></legend>
      <DynamicList
        items={data.tatuagensDeformidades || []}
        onChange={(items) => onChange('tatuagensDeformidades', items)}
        addButtonText="Adicionar Tatuagem/Deformidade"
        fields={[
          {
            name: 'local',
            placeholder: 'Local no corpo (ex: Tatuagem - Braço direito, Deformidade - Cicatriz no rosto)',
            type: 'textarea'
          },
          {
            name: 'descricao',
            placeholder: 'Descrição detalhada da marca/característica',
            type: 'textarea'
          }
        ]}
      />
    </fieldset>
  );
};

export default TatuagensDeformidadesSection;
