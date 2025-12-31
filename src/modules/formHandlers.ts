export class FormHandlers {
  constructor() {
    this.initializeEventListeners();
  }

  private initializeEventListeners(): void {
    this.handleNaturezaDelito();
    this.handleEstadoVitima();
    this.handlePreservacao();
    this.handleResgate();
  }

  private handleNaturezaDelito(): void {
    const select = document.getElementById('naturezaDelitoSelect') as HTMLSelectElement | null;
    const input = document.getElementById('especificacao-naturezaDelito') as HTMLInputElement | null;

    select?.addEventListener('change', () => {
      if (!input) return;
      
      if (select.value === 'outros') {
        input.classList.remove('hidden');
      } else {
        input.classList.add('hidden');
        input.value = '';
      }
    });
  }

  private handleEstadoVitima(): void {
    const selectEstado = document.getElementById('estadoVitima') as HTMLSelectElement | null;
    const divMaterialCobertura = document.getElementById('materialCobertura');
    const materialInput = document.getElementById('materialQueCobria') as HTMLInputElement | null;

    selectEstado?.addEventListener('change', () => {
      if (!divMaterialCobertura || !materialInput) return;
      
      if (selectEstado.value === 'Coberta') {
        divMaterialCobertura.classList.remove('hidden');
      } else {
        divMaterialCobertura.classList.add('hidden');
        materialInput.value = '';
      }
    });
  }

  private handlePreservacao(): void {
    // Implement if needed
  }

  private handleResgate(): void {
    // Implement if needed
  }
}