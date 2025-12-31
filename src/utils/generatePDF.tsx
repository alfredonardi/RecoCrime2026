import { pdf } from '@react-pdf/renderer';
import { FormData } from '../types';
import PDFDocument from '../components/PDFDocument';

export const generatePDF = async (data: FormData): Promise<Blob> => {
    try {
        // Você pode usar JSX ou React.createElement
        const document = <PDFDocument data={ data } />;

        // Gera o Blob do PDF
        return await pdf(document).toBlob();
    } catch (error) {
        console.error('Error generating PDF:', error);
        throw error;
    }
};
