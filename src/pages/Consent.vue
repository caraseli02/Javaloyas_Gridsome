<template>
  <layout>
    <h1>Consent Page</h1>
  </layout>
</template>

<script>
export default {
  mounted() {
    document.addEventListener("cookieUpdate", this.listenCookieChange);
  },
  beforeDestroy() {
    document.removeEventListener("cookieUpdate", this.listenCookieChange);
  },
  methods: {
    listenCookieChange(callback, interval = 1000) {
      let lastCookie = document.cookie;
      setInterval(() => {
        let cookie = document.cookie;
        if (cookie !== lastCookie) {
          try {
            callback({ oldValue: lastCookie, newValue: cookie });
          } finally {
            lastCookie = cookie;
          }
        }
      }, interval);
    },
  },
  created() {
    console.log(this.consent);
  },

  watch: {
    consent: function (consent) {
      console.log("chaged");
    },
  },
  data() {
    return {
      consent: this.$cookies.get("consent"),
    };
  },
};
</script>

<style lang="scss" scoped>
</style>