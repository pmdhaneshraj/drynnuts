export const getCurrencyFormat = (value) => {
  return Intl.NumberFormat({}, { style: 'currency', currency: 'INR' }).format(value)
}

export const scrollToTop = () => {
  return document.getElementById('scroll').scrollIntoView({ behavior: 'smooth' })
}