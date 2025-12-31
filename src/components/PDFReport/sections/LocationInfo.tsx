import React from 'react';
import { View, Text } from '@react-pdf/renderer';
import { FormData } from '../../../types';
import { styles } from '../styles';
import { hasValue } from '../../../utils/pdfFilters';

export const LocationInfo: React.FC<{ data: FormData }> = ({ data }) => {
  // Check if there's any content to display
  const hasContent = data.area || data.perfilSocial || data.iluminacaoPublica || 
                    data.redeEsgoto || data.pavimentacao1 || data.trafegoVeiculos || 
                    hasValue(data.descricaoEstabelecimentos) || 
                    hasValue(data.descricaoPessoasPresentes) || 
                    hasValue(data.descricaoAnimaisLocal) || 
                    data.informacoesPertinentesLocalFatos;

  if (!hasContent) return null;

  return (
    <>
      <Text style={styles.sectionTitle}>5. Do Local dos Fatos</Text>
      
      {data.area && (
        <View style={styles.row}>
          <Text style={styles.label}>Área:</Text>
          <Text style={styles.value}>{data.area}</Text>
        </View>
      )}

      {data.perfilSocial && (
        <View style={styles.row}>
          <Text style={styles.label}>Perfil social:</Text>
          <Text style={styles.value}>{data.perfilSocial}</Text>
        </View>
      )}

      {data.iluminacaoPublica && (
        <View style={styles.row}>
          <Text style={styles.label}>Iluminação pública:</Text>
          <Text style={styles.value}>{data.iluminacaoPublica}</Text>
        </View>
      )}

      {data.redeEsgoto && (
        <View style={styles.row}>
          <Text style={styles.label}>Rede de esgoto:</Text>
          <Text style={styles.value}>{data.redeEsgoto}</Text>
        </View>
      )}

      {data.pavimentacao1 && (
        <View style={styles.row}>
          <Text style={styles.label}>Pavimentação:</Text>
          <Text style={styles.value}>{data.pavimentacao1}</Text>
        </View>
      )}

      {data.trafegoVeiculos && (
        <View style={styles.row}>
          <Text style={styles.label}>Tráfego de veículos:</Text>
          <Text style={styles.value}>{data.trafegoVeiculos}</Text>
        </View>
      )}

      {hasValue(data.descricaoEstabelecimentos) && (
        <View style={styles.row}>
          <Text style={styles.label}>Perto de:</Text>
          <Text style={styles.value}>{data.descricaoEstabelecimentos}</Text>
        </View>
      )}

      {hasValue(data.descricaoPessoasPresentes) && (
        <View style={styles.row}>
          <Text style={styles.label}>Pessoas presentes:</Text>
          <Text style={styles.value}>{data.descricaoPessoasPresentes}</Text>
        </View>
      )}

      {hasValue(data.descricaoAnimaisLocal) && (
        <View style={styles.row}>
          <Text style={styles.label}>Animais no local:</Text>
          <Text style={styles.value}>{data.descricaoAnimaisLocal}</Text>
        </View>
      )}

      {data.informacoesPertinentesLocalFatos && (
        <View style={styles.row}>
          <Text style={styles.label}>Informações pertinentes:</Text>
          <Text style={styles.multilineValue}>{data.informacoesPertinentesLocalFatos}</Text>
        </View>
      )}
    </>
  );
};