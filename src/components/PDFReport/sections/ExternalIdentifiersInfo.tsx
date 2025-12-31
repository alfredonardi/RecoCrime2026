import React from 'react';
import { View, Text } from '@react-pdf/renderer';
import { FormData } from '../../../types';
import { styles } from '../styles';

export const ExternalIdentifiersInfo: React.FC<{ data: Partial<FormData> }> = ({ data }) => (
  <>
    <Text style={styles.sectionTitle}>6iev. Identificadores Externos da Vítima</Text>
    
    {data.tatuagensDeformidades && data.tatuagensDeformidades.length > 0 && (
      <>
        <Text style={styles.subsectionTitle}>Tatuagens e Deformidades</Text>
        {data.tatuagensDeformidades.map((item, index) => (
          <View key={index} style={styles.row}>
            <Text style={[styles.label, { fontFamily: 'Helvetica-Bold' }]}>
              {item.local}:
            </Text>
            <Text style={styles.value}>{item.descricao}</Text>
          </View>
        ))}
      </>
    )}

    {((data.vestimentas && data.vestimentas.length > 0) || 
      (data.aderecos && data.aderecos.length > 0)) && (
      <>
        <Text style={styles.subsectionTitle}>Vestimentas e Adereços</Text>
        {[...(data.vestimentas || []), ...(data.aderecos || [])].map((item, index) => (
          <View key={index} style={styles.row}>
            <Text style={[styles.label, { fontFamily: 'Helvetica-Bold' }]}>
              {item.tipo}:
            </Text>
            <Text style={styles.value}>{item.descricao}</Text>
          </View>
        ))}
      </>
    )}
  </>
);