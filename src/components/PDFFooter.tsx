import React from 'react';
import { Text, View, StyleSheet } from '@react-pdf/renderer';

interface PDFFooterProps {
  fixed?: boolean;
}

const styles = StyleSheet.create({
  footer: {
    position: 'absolute',
    bottom: 30,
    left: 0,
    right: 0,
    textAlign: 'center',
    paddingTop: 10,
    borderTop: '1px solid #ccc'
  },
  text: {
    fontSize: 10,
    color: '#666'
  }
});

const PDFFooter: React.FC<PDFFooterProps> = ({ fixed }) => (
  <View style={styles.footer} fixed={fixed}>
    <Text style={styles.text} render={({ pageNumber, totalPages }) => (
      `Página ${pageNumber} de ${totalPages}`
    )} />
  </View>
);

export default PDFFooter;