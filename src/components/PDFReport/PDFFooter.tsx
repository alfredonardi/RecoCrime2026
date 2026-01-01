import React from 'react';
import { Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  footer: {
    position: 'absolute',
    bottom: 30,
    left: 40,
    right: 40,
    textAlign: 'center',
    paddingTop: 10,
    borderTop: '1px solid #ccc',
    backgroundColor: '#fff',
    height: 60
  },
  text: {
    fontSize: 10,
    color: '#666',
    marginBottom: 4
  },
  pageNumber: {
    position: 'absolute',
    fontSize: 10,
    top: 10,
    right: 0,
    color: '#666'
  }
});

const PDFFooter: React.FC = () => (
  <View style={styles.footer} fixed>
    <Text style={styles.text}>GEACRIM/DHPP -  Rua Brigadeiro Tobias, nº 527 - 3º andar, São Paulo - SP</Text>
    <Text style={styles.text}>(11) 3311-3980 - dhpp.dh@policiacivil.sp.gov.br</Text>
    <Text style={styles.pageNumber} render={({ pageNumber, totalPages }) => (
      `Página ${pageNumber} de ${totalPages}`
    )} />
  </View>
);

export default PDFFooter;