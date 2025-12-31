import React from 'react';
import { FormSectionProps } from '../../types';

const EstadoVeiculoSection: React.FC<FormSectionProps> = ({ data, onChange }) => {
  return (
    <fieldset className="form-group">
      <legend><strong>Estado do Veículo</strong></legend>
      
      <div className="checkbox-group">
        <label>
          <input
            type="checkbox"
            checked={data.veiculoTrancado || false}
            onChange={(e) => onChange('veiculoTrancado', e.target.checked)}
          />
          Trancado
        </label>

        <label>
          <input
            type="checkbox"
            checked={data.veiculoDanificado || false}
            onChange={(e) => onChange('veiculoDanificado', e.target.checked)}
          />
          Danificado
        </label>
      </div>

      {data.veiculoDanificado && (
        <div>
          <label htmlFor="descricaoDanos"><strong>Descrição dos danos:</strong></label>
          <textarea
            id="descricaoDanos"
            className="large-input"
            value={data.descricaoDanos || ''}
            onChange={(e) => onChange('descricaoDanos', e.target.value)}
          />
        </div>
      )}
    </fieldset>
  );
};

export default EstadoVeiculoSection;