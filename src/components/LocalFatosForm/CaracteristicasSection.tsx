import React from 'react';
import { FormSectionProps } from '../../types';

const CaracteristicasSection: React.FC<FormSectionProps> = ({ data, onChange }) => {
  return (
    <fieldset className="form-group">
      <legend><strong>Características do Local</strong></legend>
      
      <select
        id="tipoLocal"
        className="normal-input"
        value={data.tipoLocal || ''}
        onChange={(e) => onChange('tipoLocal', e.target.value)}
      >
        <option value="">Selecione o tipo de local...</option>
        <option value="Residencial">Residencial</option>
        <option value="Comercial">Comercial</option>
        <option value="Via Pública">Via Pública</option>
        <option value="Área Rural">Área Rural</option>
        <option value="outros">Outros</option>
      </select>

      {data.tipoLocal === 'outros' && (
        <input
          type="text"
          id="especificacaoTipoLocal"
          className="campo-especificacao"
          value={data.especificacaoTipoLocal || ''}
          onChange={(e) => onChange('especificacaoTipoLocal', e.target.value)}
          placeholder="Especifique o tipo de local"
        />
      )}
    </fieldset>
  );
};

export default CaracteristicasSection;