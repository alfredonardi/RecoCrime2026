import React from 'react';
import { FormSectionProps } from '../../types';

const CaracteristicasPsicologicasSection: React.FC<FormSectionProps> = ({ data, onChange }) => {
  return (
    <fieldset className="form-group">
      <legend className="mb-4"><strong>Características psicológicas/sociológicas</strong></legend>
      <div className="space-y-4">
        <div>
          <label htmlFor="desviosConduta" className="block text-sm font-medium text-gray-700 mb-4">
            <strong>Desvio de conduta:</strong>
          </label>
          <textarea
            id="desviosConduta"
            className="w-full h-[46px] p-3 border rounded-lg bg-white shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none"
            placeholder="Descreva os desvios de conduta observados"
            value={data.descricaoDesviosConduta || ''}
            onChange={(e) => onChange('descricaoDesviosConduta', e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="relacionamentoFamilia" className="block text-sm font-medium text-gray-700 mb-4">
            <strong>Relacionamento com a família:</strong>
          </label>
          <select
            id="relacionamentoFamilia"
            className="w-full h-[46px] p-3 border rounded-lg bg-white shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            value={data.relacionamentoFamilia || ''}
            onChange={(e) => onChange('relacionamentoFamilia', e.target.value)}
          >
            <option value="">Selecione...</option>
            <option value="Harmonioso">Harmonioso</option>
            <option value="Conflituoso">Conflituoso</option>
            <option value="Distante">Distante</option>
            <option value="Indiferente">Indiferente</option>
            <option value="outros">Outros</option>
          </select>
          {data.relacionamentoFamilia === 'outros' && (
            <input
              type="text"
              className="w-full h-[46px] mt-2 p-3 border rounded-lg bg-white shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Especifique o tipo de relacionamento"
              value={data.descricaoOutrosRelacionamento || ''}
              onChange={(e) => onChange('descricaoOutrosRelacionamento', e.target.value)}
            />
          )}
        </div>

        <div>
          <label htmlFor="residenciaVitima" className="block text-sm font-medium text-gray-700 mb-4">
            <strong>A vítima residia com:</strong>
          </label>
          <select
            id="residenciaVitima"
            className="w-full h-[46px] p-3 border rounded-lg bg-white shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            value={data.residenciaVitima || ''}
            onChange={(e) => onChange('residenciaVitima', e.target.value)}
          >
            <option value="">Selecione...</option>
            <option value="Família">Família</option>
            <option value="Amigos">Amigos</option>
            <option value="Parceiro(a)">Parceiro(a)</option>
            <option value="Sozinho(a)">Sozinho(a)</option>
            <option value="Colegas de quarto">Colegas de quarto</option>
            <option value="outros">Outros</option>
          </select>
          {data.residenciaVitima === 'outros' && (
            <input
              type="text"
              className="w-full h-[46px] mt-2 p-3 border rounded-lg bg-white shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Especifique com quem residia"
              value={data.descricaoResidenciaVitimaOutros || ''}
              onChange={(e) => onChange('descricaoResidenciaVitimaOutros', e.target.value)}
            />
          )}
        </div>
      </div>
    </fieldset>
  );
};

export default CaracteristicasPsicologicasSection;