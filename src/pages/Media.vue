<template>
  <layout>
    <div class="ml-10 mt-6">
      <!--<div class="cursor" id="cursor"></div>-->
      <!-- <div class="progress" v-if="!hidden">
        <div class="progress__bar" :style="{ width : `${progressWidth}%` }"></div>
      </div> -->
      <div
        class="full-screen"
        :style="{ backgroundImage: `url(${fullScreenImage})` }"
        v-if="hidden"
      >
        <div class="full-screen__title">{{ fullScreenTitle }}</div>
        <div class="full-screen__close" @click="closeFullScreen"></div>
      </div>
      <article>
        <section
          class="gallery"
          :class="{ 'gallery--hidden': hidden }"
          ref="gallery"
          @scroll="progress"
        >
          <div class="gallery__wrapper">
            <figure
              class="gallery__item"
              v-for="(img, index) in gallery"
              @click="openFullScreen(index)"
            >
              <img :src="img.src" />
            </figure>
          </div>
        </section>
        <div
          v-if="!hidden"
          class="absolute ml-4 mb-4 bottom-0 left-0 transform -rotate-90 z-0"
        >
          <svg
            class="animate-bounce w-6 h-6 text-center pl-2"
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
      </article>
    </div>
  </layout>
</template>

<script>
export default {
  name: "Media",
  metaInfo() {
    return this.$seo({
      title: "Media", // Uses the titleTemplate in Gridsome config
      description: "",
      keywords: "Foto, video",
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
      fullScreenImage: "",
      fullScreenTitle: "",
      hidden: false,
      scrollCount: 0,
      progressWidth: 0,
      gallery: [
        {
          title: "",
          src:
            "https://scontent-cdg2-1.xx.fbcdn.net/v/t1.0-9/125974052_10159025257368734_6948744665191034581_o.jpg?_nc_cat=100&ccb=2&_nc_sid=825194&_nc_ohc=GI2bNXR9bj8AX9ieQHB&_nc_ht=scontent-cdg2-1.xx&oh=867a29656e2fd86928f8b5cb34e17efb&oe=5FDF732C",
        },
        {
          title: "",
          src:
            "https://scontent-cdg2-1.xx.fbcdn.net/v/t1.0-9/122893036_10158969910313734_7608709961661746234_o.jpg?_nc_cat=108&ccb=2&_nc_sid=825194&_nc_ohc=hdUeFnJunMUAX-Hhmux&_nc_ht=scontent-cdg2-1.xx&oh=a0055b407f0517f7f161ae1cc7aa058b&oe=5FDD670B",
        },
        {
          title: "",
          src:
            "https://scontent-cdt1-1.xx.fbcdn.net/v/t1.0-9/121544179_3702600076438567_5412291064163947463_n.jpg?_nc_cat=101&ccb=2&_nc_sid=825194&_nc_ohc=z8DyJgoHjwEAX9fBifJ&_nc_ht=scontent-cdt1-1.xx&oh=ab5632665927cc0e63bf51cba92cf936&oe=5FDCC7A2",
        },
        {
          title: "",
          src:
            "https://scontent-cdt1-1.xx.fbcdn.net/v/t1.0-9/120840951_2168155873328168_7087705745578095571_o.jpg?_nc_cat=103&ccb=2&_nc_sid=825194&_nc_ohc=2pop4Nb9r0MAX-eFsRN&_nc_ht=scontent-cdt1-1.xx&oh=e75486c5b7b9e9dc2cf14f654a2a39f0&oe=5FDD12F3",
        },
      ],
    };
  },
  methods: {
    openFullScreen: function (i) {
      this.fullScreenImage = this.gallery[i].src;
      this.fullScreenTitle = this.gallery[i].title;
      this.hidden = true;
    },
    closeFullScreen: function () {
      this.hidden = false;
    },
    progress: function () {
      const scrollPosition = this.$refs.gallery.scrollLeft;
      const ww = (
        (scrollPosition /
          (this.$refs.gallery.scrollWidth - this.$refs.gallery.offsetWidth)) *
        100
      ).toFixed(0);

      this.progressWidth = scrollPosition > this.scrollCount ? ww : ww;

      this.scrollCount = scrollPosition;
    },
  },
};
</script>

<style scoped lang="scss">
$parent: gallery;

body {
  overflow: hidden;
}

.cursor {
  position: absolute;
  z-index: 1000;
  pointer-events: none;
  font-size: 20px;
  mix-blend-mode: exclusion;

  @media (pointer: coarse) {
    display: none;
  }

  &::before {
    content: "hold shift";
    position: absolute;
    top: 50%;
    left: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    width: 75px;
    height: 75px;
    background: pink;
    transform-origin: center;
    transform: translate(-50%, -50%);
    color: #000;
    text-transform: uppercase;
    border-radius: 50%;
    font: 700 0.5em Arial;
  }

  &--scroll {
    &::before {
      content: "scroll";
    }
  }
}

.full-screen {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 90vh;
  margin-top: 10vh;
  background-color: red;
  z-index: 0;
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;

  &__title {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  &__close {
    position: absolute;
    bottom: 5%;
    left: 50%;
    transform: translateX(-50%);
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: pink;

    &::before,
    &::after {
      content: "";
      position: absolute;
      top: 50%;
      left: 50%;
      width: 1px;
      height: 30px;
      background-color: #000;
    }

    &::before {
      transform: translate(-50%, -50%) rotate(45deg);
    }

    &::after {
      transform: translate(-50%, -50%) rotate(-45deg);
    }
  }
}

.#{$parent} {
  position: relative;
  width: 100%;
  height: 90vh;
  overflow: auto;

  &::-webkit-scrollbar {
    display: none;
  }

  &__wrapper {
    position: absolute;
    top: 0;
    left: 0;
    display: inline-flex;
    overflow: auto;
    overflow-y: hidden;
  }

  &__item {
    position: relative;
    width: 480px;
    height: 80vh;
    transition: transform 0.5s ease, opacity 0.25s ease;

    img {
      width: 100%;
      object-fit: cover;
      object-position: center;
      height: inherit;
      filter: grayscale(1);
      transition: filter 0.3s ease;
    }

    &:hover {
      img {
        filter: grayscale(0);
      }
    }
  }

  &--hidden {
    pointer-events: none;

    .#{$parent}__item {
      opacity: 0;

      &:nth-child(even) {
        transform: translateY(-100%);
      }

      &:nth-child(odd) {
        transform: translateY(100%);
      }
    }
  }
}

.progress {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 5px;
  background-color: #fff;
  z-index: 1001;

  &__bar {
    position: absolute;
    top: 0;
    left: 0;
    height: inherit;
    background-color: pink;
    transition: width 0.2s ease;
  }
}
</style>
