import React from 'react';
import { View, Text } from '@react-pdf/renderer';
import { FormData } from '../../../types';
import { styles } from '../styles';
import { formatDateTime } from '../../../utils/formatters';
import { hasValue } from '../../../utils/pdfFilters';

export const CommunicationsInfo: React.FC<{ data: FormData }> = ({ data }) => (
  <>
    {hasValue(data.comunicacaoDP) && (
      <View style={styles.row}>
        <Text style={styles.label}>Comunicação ao DP:</Text>
        <Text style={styles.value}>
          {formatDateTime(data.comunicacaoDP, data.comunicacaoDPTime)}
        </Text>
      </View>
    )}

    {hasValue(data.comunicacaoDHPP) && (
      <View style={styles.row}>
        <Text style={styles.label}>Comunicação ao DHPP:</Text>
        <Text style={styles.value}>
          {formatDateTime(data.comunicacaoDHPP, data.comunicacaoDHPPTime)}
        </Text>
      </View>
    )}

    {hasValue(data.chegadaPM) && (
      <View style={styles.row}>
        <Text style={styles.label}>Primeira Resposta:</Text>
        <Text style={styles.value}>
          {formatDateTime(data.chegadaPM, data.chegadaPMTime)}
        </Text>
      </View>
    )}

    {hasValue(data.deslocamentoEquipe) && (
      <View style={styles.row}>
        <Text style={styles.label}>Deslocamento da Equipe:</Text>
        <Text style={styles.value}>
          {formatDateTime(data.deslocamentoEquipe, data.deslocamentoEquipeTime)}
        </Text>
      </View>
    )}

    {hasValue(data.chegadaEquipe) && (
      <View style={styles.row}>
        <Text style={styles.label}>Chegada da Equipe:</Text>
        <Text style={styles.value}>
          {formatDateTime(data.chegadaEquipe, data.chegadaEquipeTime)}
        </Text>
      </View>
    )}

    {hasValue(data.liberacaoLocal) && (
      <View style={styles.row}>
        <Text style={styles.label}>Liberação do Local:</Text>
        <Text style={styles.value}>
          {formatDateTime(data.liberacaoLocal, data.liberacaoLocalTime)}
        </Text>
      </View>
    )}

    {hasValue(data.terminoTrabalho) && (
      <View style={styles.row}>
        <Text style={styles.label}>Término dos Trabalhos:</Text>
        <Text style={styles.value}>
          {formatDateTime(data.terminoTrabalho, data.terminoTrabalhoTime)}
        </Text>
      </View>
    )}
  </>
);