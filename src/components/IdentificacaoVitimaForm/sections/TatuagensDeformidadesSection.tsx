import React from 'react';
import { FormSectionProps } from '../../../types';
import DynamicList from '../../shared/DynamicList';

const TatuagensDeformidadesSection: React.FC<FormSectionProps> = ({ data, onChange }) => {
  return (
    <fieldset>
      <div id="tatuagensDeformidadesContainer">
        <DynamicList
          items={data.tatuagensDeformidades || []}
          onChange={(items) => onChange('tatuagensDeformidades', items)}
          addButtonText="Adicionar Tatuagem/Deformidade"
          fields={[
            { name: 'local', placeholder: 'Local no corpo', type: 'textarea' },
            { name: 'descricao', placeholder: 'Descrição', type: 'textarea' }
          ]}
        />
      </div>
    </fieldset>
  );
};

export default TatuagensDeformidadesSection;