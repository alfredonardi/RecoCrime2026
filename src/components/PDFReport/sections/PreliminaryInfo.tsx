import React from 'react';
import { View, Text } from '@react-pdf/renderer';
import { FormData } from '../../../types';
import { styles } from '../styles';
import { formatDateTime } from '../../../utils/formatters';
import { hasValue } from '../../../utils/pdfFilters';
import { CommunicationsInfo } from './CommunicationsInfo';

export const PreliminaryInfo: React.FC<{ data: Partial<FormData> }> = ({ data }) => {
  // Check if there's any content to display
  const hasMainContent = hasValue(data.naturezaDelito) || 
                        hasValue(data.data) ||
                        hasValue(data.hora) ||
                        hasValue(data.localFatos) ||
                        hasValue(data.pontoReferencia) ||
                        hasValue(data.tipoLocal) ||
                        hasValue(data.circunscricaoPolicial) ||
                        hasValue(data.boDP) ||
                        hasValue(data.boDPInfo) ||
                        hasValue(data.boDHPP);

  const hasCommunications = hasValue(data.comunicacaoDP) ||
                          hasValue(data.comunicacaoDHPP) ||
                          hasValue(data.chegadaPM) ||
                          hasValue(data.deslocamentoEquipe) ||
                          hasValue(data.chegadaEquipe) ||
                          hasValue(data.liberacaoLocal) ||
                          hasValue(data.terminoTrabalho);

  // Only render if there's actual content
  if (!hasMainContent && !hasCommunications) {
    return null;
  }

  return (
    <>
      <Text style={styles.firstSectionTitle}>1. Informações Preliminares</Text>
      
      {hasMainContent && (
        <>
          {hasValue(data.naturezaDelito) && (
            <View style={styles.row}>
              <Text style={styles.label}>Natureza do Delito:</Text>
              <Text style={styles.value}>
                {data.naturezaDelito === 'outros' 
                  ? data.especificacaoNaturezaDelito 
                  : data.naturezaDelito}
              </Text>
            </View>
          )}

          {hasValue(data.data) && (
            <View style={styles.row}>
              <Text style={styles.label}>Data:</Text>
              <Text style={styles.value}>{formatDateTime(data.data, data.hora)}</Text>
            </View>
          )}

          {hasValue(data.localFatos) && (
            <View style={styles.row}>
              <Text style={styles.label}>Endereço:</Text>
              <Text style={styles.value}>{data.localFatos}</Text>
            </View>
          )}

          {hasValue(data.pontoReferencia) && (
            <View style={styles.row}>
              <Text style={styles.label}>Ponto de Referência:</Text>
              <Text style={styles.value}>{data.pontoReferencia}</Text>
            </View>
          )}

          {hasValue(data.tipoLocal) && (
            <View style={styles.row}>
              <Text style={styles.label}>Tipo de Local:</Text>
              <Text style={styles.value}>{data.tipoLocal}</Text>
            </View>
          )}

          {hasValue(data.circunscricaoPolicial) && (
            <View style={styles.row}>
              <Text style={styles.label}>Circunscrição:</Text>
              <Text style={styles.value}>{data.circunscricaoPolicial?.replace('DP', 'º DP')}</Text>
            </View>
          )}

          {(hasValue(data.boDP) || hasValue(data.boDPInfo)) && (
            <View style={styles.row}>
              <Text style={styles.label}>BO:</Text>
              <Text style={styles.value}>
                {data.boDP ? `${data.boDP.replace('DP', 'º DP')} ${data.boDPInfo || ''}` : ''}
              </Text>
            </View>
          )}

          {hasValue(data.boDHPP) && (
            <View style={styles.row}>
              <Text style={styles.label}>DHPP:</Text>
              <Text style={styles.value}>{data.boDHPP}</Text>
            </View>
          )}
        </>
      )}

      {hasCommunications && (
        <>
          <Text style={styles.subsectionTitle}>Comunicações e Eventos de Campo</Text>
          <CommunicationsInfo data={data} />
        </>
      )}
    </>
  );
};