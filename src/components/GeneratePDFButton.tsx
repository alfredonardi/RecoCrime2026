// src/components/GeneratePDFButton.tsx
import React from 'react';
import { FormData } from '../types';
import { generatePDF } from '../utils/generatePDF'; // Named import

interface GeneratePDFButtonProps {
    data: FormData;
}

const GeneratePDFButton: React.FC<GeneratePDFButtonProps> = ({ data }) => {
    const handleClick = async () => {
        try {
            const blob = await generatePDF(data);
            const url = URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = url;
            link.download = 'relatorio-reconhecimento.pdf';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            URL.revokeObjectURL(url);
        } catch (error) {
            console.error('Error generating PDF:', error);
            alert('Erro ao gerar o PDF. Por favor, tente novamente.');
        }
    };

    return (
        <button
            type="button"
            onClick={handleClick}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
            Gerar PDF
        </button>
    );
};

export default GeneratePDFButton;
