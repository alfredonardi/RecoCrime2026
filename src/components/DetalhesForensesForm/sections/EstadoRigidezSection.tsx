import React from 'react';
import { FormSectionProps } from '../../../types';

const EstadoRigidezSection: React.FC<FormSectionProps> = ({ data, onChange }) => {
  return (
    <fieldset className="form-group">
      <legend className="text-sm font-medium text-gray-700 mb-4"><strong>Detalhes Forenses do Óbito</strong></legend>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-4">
            <strong>Estado de rigidez:</strong>
          </label>
          <select
            id="rigidez"
            name="rigidez"
            className="w-full h-[46px] p-3 border rounded-lg bg-white shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            value={data.rigidez || ''}
            onChange={(e) => onChange('rigidez', e.target.value)}
          >
            <option value="">Selecione...</option>
            <option value="presente">Presente</option>
            <option value="ausente">Ausente</option>
          </select>
        </div>

        <div>
          <label htmlFor="hipotermiaSelect" className="block text-sm font-medium text-gray-700 mb-4">
            <strong>Hipotermia</strong>
          </label>
          <select
            id="hipotermiaSelect"
            name="hipotermiaSelect"
            className="w-full h-[46px] p-3 border rounded-lg bg-white shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            value={data.hipotermia || ''}
            onChange={(e) => onChange('hipotermia', e.target.value)}
          >
            <option value="">Selecione...</option>
            <option value="presente">Presente</option>
            <option value="ausente">Ausente</option>
          </select>
        </div>

        <div>
          <label htmlFor="tempoMorte" className="block text-sm font-medium text-gray-700 mb-4">
            <strong>Tempo Provável da Morte</strong>
          </label>
          <input
            type="text"
            id="tempoMorte"
            name="tempoMorte"
            className="w-full h-[46px] p-3 border rounded-lg bg-white shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="ex: 3 a 5 horas"
            value={data.tempoMorte || ''}
            onChange={(e) => onChange('tempoMorte', e.target.value)}
          />
        </div>
      </div>
    </fieldset>
  );
};

export default EstadoRigidezSection;