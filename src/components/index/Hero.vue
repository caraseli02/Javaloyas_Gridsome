<template>
  <div
      class="relative pt-16 pb-32 lg:px-6 flex content-center items-center justify-center"
      style="min-height: 95vh"
  >
    <g-image
        class="absolute top-0 lg:static lg:bottom-0 h-auto lg:w-3/5 flex lg:right-0 mx-auto lg:rounded-lg
                lg:border-solid lg:border-64 lg:border-black
              "
        src="../assets/img/landing2.jpg"
    >
        <span
            id="blackOverlay"
            class="w-full h-full absolute opacity-75 bg-black"
        ></span>
    </g-image>
    <div class="z-10 container relative setColor mx-auto" data-aos="fade-in">
      <div class="items-end flex flex-wrap">
        <div class="w-full px-8 ml-auto mr-auto text-center">
          <div>
            <h3 class="text-white font-semibold text-3xl lg:text-4xl">
              Siente el verdadero poder de la <span class="text-red-700">Musica</span>
            </h3>
            <p class="mt-4 text-lg text-gray-300">
              Los Javaloyas es uno de los conjuntos más populares y asociados a la música pop española.
              El grupo fue fundado por José Luis Pérez Javaloyas.
            </p>
            <div class="flex justify-center">
              <a
                  href="#"
                  class="mr-4 bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white p-4 border border-red-800 hover:border-transparent rounded inline-block mt-5 cursor-pointer"
              >Contacto</a
              >
              <a
                  href="#"
                  class="bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white p-4 border border-red-800 hover:border-transparent rounded inline-block mt-5 cursor-pointer"
              >Eventos
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
        class="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
        style="height: 70px; transform: translateZ(0px)"
    >
      <svg
          class="absolute bottom-0 overflow-hidden"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          version="1.1"
          viewBox="0 0 2560 100"
          x="0"
          y="0"
      >
        <polygon points="2560 0 2560 100 0 100"></polygon>
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  name: "Hero"
}
</script>

<style scoped>

</style>
