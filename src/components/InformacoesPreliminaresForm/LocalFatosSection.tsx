import React from 'react';
import { FormSectionProps } from '../../types';
import { generateDPOptions } from '../../utils/dpOptions';
import { formatBONumber } from '../../utils/formatters';

const LocalFatosSection: React.FC<FormSectionProps> = ({ data, onChange }) => {
  const dpOptions = generateDPOptions();

  return (
    <fieldset className="form-group">
      <legend><strong>Local dos Fatos</strong></legend>
      
      <label htmlFor="localFatos"><strong>Endereço:</strong></label>
      <input 
        type="text" 
        id="localFatos" 
        className="w-full h-[42px] p-3 border rounded-lg bg-white shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 mb-4"
        value={data.localFatos || ''}
        onChange={(e) => onChange('localFatos', e.target.value)}
        autoComplete="street-address"
      />

      <label htmlFor="pontoReferencia"><strong>Ponto de referência:</strong></label>
      <input 
        type="text" 
        id="pontoReferencia" 
        className="w-full h-[42px] p-3 border rounded-lg bg-white shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 mb-4"
        placeholder="Especifique"
        value={data.pontoReferencia || ''}
        onChange={(e) => onChange('pontoReferencia', e.target.value)}
        autoComplete="on"
      />

      <label htmlFor="tipoLocal"><strong>Tipo de local:</strong></label>
      <select 
        id="tipoLocal" 
        className="w-full h-[42px] p-3 border rounded-lg bg-white shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 mb-4"
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
        className="w-full h-[42px] p-3 border rounded-lg bg-white shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 mb-4"
        value={data.circunscricaoPolicial || ''}
        onChange={(e) => onChange('circunscricaoPolicial', e.target.value)}
      >
        <option value="">Selecione...</option>
        {dpOptions.map(dp => (
          <option key={dp.value} value={dp.value}>{dp.label}</option>
        ))}
      </select>

      <div className="mb-4">
        <label htmlFor="boDPInfo"><strong>Boletim de Ocorrência lavrado no:</strong></label>
        <div className="grid grid-cols-2 gap-3 mt-1">
          <select 
            id="boDP" 
            className="w-full h-[42px] p-3 border rounded-lg bg-white shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            value={data.boDP || ''}
            onChange={(e) => onChange('boDP', e.target.value)}
          >
            <option value="">Selecione...</option>
            {dpOptions.map(dp => (
              <option key={dp.value} value={dp.value}>{dp.label}</option>
            ))}
          </select>
          <input 
            type="text" 
            id="boDPInfo" 
            maxLength={11} 
            className="w-full h-[42px] p-3 border rounded-lg bg-white shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="XX1234/25"
            value={data.boDPInfo || ''}
            onChange={(e) => onChange('boDPInfo', formatBONumber(e.target.value))}
            autoComplete="on"
          />
        </div>
      </div>

      <div>
        <label htmlFor="boDHPP"><strong>Atendimento pelo DHPP</strong></label>
        <select 
          id="boDHPP" 
          className="w-full h-[42px] p-3 border rounded-lg bg-white shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          value={data.boDHPP || ''}
          onChange={(e) => onChange('boDHPP', e.target.value)}
        >
          <option value="">Selecione...</option>
          <option value="Geacrim 1">Geacrim 1</option>
          <option value="Geacrim 2">Geacrim 2</option>
          <option value="Geacrim 3">Geacrim 3</option>
          <option value="Geacrim 4">Geacrim 4</option>
          <option value="Geacrim 5">Geacrim 5</option>
        </select>
      </div>
    </fieldset>
  );
};

export default LocalFatosSection;