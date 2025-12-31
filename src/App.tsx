import React from 'react';
import { useForm } from './hooks/useForm';
import InformacoesPreliminaresForm from './components/InformacoesPreliminaresForm';
import ComponentesEquipeForm from './components/ComponentesEquipeForm';
import ClimaForm from './components/ClimaForm';
import PreservacaoLocalForm from './components/PreservacaoLocalForm';
import LocalFatosForm from './components/LocalFatosForm';
import LocalFatosExternosForm from './components/LocalFatosExternosForm';
import LocalImediatoInternoForm from './components/LocalImediatoInternoForm';
import LocalVeiculoForm from './components/LocalVeiculoForm';
import IdentificacaoVitimaForm from './components/IdentificacaoVitimaForm';
import IdentificadoresExternosForm from './components/IdentificadoresExternosForm';
import DetalhesForensesForm from './components/DetalhesForensesForm';
import InformacoesAdicionaisForm from './components/InformacoesAdicionaisForm';
import ConsideracoesFinaisForm from './components/ConsideracoesFinaisForm';
import GeneratePDFButton from './components/GeneratePDFButton';
import ResetButton from './components/ResetButton';

const App: React.FC = () => {
  const { formData, handleChange, resetForm } = useForm();

  return (
    <div className="container">
      <form>
        <InformacoesPreliminaresForm data={formData} onChange={handleChange} />
        <ComponentesEquipeForm data={formData} onChange={handleChange} />
        <ClimaForm data={formData} onChange={handleChange} />
        <PreservacaoLocalForm data={formData} onChange={handleChange} />
        <LocalFatosForm data={formData} onChange={handleChange} />
        <LocalFatosExternosForm data={formData} onChange={handleChange} />
        <LocalImediatoInternoForm data={formData} onChange={handleChange} />
        <LocalVeiculoForm data={formData} onChange={handleChange} />
        <IdentificacaoVitimaForm data={formData} onChange={handleChange} />
        <IdentificadoresExternosForm data={formData} onChange={handleChange} />
        <DetalhesForensesForm data={formData} onChange={handleChange} />
        <InformacoesAdicionaisForm data={formData} onChange={handleChange} />
        <ConsideracoesFinaisForm data={formData} onChange={handleChange} />
        
        <footer className="form-footer">
          <div className="form-actions">
            <GeneratePDFButton data={formData} />
            <ResetButton onReset={resetForm} />
          </div>
        </footer>
      </form>
    </div>
  );
};

export default App;