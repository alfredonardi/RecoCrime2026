import { useEffect } from 'react';

export const useFormHandlers = () => {
  useEffect(() => {
    const handleEstadoVitima = () => {
      const selectEstado = document.getElementById('estadoVitima') as HTMLSelectElement;
      const divMaterialCobertura = document.getElementById('materialCobertura');

      selectEstado?.addEventListener('change', () => {
        if (selectEstado.value === 'Coberta') {
          divMaterialCobertura?.classList.remove('hidden');
        } else {
          divMaterialCobertura?.classList.add('hidden');
          (document.getElementById('materialQueCobria') as HTMLInputElement).value = '';
        }
      });
    };

    // Initialize all event listeners
    handleEstadoVitima();
    // Add other handlers...

    // Cleanup function
    return () => {
      // Remove event listeners if needed
    };
  }, []);
};