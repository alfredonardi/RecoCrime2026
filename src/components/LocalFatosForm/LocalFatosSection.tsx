import React from 'react';
import { FormSectionProps } from '../../types';

const LocalFatosSection: React.FC<FormSectionProps> = ({ data, onChange }) => {
  return (
    <fieldset className="form-group">
      <legend><strong>Local dos Fatos</strong></legend>
      
      <label htmlFor="localFatos"><strong>Endereço:</strong></label>
      <input 
        type="text" 
        id="localFatos" 
        className="large-input"
        value={data.localFatos || ''}
        onChange={(e) => onChange('localFatos', e.target.value)}
      />

      <label htmlFor="pontoReferencia"><strong>Ponto de referência:</strong></label>
      <input 
        type="text" 
        id="pontoReferencia" 
        className="large-input" 
        placeholder="Especifique"
        value={data.pontoReferencia || ''}
        onChange={(e) => onChange('pontoReferencia', e.target.value)}
      />

      <label htmlFor="tipoLocal"><strong>Tipo de local:</strong></label>
      <select 
        id="tipoLocal" 
        className="normal-input" 
        required
        value={data.tipoLocal || ''}
        onChange={(e) => onChange('tipoLocal', e.target.value)}
      >
        <option value="">Selecione...</option>
        <option value="Externo">Externo</option>
        <option value="Interno">Interno</option>
      </select>

      <label htmlFor="circunscricaoPolicial"><strong>Circunscrição:</strong></label>
      <select 
        id="circunscricaoPolicial" 
        className="normal-input"
        value={data.circunscricaoPolicial || ''}
        onChange={(e) => onChange('circunscricaoPolicial', e.target.value)}
      >
        <option value="">Selecione...</option>
        <option value="1DP">1º DP</option>
        <option value="2DP">2º DP</option>
        <option value="3DP">3º DP</option>
        {/* Adicione mais opções conforme necessário */}
      </select>

      <label htmlFor="boDP"><strong>Boletim de Ocorrência lavrado no DP:</strong></label>
      <div className="bo-container">
        <select 
          id="boDP" 
          className="input-margin-bodp"
          value={data.boDP || ''}
          onChange={(e) => onChange('boDP', e.target.value)}
        >
          <option value="">Selecione o DP</option>
          <option value="1DP">1º DP</option>
          <option value="2DP">2º DP</option>
          <option value="3DP">3º DP</option>
          {/* Adicione mais opções conforme necessário */}
        </select>
        <input 
          type="text" 
          id="boDPInfo" 
          maxLength={11} 
          className="normal-input" 
          placeholder="XX1234/2024"
          value={data.boDPInfo || ''}
          onChange={(e) => onChange('boDPInfo', e.target.value)}
        />
      </div>

      <label htmlFor="boDHPP"><strong>Atendimento pelo DHPP</strong></label>
      <select 
        id="boDHPP" 
        className="normal-input"
        value={data.boDHPP || ''}
        onChange={(e) => onChange('boDHPP', e.target.value)}
      >
        <option value="">Selecione o DHPP</option>
        <option value="Geacrim 1">Geacrim 1</option>
        <option value="Geacrim 2">Geacrim 2</option>
        <option value="Geacrim 3">Geacrim 3</option>
        <option value="Geacrim 4">Geacrim 4</option>
        <option value="Geacrim 5">Geacrim 5</option>
      </select>
    </fieldset>
  );
};

export default LocalFatosSection;