<template>
  <div class="home">
    <div class="header">
      <img
      id="logo"
      src="../assets/imgs/ic-logo.svg"
      alt="Ubook logo with pink coloring"
      >

      <button
      type="button"
      name="criar-contato"
      class="add-button"
      @click="showNewContactModal = !showNewContactModal"
      v-if="this.contacts.length > 0"
      >
        + Criar contato
      </button>

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

    <div class="home-content-wrapper" v-if="this.contacts.length > 0">
      <table >
        <tr>
          <th></th>
          <th>Contatos</th>
          <th>E-mail</th>
          <th>Telefone</th>
          <th></th>
        </tr>
        <tr v-for="(contact, index) in this.contacts" :key="index">
          <td>
            <span>
              {{ contact.name.charAt(0) }}
            </span>
          </td>
          <td>{{ contact.name }}</td>
          <td>{{ contact.email }}</td>
          <td>{{ contact.phone }}</td>
          <td></td>
        </tr>
      </table>
    </div>

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

    button {
      padding: 8px 16px;
    }

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
    max-height: 93.75vh;
    padding: 16px;

    table {
      width: 100%;
      border-radius: 4px;
      height: auto;
      background-color: var(--white-two);
      border: solid 1px var(--white);
      border-collapse: collapse;

      th {
        padding: 16px 0;
        font-family: 'Roboto';
        font-size: 13px;
        color: var(--bluey-grey);

        &:nth-child(1) {
          width: 48px;
        }
      }

      tr {
        text-align: left;
        background-color: var(--white-two);
        border: solid 1px var(--white);
        border-radius: 4px;
        font-size: 14px;
        color: var(--dark);
        transition: .5s;

        &:nth-child(1) {
          &:hover {
            background-color: var(--white-two);
          }
        }

        &:hover {
          background-color: var(--very-light-pink);
        }

        &:nth-child(8n+0) {
          span {
            background-color: #f55a5a;
          }
        }

        &:nth-child(8n+1) {
          span {
            background-color: #fa8d68;
          }
        }

        &:nth-child(8n+2) {
          span {
            background-color: var(--pale-olive-green);
          }
        }

        &:nth-child(8n+3) {
          span {
            background-color: var(--sky-blue);
          }
        }

        &:nth-child(8n+4) {
          span {
            background-color: #fab668;
          }
        }

        &:nth-child(8n+5) {
          span {
            background-color: #8368fa;
          }
        }

        &:nth-child(8n+6) {
          span {
            background-color: #fa68b5;
          }
        }

        &:nth-child(8n+7) {
          span {
            background-color: #5fe2c4;
          }
        }

        td {
          padding: 12px 0;

          &:nth-child(1) {
            display: flex;
            justify-content: center;

            span {
              height: 24px;
              width: 24px;
              border-radius: 50%;
              display: flex;
              text-align: center;
              justify-content: center;
              align-items: center;
              font-size: 16px;
              color: var(--white-two);
              text-transform: capitalize;
            }
          }
        }
      }
    }
  }

  .no-contacts-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-height: 93.75vh;

    #book {
      width: 16.45vw;
      height: auto;
      margin-top: 10vh;
    }

    p {
      margin: 24px 0;
    }
  }
}
</style>
