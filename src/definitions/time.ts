export const seconds = (total: number) => {
  const sec = total % 60
  return sec < 10 ? `0${sec}` : `${sec}`
}

export const minutes = (total: number) => {
  const min = Math.floor(total / 60)
  return min < 10 ? `0${min}` : `${min}`
}
