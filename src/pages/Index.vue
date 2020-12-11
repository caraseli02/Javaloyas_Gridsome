<template>
  <Layout :show-logo="false">
    <toTop />
    <Hero id="top" />
    <About />
    <TeamCard />
    <Contact />
  </Layout>
</template>


<script>
import Author from "~/components/Author.vue";
import toTop from "~/components/toTop.vue";
import PostCard from "~/components/PostCard.vue";
import Hero from "../components/index/Hero";
import About from "../components/index/About";
import Contact from "../components/index/Contact";
import TeamCard from "../components/index/TeamCard";
import windowScrollPosition from "@/scrollPosition";

export default {
  metaInfo() {
    return this.$seo({
      title: "Inicio", // Uses the titleTemplate in Gridsome config
      description: "",
      keywords: "Historia, Contacto, Banda",
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
  components: {
    TeamCard,
    Contact,
    About,
    Hero,
    Author,
    PostCard,
    toTop,
  },
  methods: {
    scrollTop: function () {
      this.intervalId = setInterval(() => {
        if (window.pageYOffset === 0) {
          clearInterval(this.intervalId);
        }
        window.scroll(0, window.pageYOffset - 50);
      }, 20);
    },
    scrollListener: function (e) {
      this.visible = window.scrollY > 150;
    },
  },
  mounted: function () {
    window.addEventListener("scroll", this.scrollListener);
  },
  beforeDestroy: function () {
    window.removeEventListener("scroll", this.scrollListener);
  },
  mixins: [windowScrollPosition("position")],
};
</script>
