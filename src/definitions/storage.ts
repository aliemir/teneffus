export const storage = {
  set: (minutes: number) => {
    if (typeof window !== 'undefined' && window.localStorage) {
      try {
        localStorage.setItem('lecture-minutes', '' + minutes)
      } catch (e) {
        console.log(e)
      }
    }
  },
  get: () => {
    if (typeof window !== 'undefined' && window.localStorage) {
      const fromStorage = localStorage.getItem('lecture-minutes') ?? '30'
      const parsed = parseInt(fromStorage, 10)
      const duration = isNaN(parsed) ? 30 : parsed
      return duration * 60
    } else {
      return 30 * 60
    }
  },
}
