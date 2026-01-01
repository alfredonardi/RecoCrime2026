import React from 'react';
import { Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  titleContainer: {
    position: 'absolute',
    top: 130,           // Logo abaixo do header (30 + 90 + 10 margem)
    left: 40,
    right: 40,
    textAlign: 'center',
    backgroundColor: '#fff',
    paddingBottom: 10,
    paddingTop: 10,
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