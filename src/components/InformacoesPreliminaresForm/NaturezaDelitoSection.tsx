import React from 'react';
import { FormSectionProps } from '../../types';

const NaturezaDelitoSection: React.FC<FormSectionProps> = ({ data, onChange }) => {
  return (
    <fieldset className="form-group">
      <legend className="mb-4"><strong>Natureza do delito</strong></legend>
      <select
        id="naturezaDelitoSelect"
        name="naturezaDelitoSelect"
        className="w-full h-[46px] p-3 border rounded-lg bg-white shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        value={data.naturezaDelito || ''}
        onChange={(e) => onChange('naturezaDelito', e.target.value)}
      >
        <option value="">Selecione...</option>
        <option value="Homicidio Doloso">Homicídio Doloso</option>
        <option value="Homicidio em decorrencia de intervencao policial">Homicídio em decorrência de intervenção policial</option>
        <option value="Morte suspeita">Morte suspeita</option>
        <option value="Suicidio">Suicídio</option>
        <option value="outros">Outra natureza</option>
      </select>
      
      {data.naturezaDelito === 'outros' && (
        <input
          type="text"
          id="especificacao-naturezaDelito"
          name="especificacao-naturezaDelito"
          className="mt-2 w-full h-[46px] p-3 border rounded-lg bg-white shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          value={data.especificacaoNaturezaDelito || ''}
          onChange={(e) => onChange('especificacaoNaturezaDelito', e.target.value)}
          placeholder="Especifique"
        />
      )}
    </fieldset>
  );
};

export default NaturezaDelitoSection;