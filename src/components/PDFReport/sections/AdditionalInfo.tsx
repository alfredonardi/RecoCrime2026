import React from 'react';
import { View, Text } from '@react-pdf/renderer';
import { FormData } from '../../../types';
import { styles } from '../styles';

export const AdditionalInfo: React.FC<{ data: Partial<FormData> }> = ({ data }) => {
  // Check if there's any content to display
  const hasContent = (data.apreensoes && data.apreensoes.length > 0) ||
                    (data.arrecadacoes && data.arrecadacoes.length > 0) ||
                    (data.testemunhas && data.testemunhas.length > 0);

  if (!hasContent) {
    return null;
  }

  return (
    <>
      <Text style={styles.sectionTitle}>8. Informações Adicionais</Text>
      
      {/* Apreensões */}
      {data.apreensoes && data.apreensoes.length > 0 && (
        <>
          <Text style={styles.subsectionTitle}>Apreensões</Text>
          {data.apreensoes.map((item, index) => (
            <View key={index} style={styles.row}>
              <Text style={styles.value}>{item.descricao}</Text>
            </View>
          ))}
        </>
      )}
      
      {/* Arrecadações */}
      {data.arrecadacoes && data.arrecadacoes.length > 0 && (
        <>
          <Text style={styles.subsectionTitle}>Arrecadações</Text>
          {data.arrecadacoes.map((item, index) => (
            <View key={index} style={styles.row}>
              <Text style={styles.value}>{item.descricao}</Text>
            </View>
          ))}
        </>
      )}
      
      {/* Testemunhas */}
      {data.testemunhas && data.testemunhas.length > 0 && (
        <>
          <Text style={styles.subsectionTitle}>Testemunhas</Text>
          {data.testemunhas.map((testemunha, index) => (
            <View key={index} style={styles.row}>
              <Text style={[styles.label, { fontFamily: 'Helvetica-Bold' }]}>
                Testemunha {index + 1}:
              </Text>
              <Text style={styles.value}>
                {[
                  testemunha.nome && `Nome: ${testemunha.nome}`,
                  testemunha.contato && `Contato: ${testemunha.contato}`,
                  testemunha.observacoes && `Observações: ${testemunha.observacoes}`
                ].filter(Boolean).join('\n')}
              </Text>
            </View>
          ))}
        </>
      )}
    </>
  );
};