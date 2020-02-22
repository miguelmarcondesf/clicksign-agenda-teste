<template>
  <div class="home">
    <div class="header">
      <img
      id="logo"
      src="../assets/imgs/ic-logo.svg"
      alt="Ubook logo with pink coloring"
      >

      <Modal :showModal="!this.showNewContactModal" />

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
      <div class="no-contacts-wrapper">
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
      showNewContactModal: false,
      contacts: {}
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
