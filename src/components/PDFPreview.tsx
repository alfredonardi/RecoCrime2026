import { PDFViewer } from '@react-pdf/renderer';
import PDFDocument from './PDFDocument';
import { FormData } from '../types';

interface PDFPreviewProps {
  data: FormData;
}

const PDFPreview = ({ data }: PDFPreviewProps) => (
  <PDFViewer style={{ width: '100%', height: '100vh' }}>
    <PDFDocument data={data} />
  </PDFViewer>
);

export default PDFPreview;