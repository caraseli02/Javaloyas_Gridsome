<template>
    <layout>
        <h1>Consent Page</h1>
    </layout>
</template>

<script>
    export default {
  created () {
      console.log(this.consent);
  },
  watch: {
      consent: function (consent) {
          console.log('chaged');
      }
  },
  data () {
    return {
        consent: document.cookie
    }
  },
        
    }
</script>

<style lang="scss" scoped>

</style>