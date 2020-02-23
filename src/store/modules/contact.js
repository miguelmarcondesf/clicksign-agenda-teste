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
    },
    deleteContact (state, contactId) {
      state.contactsList.splice(contactId, 1)
    }
  },
  getters: {
    contactsList (state) {
      return state.contactsList
    }
  },
  actions: {}
}
