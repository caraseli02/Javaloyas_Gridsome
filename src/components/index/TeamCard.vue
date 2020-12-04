<template>
  <section class="svg pt-20 pb-48">
    <div class="container mx-auto">
      <div class="flex flex-wrap justify-center text-center mb-24">
        <div class="w-full lg:w-6/12 px-4">
          <h3 class="text-4xl font-semibold uppercase">Banda</h3>
        </div>
      </div>
      <!-- Trainer Card Wrapper -->
      <vue-glide class="" :options="options">
        <template slot="control">
          <button
            class="absolute w-full h-12 flex justify-center mt-10 text-xl border-0 outline-none animate-pulse"
            data-glide-dir="<"
          >
            <div class="transform rotate-90">
              <svg
                class="animate-bounce w-6 h-6"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
              </svg>
            </div>
          </button>
          <button
            class="absolute w-full h-12 flex justify-center text-xl border-0 outline-none animate-pulse"
            data-glide-dir=">"
          >
            <div class="transform -rotate-90">
              <svg
                class="animate-bounce w-6 h-6"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
              </svg>
            </div>
          </button>
        </template>
        <vue-glide-slide
          v-for="(member, index) in members"
          :key="index"
          class="m-0"
        >
          <div class="pr-8">
            <g-image
              alt="los javaloyas"
              :src="require(`!!assets-loader!@img/${member.img}.png`)"
              class="shadow-lg rounded mx-auto"
            />
            <div class="pt-6 text-center">
              <h3 class="text-xl font-bold">{{ member.name }}</h3>
              <p class="mt-1 text-sm text-gray-500 uppercase font-semibold">
                {{ member.inst }}
              </p>
            </div>
          </div>
        </vue-glide-slide>
      </vue-glide>
    </div>
  </section>
</template>

<script>
import { Glide, GlideSlide } from "vue-glide-js";

export default {
  name: "TeamCard",
  data() {
    return {
      options: {
        autoplay: 5000,
        bound: true,
        breakpoints: {
          450: {
            perView: 1,
          },
          800: {
            perView: 2,
          },
        },
      },
      members: [
        {
          name: "Luis Javaloyas",
          inst: "Voz, Piano",
          img: "Luis",
        },
        {
          name: "Serafin Nebot",
          inst: "Voz Solista, Violin",
          img: "Serafin",
        },
        {
          name: "Daniel Salva",
          inst: "Voz, Bajo",
          img: "Daniel",
        },
        {
          name: "Leo Villar W",
          inst: "Voz, Bateria, Trompeta",
          img: "Leo",
        },
        {
          name: "Javier Simal",
          inst: "Voz, Guitarra, Trompeta",
          img: "Javier",
        },
      ],
    };
  },
  components: {
    [Glide.name]: Glide,
    [GlideSlide.name]: GlideSlide,
  },
};
</script>

<style scoped lang="scss">
.svg {
  position: relative;

  &:before {
    content: "";
    background-image: url(../../assets/img/violin.svg);
    background-position: right top;
    background-repeat: no-repeat;
    background-size: contain;
    width: 600px;
    height: 100px;
    position: absolute;
    right: 0;
    top: 0;
  }

  &:after {
    content: "";
    background-image: url(../../assets/img/micro.svg);
    background-position: left bottom;
    background-repeat: no-repeat;
    background-size: contain;
    width: 400px;
    height: 120px;
    position: absolute;
    left: 0;
    bottom: 0;
    z-index: 0;
  }
}

button {
  border: none;
  outline: none;
}

button:focus,
button:active,
button:hover {
  outline: none;
}
</style>
