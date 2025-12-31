import React from 'react';
import { FormSectionProps } from '../../../types';
import CheckboxWithSpecification from '../../shared/CheckboxWithSpecification';

const CondicoesRestricaoSection: React.FC<FormSectionProps> = ({ data, onChange }) => {
  const handleCheckboxChange = (field: string, category: 'condicoes' | 'instrumentos') => (checked: boolean) => {
    const items = new Set(data[category === 'condicoes' ? 'condicoesRestricao' : 'instrumentosRestricao'] || []);
    if (checked) {
      items.add(field);
    } else {
      items.delete(field);
    }
    onChange(category === 'condicoes' ? 'condicoesRestricao' : 'instrumentosRestricao', Array.from(items));
  };

  return (
    <fieldset className="form-group">
      <div className="section">
        <label><strong>Condições de Restrição da Vítima:</strong></label>
        <div>
          {[
            'Imobilizada', 'Amordacada', 'OlhosVendados', 'Manietada', 'PésAmarrados',
            'Embrulhada', 'Encapuzada', 'Amarrada à Mobília', 'Garganta Pressionada',
            'Corpo Posicionado', 'Mãos Amarradas Atrás', 'Pés e Mãos Amarrados'
          ].map(condicao => (
            <CheckboxWithSpecification
              key={condicao}
              id={`condicao-${condicao}`}
              label={condicao}
              checked={(data.condicoesRestricao || []).includes(condicao)}
              onChange={handleCheckboxChange(condicao, 'condicoes')}
            />
          ))}
          <CheckboxWithSpecification
            id="outrosCondicoesRestricao"
            label="Outro(s)"
            checked={(data.condicoesRestricao || []).includes('outros')}
            onChange={handleCheckboxChange('outros', 'condicoes')}
            specification={data.especificarOutrosRestVit}
            onSpecificationChange={(value) => onChange('especificarOutrosRestVit', value)}
            showSpecification={(data.condicoesRestricao || []).includes('outros')}
          />
        </div>
      </div>

      <div className="section">
        <label className="normal-input"><strong>Instrumento utilizado:</strong></label>
        <div>
          {[
            'Corda', 'FitaAdesiva', 'Algemas', 'Correntes', 'Tiras de pano',
            'Varal', 'Cintas', 'Grilhões', 'Cadeados', 'Esparadrapo',
            'Luvas de contenção', 'Colares cervicais'
          ].map(instrumento => (
            <CheckboxWithSpecification
              key={instrumento}
              id={`instrumento-${instrumento}`}
              label={instrumento}
              checked={(data.instrumentosRestricao || []).includes(instrumento)}
              onChange={handleCheckboxChange(instrumento, 'instrumentos')}
            />
          ))}
          <CheckboxWithSpecification
            id="outrosInstrumentos"
            label="Outros"
            checked={(data.instrumentosRestricao || []).includes('outros')}
            onChange={handleCheckboxChange('outros', 'instrumentos')}
            specification={data.especificarOutrosIu}
            onSpecificationChange={(value) => onChange('especificarOutrosIu', value)}
            showSpecification={(data.instrumentosRestricao || []).includes('outros')}
          />
        </div>
      </div>
    </fieldset>
  );
};

export default CondicoesRestricaoSection;