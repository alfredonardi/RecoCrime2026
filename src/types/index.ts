// =============================================================================
// PRELIMINARY INFORMATION
// =============================================================================

export interface PreliminaryInfo {
  naturezaDelito?: string;
  especificacaoNaturezaDelito?: string;
  data?: string;
  hora?: string;
  localFatos?: string;
  pontoReferencia?: string;
  tipoLocal?: string;
  especificacaoTipoLocal?: string;
  circunscricaoPolicial?: string;
  boDP?: string;
  boDPInfo?: string;
  boDHPP?: string;
  logradouro?: string;
  numero?: string;
  bairro?: string;
  cidade?: string;
}

// =============================================================================
// TEAM INFORMATION
// =============================================================================

export interface TeamInfo {
  delegado?: string;
  escrivao?: string;
  policiaisCivis?: string;
  perito?: string;
  fotografo?: string;
  papiloscopistas?: string;
  encarregado?: string;
}

// =============================================================================
// WEATHER AND ENVIRONMENT CONDITIONS
// =============================================================================

export interface WeatherConditions {
  periodo?: string;
  luz?: string;
  clima?: string;
  especificacaoClima?: string;
  visibilidade?: string;
  temperatura?: string;
  sensacaoTermica?: string;
  umidadeAr?: string;
  tipoIluminacao?: string;
  fonteIluminacao?: string;
}

// =============================================================================
// SCENE PRESERVATION
// =============================================================================

export interface ScenePreservation {
  estadoVitima?: string;
  materialQueCobria?: string;
  preservadoPor?: string;
  especificacaoPreservadoPor?: string;
  responsavel?: string;
  tipoDocumento?: string;
  especificacaoTipoDocumento?: string;
  documentoNumero?: string;
  tentativaResgate?: string;
  tipoResgate?: string;
  especificacaoTipoResgate?: string;
  tipoDocumentoResgate?: string;
  especificacaoTipoDocumentoResgate?: string;
  numeroDocumentoResgate?: string;
  tipoVtrResgate?: string;
  vtrNumeroResgate?: string;
  vtrNumero?: string;
  tipoVtrNumero?: string;
}

// =============================================================================
// EXTERNAL LOCATION DETAILS
// =============================================================================

export interface ExternalLocation {
  area?: string;
  perfilSocial?: string;
  iluminacaoPublica?: string;
  redeEsgoto?: string;
  pavimentacao1?: string;
  trafegoVeiculos?: string;
  viasAcessoPavimentada?: boolean;
  viasAcessoNaoPavimentada?: boolean;
  observacoesViasAcesso?: string;

  // Establishments
  escola?: boolean;
  bar?: boolean;
  casaNoturna?: boolean;
  religioso?: boolean;
  outroEstabelecimento?: boolean;
  especificacaoEstabelecimento?: string;
  descricaoEstabelecimentos?: string;

  // People present
  curiosos?: boolean;
  parentes?: boolean;
  vizinhos?: boolean;
  imprensa?: boolean;
  outrosPresentes?: boolean;
  outrosPresentesEspecificacao?: string;
  descricaoPessoasPresentes?: string;

  // Animals
  cachorro?: boolean;
  gato?: boolean;
  passaro?: boolean;
  peixe?: boolean;
  inseto?: boolean;
  vermes?: boolean;
  necrofagos?: boolean;
  outrosAnimais?: boolean;
  outrosAnimaisNoLocal?: string;
  descricaoAnimaisLocal?: string;

  // Location specifics
  informacoesPertinentesLocalFatos?: string;
  localEncontroCorpo?: string;
  especificacaoLocalEncontroCorpo?: string;
  pavimentacao?: string;
  especificacaoPavimentacao?: string;
  tipoRelevo?: string;
  especificacaoTipoRelevo?: string;

  // Geographic features
  rio?: boolean;
  lago?: boolean;
  monte?: boolean;
  represa?: boolean;
  corrego?: boolean;
  outrosAcidentes?: boolean;
  outrosAcidentesEspecificacao?: string;
  descricaoAcidentesGeograficos?: string;

  corpoMovido?: string;
  detalhesCorpoMovido?: string;
}

// =============================================================================
// INTERNAL LOCATION DETAILS
// =============================================================================

export interface InternalLocation {
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

  // Objects in scene
  arma?: boolean;
  drogaCena?: boolean;
  ferramenta?: boolean;
  documento?: boolean;
  eletronico?: boolean;
  pertencesDeTerceiros?: boolean;
  pendrive?: boolean;
  outrosObjetosCena?: boolean;
  especificacaoOutrosObjetosCena?: string;
  descricaoObjetosCena?: string;

  // Shooting evidence
  localDisparo?: string;
  paredes?: boolean;
  teto?: boolean;
  mobilia?: boolean;
  janelas?: boolean;
  portas?: boolean;
  outrosVestigios?: boolean;
  especificacaoVestigios?: string;
  vestigiosSangue?: string;
  descricaoVestigiosDisparo?: string;

  // Blood traces
  quantidadeSangue?: string;
  parede?: boolean;
  chao?: boolean;
  mobilia2?: boolean;
  teto2?: boolean;
  outrosLocaisSangue?: boolean;
  especificacaoVestigiosSangue?: string;
  descricaoVestigiosSangue?: string;

  // Biological evidence
  vestigioBiologico?: string;
  cabelos?: boolean;
  pele?: boolean;
  unhas?: boolean;
  sangueBiologico?: boolean;
  outrosBiologicos?: boolean;
  especificacaoBiologicos?: string;
  descricaoVestigiosBiologicos?: string;

