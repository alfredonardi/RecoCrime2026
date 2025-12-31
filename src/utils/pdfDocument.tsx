import { Document, Page, StyleSheet } from '@react-pdf/renderer';
import { FormData } from '../types';
import PDFHeader from '../components/PDFReport/PDFHeader';
import PDFContent from '../components/PDFReport/PDFContent';
import PDFFooter from '../components/PDFReport/PDFFooter';

const styles = StyleSheet.create({
  page: {
    padding: 30,
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