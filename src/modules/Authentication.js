import JtockAuth from 'j-tockauth'

const auth = new JtockAuth({
  host: 'https://flex-coast-development.herokuapp.com',
  prefixUrl: '/api',
  debug: false,
})

const Authentication = {
  async signIn(data) {
    try {
      let response = auth.signIn(data.email, data.password)
    } catch (e) {}
  },
  
}

export default auth
