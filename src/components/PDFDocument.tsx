import React from 'react';
import { Document, Page, View, StyleSheet } from '@react-pdf/renderer';
import PDFHeader from './PDFReport/PDFHeader';
import PDFContent from './PDFReport/PDFContent';
import PDFFooter from './PDFReport/PDFFooter';
import { FormData } from '../types';

const styles = StyleSheet.create({
    page: {
        paddingTop: '120pt', // Aumentado para dar mais espaço ao header
        paddingBottom: '60pt',
        paddingHorizontal: '42pt',
        fontFamily: 'Helvetica',
        position: 'relative'
    },
    content: {
        flex: 1,
        flexGrow: 1
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
                <View style={styles.content}>
                    <PDFContent data={data} wrap />
                </View>
                <PDFFooter />
            </Page>
        </Document>
    );
};

export default PDFDocument;