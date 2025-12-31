import React from 'react';
import { View, Text } from '@react-pdf/renderer';
import { FormData } from '../../../types';
import { styles } from '../styles';
import { hasValue } from '../../../utils/pdfFilters';

export const ExternalIdentifiersInfo: React.FC<{ data: Partial<FormData> }> = ({ data }) => {
  // Filter out empty items from arrays
  const validTatuagens = data.tatuagensDeformidades?.filter(item =>
    hasValue(item.local) || hasValue(item.descricao)
  ) || [];

  const validVestimentas = [...(data.vestimentas || []), ...(data.aderecos || [])]
    .filter(item => hasValue(item.tipo) || hasValue(item.descricao));

  return (
    <>
      <Text style={styles.sectionTitle}>6iev. Identificadores Externos da Vítima</Text>

      {validTatuagens.length > 0 && (
        <>
          <Text style={styles.subsectionTitle}>Tatuagens e Deformidades</Text>
          {validTatuagens.map((item, index) => (
            <View key={index} style={styles.row}>
              {item.local && (
                <Text style={[styles.label, { fontFamily: 'Helvetica-Bold' }]}>
                  {item.local}:
                </Text>
              )}
              <Text style={styles.value}>{item.descricao || ''}</Text>
            </View>
          ))}
        </>
      )}

      {validVestimentas.length > 0 && (
        <>
          <Text style={styles.subsectionTitle}>Vestimentas e Adereços</Text>
          {validVestimentas.map((item, index) => (
            <View key={index} style={styles.row}>
              {item.tipo && (
                <Text style={[styles.label, { fontFamily: 'Helvetica-Bold' }]}>
                  {item.tipo}:
                </Text>
              )}
              <Text style={styles.value}>{item.descricao || ''}</Text>
            </View>
          ))}
        </>
      )}
    </>
  );
};