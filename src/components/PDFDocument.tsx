import React from 'react';
import { Document, Page, View, StyleSheet } from '@react-pdf/renderer';
import PDFHeader from './PDFReport/PDFHeader';
import PDFContent from './PDFReport/PDFContent';
import PDFFooter from './PDFReport/PDFFooter';
import PDFTitle from './PDFReport/PDFTitle';
import { FormData } from '../types';

const styles = StyleSheet.create({
    page: {
        paddingTop: 165,        // Espaço para header + título com margem apropriada
        paddingBottom: 90,      // Espaço para o footer (70px altura + 20px margem)
        paddingLeft: 40,        // Margem lateral esquerda
        paddingRight: 40,       // Margem lateral direita
        fontFamily: 'Helvetica',
        position: 'relative'
    }
});

interface PDFDocumentProps {
    data: FormData;
}

const PDFDocument: React.FC<PDFDocumentProps> = ({ data }) => {
    return (
        <Document>
            <Page size="A4" style={styles.page}>
                <PDFHeader />
                <PDFTitle />
                <PDFContent data={data} />
                <PDFFooter />
            </Page>
        </Document>
    );
};

export default PDFDocument;
