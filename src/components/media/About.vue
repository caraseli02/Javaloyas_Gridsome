<template>
  <section id="about" class="setBg relative text-white">
    <div class="h-64 w-full bg-gradient-to-b from-black to-transparent"></div>
    <div class="dropBg container mx-auto px-4">
      <div class="items-center flex flex-col md:flex-row">
        <div
          class="w-full flex flex-col justify-center ml-auto mr-2"
          v-scroll-reveal.reset
        >
          <!-- <youtube
            :fit-parent="true"
            :video-id="videoId"
            ref="youtube"
            title="los javaloyas"
          ></youtube> -->
          <iframe
            class="h-64"
            :src="`https://www.youtube-nocookie.com/embed/${videoId}`"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          <section class="flex flex-col setOverflow h-32 bg-gray-900">
            <span class="w-8 h-8 border-b-1 border-red-900 block"></span>
            <span
              v-for="(v, index) in videoList"
              :key="index"
              @click="changeVidio(v.id)"
              class="w-full cursor-pointer p-1 flex justify-between mb-4"
            >
              <div>
                <span class="m-2 md:ml-4"> {{ index + 1 }}</span> {{ v.name }}
              </div>
              <span class="p-1 bg-blue-800 rounded-lg md:mr-8">&#9658;</span>
            </span>
          </section>
        </div>
      </div>
      <div
        v-scroll-reveal.reset="{ delay: 250 }"
        class="spotify mb-6 flex justify-center flex-col"
      >
        <span class="text-center sm:text-left text-4xl my-6">Spotify</span>
        <iframe
          class="self-center"
          src="https://open.spotify.com/embed/artist/6FD45UyvpKzwYnQDF8NrLC"
          width="350"
          height="180"
          frameborder="0"
          allowtransparency="true"
          allow="encrypted-media"
        ></iframe>
      </div>
    </div>
    <div class="h-64 w-full bg-gradient-to-t from-black to-transparent"></div>
  </section>
</template>

<script>
export default {
  name: "About",
  metaInfo() {
    return this.$seo({
      title: "", // Uses the titleTemplate in Gridsome config
      description: "",
      keywords: "Biografía",
      openGraph: {
        title: "Los Javaloyas",
        type: "website",
      },
      twitter: {
        title: "Los Javaloyas",
        type: "website",
      },
      link: [], // any links
      script: [], // any scripts
    });
  },
  data() {
    return {
      videoId: "BJ_z981aRNY",
      videoList: [
        { id: "Fn-201mACYQ", name: "Lina" },
        { id: "mdhA9So_0fE", name: "Va cayendo una lagrima" },
        { id: "vkNnEOqmia0", name: "Y volvere" },
        { id: "TL3dQ_OcNF0", name: "Magicos colores" },
        { id: "udNOGCvDy5w", name: "Como las rosas" },
        { id: "doWrsEpZBgs", name: "Paradise of Love" },
        { id: "adrph5mMB2Q", name: "ma Mare" },
        { id: "RpXl3mU6EG0", name: "Tot ja es mort" },
        { id: "qz5A8JdxkaA", name: "Bona Nit" },
        { id: "FnIT1u27HCY", name: "Nuestro Juramento" },
      ],
    };
  },
  methods: {
    changeVidio(id) {
      this.videoId = id;
    },
  },
  created() {},
};
</script>

<style scoped lang="scss">
.setBg {
  background-image: url(../../assets/img/partitura2.jpg);
  background-size: cover;
}
.dropBg {
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(30px);
  padding: 2%;
}

.setOverflow {
  overflow: scroll;
  -webkit-overflow-scrolling: touch;
}
</style>
