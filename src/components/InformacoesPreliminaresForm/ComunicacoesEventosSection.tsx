import React from 'react';
import { FormSectionProps } from '../../types';
import DateTimeInput from '../shared/DateTimeInput';

const ComunicacoesEventosSection: React.FC<FormSectionProps> = ({ data, onChange }) => {
  return (
    <fieldset className="form-group">
      <legend><strong>Comunicações e Eventos de Campo</strong></legend>
      
      <DateTimeInput
        label="Comunicação ao DP:"
        dateId="comunicacaoDP"
        timeId="comunicacaoDPTime"
        dateValue={data.comunicacaoDP || ''}
        timeValue={data.comunicacaoDPTime || ''}
        onDateChange={(value) => onChange('comunicacaoDP', value)}
        onTimeChange={(value) => onChange('comunicacaoDPTime', value)}
      />

      <DateTimeInput
        label="Comunicação ao DHPP:"
        dateId="comunicacaoDHPP"
        timeId="comunicacaoDHPPTime"
        dateValue={data.comunicacaoDHPP || ''}
        timeValue={data.comunicacaoDHPPTime || ''}
        onDateChange={(value) => onChange('comunicacaoDHPP', value)}
        onTimeChange={(value) => onChange('comunicacaoDHPPTime', value)}
      />

      <DateTimeInput
        label="Primeira Resposta das Forças de Segurança:"
        dateId="chegadaPM"
        timeId="chegadaPMTime"
        dateValue={data.chegadaPM || ''}
        timeValue={data.chegadaPMTime || ''}
        onDateChange={(value) => onChange('chegadaPM', value)}
        onTimeChange={(value) => onChange('chegadaPMTime', value)}
      />

      <DateTimeInput
        label="Deslocamento da Equipe para o Local:"
        dateId="deslocamentoEquipe"
        timeId="deslocamentoEquipeTime"
        dateValue={data.deslocamentoEquipe || ''}
        timeValue={data.deslocamentoEquipeTime || ''}
        onDateChange={(value) => onChange('deslocamentoEquipe', value)}
        onTimeChange={(value) => onChange('deslocamentoEquipeTime', value)}
      />

      <DateTimeInput
        label="Chegada da Equipe ao Local:"
        dateId="chegadaEquipe"
        timeId="chegadaEquipeTime"
        dateValue={data.chegadaEquipe || ''}
        timeValue={data.chegadaEquipeTime || ''}
        onDateChange={(value) => onChange('chegadaEquipe', value)}
        onTimeChange={(value) => onChange('chegadaEquipeTime', value)}
      />

      <DateTimeInput
        label="Liberação do Local para Carro de Cadáver:"
        dateId="liberacaoLocal"
        timeId="liberacaoLocalTime"
        dateValue={data.liberacaoLocal || ''}
        timeValue={data.liberacaoLocalTime || ''}
        onDateChange={(value) => onChange('liberacaoLocal', value)}
        onTimeChange={(value) => onChange('liberacaoLocalTime', value)}
      />

      <DateTimeInput
        label="Término dos Trabalhos da Equipe no Local:"
        dateId="terminoTrabalho"
        timeId="terminoTrabalhoTime"
        dateValue={data.terminoTrabalho || ''}
        timeValue={data.terminoTrabalhoTime || ''}
        onDateChange={(value) => onChange('terminoTrabalho', value)}
        onTimeChange={(value) => onChange('terminoTrabalhoTime', value)}
      />
    </fieldset>
  );
};

export default ComunicacoesEventosSection;