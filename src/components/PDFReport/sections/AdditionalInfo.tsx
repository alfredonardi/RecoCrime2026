import React from 'react';
import { View, Text } from '@react-pdf/renderer';
import { FormData } from '../../../types';
import { styles } from '../styles';
import { hasValue } from '../../../utils/pdfFilters';

export const AdditionalInfo: React.FC<{ data: Partial<FormData> }> = ({ data }) => {
  // Filter out empty items
  const validApreensoes = data.apreensoes?.filter(item => hasValue(item.descricao)) || [];
  const validArrecadacoes = data.arrecadacoes?.filter(item => hasValue(item.descricao)) || [];
  const validTestemunhas = data.testemunhas?.filter(item =>
    hasValue(item.nome) || hasValue(item.contato) || hasValue(item.observacoes)
  ) || [];

  // Check if there's any content to display
  const hasContent = validApreensoes.length > 0 ||
                    validArrecadacoes.length > 0 ||
                    validTestemunhas.length > 0;

  if (!hasContent) {
    return null;
  }

  return (
    <View style={styles.sectionContainer}>
      <Text style={styles.sectionTitle}>8. Informações Adicionais</Text>

      {/* Apreensões */}
      {validApreensoes.length > 0 && (
        <>
          <Text style={styles.subsectionTitle}>Apreensões</Text>
          {validApreensoes.map((item, index) => (
            <View key={index} style={styles.row}>
              <Text style={styles.value}>{item.descricao}</Text>
            </View>
          ))}
        </>
      )}

      {/* Arrecadações */}
      {validArrecadacoes.length > 0 && (
        <>
          <Text style={styles.subsectionTitle}>Arrecadações</Text>
          {validArrecadacoes.map((item, index) => (
            <View key={index} style={styles.row}>
              <Text style={styles.value}>{item.descricao}</Text>
            </View>
          ))}
        </>
      )}

      {/* Testemunhas */}
      {validTestemunhas.length > 0 && (
        <>
          <Text style={styles.subsectionTitle}>Testemunhas</Text>
          {validTestemunhas.map((testemunha, index) => (
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
    </View>
  );
};