import React from 'react';
import { FormSectionProps } from '../../types';
import { calculateAge } from '../../utils/dateUtils';
import AutocompleteTextarea from '../shared/AutocompleteTextarea';

const DadosPessoaisSection: React.FC<FormSectionProps> = ({ data, onChange }) => {
  const handleDateChange = (date: string) => {
    onChange('dataNascimento', date);
    if (date) {
      const age = calculateAge(date);
      onChange('idade', age);
    } else {
      onChange('idade', undefined);
    }
  };

  const handleAgeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const age = e.target.value ? parseInt(e.target.value) : undefined;
    onChange('idade', age);
    // Clear birth date when manually entering age
    if (age !== undefined) {
      onChange('dataNascimento', '');
    }
  };

  return (
    <fieldset className="form-group">
      <legend className="mb-4"><strong>Dados Pessoais</strong></legend>
      <div className="space-y-4">
        <div>
          <label htmlFor="nome" className="block text-sm font-medium text-gray-700 mb-1">
            <strong>Nome:</strong>
          </label>
          <input
            type="text"
            id="nome"
            name="nome"
            className="w-full h-[46px] p-3 border rounded-lg bg-white shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            value={data.nome || ''}
            onChange={(e) => onChange('nome', e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="nomeSocial" className="block text-sm font-medium text-gray-700 mb-1">
            <strong>Nome social:</strong>
          </label>
          <input
            type="text"
            id="nomeSocial"
            name="nomeSocial"
            className="w-full h-[46px] p-3 border rounded-lg bg-white shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            value={data.nomeSocial || ''}
            onChange={(e) => onChange('nomeSocial', e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="vulgo" className="block text-sm font-medium text-gray-700 mb-1">
            <strong>Conhecido(a) como:</strong>
          </label>
          <input
            type="text"
            id="vulgo"
            name="vulgo"
            className="w-full h-[46px] p-3 border rounded-lg bg-white shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            value={data.vulgo || ''}
            onChange={(e) => onChange('vulgo', e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="cpf" className="block text-sm font-medium text-gray-700 mb-1">
            <strong>CPF:</strong>
          </label>
          <input
            type="text"
            id="cpf"
            name="cpf"
            className="w-full h-[46px] p-3 border rounded-lg bg-white shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            value={data.cpf || ''}
            onChange={(e) => onChange('cpf', e.target.value)}
            maxLength={14}
          />
        </div>

        <div>
          <label htmlFor="rg" className="block text-sm font-medium text-gray-700 mb-1">
            <strong>RG:</strong>
          </label>
          <input
            type="text"
            id="rg"
            name="rg"
            className="w-full h-[46px] p-3 border rounded-lg bg-white shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            value={data.rg || ''}
            onChange={(e) => onChange('rg', e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="estadoCivil" className="block text-sm font-medium text-gray-700 mb-1">
            <strong>Estado civil:</strong>
          </label>
          <select
            id="estadoCivil"
            name="estadoCivil"
            className="w-full h-[46px] p-3 border rounded-lg bg-white shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            value={data.estadoCivil || ''}
            onChange={(e) => onChange('estadoCivil', e.target.value)}
          >
            <option value="">Selecione...</option>
            <option value="Solteiro(a)">Solteiro(a)</option>
            <option value="Casado(a)">Casado(a)</option>
            <option value="Divorciado(a)">Divorciado(a)</option>
            <option value="Desquitado(a)">Desquitado(a)</option>
            <option value="União Estável">União estável</option>
          </select>
        </div>

        <div>
          <label htmlFor="dataNascimento" className="block text-sm font-medium text-gray-700 mb-1">
            <strong>Data de nascimento:</strong>
          </label>
          <input
            type="date"
            id="dataNascimento"
            name="dataNascimento"
            className="w-full h-[46px] p-3 border rounded-lg bg-white shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            value={data.dataNascimento || ''}
            onChange={(e) => handleDateChange(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="idade" className="block text-sm font-medium text-gray-700 mb-1">
            <strong>Idade:</strong>
          </label>
          <input
            type="number"
            id="idade"
            name="idade"
            className="w-full h-[46px] p-3 border rounded-lg bg-white shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            value={data.idade || ''}
            onChange={handleAgeChange}
            min="0"
            max="150"
          />
        </div>

        <div>
          <label htmlFor="vitimaEndereco" className="block text-sm font-medium text-gray-700 mb-1">
            <strong>Endereço:</strong>
          </label>
          <input
            type="text"
            id="vitimaEndereco"
            name="vitimaEndereco"
            className="w-full h-[46px] p-3 border rounded-lg bg-white shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            value={data.vitimaEndereco || ''}
            onChange={(e) => onChange('vitimaEndereco', e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="pai" className="block text-sm font-medium text-gray-700 mb-1">
            <strong>Pai:</strong>
          </label>
          <input
            type="text"
            id="pai"
            name="pai"
            className="w-full h-[46px] p-3 border rounded-lg bg-white shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            value={data.pai || ''}
            onChange={(e) => onChange('pai', e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="mae" className="block text-sm font-medium text-gray-700 mb-1">
            <strong>Mãe:</strong>
          </label>
          <input
            type="text"
            id="mae"
            name="mae"
            className="w-full h-[46px] p-3 border rounded-lg bg-white shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            value={data.mae || ''}
            onChange={(e) => onChange('mae', e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="naturalidadeEstado" className="block text-sm font-medium text-gray-700 mb-1">
            <strong>Natural de:</strong>
          </label>
          <select
            id="naturalidadeEstado"
            name="naturalidadeEstado"
            className="w-full h-[46px] p-3 border rounded-lg bg-white shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            value={data.naturalidadeEstado || ''}
            onChange={(e) => onChange('naturalidadeEstado', e.target.value)}
          >
            <option value="">Selecione o estado...</option>
            <option value="AC">Acre</option>
            <option value="AL">Alagoas</option>
            <option value="AP">Amapá</option>
            <option value="AM">Amazonas</option>
            <option value="BA">Bahia</option>
            <option value="CE">Ceará</option>
            <option value="DF">Distrito Federal</option>
            <option value="ES">Espírito Santo</option>
            <option value="GO">Goiás</option>
            <option value="MA">Maranhão</option>
            <option value="MT">Mato Grosso</option>
            <option value="MS">Mato Grosso do Sul</option>
            <option value="MG">Minas Gerais</option>
            <option value="PA">Pará</option>
            <option value="PB">Paraíba</option>
            <option value="PR">Paraná</option>
            <option value="PE">Pernambuco</option>
            <option value="PI">Piauí</option>
            <option value="RJ">Rio de Janeiro</option>
            <option value="RN">Rio Grande do Norte</option>
            <option value="RS">Rio Grande do Sul</option>
            <option value="RO">Rondônia</option>
            <option value="RR">Roraima</option>
            <option value="SC">Santa Catarina</option>
            <option value="SP">São Paulo</option>
            <option value="SE">Sergipe</option>
            <option value="TO">Tocantins</option>
          </select>
        </div>

        <div>
          <label htmlFor="naturalidadeCidade" className="block text-sm font-medium text-gray-700 mb-1">
            <strong>Cidade:</strong>
          </label>
          <input
            type="text"
            id="naturalidadeCidade"
            name="naturalidadeCidade"
            className="w-full h-[46px] p-3 border rounded-lg bg-white shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            value={data.naturalidadeCidade || ''}
            onChange={(e) => onChange('naturalidadeCidade', e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="profissao" className="block text-sm font-medium text-gray-700 mb-1">
            <strong>Profissão:</strong>
          </label>
          <AutocompleteTextarea
            id="profissao"
            placeholder="Descreva a profissão da vítima"
            value={data.profissao || ''}
            onChange={(e) => onChange('profissao', e.target.value)}
            rows={2}
          />
        </div>
      </div>
    </fieldset>
  );
};

export default DadosPessoaisSection;