import React from 'react';
import { FormSectionProps } from '../../types';
import TipoResgateFields from './TipoResgateFields';
import DocumentoResgateFields from './DocumentoResgateFields';

const DetalhesResgateSection: React.FC<FormSectionProps> = ({ data, onChange }) => {
  return (
    <fieldset className="form-group">
      <legend className="mb-4"><strong>Tentativa de Resgate</strong></legend>
      <div className="space-y-4">
        <div>
          <label htmlFor="tentativaResgate" className="block text-sm font-medium text-gray-700 mb-4">
            <strong>Houve tentativa de resgate?</strong>
          </label>
          <select
            id="tentativaResgate"
            className="w-full h-[46px] p-3 border rounded-lg bg-white shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            value={data.tentativaResgate || ''}
            onChange={(e) => onChange('tentativaResgate', e.target.value)}
          >
            <option value="">Selecione...</option>
            <option value="Sim">Sim</option>
            <option value="Não">Não</option>
          </select>
        </div>

        {data.tentativaResgate === 'Sim' && (
          <div className="space-y-4">
            <TipoResgateFields data={data} onChange={onChange} />
            <DocumentoResgateFields data={data} onChange={onChange} />
          </div>
        )}
      </div>
    </fieldset>
  );
};

export default DetalhesResgateSection;