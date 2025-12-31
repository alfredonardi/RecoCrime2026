import React from 'react';
import { FormSectionProps } from '../../types';
import SelectWithSpecification from '../shared/SelectWithSpecification';
import VeiculoPreservacaoFields from './VeiculoPreservacaoFields';
import DocumentoFields from './DocumentoFields';

const PreservacaoSection: React.FC<FormSectionProps> = ({ data, onChange }) => {
  return (
    <fieldset className="form-group">
      <legend className="mb-4"><strong>Preservação do Local</strong></legend>
      <div className="space-y-4">
        <div>
          <SelectWithSpecification
            label="Local preservado por(pela):"
            id="preservadoPorSelect"
            value={data.preservadoPor || ''}
            specificationValue={data.especificacaoPreservadoPor || ''}
            onChange={(value) => onChange('preservadoPor', value)}
            onSpecificationChange={(value) => onChange('especificacaoPreservadoPor', value)}
            options={[
              { value: 'PC', label: 'Polícia Civil' },
              { value: 'PM', label: 'Polícia Militar' },
              { value: 'PF', label: 'Polícia Federal' },
              { value: 'GCM', label: 'Guarda Civil Metropolitana' },
              { value: 'BM', label: 'Bombeiro Militar' },
              { value: 'outros', label: 'Outro' }
            ]}
          />
        </div>

        {data.preservadoPor && (
          <div className="space-y-4">
            <div>
              <label htmlFor="responsavel" className="block text-sm font-medium text-gray-700 mb-4">
                <strong>Responsável:</strong>
              </label>
              <input 
                type="text" 
                id="responsavel"
                className="w-full h-[46px] p-3 border rounded-lg bg-white shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                value={data.responsavel || ''}
                onChange={(e) => onChange('responsavel', e.target.value)}
              />
            </div>

            <DocumentoFields data={data} onChange={onChange} />
            <VeiculoPreservacaoFields data={data} onChange={onChange} />
          </div>
        )}
      </div>
    </fieldset>
  );
};

export default PreservacaoSection;