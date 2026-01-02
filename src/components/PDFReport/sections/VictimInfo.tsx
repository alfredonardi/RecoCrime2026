import React from 'react';
import { View, Text } from '@react-pdf/renderer';
import { FormData } from '../../../types';
import { styles } from '../styles';
import { hasChanged } from '../../../utils/pdfFilters';

export const VictimInfo: React.FC<{ data: Partial<FormData> }> = ({ data }) => {
  // Check if there's any content to display
  const hasContent = hasChanged(data.acaoVitima, 'string') ||
                    hasChanged(data.identificacaoVitima, 'string') ||
                    hasChanged(data.motivo, 'string') ||
                    hasChanged(data.nome, 'string') ||
                    hasChanged(data.nomeSocial, 'string') ||
                    hasChanged(data.vulgo, 'string') ||
                    hasChanged(data.cpf, 'string') ||
                    hasChanged(data.rg, 'string') ||
                    hasChanged(data.estadoCivil, 'string') ||
                    hasChanged(data.dataNascimento, 'string') ||
                    hasChanged(data.idade, 'number') ||
                    hasChanged(data.vitimaEndereco, 'string') ||
                    hasChanged(data.pai, 'string') ||
                    hasChanged(data.mae, 'string') ||
                    hasChanged(data.naturalidadeEstado, 'string') ||
                    hasChanged(data.profissao, 'string') ||
                    hasChanged(data.sexo, 'string') ||
                    hasChanged(data.identificacaoGenero, 'string') ||
                    hasChanged(data.etnia, 'string') ||
                    hasChanged(data.compleicaoFisica, 'string') ||
                    hasChanged(data.altura, 'number') ||
                    hasChanged(data.tipoCabelo, 'string') ||
                    hasChanged(data.comprimentoCabelo, 'string') ||
                    hasChanged(data.corCabelo, 'string') ||
                    hasChanged(data.corOlhos, 'string') ||
                    hasChanged(data.caracteristicasVisiveis, 'string') ||
                    hasChanged(data.descricaoDesviosConduta, 'string') ||
                    hasChanged(data.relacionamentoFamilia, 'string') ||
                    hasChanged(data.residenciaVitima, 'string');

  if (!hasContent) {
    return null;
  }

  return (
    <View style={styles.sectionContainer}>
      <Text style={styles.sectionTitle}>6. Informações Importantes sobre a Vítima</Text>

      {/* Ação da vítima */}
      {hasChanged(data.acaoVitima, 'string') && (
        <View style={styles.row}>
          <Text style={styles.label}>Ação da vítima no local:</Text>
          <Text style={styles.value}>
            {data.acaoVitima === 'outros' 
              ? data.descricaoAcaoVitimaOutros 
              : data.acaoVitima}
          </Text>
        </View>
      )}

      {/* Status de identificação */}
      {hasChanged(data.identificacaoVitima, 'string') && (
        <View style={styles.row}>
          <Text style={styles.label}>Status:</Text>
          <Text style={styles.value}>
            {data.identificacaoVitima === 'identificada' ? 'Identificada' : 'Não identificada'}
          </Text>
        </View>
      )}

      {/* Motivo da não identificação */}
      {data.identificacaoVitima === 'nao_identificada' && hasChanged(data.motivo, 'string') && (
        <View style={styles.row}>
          <Text style={styles.label}>Motivo:</Text>
          <Text style={styles.value}>{data.motivo}</Text>
        </View>
      )}

      {/* Dados Pessoais */}
      {(hasChanged(data.nome, 'string') ||
        hasChanged(data.nomeSocial, 'string') ||
        hasChanged(data.vulgo, 'string') ||
        hasChanged(data.cpf, 'string') ||
        hasChanged(data.rg, 'string') ||
        hasChanged(data.estadoCivil, 'string') ||
        hasChanged(data.dataNascimento, 'string') ||
        hasChanged(data.idade, 'number') ||
        hasChanged(data.vitimaEndereco, 'string') ||
        hasChanged(data.pai, 'string') ||
        hasChanged(data.mae, 'string') ||
        hasChanged(data.naturalidadeEstado, 'string') ||
        hasChanged(data.profissao, 'string')) && (
        <>
          <Text style={styles.subsectionTitle}>Dados Pessoais</Text>

          {hasChanged(data.nome, 'string') && (
        <View style={styles.row}>
          <Text style={styles.label}>Nome:</Text>
          <Text style={styles.value}>{data.nome}</Text>
        </View>
      )}

      {hasChanged(data.nomeSocial, 'string') && (
        <View style={styles.row}>
          <Text style={styles.label}>Nome social:</Text>
          <Text style={styles.value}>{data.nomeSocial}</Text>
        </View>
      )}

      {hasChanged(data.vulgo, 'string') && (
        <View style={styles.row}>
          <Text style={styles.label}>Conhecido(a) como:</Text>
          <Text style={styles.value}>{data.vulgo}</Text>
        </View>
      )}

      {hasChanged(data.cpf, 'string') && (
        <View style={styles.row}>
          <Text style={styles.label}>CPF:</Text>
          <Text style={styles.value}>{data.cpf}</Text>
        </View>
      )}

      {hasChanged(data.rg, 'string') && (
        <View style={styles.row}>
          <Text style={styles.label}>RG:</Text>
          <Text style={styles.value}>{data.rg}</Text>
        </View>
      )}

      {hasChanged(data.estadoCivil, 'string') && (
        <View style={styles.row}>
          <Text style={styles.label}>Estado civil:</Text>
          <Text style={styles.value}>{data.estadoCivil}</Text>
        </View>
      )}

      {hasChanged(data.dataNascimento, 'string') && (
        <View style={styles.row}>
          <Text style={styles.label}>Data de nascimento:</Text>
          <Text style={styles.value}>{data.dataNascimento}</Text>
        </View>
      )}

      {hasChanged(data.idade, 'number') && (
        <View style={styles.row}>
          <Text style={styles.label}>Idade:</Text>
          <Text style={styles.value}>{data.idade} anos</Text>
        </View>
      )}

      {hasChanged(data.vitimaEndereco, 'string') && (
        <View style={styles.row}>
          <Text style={styles.label}>Endereço:</Text>
          <Text style={styles.value}>{data.vitimaEndereco}</Text>
        </View>
      )}

      {hasChanged(data.pai, 'string') && (
        <View style={styles.row}>
          <Text style={styles.label}>Pai:</Text>
          <Text style={styles.value}>{data.pai}</Text>
        </View>
      )}

      {hasChanged(data.mae, 'string') && (
        <View style={styles.row}>
          <Text style={styles.label}>Mãe:</Text>
          <Text style={styles.value}>{data.mae}</Text>
        </View>
      )}

      {hasChanged(data.naturalidadeEstado, 'string') && (
        <View style={styles.row}>
          <Text style={styles.label}>Natural de:</Text>
          <Text style={styles.value}>
            {data.naturalidadeCidade && data.naturalidadeEstado 
              ? `${data.naturalidadeCidade} - ${data.naturalidadeEstado}`
              : data.naturalidadeEstado}
          </Text>
        </View>
      )}

      {hasChanged(data.profissao, 'string') && (
        <View style={styles.row}>
          <Text style={styles.label}>Profissão:</Text>
          <Text style={styles.value}>{data.profissao}</Text>
        </View>
      )}
        </>
      )}

      {/* Descrição física */}
      {(hasChanged(data.sexo, 'string') ||
        hasChanged(data.identificacaoGenero, 'string') ||
        hasChanged(data.etnia, 'string') ||
        hasChanged(data.compleicaoFisica, 'string') ||
        hasChanged(data.altura, 'number')) && (
        <>
          <Text style={styles.subsectionTitle}>Descrição Física</Text>

      {hasChanged(data.sexo, 'string') && (
        <View style={styles.row}>
          <Text style={styles.label}>Órgão sexual:</Text>
          <Text style={styles.value}>{data.sexo}</Text>
        </View>
      )}

      {hasChanged(data.identificacaoGenero, 'string') && (
        <View style={styles.row}>
          <Text style={styles.label}>Gênero:</Text>
          <Text style={styles.value}>{data.identificacaoGenero}</Text>
        </View>
      )}

      {hasChanged(data.etnia, 'string') && (
        <View style={styles.row}>
          <Text style={styles.label}>Cor da pele:</Text>
          <Text style={styles.value}>
            {data.etnia === 'outros' ? data.especificarEtnia : data.etnia}
          </Text>
        </View>
      )}

      {hasChanged(data.compleicaoFisica, 'string') && (
        <View style={styles.row}>
          <Text style={styles.label}>Compleição Física:</Text>
          <Text style={styles.value}>
            {data.compleicaoFisica === 'outros' ? data.especificarCompleicaoFisica : data.compleicaoFisica}
          </Text>
        </View>
      )}

      {hasChanged(data.altura, 'number') && (
        <View style={styles.row}>
          <Text style={styles.label}>Altura:</Text>
          <Text style={styles.value}>{data.altura} m</Text>
        </View>
      )}
        </>
      )}

      {/* Cabelo */}
      {(hasChanged(data.tipoCabelo, 'string') || 
        hasChanged(data.comprimentoCabelo, 'string') || 
        hasChanged(data.corCabelo, 'string')) && (
        <>
          <Text style={styles.subsectionTitle}>Cabelo</Text>
          
          {hasChanged(data.tipoCabelo, 'string') && (
            <View style={styles.row}>
              <Text style={styles.label}>Tipo:</Text>
              <Text style={styles.value}>
                {data.tipoCabelo === 'outros' ? data.especificarTipoCabelo : data.tipoCabelo}
              </Text>
            </View>
          )}

          {hasChanged(data.comprimentoCabelo, 'string') && (
            <View style={styles.row}>
              <Text style={styles.label}>Comprimento:</Text>
              <Text style={styles.value}>
                {data.comprimentoCabelo === 'outros' ? data.especificarComprimentoCabelo : data.comprimentoCabelo}
              </Text>
            </View>
          )}

          {hasChanged(data.corCabelo, 'string') && (
            <View style={styles.row}>
              <Text style={styles.label}>Cor:</Text>
              <Text style={styles.value}>
                {data.corCabelo === 'outros' ? data.especificarCorCabelo : data.corCabelo}
              </Text>
            </View>
          )}
        </>
      )}

      {/* Olhos */}
      {hasChanged(data.corOlhos, 'string') && (
        <>
          <Text style={styles.subsectionTitle}>Olhos</Text>
          <View style={styles.row}>
            <Text style={styles.label}>Cor:</Text>
            <Text style={styles.value}>
              {data.corOlhos === 'outros' ? data.especificarCorOlhos : data.corOlhos}
            </Text>
          </View>
        </>
      )}

      {hasChanged(data.caracteristicasVisiveis, 'string') && (
        <View style={styles.row}>
          <Text style={styles.label}>Características Visíveis:</Text>
          <Text style={styles.value}>{data.caracteristicasVisiveis}</Text>
        </View>
      )}

      {/* Características psicológicas/sociológicas */}
      {(hasChanged(data.descricaoDesviosConduta, 'string') ||
        hasChanged(data.relacionamentoFamilia, 'string') ||
        hasChanged(data.residenciaVitima, 'string')) && (
        <>
          <Text style={styles.subsectionTitle}>Características Psicológicas/Sociológicas</Text>

          {hasChanged(data.descricaoDesviosConduta, 'string') && (
        <View style={styles.row}>
          <Text style={styles.label}>Desvio de conduta:</Text>
          <Text style={styles.value}>{data.descricaoDesviosConduta}</Text>
        </View>
      )}

      {hasChanged(data.relacionamentoFamilia, 'string') && (
        <View style={styles.row}>
          <Text style={styles.label}>Relacionamento familiar:</Text>
          <Text style={styles.value}>
            {data.relacionamentoFamilia === 'outros' 
              ? data.descricaoOutrosRelacionamento 
              : data.relacionamentoFamilia}
          </Text>
        </View>
      )}

      {hasChanged(data.residenciaVitima, 'string') && (
        <View style={styles.row}>
          <Text style={styles.label}>Residia com:</Text>
          <Text style={styles.value}>
            {data.residenciaVitima === 'outros'
              ? data.descricaoResidenciaVitimaOutros
              : data.residenciaVitima}
          </Text>
        </View>
      )}
        </>
      )}
    </View>
  );
};

export default VictimInfo;