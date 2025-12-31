import React from 'react';
import { FormSectionProps } from '../../types';

const EnderecoSection: React.FC<FormSectionProps> = ({ data, onChange }) => {
  return (
    <fieldset className="form-group">
      <legend><strong>Endereço</strong></legend>
      
      <label htmlFor="logradouro"><strong>Logradouro:</strong></label>
      <input
        type="text"
        id="logradouro"
        className="large-input"
        value={data.logradouro || ''}
        onChange={(e) => onChange('logradouro', e.target.value)}
      />

      <label htmlFor="numero"><strong>Número:</strong></label>
      <input
        type="text"
        id="numero"
        className="small-input"
        value={data.numero || ''}
        onChange={(e) => onChange('numero', e.target.value)}
      />

      <label htmlFor="bairro"><strong>Bairro:</strong></label>
      <input
        type="text"
        id="bairro"
        className="medium-input"
        value={data.bairro || ''}
        onChange={(e) => onChange('bairro', e.target.value)}
      />

      <label htmlFor="cidade"><strong>Cidade:</strong></label>
      <input
        type="text"
        id="cidade"
        className="medium-input"
        value={data.cidade || ''}
        onChange={(e) => onChange('cidade', e.target.value)}
      />
    </fieldset>
  );
};

export default EnderecoSection;