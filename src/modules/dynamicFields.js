// Dynamic Fields Module
export class DynamicFields {
  constructor() {
    this.initializeButtons();
  }

  initializeButtons() {
    this.setupAddButton('addTatuagens', 'tatuagensDeformidadesContainer', this.getTatuagensHTML);
    this.setupAddButton('addVestimentas', 'vestimentasContainer', this.getVestimentasHTML);
    this.setupAddButton('addAderecos', 'aderecosContainer', this.getAderecosHTML);
  }

  setupAddButton(buttonId, containerId, templateFunction) {
    const button = document.getElementById(buttonId);
    const container = document.getElementById(containerId);

    button?.addEventListener('click', () => {
      const newLine = this.createLine(templateFunction());
      container.appendChild(newLine);
    });
  }

  createLine(html) {
    const line = document.createElement('div');
    line.className = 'linha';
    line.innerHTML = html;
    
    const removeButton = line.querySelector('.remover-btn');
    removeButton?.addEventListener('click', () => line.remove());
    
    return line;
  }

  // Template methods
  getTatuagensHTML() {
    return `
      <select name="parteDoCorpo" class="normal-input">
        <option value="">Selecione...</option>
        <option value="Cabeça">Cabeça</option>
        <!-- ... outras opções ... -->
      </select>
      <input type="text" name="descricaoTatuagemDeformidade" class="medium-input" placeholder="Descrição">
      <button type="button" class="remover-btn">Remover</button>
    `;
  }

  // ... outros métodos de template
}