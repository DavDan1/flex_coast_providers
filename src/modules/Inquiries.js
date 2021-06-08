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
    let params = {inquiry_status: status}
    try {
      let response = await axios.put(`/inquiries/${id}`, params)
      debugger
    } catch (error) {}
  },
}

export default Inquiries
