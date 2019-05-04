export const urlNormalizer = (str) => {
  return str
    .replace(/ /g, '-')
    .replace(/[^-\w\s]/gi, '')
    .toLowerCase()
}
