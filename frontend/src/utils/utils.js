export const getCurrencyFormat = (value) => {
  return Intl.NumberFormat({}, { style: 'currency', currency: 'INR', minimumFractionDigits: 0 }).format(value)
}

export const scrollToTop = () => {
  return document.getElementById('scroll').scrollIntoView({ behavior: 'smooth' })
}