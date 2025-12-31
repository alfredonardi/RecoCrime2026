import { useEffect } from 'react';
import { FormData } from '../types';

export const useDateTimeSync = (
  data: FormData,
  onChange: (field: string, value: any) => void
) => {
  useEffect(() => {
    if (data.data && data.hora) {
      // Only sync if the communication fields are empty
      const fieldsToSync = [
        ['comunicacaoDP', 'comunicacaoDPTime'],
        ['comunicacaoDHPP', 'comunicacaoDHPPTime'],
        ['chegadaPM', 'chegadaPMTime'],
        ['deslocamentoEquipe', 'deslocamentoEquipeTime'],
        ['chegadaEquipe', 'chegadaEquipeTime'],
        ['liberacaoLocal', 'liberacaoLocalTime'],
        ['terminoTrabalho', 'terminoTrabalhoTime']
      ];

      fieldsToSync.forEach(([dateField, timeField]) => {
        if (!data[dateField] && !data[timeField]) {
          onChange(dateField, data.data);
          onChange(timeField, data.hora);
        }
      });
    }
  }, [data.data, data.hora]);
};