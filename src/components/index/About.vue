<template>
  <section id="about" class="setBg relative text-white">
    <div class="h-64 w-full bg-gradient-to-b from-black to-transparent"></div>
    <div class="dropBg container mx-auto px-4">
      <div class="items-center flex flex-col md:flex-row">
        <!--<div
            v-scroll-reveal.reset
            class="md:pr-12">
          <small class="text-gray-800">Sobre el grupo</small>
          <h3 class="text-4xl uppercase font-bold text-gray-900">Un grupo de profesionales</h3>
          <p class="mt-4 text-lg leading-relaxed text-black">
            El mas veterano de los grupos pop españoles, pero una descripcion es nada comparando con una cancion!
          </p>
        </div>-->
        <div
          class="w-full flex justify-center ml-auto mr-2"
          v-scroll-reveal.reset
        >
          <youtube
            :fit-parent="true"
            :video-id="videoId"
            ref="youtube"
            @playing="playing"
          ></youtube>
        </div>
      </div>
      <div
        v-scroll-reveal.reset="{ delay: 250 }"
        class="spotify mb-6 flex justify-center flex-col"
      >
        <h3 class="text-center sm:text-left">Spotify</h3>
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
      <!--<div class="spotify mb-6 flex justify-center flex-col">
        <h3 class="text-center">Music Apple</h3>
        <iframe
            allow="autoplay *; encrypted-media *;"
            frameborder="0" height="350"
            style="width:100%;max-width:660px;overflow:hidden;background:transparent;"
            sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
            src="https://embed.music.apple.com/us/artist/los-javaloyas/333049447"></iframe>
      </div>-->
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
    };
  },
  methods: {
    playVideo() {
      this.player.playVideo();
    },
    playing() {
      console.log("o/ we are watching!!!");
    },
  },
  computed: {
    player() {
      return this.$refs.youtube.player;
    },
  },
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
</style>
