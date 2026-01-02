import React from 'react';
import { FormSectionProps } from '../../types';
import AutocompleteTextarea from '../shared/AutocompleteTextarea';

const VestigiosSection: React.FC<FormSectionProps> = ({ data, onChange }) => {
  return (
    <fieldset className="form-group">
      <legend className="mb-4"><strong>Vestígios de disparo de arma de fogo</strong></legend>
      <div className="space-y-4">
        <div>
          <label htmlFor="localDisparo" className="block text-sm font-medium text-gray-700 mb-4">
            <strong>Presença:</strong>
          </label>
          <select
            id="localDisparo"
            name="localDisparo"
            className="w-full h-[46px] p-3 border rounded-lg bg-white shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            value={data.localDisparo || ''}
            onChange={(e) => onChange('localDisparo', e.target.value)}
          >
            <option value="">Selecione...</option>
            <option value="Sim">Sim</option>
            <option value="Não">Não</option>
          </select>
        </div>

        {data.localDisparo === 'Sim' && (
          <div>
            <label htmlFor="vestigiosDisparoTextarea" className="block text-sm font-medium text-gray-700 mb-4">
              <strong>Localização dos Vestígios:</strong>
            </label>
            <AutocompleteTextarea
              id="vestigiosDisparoTextarea"
              placeholder="Descreva a localização dos vestígios (ex: Paredes, Teto, Mobília, Janelas, Portas, etc)"
              value={data.descricaoVestigiosDisparo || ''}
              onChange={(e) => onChange('descricaoVestigiosDisparo', e.target.value)}
              rows={3}
            />
          </div>
        )}
      </div>
    </fieldset>
  );
};

export default VestigiosSection;