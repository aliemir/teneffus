export const setStoreDuration = (minutes: number) => {
  if (typeof window !== 'undefined' && window.localStorage) {
    try {
      localStorage.setItem('lecture-minutes', '' + minutes)
    } catch (e) {
      console.log(e)
    }
  }
}

export const getStoreDuration = () => {
  if (typeof window !== 'undefined' && window.localStorage) {
    const fromStorage = localStorage.getItem('lecture-minutes') ?? '30'
    const parsed = parseInt(fromStorage, 10)
    const duration = isNaN(parsed) ? 30 : parsed
    return duration * 60
  } else {
    return 30 * 60
  }
}
