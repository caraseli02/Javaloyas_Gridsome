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
    <transition name="fade" appear>
      <main class="main">
        <slot />
      </main>
    </transition>
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
  mounted() {
    document.addEventListener('consentUpdate', this.consentToggle)
  },
  beforeDestroy() {
    document.removeEventListener('consentUpdate', this.consentToggle)
  },
  methods: {
    consentToggle(event) {
      console.log('consinet change');
      // only is app is google analytics
      if (event.detail.app === 'googleAnalytics') {
        if (event.detail.consent) {
          // if user consent is true
          // this.$ga.enable()
          // this.consent = true;
          console.log('consinet change');
        } else {
          // if user consent is false
          // this.$ga.disable()
        }
      }
    }
  },
  created () {
  if(document.cookie){
      console.log('cookie: exist');
    }else{
      this.$router.push("/consent/").catch(()=>{});
    }
  }
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

  // @media screen and (min-width: 1300px) {
  //   //Make header sticky for large screens
  //   position: sticky;
  //   width: 100%;
  // }
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

.fade-enter-active {
  transition: opacity 0.7s;
}

.fade-enter {
  opacity: 0;
}
</style>
