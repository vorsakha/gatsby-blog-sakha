const handleHexToRgba = (hex: string, opacity: number) => {
  let result = hex
    .replace(
      /^#?([a-f\d])([a-f\d])([a-f\d])$/i,
      (m, r, g, b) => "#" + r + r + g + g + b + b
    )
    .substring(1)
    .match(/.{2}/g)
    .map(x => parseInt(x, 16))

  return `rgba(${result[0]},${result[1]},${result[2]}, ${opacity} )`
}

export default handleHexToRgba
