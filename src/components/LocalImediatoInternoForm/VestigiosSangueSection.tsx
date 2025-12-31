import React from 'react';
import { FormSectionProps } from '../../types';
import AutocompleteTextarea from '../shared/AutocompleteTextarea';

const VestigiosSangueSection: React.FC<FormSectionProps> = ({ data, onChange }) => {
  return (
    <fieldset className="form-group">
      <legend className="mb-4"><strong>Vestígios de sangue</strong></legend>
      <div className="space-y-4">
        <div>
          <label htmlFor="vestigiosSangue" className="block text-sm font-medium text-gray-700 mb-4">
            <strong>Presença:</strong>
          </label>
          <select
            id="vestigiosSangue"
            className="w-full h-[46px] p-3 border rounded-lg bg-white shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            value={data.vestigiosSangue || ''}
            onChange={(e) => onChange('vestigiosSangue', e.target.value)}
          >
            <option value="">Selecione...</option>
            <option value="Sim">Sim</option>
            <option value="Não">Não</option>
          </select>
        </div>

        {data.vestigiosSangue === 'Sim' && (
          <>
            <div>
              <label htmlFor="quantidade" className="block text-sm font-medium text-gray-700 mb-4">
                <strong>Quantidade de Sangue:</strong>
              </label>
              <select
                id="quantidade"
                className="w-full h-[46px] p-3 border rounded-lg bg-white shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                value={data.quantidadeSangue || ''}
                onChange={(e) => onChange('quantidadeSangue', e.target.value)}
              >
                <option value="">Selecione a quantidade...</option>
                <option value="Escassa">Escassa</option>
                <option value="Moderada">Moderada</option>
                <option value="Abundante">Abundante</option>
              </select>
            </div>

            <div>
              <label htmlFor="vestigiosSangueTextarea" className="block text-sm font-medium text-gray-700 mb-4">
                <strong>Localização dos vestígios:</strong>
              </label>
              <AutocompleteTextarea
                id="vestigiosSangueTextarea"
                placeholder="Descreva a localização dos vestígios de sangue (ex: Parede, Chão, Mobília, Teto, etc)"
                value={data.descricaoVestigiosSangue || ''}
                onChange={(e) => onChange('descricaoVestigiosSangue', e.target.value)}
                rows={3}
              />
            </div>
          </>
        )}
      </div>
    </fieldset>
  );
};

export default VestigiosSangueSection;