import React from 'react';
import { View, Text } from '@react-pdf/renderer';
import { FormData } from '../../../types';
import { styles } from '../styles';
import { hasChanged } from '../../../utils/pdfFilters';

export const VehicleInfo: React.FC<{ data: Partial<FormData> }> = ({ data }) => {
  // Verifica se há qualquer dado preenchido na seção
  const fields: Array<keyof FormData> = [
    'localCorpo',
    'tipoVeiculo',
    'marcaVeiculo',
    'modeloVeiculo',
    'placa',
    'corVeiculo',
    'proprietario',
    'tipoIdentificacao',
    'numeroIdentificacao',
    'motorLigado',
    'danosVeiculo'
  ];
  const hasAnyData = fields.some(field => hasChanged(data[field], typeof data[field]));

  if (!hasAnyData) {
    return null;
  }

  return (
    <>
      <Text style={styles.sectionTitle}>5v. Local Imediato Veículo</Text>
      
      {hasChanged(data.localCorpo, 'string') && (
        <View style={styles.row}>
          <Text style={styles.label}>Local da vítima:</Text>
          <Text style={styles.value}>
            {data.localCorpo === 'outros' 
              ? data.especificacaoLocal 
              : data.localCorpo}
          </Text>
        </View>
      )}

      {hasChanged(data.tipoVeiculo, 'string') && (
        <View style={styles.row}>
          <Text style={styles.label}>Tipo de veículo:</Text>
          <Text style={styles.value}>
            {data.tipoVeiculo === 'outros' 
              ? data.especificacaoTipoVeiculo 
              : data.tipoVeiculo}
          </Text>
        </View>
      )}

      {hasChanged(data.marcaVeiculo, 'string') && (
        <View style={styles.row}>
          <Text style={styles.label}>Marca:</Text>
          <Text style={styles.value}>{data.marcaVeiculo}</Text>
        </View>
      )}

      {hasChanged(data.modeloVeiculo, 'string') && (
        <View style={styles.row}>
          <Text style={styles.label}>Modelo:</Text>
          <Text style={styles.value}>{data.modeloVeiculo}</Text>
        </View>
      )}

      {hasChanged(data.placa, 'string') && (
        <View style={styles.row}>
          <Text style={styles.label}>Placa:</Text>
          <Text style={styles.value}>{data.placa}</Text>
        </View>
      )}

      {hasChanged(data.corVeiculo, 'string') && (
        <View style={styles.row}>
          <Text style={styles.label}>Cor:</Text>
          <Text style={styles.value}>
            {data.corVeiculo === 'outros' 
              ? data.outraCor 
              : data.corVeiculo}
          </Text>
        </View>
      )}

      {hasChanged(data.proprietario, 'string') && (
        <View style={styles.row}>
          <Text style={styles.label}>Proprietário:</Text>
          <Text style={styles.value}>{data.proprietario}</Text>
        </View>
      )}

      {hasChanged(data.tipoIdentificacao, 'string') && (
        <View style={styles.row}>
          <Text style={styles.label}>Tipo de identificação:</Text>
          <Text style={styles.value}>{data.tipoIdentificacao}</Text>
        </View>
      )}

      {hasChanged(data.tipoIdentificacao, 'string') && hasChanged(data.numeroIdentificacao, 'string') && (
        <View style={styles.row}>
          <Text style={styles.label}>Número de identificação:</Text>
          <Text style={styles.value}>{data.numeroIdentificacao}</Text>
        </View>
      )}

      {hasChanged(data.motorLigado, 'string') && (
        <View style={styles.row}>
          <Text style={styles.label}>Motor ligado:</Text>
          <Text style={styles.value}>{data.motorLigado}</Text>
        </View>
      )}

      {hasChanged(data.danosVeiculo, 'string') && (
        <View style={styles.row}>
          <Text style={styles.label}>Danos ao veículo:</Text>
          <Text style={styles.value}>{data.danosVeiculo}</Text>
        </View>
      )}

      {hasChanged(data.danosVeiculo, 'string') && data.danosVeiculo === 'Sim' && hasChanged(data.descricaoDanos, 'string') && (
        <View style={styles.row}>
          <Text style={styles.label}>Descrição dos danos:</Text>
          <Text style={styles.multilineValue}>{data.descricaoDanos}</Text>
        </View>
      )}
    </>
  );
};