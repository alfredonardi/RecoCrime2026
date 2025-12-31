import React from 'react';
import { View, Text } from '@react-pdf/renderer';
import { FormData } from '../../../types';
import { styles } from '../styles';
import { hasValue } from '../../../utils/pdfFilters';

export const FinalConsiderations: React.FC<{ data: FormData }> = ({ data }) => (
  <>
    <Text style={styles.sectionTitle}>9. Considerações Finais</Text>
    
    {hasValue(data.investigacoesPreliminares) && (
      <>
        <Text style={styles.subsectionTitle}>Das investigações preliminares</Text>
        <View style={styles.row}>
          <Text style={styles.value}>{data.investigacoesPreliminares}</Text>
        </View>
      </>
    )}
    
    {hasValue(data.consideracoesFinais) && (
      <>
        <Text style={styles.subsectionTitle}>Considerações Finais</Text>
        <View style={styles.row}>
          <Text style={styles.value}>{data.consideracoesFinais}</Text>
        </View>
      </>
    )}
  </>
);