import React from 'react';
import { FormSectionProps } from '../../../types';
import AutocompleteTextarea from '../../shared/AutocompleteTextarea';

const CondicoesRestricaoSection: React.FC<FormSectionProps> = ({ data, onChange }) => {
  return (
    <fieldset className="form-group">
      <legend><strong>Condições de Restrição da Vítima</strong></legend>
      <div className="space-y-4">
        <div>
          <label htmlFor="condicoesRestricaoTextarea" className="block text-sm font-medium text-gray-700 mb-4">
            <strong>Descreva as condições de restrição:</strong>
          </label>
          <AutocompleteTextarea
            id="condicoesRestricaoTextarea"
            placeholder="Descreva as condições de restrição (ex: Imobilizada, Amordaçada, Olhos Vendados, Manietada, Pés Amarrados, etc)"
            value={data.descricaoCondicoesRestricao || ''}
            onChange={(e) => onChange('descricaoCondicoesRestricao', e.target.value)}
            rows={3}
          />
        </div>

        <div>
          <label htmlFor="instrumentosRestricaoTextarea" className="block text-sm font-medium text-gray-700 mb-4">
            <strong>Descreva os instrumentos utilizados:</strong>
          </label>
          <AutocompleteTextarea
            id="instrumentosRestricaoTextarea"
            placeholder="Descreva os instrumentos utilizados (ex: Corda, Fita Adesiva, Algemas, Correntes, Tiras de pano, etc)"
            value={data.descricaoInstrumentosRestricao || ''}
            onChange={(e) => onChange('descricaoInstrumentosRestricao', e.target.value)}
            rows={3}
          />
        </div>
      </div>
    </fieldset>
  );
};

export default CondicoesRestricaoSection;