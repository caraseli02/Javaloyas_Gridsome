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
            :class="`child mx-1 w-2/3 lg:w-2/5 rounded-lg blog-shadow-dreamy border-purple-700 ${img.img} `"
            v-for="img in members"
            :key="img.name"
            :src="require(`!!assets-loader!@banda/${img.img}.jpg`)"
            :id="img.img"
          ></g-image>
        </section>
        <span
          class="absolute top-0 right-0 mr-2 mt-64 flex justify-beetwen border-2 border-red-500 bg-transparent sm:hidden rounded-lg w-16 h-8"
        >Test</span>
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
          name: "Serafin Nebot",
          inst: "Voz Solista, Violin",
          img: "Serafin",
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
