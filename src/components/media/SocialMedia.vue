<template>
  <section id="about" class="setBg relative text-white">
    <div class="h-64 w-full bg-gradient-to-b from-black to-transparent"></div>
    <div class="dropBg container mx-auto px-4">
      <span class="block text-center sm:text-left text-4xl my-6">YouTube</span>
      <div class="items-center flex flex-col md:flex-row">
        <div
          class="w-full flex flex-col justify-center ml-auto mr-2"
          v-scroll-reveal.reset
        >
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
  <!-- <div class="cookies" v-else>
    <div class="px-2 cookies__text">
      Para seguir pulse
      <button class="text-white p-1 rounded bg-green-500">De acuerdo</button> en la
      ventana de abajo
      <br />
      Este apartado utiliza cookies de youtube y spotify.
      <br />
      Para poder visualizar el contenido necesitamos tu<br />
      consentimiento con nuestra politica de cookies.
    </div>
  </div> -->
</template>

<script>
export default {
  watch: {},
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
      cookies: null,
      youtubeAnalytics: false,
      spotifyAnalytics: false,
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
  mounted() {

    if (document.cookie) {
      this.cookies = true;
    }

    document.addEventListener(
      "consentUpdate",
      this.listenCookieChange(({ oldValue, newValue }) => {
        this.cookies = newValue;
      }, 1000)
    );
  },
  beforeDestroy() {
    document.removeEventListener("consentUpdate", this.listenCookieChange);
  },
  methods: {
    acceptConsent(event) {
      document.cookie = "consent=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
      console.log(document.cookie);
    },
    listenCookieChange(callback, interval = 500) {
      let lastCookie = document.cookie;
      setInterval(() => {
        let cookie = document.cookie;
        if (cookie !== lastCookie) {
          try {
            callback({ oldValue: lastCookie, newValue: cookie });
          } finally {
            lastCookie = cookie;
          }
        }
      }, interval);
    },
    changeVidio(id) {
      this.videoId = id;
    },
  },
};
</script>

<style scoped lang="scss">
.cookies {
  background-image: url(../../assets/img/cookie.jpg);
  background-size: cover;
  background-position: center bottom;
  min-height: 80vh;
  min-width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 5%;

  &__text {
    background: rgba(255, 255, 255, 0.25);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
    border-radius: 10px;
    padding: 5%;
    color: black;
  }
}

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
