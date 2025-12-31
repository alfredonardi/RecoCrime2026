// Date and time formatters
export const formatDate = (date: string): string => {
  if (!date) return '';
  try {
    const [year, month, day] = date.split('-');
    return `${day}/${month}/${year}`;
  } catch {
    return date;
  }
};

export const formatDateTime = (date?: string, time?: string): string => {
  if (!date && !time) return '';
  const formattedDate = date ? formatDate(date) : '';
  return `${formattedDate}${time ? ' ' + time : ''}`.trim();
};

// Document number formatters
export const formatCPF = (value: string): string => {
  const numbers = value.replace(/\D/g, '');
  return numbers.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, '$1.$2.$3-$4');
};

export const formatCNPJ = (value: string): string => {
  const numbers = value.replace(/\D/g, '');
  return numbers.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/g, '$1.$2.$3/$4-$5');
};

export const formatPlaca = (value: string): string => {
  let formatted = value.toUpperCase().replace(/[^A-Z0-9]/g, '');
  if (formatted.length >= 4) {
    formatted = `${formatted.substring(0, 3)}-${formatted.substring(3)}`;
  }
  return formatted.substring(0, 8);
};

export const formatBONumber = (value: string): string => {
  let formatted = value.replace(/[^A-Za-z0-9]/g, '');
  formatted = formatted.toUpperCase();
  const letters = formatted.replace(/[^A-Z]/g, '').slice(0, 2);
  const numbers = formatted.replace(/[^0-9]/g, '');
  const firstNumbers = numbers.slice(0, 4);
  const lastNumbers = numbers.slice(4, 6);
  
  if (letters) {
    formatted = letters;
    if (firstNumbers) {
      formatted += firstNumbers;
      if (lastNumbers) {
        formatted = `${letters}${firstNumbers}/${lastNumbers}`;
      }
    }
  }
  
  return formatted;
};