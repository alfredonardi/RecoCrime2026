export class FormValidators {
  static validateRequired(value: string): boolean {
    return value.trim() !== '';
  }

  static validateDate(date: string): boolean {
    return !isNaN(Date.parse(date));
  }

  static validateTime(time: string): boolean {
    const timeRegex = /^([01]?[0-9]|2[0-3]):[0-5][0-9]$/;
    return timeRegex.test(time);
  }

  static validatePlaca(placa: string): boolean {
    const placaRegex = /^[A-Z]{3}-\d{4}$/;
    return placaRegex.test(placa);
  }
}