import React from 'react';
import { Text, View, Image, StyleSheet } from '@react-pdf/renderer';
import { getLogoPath } from '../../utils/logoUtils';

const styles = StyleSheet.create({
  header: {
    position: 'absolute',
    top: 30,
    left: 40,
    right: 40,
    borderBottom: '1pt solid #ccc',
    paddingBottom: 12,
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 12,
    backgroundColor: '#fff',
    height: 90,
  },
  logo: {
    width: 60,
    height: 'auto'
  },
  headerText: {
    flex: 1,
    paddingTop: 6,
    display: 'flex',
    flexDirection: 'column',
  },
  title: {
    fontSize: 11,
    fontWeight: 'bold',
    marginBottom: 3,
    fontFamily: 'Helvetica-Bold',
    lineHeight: 1.3,
  },
  subtitle: {
    fontSize: 10,
    marginBottom: 2,
    fontFamily: 'Helvetica',
    lineHeight: 1.3,
  },
  mainTitleContainer: {
    position: 'absolute',
    top: 125,
    left: 40,
    right: 40,
    textAlign: 'center',
    backgroundColor: '#fff',
    paddingTop: 8,
    paddingBottom: 8,
  },
  mainTitle: {
    fontSize: 11,
    fontWeight: 'bold',
    fontFamily: 'Helvetica-Bold',
    textAlign: 'center',
  }
});

const PDFHeader: React.FC = () => (
  <>
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
      </View>
    </View>
    <View style={styles.mainTitleContainer} fixed>
      <Text style={styles.mainTitle}>RECOGNIÇÃO VISUOGRÁFICA DE LOCAL DE CRIME</Text>
    </View>
  </>
);

export default PDFHeader;