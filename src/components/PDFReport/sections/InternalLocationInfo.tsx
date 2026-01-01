import React from 'react';
import { View, Text } from '@react-pdf/renderer';
import { FormData } from '../../../types';
import { styles } from '../styles';
import { hasValue } from '../../../utils/pdfFilters';

export const InternalLocationInfo: React.FC<{ data: FormData }> = ({ data }) => {
  // Check if there's any content to display
  const hasContent = hasValue(data.tipoAmbiente) ||
                    hasValue(data.tipoConstrucao) ||
                    hasValue(data.caracteristicasMoradia) ||
                    hasValue(data.condicaoHigiene) ||
                    hasValue(data.materialCoberturaImovel) ||
                    hasValue(data.tipoPiso) ||
                    hasValue(data.moveisUtensilios) ||
                    hasValue(data.habitosAlimentares) ||
                    hasValue(data.comodoCorpo) ||
                    hasValue(data.descricaoObjetosCena) ||
                    hasValue(data.descricaoObjetosOutrosComodos) ||
                    hasValue(data.localDisparo) ||
                    hasValue(data.vestigiosSangue) ||
                    hasValue(data.vestigioBiologico) ||
                    hasValue(data.descricaoMaterialLeitura) ||
                    hasValue(data.informacoesPertinentesLocalInterno);

  if (!hasContent) {
    return null;
  }

  return (
    <>
      <Text style={styles.sectionTitle}>5i. Local imediato interno</Text>
      
      {hasValue(data.tipoAmbiente) && (
        <View style={styles.row}>
          <Text style={styles.label}>Ambiente:</Text>
          <Text style={styles.value}>
            {data.tipoAmbiente === 'outros' 
              ? data.especificacaoTipoAmbiente 
              : data.tipoAmbiente}
          </Text>
        </View>
      )}

      {hasValue(data.tipoConstrucao) && (
        <View style={styles.row}>
          <Text style={styles.label}>Construção:</Text>
          <Text style={styles.value}>
            {data.tipoConstrucao === 'outros' 
              ? data.detalheTipoConstrucao 
              : data.tipoConstrucao}
          </Text>
        </View>
      )}

      {hasValue(data.caracteristicasMoradia) && (
        <View style={styles.row}>
          <Text style={styles.label}>Categoria de moradia:</Text>
          <Text style={styles.value}>
            {data.caracteristicasMoradia === 'outros' 
              ? data.detalhesCaracteristicasMoradia 
              : data.caracteristicasMoradia}
          </Text>
        </View>
      )}

      {hasValue(data.condicaoHigiene) && (
        <View style={styles.row}>
          <Text style={styles.label}>Condição de higiene:</Text>
          <Text style={styles.value}>
            {data.condicaoHigiene === 'outros' 
              ? data.especificacaoCondicaoHigiene 
              : data.condicaoHigiene}
          </Text>
        </View>
      )}

      {hasValue(data.materialCoberturaImovel) && (
        <View style={styles.row}>
          <Text style={styles.label}>Material de cobertura:</Text>
          <Text style={styles.value}>
            {data.materialCoberturaImovel === 'outros' 
              ? data.especificacaoMaterialCobertura 
              : data.materialCoberturaImovel}
          </Text>
        </View>
      )}

      {hasValue(data.tipoPiso) && (
        <View style={styles.row}>
          <Text style={styles.label}>Tipo de piso:</Text>
          <Text style={styles.value}>
            {data.tipoPiso === 'outros' 
              ? data.complementoTipoPiso 
              : data.tipoPiso}
          </Text>
        </View>
      )}

      {hasValue(data.moveisUtensilios) && (
        <View style={styles.row}>
          <Text style={styles.label}>Móveis e utensílios:</Text>
          <Text style={styles.value}>
            {data.moveisUtensilios === 'outros' 
              ? data.infoMoveisUtensilios 
              : data.moveisUtensilios}
          </Text>
        </View>
      )}

      {hasValue(data.habitosAlimentares) && (
        <View style={styles.row}>
          <Text style={styles.label}>Hábitos alimentares:</Text>
          <Text style={styles.value}>
            {data.habitosAlimentares === 'outros' 
              ? data.extraInfoHabitosAlimentares 
              : data.habitosAlimentares}
          </Text>
        </View>
      )}

      {hasValue(data.comodoCorpo) && (
        <View style={styles.row}>
          <Text style={styles.label}>Cômodo:</Text>
          <Text style={styles.value}>
            {data.comodoCorpo === 'outros' 
              ? data.encontroDoCorpo 
              : data.comodoCorpo}
          </Text>
        </View>
      )}

      {hasValue(data.descricaoObjetosCena) && (
        <View style={styles.row}>
          <Text style={styles.label}>Objetos na cena:</Text>
          <Text style={styles.value}>{data.descricaoObjetosCena}</Text>
        </View>
      )}

      {hasValue(data.descricaoObjetosOutrosComodos) && (
        <View style={styles.row}>
          <Text style={styles.label}>Objetos em outros cômodos:</Text>
          <Text style={styles.value}>{data.descricaoObjetosOutrosComodos}</Text>
        </View>
      )}

      {hasValue(data.localDisparo) && (
        <>
          <Text style={styles.subsectionTitle}>Vestígios de disparo de arma de fogo</Text>
          <View style={styles.row}>
            <Text style={styles.label}>Presença:</Text>
            <Text style={styles.value}>{data.localDisparo}</Text>
          </View>

          {data.localDisparo === 'Sim' && hasValue(data.descricaoVestigiosDisparo) && (
            <View style={styles.row}>
              <Text style={styles.label}>Localização:</Text>
              <Text style={styles.value}>{data.descricaoVestigiosDisparo}</Text>
            </View>
          )}
        </>
      )}

      {hasValue(data.vestigiosSangue) && (
        <>
          <Text style={styles.subsectionTitle}>Vestígios de sangue</Text>
          <View style={styles.row}>
            <Text style={styles.label}>Presença:</Text>
            <Text style={styles.value}>{data.vestigiosSangue}</Text>
          </View>

          {data.vestigiosSangue === 'Sim' && (
            <>
              {hasValue(data.quantidadeSangue) && (
                <View style={styles.row}>
                  <Text style={styles.label}>Quantidade:</Text>
                  <Text style={styles.value}>{data.quantidadeSangue}</Text>
                </View>
              )}
              
              {hasValue(data.descricaoVestigiosSangue) && (
                <View style={styles.row}>
                  <Text style={styles.label}>Localização:</Text>
                  <Text style={styles.value}>{data.descricaoVestigiosSangue}</Text>
                </View>
              )}
            </>
          )}
        </>
      )}

      {hasValue(data.vestigioBiologico) && (
        <>
          <Text style={styles.subsectionTitle}>Vestígios biológicos</Text>
          <View style={styles.row}>
            <Text style={styles.label}>Presença:</Text>
            <Text style={styles.value}>{data.vestigioBiologico}</Text>
          </View>

          {data.vestigioBiologico === 'Sim' && hasValue(data.descricaoVestigiosBiologicos) && (
            <View style={styles.row}>
              <Text style={styles.label}>Tipo de material:</Text>
              <Text style={styles.value}>{data.descricaoVestigiosBiologicos}</Text>
            </View>
          )}
        </>
      )}

      {hasValue(data.descricaoMaterialLeitura) && (
        <>
          <Text style={styles.subsectionTitle}>Material de Leitura</Text>
          <View style={styles.row}>
            <Text style={styles.label}>Materiais encontrados:</Text>
            <Text style={styles.value}>{data.descricaoMaterialLeitura}</Text>
          </View>
        </>
      )}

      {hasValue(data.informacoesPertinentesLocalInterno) && (
        <View style={styles.row}>
          <Text style={styles.label}>Informações pertinentes:</Text>
          <Text style={styles.value}>{data.informacoesPertinentesLocalInterno}</Text>
        </View>
      )}
    </>
  );
};

export default InternalLocationInfo;