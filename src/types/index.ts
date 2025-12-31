export interface FormData {
  // Make all fields optional
  naturezaDelito?: string;
  especificacaoNaturezaDelito?: string;
  data?: string;
  hora?: string;
  localFatos?: string;
  pontoReferencia?: string;
  tipoLocal?: string;
  circunscricaoPolicial?: string;
  boDP?: string;
  boDPInfo?: string;
  boDHPP?: string;
  delegado?: string;
  escrivao?: string;
  policiaisCivis?: string;
  perito?: string;
  fotografo?: string;
  papiloscopistas?: string;
  periodo?: string;
  luz?: string;
  clima?: string;
  especificacaoClima?: string;
  visibilidade?: string;
  temperatura?: string;
  sensacaoTermica?: string;
  umidadeAr?: string;
  estadoVitima?: string;
  materialQueCobria?: string;
  preservadoPor?: string;
  especificacaoPreservadoPor?: string;
  responsavel?: string;
  tipoDocumento?: string;
  documentoNumero?: string;
  tentativaResgate?: string;
  area?: string;
  perfilSocial?: string;
  iluminacaoPublica?: string;
  redeEsgoto?: string;
  pavimentacao1?: string;
  trafegoVeiculos?: string;
  escola?: boolean;
  bar?: boolean;
  casaNoturna?: boolean;
  religioso?: boolean;
  outroEstabelecimento?: boolean;
  especificacaoEstabelecimento?: string;
  curiosos?: boolean;
  parentes?: boolean;
  vizinhos?: boolean;
  imprensa?: boolean;
  outrosPresentes?: boolean;
  outrosPresentesEspecificacao?: string;
  cachorro?: boolean;
  gato?: boolean;
  passaro?: boolean;
  peixe?: boolean;
  inseto?: boolean;
  vermes?: boolean;
  necrofagos?: boolean;
  outrosAnimais?: boolean;
  outrosAnimaisNoLocal?: string;
  informacoesPertinentesLocalFatos?: string;
  localEncontroCorpo?: string;
  especificacaoLocalEncontroCorpo?: string;
  pavimentacao?: string;
  especificacaoPavimentacao?: string;
  tipoRelevo?: string;
  especificacaoTipoRelevo?: string;
  rio?: boolean;
  lago?: boolean;
  monte?: boolean;
  represa?: boolean;
  corrego?: boolean;
  outrosAcidentes?: boolean;
  outrosAcidentesEspecificacao?: string;
  corpoMovido?: string;
  detalhesCorpoMovido?: string;
  tipoAmbiente?: string;
  especificacaoTipoAmbiente?: string;
  tipoConstrucao?: string;
  detalheTipoConstrucao?: string;
  caracteristicasMoradia?: string;
  detalhesCaracteristicasMoradia?: string;
  condicaoHigiene?: string;
  especificacaoCondicaoHigiene?: string;
  materialCoberturaImovel?: string;
  especificacaoMaterialCobertura?: string;
  tipoPiso?: string;
  complementoTipoPiso?: string;
  moveisUtensilios?: string;
  infoMoveisUtensilios?: string;
  habitosAlimentares?: string;
  extraInfoHabitosAlimentares?: string;
  comodoCorpo?: string;
  encontroDoCorpo?: string;
  arma?: boolean;
  drogaCena?: boolean;
  ferramenta?: boolean;
  documento?: boolean;
  eletronico?: boolean;
  pertencesDeTerceiros?: boolean;
  pendrive?: boolean;
  outrosObjetosCena?: boolean;
  especificacaoOutrosObjetosCena?: string;
  localDisparo?: string;
  paredes?: boolean;
  teto?: boolean;
  mobilia?: boolean;
  janelas?: boolean;
  portas?: boolean;
  outrosVestigios?: boolean;
  especificacaoVestigios?: string;
  vestigiosSangue?: string;
  quantidadeSangue?: string;
  parede?: boolean;
  chao?: boolean;
  mobilia2?: boolean;
  teto2?: boolean;
  outrosLocaisSangue?: boolean;
  especificacaoVestigiosSangue?: string;
  vestigioBiologico?: string;
  cabelos?: boolean;
  pele?: boolean;
  unhas?: boolean;
  sangueBiologico?: boolean;
  outrosBiologicos?: boolean;
  especificacaoBiologicos?: string;
  medidasContraforenses?: string;
  inutilizacaoCCTV?: boolean;
  usoLuvas?: boolean;
  limpezaCenaCrime?: boolean;
  destruicaoEvidencias?: boolean;
  disfarce?: boolean;
  alteracaoCaracteristicas?: boolean;
  outrosContraforenses?: boolean;
  especificacaoContraforenses?: string;
  armas?: boolean;
  drogas?: boolean;
  manchasSangue?: boolean;
  documentos?: boolean;
  ferramentas?: boolean;
  eletronicos?: boolean;
  pertencesDeTerceiros1?: boolean;
  outrosObjetos?: boolean;
  especificacaoObjetosOutrosComodos?: string;
  livros?: boolean;
  jornais?: boolean;
  revistas?: boolean;
  academicos?: boolean;
  recreativos?: boolean;
  outrosMateriais?: boolean;
  especificacaoMaterialLeitura?: string;
  informacoesPertinentesLocalInterno?: string;
  localCorpo?: string;
  especificacaoLocal?: string;
  tipoVeiculo?: string;
  marcaVeiculo?: string;
  modeloVeiculo?: string;
  placa?: string;
  corVeiculo?: string;
  outraCor?: string;
  proprietario?: string;
  tipoIdentificacao?: string;
  numeroIdentificacao?: string;
  motorLigado?: string;
  danosVeiculo?: string;
  descricaoDanos?: string;
  acaoVitima?: string;
  descricaoAcaoVitimaOutros?: string;
  identificacaoVitima?: string;
  motivo?: string;
  nome?: string;
  nomeSocial?: string;
  vulgo?: string;
  cpf?: string;
  rg?: string;
  estadoCivil?: string;
  vitimaEndereco?: string;
  pai?: string;
  mae?: string;
  dataNascimento?: string;
  idade?: number;
  naturalidadeEstado?: string;
  naturalidadeCidade?: string;
  profissao?: string;
  sexo?: string;
  identificacaoGenero?: string;
  etnia?: string;
  especificarEtnia?: string;
  compleicaoFisica?: string;
  especificarCompleicaoFisica?: string;
  altura?: number;
  tipoCabelo?: string;
  especificarTipoCabelo?: string;
  comprimentoCabelo?: string;
  especificarComprimentoCabelo?: string;
  corCabelo?: string;
  especificarCorCabelo?: string;
  corOlhos?: string;
  especificarCorOlhos?: string;
  caracteristicasVisiveis?: string;
  desviosConduta?: string[];
  descricaoOutrosDesvios?: string;
  informacoesPertinentesDesvios?: string;
  relacionamentoFamilia?: string;
  descricaoOutrosRelacionamento?: string;
  residenciaVitima?: string;
  descricaoResidenciaVitimaOutros?: string;
  tatuagensDeformidades?: Array<{
    local?: string;
    descricao?: string;
  }>;
  vestimentas?: Array<{
    tipo?: string;
    descricao?: string;
  }>;
  aderecos?: Array<{
    tipo?: string;
    descricao?: string;
  }>;
  rigidez?: string;
  hipotermia?: string;
  tempoMorte?: string;
  posicaoCorpo?: string;
  posicaoCorpo1?: string;
  explicacaoPosicao?: string;
  estadoCorpo?: string[];
  descricaoOutrosEstadoCorpo?: string;
  acoesIdentificacao?: string[];
  descricaoOutrosAcaoIdentificacao?: string;
  sinaisViolencia?: string[];
  descricaoOutrosSinaisViolencia?: string;
  condicoesRestricao?: string[];
  especificarOutrosRestVit?: string;
  instrumentosRestricao?: string[];
  especificarOutrosIu?: string;
  materialPericia?: string[];
  descricaoOutrosMaterial?: string;
  lesoes?: Array<{
    local?: string;
    descricao?: string;
  }>;
  apreensoes?: Array<{
    descricao?: string;
  }>;
  arrecadacoes?: Array<{
    descricao?: string;
  }>;
  testemunhas?: Array<{
    nome?: string;
    contato?: string;
    observacoes?: string;
  }>;
  investigacoesPreliminares?: string;
  consideracoesFinais?: string;
  
  // New fields for textarea versions
  descricaoMaterialPericia?: string;
  descricaoEstadoCorpo?: string;
  descricaoAcoesIdentificacao?: string;
  descricaoSinaisViolencia?: string;
  descricaoCondicoesRestricao?: string;
  descricaoInstrumentosRestricao?: string;

  // Communication and events fields
  comunicacaoDP?: string;
  comunicacaoDPTime?: string;
  comunicacaoDHPP?: string;
  comunicacaoDHPPTime?: string;
  chegadaPM?: string;
  chegadaPMTime?: string;
  deslocamentoEquipe?: string;
  deslocamentoEquipeTime?: string;
  chegadaEquipe?: string;
  chegadaEquipeTime?: string;
  liberacaoLocal?: string;
  liberacaoLocalTime?: string;
  terminoTrabalho?: string;
  terminoTrabalhoTime?: string;

  // Address and location fields
  logradouro?: string;
  numero?: string;
  bairro?: string;
  cidade?: string;

  // Additional description fields
  descricaoDesviosConduta?: string;
  descricaoAcidentesGeograficos?: string;
  descricaoAnimaisLocal?: string;
  descricaoEstabelecimentos?: string;
  descricaoMaterialLeitura?: string;
  descricaoObjetosCena?: string;
  descricaoObjetosOutrosComodos?: string;
  descricaoPessoasPresentes?: string;
  descricaoVestigiosBiologicos?: string;
  descricaoVestigiosDisparo?: string;
  descricaoVestigiosSangue?: string;

  // Illumination and infrastructure fields
  tipoIluminacao?: string;
  fonteIluminacao?: string;
  viasAcessoPavimentada?: boolean;
  viasAcessoNaoPavimentada?: boolean;
  observacoesViasAcesso?: string;

  // Additional specification fields
  especificacaoTipoLocal?: string;
  especificacaoTipoDocumento?: string;
  especificacaoTipoDocumentoResgate?: string;
  especificacaoTipoResgate?: string;
  especificacaoTipoVeiculo?: string;

  // Rescue and response fields
  tipoResgate?: string;
  tipoDocumentoResgate?: string;
  numeroDocumentoResgate?: string;
  tipoVtrResgate?: string;
  vtrNumeroResgate?: string;
  vtrNumero?: string;
  tipoVtrNumero?: string;
  encarregado?: string;

  // Vehicle additional fields
  placaVeiculo?: string;
  veiculoTrancado?: boolean;
  veiculoDanificado?: boolean;

  // Additional specification fields
  especificarOutraPosicao?: string;
}

// Type-safe form value type
export type FormValue =
  | string
  | number
  | boolean
  | string[]
  | Array<{ local?: string; descricao?: string }>
  | Array<{ tipo?: string; descricao?: string }>
  | Array<{ descricao?: string }>
  | Array<{ nome?: string; contato?: string; observacoes?: string }>
  | undefined;

export interface FormSectionProps {
  data: Partial<FormData>;
  onChange: (field: keyof FormData, value: FormValue) => void;
}

// Re-export all types from other type files
export * from './internalLocationTypes';
export * from './vehicleTypes';
export * from './victimTypes';