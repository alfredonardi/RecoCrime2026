import React from 'react';
import { Text, View, Image, StyleSheet } from '@react-pdf/renderer';
import { getLogoPath } from '../../utils/logoUtils';

const styles = StyleSheet.create({
  header: {
    position: 'absolute',
    top: 20,
    left: 30,
    right: 30,
    borderBottom: '1px solid #ccc',
    paddingBottom: 10,
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 15
  },
  logo: {
    width: 75,
    height: 'auto'
  },
  headerText: {
    flex: 1,
    paddingTop: 10
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 4,
    fontFamily: 'Helvetica-Bold'
  },
  subtitle: {
    fontSize: 12,
    marginBottom: 3,
    fontFamily: 'Helvetica'
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
    </View>
  </View>
);

export default PDFHeader;