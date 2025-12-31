import React from 'react';
import { View, Text } from '@react-pdf/renderer';
import { FormData } from '../../../types';
import { styles } from '../styles';
import { hasValue } from '../../../utils/pdfFilters';

export const PreservationInfo: React.FC<{ data: FormData }> = ({ data }) => {
  // Check if there's any content to display
  const hasContent = hasValue(data.estadoVitima) ||
                    hasValue(data.materialQueCobria) ||
                    hasValue(data.preservadoPor) ||
                    hasValue(data.responsavel) ||
                    hasValue(data.tipoDocumento) ||
                    hasValue(data.documentoNumero) ||
                    hasValue(data.tipoVtrNumero) ||
                    hasValue(data.vtrNumero) ||
                    hasValue(data.tentativaResgate) ||
                    hasValue(data.tipoResgate) ||
                    hasValue(data.encarregado) ||
                    hasValue(data.tipoDocumentoResgate) ||
                    hasValue(data.numeroDocumentoResgate) ||
                    hasValue(data.tipoVtrResgate) ||
                    hasValue(data.vtrNumeroResgate);

  // Only render if there's actual content
  if (!hasContent) {
    return null;
  }

  return (
    <>
      <Text style={styles.sectionTitle}>4. Da Preservação do Local</Text>
      
      {/* Estado da Vítima */}
      {hasValue(data.estadoVitima) && (
        <View style={styles.row}>
          <Text style={styles.label}>Estado da Vítima:</Text>
          <Text style={styles.value}>{data.estadoVitima}</Text>
        </View>
      )}

      {hasValue(data.materialQueCobria) && (
        <View style={styles.row}>
          <Text style={styles.label}>Material que Cobria:</Text>
          <Text style={styles.value}>{data.materialQueCobria}</Text>
        </View>
      )}

      {/* Preservação do Local */}
      {hasValue(data.preservadoPor) && (
        <View style={styles.row}>
          <Text style={styles.label}>Preservado por:</Text>
          <Text style={styles.value}>
            {data.preservadoPor === 'outros' 
              ? data.especificacaoPreservadoPor 
              : data.preservadoPor}
          </Text>
        </View>
      )}

      {hasValue(data.responsavel) && (
        <View style={styles.row}>
          <Text style={styles.label}>Responsável:</Text>
          <Text style={styles.value}>{data.responsavel}</Text>
        </View>
      )}

      {hasValue(data.tipoDocumento) && (
        <View style={styles.row}>
          <Text style={styles.label}>Tipo de Documento:</Text>
          <Text style={styles.value}>
            {data.tipoDocumento === 'outros' 
              ? data.especificacaoTipoDocumento 
              : data.tipoDocumento}
          </Text>
        </View>
      )}

      {hasValue(data.documentoNumero) && (
        <View style={styles.row}>
          <Text style={styles.label}>Nº do Documento:</Text>
          <Text style={styles.value}>{data.documentoNumero}</Text>
        </View>
      )}

      {/* Veículo de Preservação */}
      {(hasValue(data.tipoVtrNumero) || hasValue(data.vtrNumero)) && (
        <View style={styles.row}>
          <Text style={styles.label}>Veículo de Preservação:</Text>
          <Text style={styles.value}>
            {data.tipoVtrNumero === 'patrimoniovtr' ? 'Patrimônio: ' : 'Placa: '}
            {data.vtrNumero}
          </Text>
        </View>
      )}

      {/* Tentativa de Resgate */}
      {hasValue(data.tentativaResgate) && (
        <View style={styles.row}>
          <Text style={styles.label}>Tentativa de Resgate:</Text>
          <Text style={styles.value}>{data.tentativaResgate}</Text>
        </View>
      )}

      {data.tentativaResgate === 'Sim' && (
        <>
          {hasValue(data.tipoResgate) && (
            <View style={styles.row}>
              <Text style={styles.label}>Realizado por:</Text>
              <Text style={styles.value}>
                {data.tipoResgate === 'outros' 
                  ? data.especificacaoTipoResgate 
                  : data.tipoResgate}
              </Text>
            </View>
          )}

          {hasValue(data.encarregado) && (
            <View style={styles.row}>
              <Text style={styles.label}>Encarregado:</Text>
              <Text style={styles.value}>{data.encarregado}</Text>
            </View>
          )}

          {hasValue(data.tipoDocumentoResgate) && (
            <View style={styles.row}>
              <Text style={styles.label}>Tipo de Documento:</Text>
              <Text style={styles.value}>
                {data.tipoDocumentoResgate === 'outros' 
                  ? data.especificacaoTipoDocumentoResgate 
                  : data.tipoDocumentoResgate}
              </Text>
            </View>
          )}

          {hasValue(data.numeroDocumentoResgate) && (
            <View style={styles.row}>
              <Text style={styles.label}>Nº do Documento:</Text>
              <Text style={styles.value}>{data.numeroDocumentoResgate}</Text>
            </View>
          )}

          {/* Veículo do Resgate */}
          {(hasValue(data.tipoVtrResgate) || hasValue(data.vtrNumeroResgate)) && (
            <View style={styles.row}>
              <Text style={styles.label}>Veículo do Resgate:</Text>
              <Text style={styles.value}>
                {data.tipoVtrResgate === 'patrimoniovtr' ? 'Patrimônio: ' : 'Placa: '}
                {data.vtrNumeroResgate}
              </Text>
            </View>
          )}
        </>
      )}
    </>
  );
};