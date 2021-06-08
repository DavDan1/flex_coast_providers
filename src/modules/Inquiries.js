import axios from 'axios'
import store from '../state/store/configureStore'

const Inquiries = {
  async index() {
    try {
      let response = await axios.get('/inquiries')
      store.dispatch({
        type: 'SET_INQUIRIES',
        payload: response.data.inquiries,
      })
    } catch (error) {}
  },
  async update(id, status) {
    let params = { form_data: { inquiry_status: status } }
    try {
      await axios.put(`/inquiries/${id}`, params)
      try {
        let response = await axios.get('/inquiries')
        store.dispatch({
          type: 'SET_INQUIRIES',
          payload: response.data.inquiries,
        })
      } catch (error) {
        debugger
      }
    } catch (error) {
      debugger
    }
  },
}

export default Inquiries