  // Counter-forensic measures
  medidasContraforenses?: string;
  inutilizacaoCCTV?: boolean;
  usoLuvas?: boolean;
  limpezaCenaCrime?: boolean;
  destruicaoEvidencias?: boolean;
  disfarce?: boolean;
  alteracaoCaracteristicas?: boolean;
  outrosContraforenses?: boolean;
  especificacaoContraforenses?: string;

  // Objects in other rooms
  armas?: boolean;
  drogas?: boolean;
  manchasSangue?: boolean;
  documentos?: boolean;
  ferramentas?: boolean;
  eletronicos?: boolean;
  pertencesDeTerceiros1?: boolean;
  outrosObjetos?: boolean;
  especificacaoObjetosOutrosComodos?: string;
  descricaoObjetosOutrosComodos?: string;

  // Reading materials
  livros?: boolean;
  jornais?: boolean;
  revistas?: boolean;
  academicos?: boolean;
  recreativos?: boolean;
  outrosMateriais?: boolean;
  especificacaoMaterialLeitura?: string;
  descricaoMaterialLeitura?: string;

  informacoesPertinentesLocalInterno?: string;
}

// =============================================================================
// VEHICLE INFORMATION
// =============================================================================

export interface VehicleInfo {
  localCorpo?: string;
  especificacaoLocal?: string;
  tipoVeiculo?: string;
  especificacaoTipoVeiculo?: string;
  marcaVeiculo?: string;
  modeloVeiculo?: string;
  placa?: string;
  placaVeiculo?: string;
  corVeiculo?: string;
  outraCor?: string;
  proprietario?: string;
  tipoIdentificacao?: string;
  numeroIdentificacao?: string;
  motorLigado?: string;
  danosVeiculo?: string;
  descricaoDanos?: string;
  veiculoTrancado?: boolean;
  veiculoDanificado?: boolean;
  acaoVitima?: string;
  descricaoAcaoVitimaOutros?: string;
  identificacaoVitima?: string;
  motivo?: string;
}

// =============================================================================
// VICTIM IDENTIFICATION
// =============================================================================

export interface VictimIdentification {
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

  // Physical characteristics
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

  // External identifiers
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

  // Behavior and background
  desviosConduta?: string[];
  descricaoOutrosDesvios?: string;
  descricaoDesviosConduta?: string;
  informacoesPertinentesDesvios?: string;
  relacionamentoFamilia?: string;
  descricaoOutrosRelacionamento?: string;
  residenciaVitima?: string;
  descricaoResidenciaVitimaOutros?: string;
}

// =============================================================================
// FORENSIC DETAILS
// =============================================================================

export interface ForensicDetails {
  rigidez?: string;
  hipotermia?: string;
  tempoMorte?: string;
  posicaoCorpo?: string;
  posicaoCorpo1?: string;
  explicacaoPosicao?: string;
  especificarOutraPosicao?: string;

  // Body condition
  estadoCorpo?: string[];
  descricaoOutrosEstadoCorpo?: string;
  descricaoEstadoCorpo?: string;

  // Identification difficulty
  acoesIdentificacao?: string[];
  descricaoOutrosAcaoIdentificacao?: string;
  descricaoAcoesIdentificacao?: string;

  // Violence signs
  sinaisViolencia?: string[];
  descricaoOutrosSinaisViolencia?: string;
  descricaoSinaisViolencia?: string;

  // Restraint conditions
  condicoesRestricao?: string[];
  especificarOutrosRestVit?: string;
  descricaoCondicoesRestricao?: string;
  instrumentosRestricao?: string[];
  especificarOutrosIu?: string;
  descricaoInstrumentosRestricao?: string;

  // Injuries
  lesoes?: Array<{
    local?: string;
    descricao?: string;
  }>;
}

// =============================================================================
// EVIDENCE COLLECTION
// =============================================================================

export interface EvidenceCollection {
  materialPericia?: string[];
  descricaoOutrosMaterial?: string;
  descricaoMaterialPericia?: string;
  apreensoes?: Array<{
    descricao?: string;
  }>;
  arrecadacoes?: Array<{
    descricao?: string;
  }>;
}

// =============================================================================
// ADDITIONAL INFORMATION
// =============================================================================

export interface AdditionalInfo {
  testemunhas?: Array<{
    nome?: string;
    contato?: string;
    observacoes?: string;
  }>;
  investigacoesPreliminares?: string;
  consideracoesFinais?: string;
}

// =============================================================================
// COMMUNICATION AND EVENTS TIMELINE
// =============================================================================

export interface CommunicationEvents {
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
}

// =============================================================================
// MAIN FORM DATA INTERFACE (Composition of all sections)
// =============================================================================

export interface FormData
  extends PreliminaryInfo,
          TeamInfo,
          WeatherConditions,
          ScenePreservation,
          ExternalLocation,
          InternalLocation,
          VehicleInfo,
          VictimIdentification,
          ForensicDetails,
          EvidenceCollection,
          AdditionalInfo,
          CommunicationEvents {}

// =============================================================================
// TYPE-SAFE FORM VALUE TYPE
// =============================================================================

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

// =============================================================================
// FORM SECTION PROPS
// =============================================================================

export interface FormSectionProps {
  data: Partial<FormData>;
  onChange: (field: keyof FormData, value: FormValue) => void;
}

// =============================================================================
// RE-EXPORTS FROM OTHER TYPE FILES
// =============================================================================

export * from './internalLocationTypes';
export * from './vehicleTypes';
export * from './victimTypes';
