export interface InternalLocationData {
  // Sobre o imóvel
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

  // Cômodo do corpo
  comodoCorpo?: string;
  encontroDoCorpo?: string;

  // Objetos na cena
  arma?: boolean;
  drogaCena?: boolean;
  ferramenta?: boolean;
  documento?: boolean;
  eletronico?: boolean;
  pertencesDeTerceiros?: boolean;
  outrosObjetosCena?: boolean;
  especificacaoObjetosCena?: string;

  // Vestígios
  localDisparo?: string;
  paredes?: boolean;
  teto?: boolean;
  mobilia?: boolean;
  janelas?: boolean;
  portas?: boolean;
  outrosVestigios?: boolean;
  especificacaoVestigios?: string;

  // Vestígios de sangue
  vestigiosSangue?: string;
  quantidadeSangue?: string;
  parede?: boolean;
  chao?: boolean;
  mobilia2?: boolean;
  teto2?: boolean;
  outrosLocaisSangue?: boolean;
  especificacaoVestigiosSangue?: string;

  // Vestígios biológicos
  vestigioBiologico?: string;
  cabelos?: boolean;
  pele?: boolean;
  unhas?: boolean;
  sangueBiologico?: boolean;
  outrosBiologicos?: boolean;
  especificacaoBiologicos?: string;

  // Medidas contraforenses
  medidasContraforenses?: string;
  inutilizacaoCCTV?: boolean;
  usoLuvas?: boolean;
  limpezaCenaCrime?: boolean;
  destruicaoEvidencias?: boolean;
  disfarceCaracteristicas?: boolean;
  outrosContraforenses?: boolean;
  especificacaoContraforenses?: string;

  // Objetos em outros cômodos
  armas?: boolean;
  drogas?: boolean;
  manchasSangue?: boolean;
  documentos?: boolean;
  ferramentas?: boolean;
  eletronicos?: boolean;
  pertencesDeTerceiros1?: boolean;
  outrosObjetos?: boolean;
  especificacaoObjetosOutrosComodos?: string;

  // Animais
  cachorro?: boolean;
  gato?: boolean;
  passaro?: boolean;
  peixe?: boolean;
  inseto?: boolean;
  vermes?: boolean;
  necrofagos?: boolean;
  outrosAnimais?: boolean;
  outrosAnimaisNoLocal?: string;

  // Material de leitura
  livros?: boolean;
  jornais?: boolean;
  revistas?: boolean;
  academicos?: boolean;
  recreativos?: boolean;
  outrosMateriais?: boolean;
  especificacaoMaterialLeitura?: string;

  // Informações pertinentes
  informacoesPertinentes?: string;
}