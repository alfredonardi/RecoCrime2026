import { Document, Page, StyleSheet } from '@react-pdf/renderer';
import { FormData } from '../types';
import PDFHeader from '../components/PDFReport/PDFHeader';
import PDFContent from '../components/PDFReport/PDFContent';
import PDFFooter from '../components/PDFReport/PDFFooter';

const styles = StyleSheet.create({
  page: {
    paddingTop: 180,      // Espaço para o header (120px altura + 60px margem)
    paddingBottom: 90,    // Espaço para o footer (70px altura + 20px margem)
    paddingLeft: 40,      // Margem lateral esquerda
    paddingRight: 40,     // Margem lateral direita
    fontFamily: 'Helvetica'
  }
});

export const createPDFDocument = (data: FormData) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <PDFHeader />
      <PDFContent data={data} page="first" />
      <PDFFooter />
    </Page>
  </Document>
);