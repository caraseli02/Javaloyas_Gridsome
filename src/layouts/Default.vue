<template>
  <div id="app">
    <header class="header">
      <div class="header__left">
        <Logo v-if="showLogo" />
        <Navbar />
      </div>

      <div class="header__right mr-4">
        <ToggleTheme />
      </div>
    </header>

    <main class="main">
      <slot />
    </main>
    <Footer />
  </div>
</template>

<script>
import Logo from "~/components/Logo.vue";
import ToggleTheme from "~/components/ToggleTheme.vue";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default {
  props: {
    showLogo: { default: true },
  },
  components: {
    Footer,
    Navbar,
    Logo,
    ToggleTheme,
  },
};
</script>

<style lang="scss">
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: var(--header-height);
  padding: 0 calc(var(--space) / 2);
  top: 0;
  z-index: 10;
  background-image: url(../assets/img/guitar.svg);
  background-position: right;
  background-repeat: no-repeat;
  background-size: contain;

  &__left,
  &__right {
    display: flex;
    align-items: center;
  }

  @media screen and (max-width: 650px) {
    //Make header sticky for large screens
    background-image: none;
  }

  @media screen and (min-width: 1300px) {
    //Make header sticky for large screens
    position: sticky;
    width: 100%;
  }
}

.main {
  margin: 0 auto;
}

.footer {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: calc(var(--space) / 2);
  text-align: center;
  font-size: 0.8em;

  > span {
    margin: 0 0.35em;
  }

  a {
    color: currentColor;
  }
}
</style>
