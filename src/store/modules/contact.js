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
    },
    updateContact (state, contactInfo) {
      const contact = {
        name: contactInfo.name,
        email: contactInfo.email,
        phone: contactInfo.phone
      }

      state.contactsList[contactInfo.id] = contact
    }
  },
  getters: {
    contactsList (state) {
      return state.contactsList
    }
  },
  actions: {}
}
