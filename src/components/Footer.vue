<template>
  <footer class="lg:px-16 px-8 py-10 pb-15 shadow-md">
    <div class="container mx-auto flex flex-wrap">
      <div class="w-full md:w-3/6">
        <div class="mb-3 md:mb-0 pr-0 md:pr-10">
          <h3 class="text-xl">Los Javaloyas</h3>
          <p class="text-sm mt-2">
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
          </form>
        </div>
      </div>
      <div class="w-full md:w-1/6">
        <div class="mb-3 md:mb-0">
          <span class="text-lg">Legal</span>
          <ul class="">
            <li class="mt-2">
              <g-link to="/legal/cookies" class="hover:text-white"
                >Cookies</g-link
              >
            </li>
            <li class="mt-2">
              <g-link to="/legal/terms/" class="hover:text-white"
                >Términos</g-link
              >
            </li>
            <li class="mt-2">
              <g-link to="/legal/privacy/" class="hover:text-white"
                >Política de privacidad</g-link
              >
            </li>
          </ul>
        </div>
      </div>
      <div class="w-full md:w-1/6">
        <div class="mb-3 md:mb-0">
          <span class="text-lg">Contacto</span>
          <ul class="">
            <li class="mt-2">
              <a href="tel:+34610-662-929" class="hover:text-white">Telefono</a>
            </li>
            <li class="mt-2">
              <a href="https://wa.me/34610-662-929" class="hover:text-white"
                >Whatsapp</a
              >
            </li>
            <li class="mt-2">
              <a
                href="mailto:mariajavaloyas1969@gmail.com"
                class="hover:text-white"
                >Email</a
              >
            </li>
          </ul>
        </div>
      </div>
      <div class="w-full md:w-1/6">
        <div class="mb-3 md:mb-0">
          <span class="text-lg">Social</span>
          <ul class="">
            <li class="mt-2">
              <a
                href="https://www.facebook.com/losjavaloyas.javaloyas"
                target="_blank"
                class="hover:text-white"
                >Facebook</a
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style scoped>
</style>
