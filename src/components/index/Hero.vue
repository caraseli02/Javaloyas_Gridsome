<template>
  <div
    class="setBg relative pt-8 pb-16 lg:px-6 flex flex-col xl:flex-row content-center items-center justify-center"
    style="min-height: 95vh"
  >
    <div class="wrapper z-10">
      <ul class="bg-bubbles">
        <li>&#119070;</li>
        <li>&#9834;</li>
        <li>&#9834;</li>
        <li>&#9833;</li>
        <li>&#119070;</li>
        <li>&#119070;</li>
        <li>&#127932;</li>
        <li>&#9834;</li>
        <li>&#9833;</li>
        <li>&#127932;</li>
      </ul>
    </div>
    <g-image
      class="static lg:bottom-0 h-auto lg:w-4/5 xl:w-3/5 flex lg:right-0 mx-auto lg:rounded-lg lg:border-solid lg:border-64 lg:border-black z-20"
      src="@/assets/img/landing1.jpg"
      alt="Los javaloyas, conjuntos más populares y asociados a la música pop española"
    >
      <span
        id="blackOverlay"
        class="w-full h-full absolute opacity-75 bg-black"
      ></span>
    </g-image>
    <div
      class="z-10 container relative setColor mx-auto"
      v-scroll-reveal.reset="{ delay: 250 }"
    >
      <div class="items-end flex flex-wrap">
        <div class="w-full px-8 lg:px-32 ml-auto mr-auto text-center">
          <div>
            <h1 class="font-semibold text-3xl lg:text-4xl mt-6">
              Historia viva de la
              <div
                class="text-red-700"
                :class="showPlayer ? '' : 'animate-pulse'"
                v-on:click="play"
              >
                Música
                <button>
                  <svg
                    class="inline-block"
                    v-if="showPlayer"
                    width="50"
                    height="50"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M11 7H8V17H11V7Z" fill="currentColor" />
                    <path d="M13 17H16V7H13V17Z" fill="currentColor" />
                  </svg>
                </button>
                <button>
                  <svg
                    class="inline-block"
                    v-if="!showPlayer"
                    width="50"
                    height="50"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15 12.3301L9 16.6603L9 8L15 12.3301Z"
                      fill="currentColor"
                    />
                  </svg>
                </button>
              </div>
            </h1>
            <audio
              class="w-full hidden"
              controls
              ref="audioElm"
              src="../../assets/audio/Javaloyas.mp3"
            >
              Your browser does not support the
              <code>audio</code> element.
            </audio>
            <h2 class="mt-2 text-lg">
              Los Javaloyas es uno de los conjuntos más populares y asociados a
              la música pop española. El grupo en activo más veterano de España.
            </h2>
            <div class="flex justify-center">
              <a
                href="#contact"
                class="mr-4 bg-transparent hover:bg-red-700 text-red-700 font-semibold hover:text-white p-4 border border-red-800 hover:border-transparent rounded inline-block cursor-pointer"
                >Contacto</a
              >
              <g-link
                to="/events/"
                class="bg-transparent hover:bg-red-700 text-red-700 font-semibold hover:text-white p-4 border border-red-800 hover:border-transparent rounded inline-block cursor-pointer"
                >Eventos
              </g-link>
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
  name: "Hero",
  data() {
    return {
      showPlayer: false,
    };
  },
  methods: {
    play: function (event) {
      var a = this.$refs.audioElm;
      if (a.paused) {
        a.play();
        this.showPlayer = true;
      } else {
        a.pause();
        this.showPlayer = false;
      }
    },
  },
};
</script>

<style scoped>
.wrapper {
  background: transparent;
  position: absolute;
  top: 20%;
  left: 0;
  width: 100%;
  height: 100%;
  margin-top: 0;
  overflow: hidden;
}

.bg-bubbles {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}
.bg-bubbles li {
  position: absolute;
  list-style: none;
  display: block;
  font-size: 2.5rem;
  width: 40px;
  height: 40px;
  bottom: -60px;
  -webkit-animation: square 25s infinite;
  animation: square 25s infinite;
  -webkit-transition-timing-function: linear;
  transition-timing-function: linear;
  opacity: 0.6;
}
.bg-bubbles li:nth-child(1) {
  left: 10%;
}
.bg-bubbles li:nth-child(2) {
  left: 20%;
  width: 80px;
  height: 80px;
  -webkit-animation-delay: 2s;
  animation-delay: 2s;
  -webkit-animation-duration: 17s;
  animation-duration: 17s;
}
.bg-bubbles li:nth-child(3) {
  left: 25%;
  -webkit-animation-delay: 4s;
  animation-delay: 4s;
}
.bg-bubbles li:nth-child(4) {
  left: 40%;
  width: 60px;
  height: 60px;
  -webkit-animation-duration: 22s;
  animation-duration: 22s;
  font-size: 3rem;
}
.bg-bubbles li:nth-child(5) {
  left: 70%;
}
.bg-bubbles li:nth-child(6) {
  left: 80%;
  width: 120px;
  height: 120px;
  -webkit-animation-delay: 3s;
  animation-delay: 3s;
  font-size: 2rem;
}
.bg-bubbles li:nth-child(7) {
  left: 32%;
  width: 160px;
  height: 160px;
  -webkit-animation-delay: 7s;
  animation-delay: 7s;
}
.bg-bubbles li:nth-child(8) {
  left: 55%;
  width: 20px;
  height: 20px;
  -webkit-animation-delay: 15s;
  animation-delay: 15s;
  -webkit-animation-duration: 40s;
  animation-duration: 40s;
}
.bg-bubbles li:nth-child(9) {
  left: 25%;
  width: 10px;
  height: 10px;
  -webkit-animation-delay: 2s;
  animation-delay: 2s;
  -webkit-animation-duration: 40s;
  animation-duration: 40s;
  font-size: 3.5rem;
}
.bg-bubbles li:nth-child(10) {
  left: 90%;
  width: 160px;
  height: 160px;
  -webkit-animation-delay: 11s;
  animation-delay: 11s;
}
@-webkit-keyframes square {
  0% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
  100% {
    -webkit-transform: translateY(-800px) rotate(600deg);
    transform: translateY(-800px) rotate(600deg);
  }
}
@keyframes square {
  0% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
  100% {
    -webkit-transform: translateY(-800px) rotate(600deg);
    transform: translateY(-800px) rotate(600deg);
  }
}
</style>
