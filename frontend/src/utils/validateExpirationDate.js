export const validateExpirationDate = (_, formattedValue) => {
  if (formattedValue.length && formattedValue.trim().length === 7) {
    const dateArray = formattedValue.split('/')
    const date = new Date(dateArray[1], dateArray[0] - 1)
    const month = date.getMonth()
    const year = date.getFullYear()
    return date
  }
  if (formattedValue.length && formattedValue.trim().length < 7) {
    const dateArray = formattedValue.split('/')
    const year = dateArray[1].replaceAll(' ', '0')
    const month = dateArray[0].replaceAll(' ', '0')
    const date = new Date(year, month)
    return date
  }
  return formattedValue
}
