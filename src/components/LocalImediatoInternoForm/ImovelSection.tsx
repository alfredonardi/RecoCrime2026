import React from 'react';
import { FormSectionProps } from '../../types';
import SelectWithSpecification from '../shared/SelectWithSpecification';

const ImovelSection: React.FC<FormSectionProps> = ({ data, onChange }) => {
  return (
    <fieldset className="form-group">
      <legend className="mb-4"><strong>Sobre o imóvel</strong></legend>
      <div className="space-y-4">
        <SelectWithSpecification
          label="Ambiente:"
          id="tipoAmbiente"
          value={data.tipoAmbiente || ''}
          specificationValue={data.especificacaoTipoAmbiente || ''}
          onChange={(value) => onChange('tipoAmbiente', value)}
          onSpecificationChange={(value) => onChange('especificacaoTipoAmbiente', value)}
          options={[
            { value: 'Residencial', label: 'Residencial' },
            { value: 'Comercial', label: 'Comercial' },
            { value: 'Industrial', label: 'Industrial' },
            { value: 'Público', label: 'Público' },
            { value: 'Rural', label: 'Rural' },
            { value: 'outros', label: 'Outro' }
          ]}
        />

        <SelectWithSpecification
          label="Construção:"
          id="tipoConstrucao"
          value={data.tipoConstrucao || ''}
          specificationValue={data.detalheTipoConstrucao || ''}
          onChange={(value) => onChange('tipoConstrucao', value)}
          onSpecificationChange={(value) => onChange('detalheTipoConstrucao', value)}
          options={[
            { value: 'Alvenaria', label: 'Alvenaria' },
            { value: 'Madeira', label: 'Madeira' },
            { value: 'Mista', label: 'Mista (Alvenaria e Madeira)' },
            { value: 'Concreto', label: 'Concreto' },
            { value: 'Metal', label: 'Metal' },
            { value: 'Papelão', label: 'Papelão' },
            { value: 'outros', label: 'Outro' }
          ]}
        />

        <SelectWithSpecification
          label="Categoria de moradia:"
          id="caracteristicasMoradia"
          value={data.caracteristicasMoradia || ''}
          specificationValue={data.detalhesCaracteristicasMoradia || ''}
          onChange={(value) => onChange('caracteristicasMoradia', value)}
          onSpecificationChange={(value) => onChange('detalhesCaracteristicasMoradia', value)}
          options={[
            { value: 'Baixa Renda', label: 'Baixa Renda' },
            { value: 'Média Renda', label: 'Média Renda' },
            { value: 'Alta Renda', label: 'Alta Renda' },
            { value: 'Subsidiada', label: 'Subsidiada (Governo)' },
            { value: 'outros', label: 'Outra' }
          ]}
        />

        <SelectWithSpecification
          label="Condição de higiene:"
          id="condicaoHigiene"
          value={data.condicaoHigiene || ''}
          specificationValue={data.especificacaoCondicaoHigiene || ''}
          onChange={(value) => onChange('condicaoHigiene', value)}
          onSpecificationChange={(value) => onChange('especificacaoCondicaoHigiene', value)}
          options={[
            { value: 'Excelente', label: 'Excelente' },
            { value: 'Boa', label: 'Boa' },
            { value: 'Regular', label: 'Regular' },
            { value: 'Ruim', label: 'Ruim' },
            { value: 'Péssima', label: 'Péssima' },
            { value: 'outros', label: 'Outro' }
          ]}
        />

        <SelectWithSpecification
          label="Material de cobertura:"
          id="materialCoberturaImovel"
          value={data.materialCoberturaImovel || ''}
          specificationValue={data.especificacaoMaterialCobertura || ''}
          onChange={(value) => onChange('materialCoberturaImovel', value)}
          onSpecificationChange={(value) => onChange('especificacaoMaterialCobertura', value)}
          options={[
            { value: 'Telha de Barro', label: 'Telha de barro' },
            { value: 'Telha de Concreto', label: 'Telha de concreto' },
            { value: 'Telha Metálica', label: 'Telha metálica' },
            { value: 'Laje de Concreto', label: 'Laje de concreto' },
            { value: 'Fibrocimento', label: 'Fibrocimento' },
            { value: 'Madeira', label: 'Madeira' },
            { value: 'Palha', label: 'Palha' },
            { value: 'outros', label: 'Outro' }
          ]}
        />

        <SelectWithSpecification
          label="Tipo de piso:"
          id="tipoPiso"
          value={data.tipoPiso || ''}
          specificationValue={data.complementoTipoPiso || ''}
          onChange={(value) => onChange('tipoPiso', value)}
          onSpecificationChange={(value) => onChange('complementoTipoPiso', value)}
          options={[
            { value: 'Cerâmica', label: 'Cerâmica' },
            { value: 'Porcelanato', label: 'Porcelanato' },
            { value: 'Madeira', label: 'Madeira' },
            { value: 'Vinílico', label: 'Vinílico' },
            { value: 'Laminado', label: 'Laminado' },
            { value: 'Mármore', label: 'Mármore' },
            { value: 'Granito', label: 'Granito' },
            { value: 'Cimento Queimado', label: 'Cimento queimado' },
            { value: 'outros', label: 'Outro' }
          ]}
        />

        <SelectWithSpecification
          label="Móveis e utensílios:"
          id="moveisUtensilios"
          value={data.moveisUtensilios || ''}
          specificationValue={data.infoMoveisUtensilios || ''}
          onChange={(value) => onChange('moveisUtensilios', value)}
          onSpecificationChange={(value) => onChange('infoMoveisUtensilios', value)}
          options={[
            { value: 'Nenhum', label: 'Nenhum' },
            { value: 'Improvisados', label: 'Improvisados' },
            { value: 'Modestos', label: 'Modestos' },
            { value: 'Regulares', label: 'Regulares' },
            { value: 'Sofisticados', label: 'Sofisticados' },
            { value: 'outros', label: 'Outro' }
          ]}
        />

        <SelectWithSpecification
          label="Hábitos alimentares (Geladeira e Despensa):"
          id="habitosAlimentares"
          value={data.habitosAlimentares || ''}
          specificationValue={data.extraInfoHabitosAlimentares || ''}
          onChange={(value) => onChange('habitosAlimentares', value)}
          onSpecificationChange={(value) => onChange('extraInfoHabitosAlimentares', value)}
          options={[
            { value: 'Bem Abastecido', label: 'Bem abastecido' },
            { value: 'Regularmente Abastecido', label: 'Regularmente abastecido' },
            { value: 'Pouco Abastecido', label: 'Pouco abastecido' },
            { value: 'Esporadicamente Abastecido', label: 'Esporadicamente abastecido' },
            { value: 'Desabastecido', label: 'Desabastecido' },
            { value: 'outros', label: 'Outro' }
          ]}
        />
      </div>
    </fieldset>
  );
};

export default ImovelSection;