<template>
  <div class="home">
    <img
    id="logo"
    src="../assets/imgs/ic-logo.svg"
    alt="Ubook logo with pink coloring"
    >

    <input
    type="text"
    name="search"
    placeholder="Buscar..."
    aria-label="Busque pela agenda"
    >

    <div class="no-contacts-wrapper">
      <img
      id="book"
      src="../assets/imgs/ic-book.svg"
      alt="A opened book illustration with grey coloring"
      >

      <p class="no-contact-text">Nenhum contato foi criado ainda.</p>

      <button type="button" name="criar-contato">
        + Criar contato
      </button>

    </div>
  </div>
</template>

<script>

export default {
  name: 'Home',
  components: {
  }
}
</script>
