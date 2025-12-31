import React from 'react';
import { FormSectionProps } from '../../types';

const IluminacaoSection: React.FC<FormSectionProps> = ({ data, onChange }) => {
  return (
    <fieldset className="form-group">
      <legend><strong>Iluminação</strong></legend>
      
      <select
        id="tipoIluminacao"
        className="normal-input"
        value={data.tipoIluminacao || ''}
        onChange={(e) => onChange('tipoIluminacao', e.target.value)}
      >
        <option value="">Selecione...</option>
        <option value="Natural">Natural</option>
        <option value="Artificial">Artificial</option>
        <option value="Mista">Mista</option>
        <option value="Ausente">Ausente</option>
      </select>

      {data.tipoIluminacao === 'Artificial' && (
        <div>
          <label htmlFor="fonteIluminacao"><strong>Fonte de Iluminação:</strong></label>
          <input
            type="text"
            id="fonteIluminacao"
            className="medium-input"
            value={data.fonteIluminacao || ''}
            onChange={(e) => onChange('fonteIluminacao', e.target.value)}
          />
        </div>
      )}
    </fieldset>
  );
};

export default IluminacaoSection;