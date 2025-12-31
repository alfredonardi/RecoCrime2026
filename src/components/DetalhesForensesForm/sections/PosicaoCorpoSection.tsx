import React from 'react';
import { FormSectionProps } from '../../../types';

const PosicaoCorpoSection: React.FC<FormSectionProps> = ({ data, onChange }) => {
  return (
    <fieldset className="form-group">
      <legend className="mb-4"><strong>Do óbito</strong></legend>
      <div className="space-y-4">
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            <strong>Posição do corpo:</strong>
          </label>
          <select
            id="posicaoCorpo"
            className="w-full h-[46px] p-3 border rounded-lg bg-white shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            value={data.posicaoCorpo || ''}
            onChange={(e) => onChange('posicaoCorpo', e.target.value)}
          >
            <option value="">Selecione...</option>
            <option value="DecubitoDorsal">Decúbito dorsal</option>
            <option value="DecubitoVentral">Decúbito ventral</option>
            <option value="DecubitoLateralDireito">Decúbito lateral direito</option>
            <option value="DecubitoLateralEsquerdo">Decúbito lateral esquerdo</option>
            <option value="SuspensaoCompleta">Suspensão completa</option>
            <option value="SuspensaoIncompleta">Suspensão incompleta</option>
            <option value="Sentado">Sentado</option>
            <option value="Genupeitoral">Genupeitoral</option>
            <option value="Submerso">Submerso (completa ou incompleta)</option>
            <option value="PosicaoDeBoxeador">Posição de boxeador</option>
            <option value="Fowler">Posição de Fowler</option>
            <option value="Trendelenburg">Posição de Trendelenburg</option>
            <option value="PosicaoOrtostatica">Posição ortostática (em pé)</option>
            <option value="JoelhoPeito">Posição joelho-peito</option>
            <option value="PosicaoSims">Posição de Sims</option>
            <option value="Prone">Posição prone (deitado de barriga para baixo)</option>
            <option value="Supine">Posição supine (deitado de barriga para cima)</option>
            <option value="PosicaoLitotomica">Posição litotômica (com pernas elevadas e dobradas)</option>
            <option value="outros">Outra</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            <strong>Estado da posição do corpo:</strong>
          </label>
          <select
            id="posicaoCorpo1"
            className="w-full h-[46px] p-3 border rounded-lg bg-white shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            value={data.posicaoCorpo1 || ''}
            onChange={(e) => onChange('posicaoCorpo1', e.target.value)}
          >
            <option value="">Selecione...</option>
            <option value="Natural">Natural ou comum</option>
            <option value="NaoNatural">Não natural ou incomum</option>
          </select>
        </div>

        {data.posicaoCorpo1 === 'NaoNatural' && (
          <div>
            <input
              type="text"
              className="w-full h-[46px] p-3 border rounded-lg bg-white shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Explique a posição incomum ou não natural"
              value={data.explicacaoPosicao || ''}
              onChange={(e) => onChange('explicacaoPosicao', e.target.value)}
            />
          </div>
        )}
      </div>
    </fieldset>
  );
};

export default PosicaoCorpoSection;