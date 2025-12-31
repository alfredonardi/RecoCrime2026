import React from 'react';
import { FormSectionProps } from '../../types';

const InformacoesGeraisSection: React.FC<FormSectionProps> = ({ data, onChange }) => {
  return (
    <fieldset className="form-group">
      <legend className="mb-4"><strong>Informações gerais do local</strong></legend>
      <div className="space-y-4">
        <div>
          <label htmlFor="area" className="block text-sm font-medium text-gray-700 mb-4">
            <strong>Área:</strong>
          </label>
          <select 
            id="area" 
            className="w-full h-[46px] p-3 border rounded-lg bg-white shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            value={data.area || ''}
            onChange={(e) => onChange('area', e.target.value)}
          >
            <option value="">Selecione...</option>
            <option value="Área Urbana">Área Urbana</option>
            <option value="Área Rural">Área Rural</option>
          </select>
        </div>

        <div>
          <label htmlFor="perfilSocial" className="block text-sm font-medium text-gray-700 mb-4">
            <strong>Perfil social:</strong>
          </label>
          <select 
            id="perfilSocial" 
            className="w-full h-[46px] p-3 border rounded-lg bg-white shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            value={data.perfilSocial || ''}
            onChange={(e) => onChange('perfilSocial', e.target.value)}
          >
            <option value="">Selecione...</option>
            <option value="baixíssimo">Baixíssimo</option>
            <option value="baixo">Baixo</option>
            <option value="médio-baixo">Médio-baixo</option>
            <option value="médio">Médio</option>
            <option value="médio-alto">Médio-alto</option>
            <option value="alto">Alto</option>
            <option value="altíssimo">Altíssimo</option>
          </select>
        </div>

        <div>
          <label htmlFor="iluminacaoPublica" className="block text-sm font-medium text-gray-700 mb-4">
            <strong>Iluminação pública:</strong>
          </label>
          <select 
            id="iluminacaoPublica" 
            className="w-full h-[46px] p-3 border rounded-lg bg-white shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            value={data.iluminacaoPublica || ''}
            onChange={(e) => onChange('iluminacaoPublica', e.target.value)}
          >
            <option value="">Selecione...</option>
            <option value="presente">Presente</option>
            <option value="ausente">Ausente</option>
          </select>
        </div>

        <div>
          <label htmlFor="redeEsgoto" className="block text-sm font-medium text-gray-700 mb-4">
            <strong>Rede de esgoto:</strong>
          </label>
          <select 
            id="redeEsgoto" 
            className="w-full h-[46px] p-3 border rounded-lg bg-white shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            value={data.redeEsgoto || ''}
            onChange={(e) => onChange('redeEsgoto', e.target.value)}
          >
            <option value="">Selecione...</option>
            <option value="presente">Presente</option>
            <option value="ausente">Ausente</option>
          </select>
        </div>

        <div>
          <label htmlFor="pavimentacao1" className="block text-sm font-medium text-gray-700 mb-4">
            <strong>Pavimentação:</strong>
          </label>
          <select 
            id="pavimentacao1" 
            className="w-full h-[46px] p-3 border rounded-lg bg-white shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            value={data.pavimentacao1 || ''}
            onChange={(e) => onChange('pavimentacao1', e.target.value)}
          >
            <option value="">Selecione...</option>
            <option value="presente">Presente</option>
            <option value="ausente">Ausente</option>
          </select>
        </div>

        <div>
          <label htmlFor="trafegoVeiculos" className="block text-sm font-medium text-gray-700 mb-4">
            <strong>Tráfego de veículos:</strong>
          </label>
          <select 
            id="trafegoVeiculos" 
            className="w-full h-[46px] p-3 border rounded-lg bg-white shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            value={data.trafegoVeiculos || ''}
            onChange={(e) => onChange('trafegoVeiculos', e.target.value)}
          >
            <option value="">Selecione...</option>
            <option value="Congestionado">Congestionado</option>
            <option value="Intenso">Intenso</option>
            <option value="Regular">Regular</option>
            <option value="Reduzido">Reduzido</option>
            <option value="Inexistente">Inexistente</option>
          </select>
        </div>
      </div>
    </fieldset>
  );
};

export default InformacoesGeraisSection;