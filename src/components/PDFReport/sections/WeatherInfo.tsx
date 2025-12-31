import React from 'react';
import { View, Text } from '@react-pdf/renderer';
import { FormData } from '../../../types';
import { styles } from '../styles';
import { hasValue } from '../../../utils/pdfFilters';

export const WeatherInfo: React.FC<{ data: FormData }> = ({ data }) => {
  // Check if there's any content to display
  const hasContent = hasValue(data.periodo) ||
                    hasValue(data.luz) ||
                    hasValue(data.clima) ||
                    hasValue(data.visibilidade) ||
                    hasValue(data.temperatura) ||
                    hasValue(data.sensacaoTermica) ||
                    hasValue(data.umidadeAr);

  // Only render if there's actual content
  if (!hasContent) {
    return null;
  }

  return (
    <>
      <Text style={styles.sectionTitle}>3. Do Clima</Text>
      
      {hasValue(data.periodo) && (
        <View style={styles.row}>
          <Text style={styles.label}>Período:</Text>
          <Text style={styles.value}>{data.periodo}</Text>
        </View>
      )}

      {hasValue(data.luz) && (
        <View style={styles.row}>
          <Text style={styles.label}>Condição de Luz:</Text>
          <Text style={styles.value}>{data.luz}</Text>
        </View>
      )}

      {hasValue(data.clima) && (
        <View style={styles.row}>
          <Text style={styles.label}>Clima:</Text>
          <Text style={styles.value}>
            {data.clima === 'outros' 
              ? data.especificacaoClima 
              : data.clima}
          </Text>
        </View>
      )}

      {hasValue(data.visibilidade) && (
        <View style={styles.row}>
          <Text style={styles.label}>Visibilidade:</Text>
          <Text style={styles.value}>{data.visibilidade}</Text>
        </View>
      )}

      {hasValue(data.temperatura) && (
        <View style={styles.row}>
          <Text style={styles.label}>Temperatura:</Text>
          <Text style={styles.value}>{data.temperatura}°C</Text>
        </View>
      )}

      {hasValue(data.sensacaoTermica) && (
        <View style={styles.row}>
          <Text style={styles.label}>Sensação Térmica:</Text>
          <Text style={styles.value}>{data.sensacaoTermica}°C</Text>
        </View>
      )}

      {hasValue(data.umidadeAr) && (
        <View style={styles.row}>
          <Text style={styles.label}>Umidade Relativa do Ar:</Text>
          <Text style={styles.value}>{data.umidadeAr}%</Text>
        </View>
      )}
    </>
  );
};