<template>
  <div class="modal-wrapper" v-if="this.showModal">
    <div class="modal-blur">
    </div>
    <div class="modal-card">
      <div class="modal-header">
        <p>Criar novo contato</p>
        <hr>
      </div>
      <div class="form-wrapper">
        <label for="name">Nome</label>
        <input type="text" name="name" v-model="name">
        <span v-show="nameError">{{ nameError }}</span>

        <label for="email">E-mail</label>
        <input type="email" name="email" v-model="email">
        <span v-show="emailError">{{ emailError }}</span>

        <label for="phone">Telefone</label>
        <input type="text" name="phone" v-model="phone" maxlength="11">
        <span v-show="phoneError">{{ phoneError }}</span>
      </div>

      <hr>

      <div class="buttons-form-wrapper">
        <button
        type="button"
        name="cancelar-contato"
        class="modal-button-text"
        @click="updateModalVisibility"
        >
          Cancelar
        </button>
        <button
        type="button"
        name="salvar-contato"
        class="modal-button"
        :class="this.btnDisabledClass"
        @click="createNewContact"
        :disabled="btnDisabled"
        >
          Salvar
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      name: '',
      nameError: '',
      email: '',
      emailError: '',
      phone: '',
      phoneError: '',
      btnDisabledClass: 'disabled'
    }
  },
  props: {
    showModal: {
      type: Boolean,
      default: false
    },
    contactId: {
      type: Number,
      default: null
    },
    contactObj: {
      type: Object,
      default: null
    }
  },
  methods: {
    createNewContact () {
      if (this.emailValidation(this.email) !== true) {
        return
      }

      if (this.contactObj) {
        const contactInfo = {
          name: this.name,
          email: this.email,
          phone: this.phone,
          id: this.contactId
        }

        this.$store.commit('updateContact', contactInfo)
        this.$emit('updateNewContactHighlight', this.contactId)
      } else {
        const contactInfo = {
          name: this.name,
          email: this.email,
          phone: this.phone
        }

        this.$store.commit('addNewContact', contactInfo)
        this.$emit('updateNewContactHighlight', true)
      }

      this.updateModalVisibility()
      this.clearForm()
    },
    updateModalVisibility () {
      this.$emit('updateModalVisibility', false)
      this.clearForm()
    },
    clearForm () {
      this.name = ''
      this.email = ''
      this.phone = ''
    },
    emailValidation (email) {
      var regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      return regex.test(String(email).toLowerCase())
    }
  },
  computed: {
    btnDisabled () {
      if ((this.name || this.email || this.phone) === '') {
        return true
      }

      return false
    }
  },
  watch: {
    btnDisabled (newValue, oldValue) {
      if (newValue === true) {
        this.btnDisabledClass = 'disabled'
      } else {
        this.btnDisabledClass = ''
      }
    },
    contactObj (newValue, oldValue) {
      if (newValue) {
        this.name = this.contactObj.name
        this.email = this.contactObj.email
        this.phone = this.contactObj.phone
      }
    },
    phone (newValue, oldValue) {
      this.phone = newValue.replace(/[^0-9]/g, '')
        .replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3')
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/atoms/buttons';
@import '../assets/atoms/input';

.modal-wrapper {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: center;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;

  .modal-blur {
    background-color: black;
    width: 100%;
    height: 100%;
    opacity: .5;
    z-index: 1;
    position: absolute;
    top: 0;
    left: 0;
  }

  .modal-card {
    width: 30vw;
    height: auto;
    border-radius: 16px;
    box-shadow: 0 16px 10px 0 rgba(0, 0, 0, 0.16);
    background-color: var(--white-two);
    z-index: 2;
    padding: 16px 0;

    hr {
      border: solid 1px var(--cloudy-blue);
    }

    .modal-header {
      p {
        margin: 0 16px;
        margin-bottom: 12.5px;
      }
    }

    .form-wrapper {
      display: flex;
      flex-direction: column;
      padding: 24px;

      label {
        margin-bottom: 4px;
        font-size: 14px;
        color: var(--dark);
      }

      input {
        margin-bottom: 16px;
        border-radius: 4px;
        padding: 0 8px;
        color: var(--dark);
        font-size: 14px;
      }
    }

    .buttons-form-wrapper {
      float: right;
    }
  }
}
</style>
