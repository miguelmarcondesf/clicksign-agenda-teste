export default {
  state: {
    contactsList: [],
    name: '',
    email: '',
    phone: ''
  },
  mutations: {
    addNewContact (state, contact) {
      state.contactsList.push(contact)
    }
  },
  getters: {
    contactsList (state) {
      return state.contactsList
    }
  },
  actions: {}
}
