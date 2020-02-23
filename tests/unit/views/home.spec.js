import { shallowMount, createLocalVue, mount } from '@vue/test-utils'
import Vuex from 'vuex'
import Home from '@/views/Home.vue'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('Home.vue', () => {

  describe('listing without any contact', () => {
    const store = new Vuex.Store({
      state: {
        contactsList: []
      }
    })

    const wrapper = mount(Home, {
      store,
      localVue
    })

    it('should match snapshot', () => {
      expect(wrapper).toMatchSnapshot()
    })

    it('should have a logo', () => {
      expect(wrapper.findAll('img#logo').length).toEqual(1)
    })

    it('should have a search bar', () => {
      expect(wrapper.findAll('input[name=search]').length).toEqual(1)
    })

    it('should have a message about no contacts created', () => {
      expect(wrapper.findAll('img#book').length).toEqual(1)
      expect(wrapper.find('p').text()).toEqual('Nenhum contato foi criado ainda.')
    })

    it('should have a button to add new contacts', () => {
      expect(wrapper.findAll('button[name=criar-contato]').length).toEqual(1)
      expect(wrapper.find('button[name=criar-contato]').text()).toEqual('+ Criar contato')
    })

    it('should show modal if add contact button was clicked', async () => {
      expect(wrapper.vm.showNewContactModal).toBe(false)

      wrapper.find('button[name=criar-contato]').trigger('click')
      await wrapper.vm.$nextTick()

      expect(wrapper.vm.showNewContactModal).toBe(true)
      expect(wrapper.findAll('modal-stub').exists()).toBe(false)
    })
  })

  describe('listing with contact', () => {
    const store = new Vuex.Store({
      state: {
        contactsList: [
          { email: 'bruce@wayne.com',
            name: 'Bruce Wayne',
            phone: '999999999'
          },
          { email: 'bruce@wayne.com',
            name: 'Bruce Wayne',
            phone: '999999999'
          }
        ]
      },

      getters: {
        contactsList: (state) => state.contactsList
      }
    })

    const wrapper = mount(Home, {
      store,
      localVue
    })

    it('should match snapshot', () => {
      expect(wrapper).toMatchSnapshot()
    })

    it('renders a table using a real Vuex store', () => {
      expect(wrapper.findAll("table").length).toBe(1)


    })
  })
})
