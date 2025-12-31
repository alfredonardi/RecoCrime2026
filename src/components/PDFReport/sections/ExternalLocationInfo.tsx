import React from 'react';
import { View, Text } from '@react-pdf/renderer';
import { FormData } from '../../../types';
import { styles } from '../styles';
import { hasValue } from '../../../utils/pdfFilters';

export const ExternalLocationInfo: React.FC<{ data: FormData }> = ({ data }) => {
  // Check if there's any content to display
  const hasContent = hasValue(data.localEncontroCorpo) ||
                    hasValue(data.pavimentacao) ||
                    hasValue(data.tipoRelevo) ||
                    hasValue(data.descricaoAcidentesGeograficos) ||
                    hasValue(data.corpoMovido);

  // Only render if there's actual content
  if (!hasContent) return null;

  return (
    <>
      <Text style={styles.sectionTitle}>5e. Local imediato externo</Text>
      
      {hasValue(data.localEncontroCorpo) && (
        <View style={styles.row}>
          <Text style={styles.label}>Tipo de local:</Text>
          <Text style={styles.value}>
            {data.localEncontroCorpo === 'outros' 
              ? data.especificacaoLocalEncontroCorpo 
              : data.localEncontroCorpo}
          </Text>
        </View>
      )}

      {hasValue(data.pavimentacao) && (
        <View style={styles.row}>
          <Text style={styles.label}>Pavimentação:</Text>
          <Text style={styles.value}>
            {data.pavimentacao === 'outros' 
              ? data.especificacaoPavimentacao 
              : data.pavimentacao}
          </Text>
        </View>
      )}

      {hasValue(data.tipoRelevo) && (
        <View style={styles.row}>
          <Text style={styles.label}>Tipo de relevo:</Text>
          <Text style={styles.value}>
            {data.tipoRelevo === 'outros' 
              ? data.especificacaoTipoRelevo 
              : data.tipoRelevo}
          </Text>
        </View>
      )}

      {hasValue(data.descricaoAcidentesGeograficos) && (
        <View style={styles.row}>
          <Text style={styles.label}>Acidentes geográficos:</Text>
          <Text style={styles.value}>{data.descricaoAcidentesGeograficos}</Text>
        </View>
      )}

      {hasValue(data.corpoMovido) && (
        <>
          <View style={styles.row}>
            <Text style={styles.label}>Movimentação do corpo:</Text>
            <Text style={styles.value}>{data.corpoMovido}</Text>
          </View>
          
          {data.corpoMovido === 'Sim' && hasValue(data.detalhesCorpoMovido) && (
            <View style={styles.row}>
              <Text style={styles.label}>Detalhes:</Text>
              <Text style={styles.multilineValue}>{data.detalhesCorpoMovido}</Text>
            </View>
          )}
        </>
      )}
    </>
  );
};