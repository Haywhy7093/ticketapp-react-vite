const SESSION_KEY = 'ticketapp_session'

export function getSession() {
  try { return JSON.parse(localStorage.getItem(SESSION_KEY)) }
  catch(e){ return null }
}
export function setSession(obj){
  localStorage.setItem(SESSION_KEY, JSON.stringify(obj))
}
export function clearSession(){
  localStorage.removeItem(SESSION_KEY)
}

export function login({email, password}) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      if (!email || !password) return rej(new Error('Invalid credentials'))
      const token = btoa(email + '|' + Date.now())
      const user = { email, token }
      setSession(user)
      res(user)
    }, 350)
  })
}

export function register({email, password}) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      if(!email || !password) return rej(new Error('Invalid'))
      const token = btoa(email + '|' + Date.now())
      const user = { email, token }
      setSession(user)
      res(user)
    }, 350)
  })
}
