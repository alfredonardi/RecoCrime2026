import React from 'react';
import { FormSectionProps } from '../../types';
import { formatPlaca } from '../../utils/formatters';

const IdentificacaoVeiculoSection: React.FC<FormSectionProps> = ({ data, onChange }) => {
  return (
    <fieldset className="form-group">
      <legend><strong>Identificação do Veículo</strong></legend>
      
      <label htmlFor="placaVeiculo"><strong>Placa:</strong></label>
      <input
        type="text"
        id="placaVeiculo"
        className="small-input"
        value={data.placaVeiculo || ''}
        onChange={(e) => onChange('placaVeiculo', formatPlaca(e.target.value))}
        maxLength={8}
      />

      <label htmlFor="marcaVeiculo"><strong>Marca/Modelo:</strong></label>
      <input
        type="text"
        id="marcaVeiculo"
        className="medium-input"
        value={data.marcaVeiculo || ''}
        onChange={(e) => onChange('marcaVeiculo', e.target.value)}
      />

      <label htmlFor="corVeiculo"><strong>Cor:</strong></label>
      <input
        type="text"
        id="corVeiculo"
        className="small-input"
        value={data.corVeiculo || ''}
        onChange={(e) => onChange('corVeiculo', e.target.value)}
      />
    </fieldset>
  );
};

export default IdentificacaoVeiculoSection;