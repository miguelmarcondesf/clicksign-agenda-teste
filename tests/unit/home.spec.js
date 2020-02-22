import { shallowMount } from '@vue/test-utils'
import Home from '@/views/Home.vue'

describe('Home.vue', () => {

  describe('listing without any contact ', () => {
    const wrapper = shallowMount(Home)

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
  })

})
