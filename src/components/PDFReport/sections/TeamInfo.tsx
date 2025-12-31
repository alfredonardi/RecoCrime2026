import React from 'react';
import { View, Text } from '@react-pdf/renderer';
import { FormData } from '../../../types';
import { styles } from '../styles';
import { hasValue } from '../../../utils/pdfFilters';

export const TeamInfo: React.FC<{ data: FormData }> = ({ data }) => {
  // Check if there's any content to display
  const hasContent = hasValue(data.delegado) ||
                    hasValue(data.escrivao) ||
                    hasValue(data.policiaisCivis) ||
                    hasValue(data.perito) ||
                    hasValue(data.fotografo) ||
                    hasValue(data.papiloscopistas);

  // Only render if there's actual content
  if (!hasContent) {
    return null;
  }

  return (
    <>
      <Text style={styles.sectionTitle}>2. Grupo Especializado em Assessoramento de Local de Crime (GEAcrim)</Text>
      
      {hasValue(data.delegado) && (
        <View style={styles.row}>
          <Text style={styles.label}>Delegado(a):</Text>
          <Text style={styles.value}>{data.delegado}</Text>
        </View>
      )}

      {hasValue(data.escrivao) && (
        <View style={styles.row}>
          <Text style={styles.label}>Escrivão(ã):</Text>
          <Text style={styles.value}>{data.escrivao}</Text>
        </View>
      )}

      {hasValue(data.policiaisCivis) && (
        <View style={styles.row}>
          <Text style={styles.label}>Policiais Civis:</Text>
          <Text style={styles.value}>{data.policiaisCivis}</Text>
        </View>
      )}

      {hasValue(data.perito) && (
        <View style={styles.row}>
          <Text style={styles.label}>Perito(a) Criminal:</Text>
          <Text style={styles.value}>{data.perito}</Text>
        </View>
      )}

      {hasValue(data.fotografo) && (
        <View style={styles.row}>
          <Text style={styles.label}>Fotógrafo(a) Pericial:</Text>
          <Text style={styles.value}>{data.fotografo}</Text>
        </View>
      )}

      {hasValue(data.papiloscopistas) && (
        <View style={styles.row}>
          <Text style={styles.label}>Papiloscopistas:</Text>
          <Text style={styles.value}>{data.papiloscopistas}</Text>
        </View>
      )}
    </>
  );
};