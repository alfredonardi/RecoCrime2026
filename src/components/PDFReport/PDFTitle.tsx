import React from 'react';
import { Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  titleContainer: {
    position: 'absolute',
    top: 140,           // Centralizado entre o header e o início do conteúdo
    left: 40,
    right: 40,
    textAlign: 'center',
    backgroundColor: '#fff',
    paddingBottom: 8,
    paddingTop: 8,
    zIndex: 10,
  },
  title: {
    fontSize: 11,
    fontFamily: 'Helvetica-Bold',
    textAlign: 'center',
    lineHeight: 1.4,
  }
});

const PDFTitle: React.FC = () => (
  <View style={styles.titleContainer} fixed>
    <Text style={styles.title}>
      RECOGNIÇÃO VISUOGRÁFICA DE LOCAL DE CRIME
    </Text>
  </View>
);

export default PDFTitle;
