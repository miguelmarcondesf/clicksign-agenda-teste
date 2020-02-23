<template>
  <div class="home">
    <div class="header">
      <img
      id="logo"
      src="../assets/imgs/ic-logo.svg"
      alt="Ubook logo with pink coloring"
      >

      <Modal
      :showModal="this.showNewContactModal"
      @updateModalVisibility="onClickChild"
      />

      <div class="input-icon">
        <input
        type="text"
        name="search"
        placeholder="Buscar..."
        aria-label="Busque pela agenda"
        >
        <img
        src="../assets/imgs/ic-search.svg"
        alt="">
      </div>

    </div>

    <div class="home-content-wrapper">

      <table v-if="this.contacts.length > 0">
        <tr>
          <th></th>
          <th>Contatos</th>
          <th>E-mail</th>
          <th>Telefone</th>
          <th></th>
        </tr>
        <tr v-for="(contact, index) in this.contacts" :key="index">
          <td>{{ contact.name.charAt(0) }}</td>
          <td>{{ contact.name }}</td>
          <td>{{ contact.email }}</td>
          <td>{{ contact.phone }}</td>
          <td></td>
        </tr>
      </table>

      <div class="no-contacts-wrapper" v-else>
        <img
        id="book"
        src="../assets/imgs/ic-book.svg"
        alt="A opened book illustration with grey coloring"
        >

        <p class="no-contact-text">Nenhum contato foi criado ainda.</p>

        <button
        type="button"
        name="criar-contato"
        class="add-button"
        @click="showNewContactModal = !showNewContactModal"
        >
          + Criar contato
        </button>

      </div>
    </div>

  </div>
</template>

<script>
import Modal from '@/components/Modal'

export default {
  name: 'Home',
  components: {
    Modal
  },
  data: function () {
    return {
      showNewContactModal: false
    }
  },
  methods: {
    onClickChild (value) {
      this.showNewContactModal = value
    }
  },
  computed: {
    contacts () {
      if (this.$store.getters.contactsList !== undefined) {
        return this.$store.getters.contactsList
      }

      return []
    }
  },
  watch: {
    contacts (newContacts, oldContacts) {
      console.log('deu certo')
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/atoms/buttons';
@import '../assets/atoms/input';

.home {
  height: 100vh;

  .header {
    max-width: 100vw;
    max-height: 6.25vh;
    padding: 16px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    #logo {
      height: 50%;
      width: auto;
    }

    .input-icon {
      position: relative;
      display: flex;
      align-items: center;
      min-height: 100%;

      input {
        width: 72vw;
        padding: 0 8px;
      }

      img {
        position: absolute;
        right: 8px;
      }
    }
  }

  .home-content-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;

    .no-contacts-wrapper {
      text-align: center;

      #book {
        width: 16.45vw;
        height: auto;
      }

      p {
        margin: 24px 0;
      }
    }
  }
}
</style>
