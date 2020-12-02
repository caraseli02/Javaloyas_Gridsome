<template>
  <g-link class="logo setBg rounded-full w-12 h-12" to="/">
    <span class="logo__text font-bold bg-white">
      <g-image class="p-1 w-12 h-12" src="@/favicon.png"></g-image>
    </span>
  </g-link>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style lang="scss">
.setBg {
}

.logo {
  text-decoration: none;
  color: var(--body-color) !important;
  font-size: 0.9em;

  &__image {
    vertical-align: middle;
    border-radius: 99px;
    height: 40px;
    width: 40px;
    margin-right: 0.5em;
  }
}
</style>
