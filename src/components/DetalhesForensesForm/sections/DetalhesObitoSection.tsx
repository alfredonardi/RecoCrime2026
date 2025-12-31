import React from 'react';
import { FormSectionProps } from '../../../types';

const DetalhesObitoSection: React.FC<FormSectionProps> = ({ data, onChange }) => {
  return (
    <fieldset className="form-group">
      <legend><strong>Detalhes Forenses do Óbito</strong></legend>
      
      <label><strong>Estado de rigidez:</strong></label>
      <select
        className="normal-input"
        value={data.rigidez || ''}
        onChange={(e) => onChange('rigidez', e.target.value)}
      >
        <option value="">Selecione...</option>
        <option value="presente">Presente</option>
        <option value="ausente">Ausente</option>
      </select>

      <label htmlFor="hipotermiaSelect"><strong>Hipotermia</strong></label>
      <select
        id="hipotermiaSelect"
        className="normal-input"
        value={data.hipotermia || ''}
        onChange={(e) => onChange('hipotermia', e.target.value)}
      >
        <option value="">Selecione...</option>
        <option value="presente">Presente</option>
        <option value="ausente">Ausente</option>
      </select>

      <label htmlFor="tempoMorte"><strong>Tempo Provável da Morte</strong></label>
      <input
        type="text"
        id="tempoMorte"
        className="normal-input"
        placeholder="ex: 3 a 5 horas"
        value={data.tempoMorte || ''}
        onChange={(e) => onChange('tempoMorte', e.target.value)}
      />
    </fieldset>
  );
};

export default DetalhesObitoSection;