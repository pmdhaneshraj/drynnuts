export const getCurrencyFormat = (value) => {
  return Intl.NumberFormat({}, { style: 'currency', currency: 'INR' }).format(value)
}