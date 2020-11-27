<template>
  <Layout :show-logo="false">
    <Hero/>
    <About/>
    <TeamCard/>
    <Contact/>
  </Layout>
</template>


<script>
import Author from '~/components/Author.vue'
import PostCard from '~/components/PostCard.vue'
import Hero from "../components/index/Hero";
import About from "../components/index/About";
import Contact from "../components/index/Contact";
import TeamCard from "../components/index/TeamCard";

export default {
  metaInfo () {
    return this.$seo({
      title: 'Inicio', // Uses the titleTemplate in Gridsome config
      description: '',
      keywords: 'Historia, Contacto, Banda',
      openGraph: {
        title: 'Los Javaloyas',
        type: 'website'
      },
      twitter: {
        title: 'Los Javaloyas',
        type: 'website'
      },
      link: [],   // any links
      script: []  // any scripts
    })
  },
  components: {
    TeamCard,
    Contact,
    About,
    Hero,
    Author,
    PostCard
  },
}
</script>
