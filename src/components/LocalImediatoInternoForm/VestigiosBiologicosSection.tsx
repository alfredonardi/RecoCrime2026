import React from 'react';
import { FormSectionProps } from '../../types';
import AutocompleteTextarea from '../shared/AutocompleteTextarea';

const VestigiosBiologicosSection: React.FC<FormSectionProps> = ({ data, onChange }) => {
  return (
    <fieldset className="form-group">
      <legend className="mb-4"><strong>Vestígio de outro material biológico</strong></legend>
      <div className="space-y-4">
        <div>
          <label htmlFor="vestigioBiologico" className="block text-sm font-medium text-gray-700 mb-4">
            <strong>Presença:</strong>
          </label>
          <select
            id="vestigioBiologico"
            className="w-full h-[46px] p-3 border rounded-lg bg-white shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            value={data.vestigioBiologico || ''}
            onChange={(e) => onChange('vestigioBiologico', e.target.value)}
          >
            <option value="">Selecione...</option>
            <option value="Sim">Sim</option>
            <option value="Não">Não</option>
          </select>
        </div>

        {data.vestigioBiologico === 'Sim' && (
          <div>
            <label htmlFor="vestigiosBiologicosTextarea" className="block text-sm font-medium text-gray-700 mb-4">
              <strong>Tipo de material biológico:</strong>
            </label>
            <AutocompleteTextarea
              id="vestigiosBiologicosTextarea"
              placeholder="Descreva os tipos de material biológico encontrados (ex: Cabelos, Pele, Unhas, Sangue, etc)"
              value={data.descricaoVestigiosBiologicos || ''}
              onChange={(e) => onChange('descricaoVestigiosBiologicos', e.target.value)}
              rows={3}
            />
          </div>
        )}
      </div>
    </fieldset>
  );
};

export default VestigiosBiologicosSection;