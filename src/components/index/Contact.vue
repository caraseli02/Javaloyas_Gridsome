<template>
  <div class="setBg" id="contact">
    <section
      class="pb-10 relative block text-white bg-gradient-to-b from-black to-transparent"
    >
      <div
        class="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-16"
        style="height: 80px; transform: translateZ(0px)"
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
      <div class="container mx-auto px-4 lg:pt-24 lg:pb-64 pb-20 pt-20">
        <div
          class="flex flex-col flex-wrap text-center justify-center items-center"
        >
          <div class="w-full lg:w-6/12 px-4">
            <h3 class="text-4xl font-semibold text-black uppercase">
              Medios de contacto
            </h3>
          </div>
          <ul class="block md:flex justify-around items-center w-1/2 mx-auto">
            <li class="mt-2 p-4 bg-blue-800 w-32 rounded-lg mx-auto">
              <a href="tel:+34610-662-929" class="contactLink hover:text-white"
                >Telefono</a
              >
            </li>
            <li class="mt-2 p-4 bg-green-800 w-32 rounded-lg mx-auto">
              <a
                href="https://wa.me/34610-662-929"
                class="contactLink hover:text-white"
                >Whatsapp</a
              >
            </li>
            <li class="mt-2 p-4 bg-red-800 w-32 rounded-lg mx-auto">
              <a
                href="mailto:mariajavaloyas1969@gmail.com"
                class="contactLink hover:text-white"
                >Email</a
              >
            </li>
          </ul>
        </div>
      </div>
    </section>
    <section class="relative block py-24 lg:pt-0">
      <div class="container mx-auto px-4">
        <div class="flex flex-wrap justify-center lg:-mt-64 -mt-48">
          <div class="w-full lg:w-6/12 px-4">
            <div
              class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg"
              v-scroll-reveal.reset
            >
              <div
                class="setRgba flex-auto p-5 lg:p-10 bg-transparent text-black"
              >
                <h4 class="text-2xl font-semibold text-black">
                  Escribe tu mensaje
                </h4>
                <div class="relative w-full mb-3 mt-8">
                  <label
                    class="block uppercase text-xs font-bold mb-2"
                    for="full-name"
                    >Nombre</label
                  ><input
                    type="text"
                    class="px-3 py-3 placeholder-gray-400 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full"
                    placeholder="Full Name"
                    style="transition: all 0.15s ease 0s"
                  />
                </div>
                <div class="relative w-full mb-3">
                  <label
                    class="block uppercase text-xs font-bold mb-2"
                    for="email"
                    >Email</label
                  ><input
                    type="email"
                    class="px-3 py-3 placeholder-gray-400 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full"
                    placeholder="Email"
                    style="transition: all 0.15s ease 0s"
                  />
                </div>
                <div class="relative w-full mb-3">
                  <label
                    class="block uppercase text-xs font-bold mb-2"
                    for="message"
                    >Mensaje</label
                  ><textarea
                    rows="4"
                    cols="80"
                    class="px-3 py-3 placeholder-gray-400 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full"
                    placeholder="Type a message..."
                  ></textarea>
                </div>
                <div class="text-center mt-6">
                  <button
                    class="bg-green-900 text-white active:bg-green-500 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                    style="transition: all 0.15s ease 0s"
                  >
                    Enviar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "Contact",
};
</script>

<style scoped>
.setBg {
  background-image: url(../../assets/img/partitura.jpg);
  background-size: cover;
}
.contactLink {
  color: white;
  font-weight: 500;
}
.setRgba {
  background-color: rgba(250, 250, 250, 0.4);
  border-radius: 15px;
}
</style>
