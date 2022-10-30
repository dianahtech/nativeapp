export function getValueInCurrency(value: number): string {
  const formattedValue = value.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    maximumFractionDigits: 2,
  });

  return `${formattedValue.charAt(0)}${formattedValue.charAt(
    1,
  )} ${formattedValue.substring(2)}`;
}
