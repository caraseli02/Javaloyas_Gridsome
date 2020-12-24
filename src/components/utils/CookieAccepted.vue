<template>
  <Layout>
    <p>Redirecting back ...</p>
  </Layout>
</template>

<script>
export default {
  created() {
    this.$router.replace({ // redirect the user back to the frontpage
      path: '/',
      force: true
    });
  }
};
</script>