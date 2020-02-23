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
      localStorage.setItem('contactsList', JSON.stringify(state.contactsList))
    },
    updateContact (state, contactInfo) {
      const contact = {
        name: contactInfo.name,
        email: contactInfo.email,
        phone: contactInfo.phone
      }

      state.contactsList[contactInfo.id] = contact
      localStorage.setItem('contactsList', JSON.stringify(state.contactsList))
    },
    deleteContact (state, contactId) {
      state.contactsList.splice(contactId, 1)
      localStorage.setItem('contactsList', JSON.stringify(state.contactsList))
    },
    updateContactsList (state) {
      state.contactsList = JSON.parse(localStorage.getItem('contactsList'))
    }
  },
  getters: {
    contactsList (state) {
      return state.contactsList
    }
  },
  actions: {}
}
