import React from 'react';
import { Text, View, Image, StyleSheet } from '@react-pdf/renderer';
import { getLogoPath } from '../../utils/logoUtils';

const styles = StyleSheet.create({
  header: {
    position: 'absolute',
    top: '24pt',
    left: '42pt',
    right: '42pt',
    borderBottom: '1pt solid #ccc',
    paddingBottom: '12pt',
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: '12pt',
    backgroundColor: '#fff',
    height: '120pt',
  },
  logo: {
    width: '60pt',
    height: 'auto'
  },
  headerText: {
    flex: 1,
    paddingTop: '6pt',
    display: 'flex',
    flexDirection: 'column',
  },
  title: {
    fontSize: 11,
    fontWeight: 'bold',
    marginBottom: '3pt',
    fontFamily: 'Helvetica-Bold',
    lineHeight: 1.3,
  },
  subtitle: {
    fontSize: 10,
    marginBottom: '2pt',
    fontFamily: 'Helvetica',
    lineHeight: 1.3,
  },
  mainTitleContainer: {
    width: '100%',
    display: 'flex',
    alignItems: 'flex-start', // Alterado para alinhar à esquerda
    marginTop: '6pt',
    paddingLeft: '24pt', // Adicionado padding à esquerda para mover o título
  },
  mainTitle: {
    fontSize: 10, // Reduzido para 10pt
    fontWeight: 'bold',
    fontFamily: 'Helvetica-Bold',
    textAlign: 'left', // Alterado para alinhar à esquerda
  }
});

const PDFHeader: React.FC = () => (
  <View style={styles.header} fixed>
    <Image 
      style={styles.logo}
      src={getLogoPath()}
    />
    <View style={styles.headerText}>
      <Text style={styles.title}>SECRETARIA DA SEGURANÇA PÚBLICA</Text>
      <Text style={styles.title}>POLÍCIA CIVIL DO ESTADO DE SÃO PAULO</Text>
      <Text style={styles.subtitle}>Departamento Estadual de Homicídios e Proteção à Pessoa – DHPP</Text>
      <Text style={styles.subtitle}>Divisão de Homicídios "Dr. FRANCISCO DE ASSIS CAMARGO MAGNO"</Text>
      <Text style={styles.subtitle}>Grupo Especial de Atendimento a Local de Crime – GEACRIM</Text>
      <View style={styles.mainTitleContainer}>
        <Text style={styles.mainTitle}>RECOGNIÇÃO VISUOGRÁFICA DE LOCAL DE CRIME</Text>
      </View>
    </View>
  </View>
);

export default PDFHeader;