import React from 'react';
import { View, Text } from '@react-pdf/renderer';
import { FormData } from '../../../types';
import { styles } from '../styles';
import { hasChanged, hasValue } from '../../../utils/pdfFilters';

export const ForensicDetails: React.FC<{ data: FormData }> = ({ data }) => {
  // Verifica se há qualquer dado preenchido na seção
  const fields: Array<keyof FormData> = [
    'rigidez',
    'hipotermia',
    'tempoMorte',
    'posicaoCorpo',
    'posicaoCorpo1',
    'explicacaoPosicao',
    'descricaoEstadoCorpo',
    'descricaoAcoesIdentificacao',
    'descricaoSinaisViolencia',
    'descricaoCondicoesRestricao',
    'descricaoInstrumentosRestricao',
    'medidasContraforenses',
    'descricaoMaterialPericia',
    'lesoes'
  ];
  const hasAnyData = fields.some(field => hasChanged(data[field], typeof data[field]));

  // Se não houver dados preenchidos, não renderiza a seção
  if (!hasAnyData) {
    return null;
  }

  return (
    <View style={styles.sectionContainer}>
      <Text style={styles.sectionTitle}>7. Detalhes Forenses</Text>

      {/* Detalhes Forenses do Óbito */}
      {(hasChanged(data.rigidez, 'string') || 
        hasChanged(data.hipotermia, 'string') || 
        hasChanged(data.tempoMorte, 'string')) && (
        <>
          <Text style={styles.subsectionTitle}>Detalhes Forenses do Óbito</Text>
          {hasChanged(data.rigidez, 'string') && (
            <View style={styles.row}>
              <Text style={styles.label}>Estado de Rigidez:</Text>
              <Text style={styles.value}>{data.rigidez}</Text>
            </View>
          )}
          {hasChanged(data.hipotermia, 'string') && (
            <View style={styles.row}>
              <Text style={styles.label}>Hipotermia:</Text>
              <Text style={styles.value}>{data.hipotermia}</Text>
            </View>
          )}
          {hasChanged(data.tempoMorte, 'string') && (
            <View style={styles.row}>
              <Text style={styles.label}>Tempo Provável da Morte:</Text>
              <Text style={styles.value}>{data.tempoMorte}</Text>
            </View>
          )}
        </>
      )}

      {/* Posição do Corpo */}
      {(hasChanged(data.posicaoCorpo, 'string') || 
        hasChanged(data.posicaoCorpo1, 'string') || 
        hasChanged(data.explicacaoPosicao, 'string')) && (
        <>
          <Text style={styles.subsectionTitle}>Posição do Corpo</Text>
          {hasChanged(data.posicaoCorpo, 'string') && (
            <View style={styles.row}>
              <Text style={styles.label}>Posição:</Text>
              <Text style={styles.value}>
                {data.posicaoCorpo === 'outros' 
                  ? data.especificarOutraPosicao 
                  : data.posicaoCorpo}
              </Text>
            </View>
          )}
          {hasChanged(data.posicaoCorpo1, 'string') && (
            <View style={styles.row}>
              <Text style={styles.label}>Estado da Posição:</Text>
              <Text style={styles.value}>{data.posicaoCorpo1}</Text>
            </View>
          )}
          {data.posicaoCorpo1 === 'NaoNatural' && hasChanged(data.explicacaoPosicao, 'string') && (
            <View style={styles.row}>
              <Text style={styles.label}>Explicação:</Text>
              <Text style={styles.value}>{data.explicacaoPosicao}</Text>
            </View>
          )}
        </>
      )}

      {/* Estado do Corpo */}
      {hasChanged(data.descricaoEstadoCorpo, 'string') && (
        <>
          <Text style={styles.subsectionTitle}>Estado do Corpo</Text>
          <View style={styles.row}>
            <Text style={styles.label}>Descrição:</Text>
            <Text style={styles.value}>{data.descricaoEstadoCorpo}</Text>
          </View>
        </>
      )}

      {/* Ações para Dificultar Identificação */}
      {hasChanged(data.descricaoAcoesIdentificacao, 'string') && (
        <>
          <Text style={styles.subsectionTitle}>Evidências de ação para dificultar a identificação</Text>
          <View style={styles.row}>
            <Text style={styles.label}>Descrição:</Text>
            <Text style={styles.value}>{data.descricaoAcoesIdentificacao}</Text>
          </View>
        </>
      )}

      {/* Sinais de Violência */}
      {hasChanged(data.descricaoSinaisViolencia, 'string') && (
        <>
          <Text style={styles.subsectionTitle}>Sinais de Violência</Text>
          <View style={styles.row}>
            <Text style={styles.label}>Descrição:</Text>
            <Text style={styles.value}>{data.descricaoSinaisViolencia}</Text>
          </View>
        </>
      )}

      {/* Condições de Restrição */}
      {(hasChanged(data.descricaoCondicoesRestricao, 'string') || 
        hasChanged(data.descricaoInstrumentosRestricao, 'string')) && (
        <>
          <Text style={styles.subsectionTitle}>Condições de Restrição</Text>
          {hasChanged(data.descricaoCondicoesRestricao, 'string') && (
            <View style={styles.row}>
              <Text style={styles.label}>Condições:</Text>
              <Text style={styles.value}>{data.descricaoCondicoesRestricao}</Text>
            </View>
          )}
          {hasChanged(data.descricaoInstrumentosRestricao, 'string') && (
            <View style={styles.row}>
              <Text style={styles.label}>Instrumentos:</Text>
              <Text style={styles.value}>{data.descricaoInstrumentosRestricao}</Text>
            </View>
          )}
        </>
      )}

      {/* Medidas Contraforenses */}
      {hasChanged(data.medidasContraforenses, 'string') && (
        <>
          <Text style={styles.subsectionTitle}>Medidas contraforenses</Text>
          <View style={styles.row}>
            <Text style={styles.value}>{data.medidasContraforenses}</Text>
          </View>
        </>
      )}

      {/* Lesões Section */}
      {(() => {
        const validLesoes = data.lesoes?.filter(item =>
          hasValue(item.local) || hasValue(item.descricao)
        ) || [];

        return validLesoes.length > 0 && (
          <>
            <Text style={styles.subsectionTitle}>Sede e Descrição das Lesões Aparentes</Text>
            {validLesoes.map((lesao, index) => (
              <View key={index} style={styles.row}>
                {lesao.local && (
                  <Text style={[styles.label, { fontFamily: 'Helvetica-Bold' }]}>
                    {lesao.local}:
                  </Text>
                )}
                <Text style={styles.value}>{lesao.descricao || ''}</Text>
              </View>
            ))}
          </>
        );
      })()}

      {/* Coleta de Material para Perícia */}
      {hasValue(data.descricaoMaterialPericia) && (
        <>
          <Text style={styles.subsectionTitle}>Coleta de Material para Perícia</Text>
          <View style={styles.row}>
            <Text style={styles.label}>Materiais coletados:</Text>
            <Text style={styles.value}>{data.descricaoMaterialPericia}</Text>
          </View>
        </>
      )}
    </View>
  );
};

export default ForensicDetails;