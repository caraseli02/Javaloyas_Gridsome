<template>
  <footer class="lg:px-16 px-8 py-10 pb-15 shadow-md">
    <div class="container mx-auto flex flex-wrap">
      <div class="w-full md:w-3/6">
        <div class="mb-3 md:mb-0 pr-0 md:pr-10">
          <h3 class="clampTitle flex justify-center items-center">
            Los
            <g-image class="p-1 w-24 h-24" src="@/favicon.png"></g-image
            >avaloyas
          </h3>

          <!-- <p class="text-sm mt-2">
            Suscribe nuestra newsletter para que seas el primero en descubrir
            los proximos eventos.
          </p>

          <form class="my-4">
            <span class="text-lg">Newsletter</span>
            <div class="flex mt-2">
              <input
                class="flex-1 shadow appearance-none border rounded w-full py-2 px-3 mr-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="Email"
              />
              <button
                class="bg-green-600 hover:bg-green-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
              >
                Sign Up
              </button>
            </div>
          </form> -->
        </div>
      </div>
      <div class="w-full md:w-1/6">
        <div class="mb-3 md:mb-0 flex flex-col">
          <span class="clampLinkTitle text-bold">Legal</span>

          <span v-for="(item, i) in legal" :key="i" class="mt-2 w-24">
            <g-link :to="item.link" class="hover:text-white">{{
              item.name
            }}</g-link>
          </span>
        </div>
      </div>
      <div class="w-full md:w-1/6">
        <div class="mb-3 md:mb-0 flex flex-col">
          <span class="clampLinkTitle text-bold">Contacto</span>
          <span class="mt-2">
            <a href="tel:+34610-662-929" class="hover:text-white">Telefono</a>
          </span>
          <span class="mt-2">
            <a href="https://wa.me/34610-662-929" class="hover:text-white"
              >Whatsapp</a
            >
          </span>
          <span class="mt-2">
            <a
              href="mailto:mariajavaloyas1969@gmail.com"
              class="hover:text-white"
              >Email</a
            >
          </span>
        </div>
      </div>
      <div class="w-full md:w-1/6">
        <div class="mb-3 md:mb-0 flex flex-col">
          <span class="clampLinkTitle text-bold">Social</span>
          <span class="mt-2">
            <a
              href="https://www.facebook.com/losjavaloyas.javaloyas"
              target="_blank"
              class="hover:text-white"
              >Facebook</a
            >
          </span>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import Logo from "~/components/Logo.vue";

export default {
  name: "Footer",
  data() {
    return {
      legal: [
        { name: "Cookies", link: "legal/cookies" },
        { name: "Términos", link: "legal/terms" },
        { name: "Política de privacidad", link: "legal/privacy" },
      ],
    };
  },
  components: {
    Logo,
  },
};
</script>

<style scoped lang="scss">
.clampTitle {
  font-size: clamp(1rem, 10vw, 2rem);
}
.clampLinkTitle {
  font-size: clamp(1.7rem, 2.7vw, 4rem);
  position: relative;
}
.clampLinkTitle::before {
  content: "";
  position: absolute;
  width: 25px;
  height: 2px;
  left: 0;
  bottom: 0;
  border-bottom: 2px solid red;
}
</style>
