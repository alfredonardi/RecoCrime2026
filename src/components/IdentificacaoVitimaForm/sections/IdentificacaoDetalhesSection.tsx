import React from 'react';
import { FormSectionProps } from '../../../types';
import { formatCPF } from '../../../utils/formatters';

const IdentificacaoDetalhesSection: React.FC<FormSectionProps> = ({ data, onChange }) => {
  return (
    <div className="form-section">
      <label htmlFor="nome"><strong>Nome:</strong></label>
      <input
        type="text"
        id="nome"
        className="normal-input"
        value={data.nome || ''}
        onChange={(e) => onChange('nome', e.target.value)}
      />

      <label htmlFor="nomeSocial"><strong>Nome social:</strong></label>
      <input
        type="text"
        id="nomeSocial"
        className="normal-input"
        value={data.nomeSocial || ''}
        onChange={(e) => onChange('nomeSocial', e.target.value)}
      />

      <label htmlFor="sexo"><strong>Órgão sexual:</strong></label>
      <select
        id="sexo"
        className="normal-input"
        value={data.sexo || ''}
        onChange={(e) => onChange('sexo', e.target.value)}
      >
        <option value="">Selecione...</option>
        <option value="Masculino">Masculino</option>
        <option value="Feminino">Feminino</option>
        <option value="Ambos">Ambos</option>
        <option value="NaoAparente">Não aparente ou identificado</option>
      </select>

      <label htmlFor="identificacaoGenero"><strong>Identificação de gênero:</strong></label>
      <input
        type="text"
        id="identificacaoGenero"
        className="normal-input"
        value={data.identificacaoGenero || ''}
        onChange={(e) => onChange('identificacaoGenero', e.target.value)}
      />

      <label htmlFor="vulgo"><strong>Conhecido(a) como:</strong></label>
      <input
        type="text"
        id="vulgo"
        className="normal-input"
        value={data.vulgo || ''}
        onChange={(e) => onChange('vulgo', e.target.value)}
      />

      <label htmlFor="cpf"><strong>CPF:</strong></label>
      <input
        type="text"
        id="cpf"
        className="normal-input"
        value={data.cpf || ''}
        onChange={(e) => onChange('cpf', formatCPF(e.target.value))}
        maxLength={14}
      />

      <label htmlFor="rg"><strong>RG:</strong></label>
      <input
        type="text"
        id="rg"
        className="normal-input"
        value={data.rg || ''}
        onChange={(e) => onChange('rg', e.target.value)}
      />

      <label htmlFor="estadoCivil"><strong>Estado civil:</strong></label>
      <select
        id="estadoCivil"
        className="normal-input"
        value={data.estadoCivil || ''}
        onChange={(e) => onChange('estadoCivil', e.target.value)}
      >
        <option value="">Selecione...</option>
        <option value="Solteiro(a)">Solteiro(a)</option>
        <option value="Divorciado(a)">Divorciado(a)</option>
        <option value="Desquitado(a)">Desquitado(a)</option>
        <option value="União Estável">União estável</option>
        <option value="Casado(a)">Casado(a)</option>
      </select>
    </div>
  );
};

export default IdentificacaoDetalhesSection;