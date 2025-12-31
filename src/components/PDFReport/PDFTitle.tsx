import React from 'react';
import { Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  titleContainer: {
    position: 'absolute',
    top: '120pt',
    left: '42pt',
    right: '42pt',
    textAlign: 'center',
    backgroundColor: '#fff',
    paddingBottom: '24pt',
  },
  title: {
    fontSize: 14,
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