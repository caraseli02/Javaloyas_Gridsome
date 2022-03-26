<template>
  <section class="bg-black w-screen h-screen relative">
    <div class="container mx-auto">
      <article class="mx-6 sm:pt-8 relative">
        <section
          class="flex justify-start items-center overflow-auto w-full h-screen mr-4 container sm:grid grid-flow-col grid-cols-3 grid-rows-2 gap-4 sm:mx-auto"
          ref="content"
        >
          <g-image
            ref="infoImg"
            :class="
              `child mx-1 w-2/3 lg:w-2/5 rounded-lg blog-shadow-dreamy border-purple-700 ${
                img.img
              } `
            "
            v-for="img in members"
            :key="img.name"
            :src="require(`!!assets-loader!@banda/${img.img}.jpg`)"
            :id="img.img"
          ></g-image>
        </section>
        <div
          class="absolute bottom-0 left-0 mb-16 flex justify-beetwen bg-red-700 -ml-4 sm:hidden"
        >
          <button
            v-if="imgCount !== 0"
            @click="swipeLeft()"
            class="text-gray-200 hover:text-yellow-500 font-bold hover:shadow-lg rounded-full w-12 h-12 -pl-3 text-xl pt-4"
          >
            ←
          </button>
          <button
            v-if="imgCount !== 5"
            @click="swipeRight()"
            class="text-gray-200 hover:text-yellow-500 font-bold hover:shadow rounded-full w-12 h-12 -pr-3 text-xl pb-4"
          >
            →
          </button>
        </div>
      </article>
    </div>
  </section>
</template>

<script>
export default {
  name: "TeamCard",
  data() {
    return {
      currentScrollPosition: 0,
      imgCount: 0,
      members: [
        {
          name: "Luis Javaloyas",
          inst: "Voz, Piano",
          img: "Luis",
        },
        {
          name: "Joan Carles Juliá",
          inst: "Saxofón",
          img: "Joan",
        },
        {
          name: "Daniel Salva",
          inst: "Voz, Guitarra",
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
        {
          name: "Julio Ortiz",
          inst: "Voz, Bajo",
          img: "Julio",
        },
      ],
      hasScrolledToBottom: false,
      controlWidth: 0,
    };
  },
  methods: {},
  mounted() {},
};
</script>

<style scoped lang="scss">
$primary: #221e21;

.blog-shadow-dreamy {
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.07), 0 2px 4px rgba(0, 0, 0, 0.07),
    0 4px 8px rgba(0, 0, 0, 0.07), 0 8px 16px rgba(0, 0, 0, 0.07),
    0 16px 32px rgba(0, 0, 0, 0.07), 0 32px 64px rgba(0, 0, 0, 0.07);
}
.container {
  overscroll-behavior-x: contain;
  scroll-snap-type: x mandatory;
}
.Daniel,
.Leo {
  justify-self: center;
}

.Javier,
.Julio {
  justify-self: end;
}

.child {
  scroll-snap-align: center;
}
</style>
