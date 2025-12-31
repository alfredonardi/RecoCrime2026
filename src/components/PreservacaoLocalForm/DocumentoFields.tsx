import React from 'react';
import { FormSectionProps } from '../../types';
import SelectWithSpecification from '../shared/SelectWithSpecification';

const DocumentoFields: React.FC<FormSectionProps> = ({ data, onChange }) => {
  return (
    <>
      <SelectWithSpecification
        label="Tipo de documento:"
        id="documentoSimplesSelect"
        value={data.tipoDocumento || ''}
        specificationValue={data.especificacaoTipoDocumento || ''}
        onChange={(value) => onChange('tipoDocumento', value)}
        onSpecificationChange={(value) => onChange('especificacaoTipoDocumento', value)}
        options={[
          { value: 'RE', label: 'RE' },
          { value: 'RG', label: 'RG' },
          { value: 'CRM', label: 'CRM' },
          { value: 'CRE', label: 'CRE' },
          { value: 'CNH', label: 'CNH' },
          { value: 'CPF', label: 'CPF' },
          { value: 'Passaporte', label: 'Passaporte' },
          { value: 'outros', label: 'Outro' }
        ]}
      />

      <label htmlFor="documentoNumero"><strong>Nº do Documento:</strong></label>
      <input
        type="text"
        id="documentoNumero"
        className="normal-input"
        value={data.documentoNumero || ''}
        onChange={(e) => onChange('documentoNumero', e.target.value)}
      />
    </>
  );
};

export default DocumentoFields;