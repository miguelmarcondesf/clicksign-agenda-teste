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
        <label for="email">E-mail</label>
        <input type="text" name="email" v-model="email">
        <label for="phone">Telefone</label>
        <input type="text" name="phone" v-model="phone">
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
      email: '',
      phone: '',
      btnDisabledClass: 'disabled'
    }
  },
  props: {
    showModal: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    createNewContact () {
      const contact = {
        name: this.name,
        email: this.email,
        phone: this.phone
      }

      this.$store.commit('addNewContact', contact)
      this.updateModalVisibility()
    },
    updateModalVisibility () {
      this.$emit('updateModalVisibility', false)
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
      }
    }

    .buttons-form-wrapper {
      float: right;
    }
  }
}
</style>
