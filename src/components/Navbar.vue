<template>
  <section class="ml-4">
    <social-media class="z-30" />
    <div class="nav">
      <div class="nav-wrapper">
        <nav class="nav_xs md:max-w-sm">
          <!-- <g-link to="/events/" class="butn butn__new link uppercase" href="#"
            >Eventos</g-link
          > -->
          <g-link to="/media/" class="butn butn__new link uppercase" href="#"
            >Media</g-link
          >
          <g-link to="/about/" class="butn butn__new link uppercase" href="#"
            >Biografía</g-link
          >
        </nav>
      </div>
    </div>
  </section>
</template>

<script>
import SocialMedia from "./SocialMedia.vue";
export default {
  components: { SocialMedia },
  name: "Navbar",
  data() {
    return {
      navItems: [
        {
          name: "Inicio",
          link: "/",
        },
        { name: "Eventos", link: "events" },
        { name: "Noticias" },
        { name: "Media", link: "media" },
        // {name : "Biografía"},
        { name: "Contacto" },
      ],
    };
  },
};
</script>

<style scoped>
.butn:link,
.butn:visited {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  text-decoration: none;
  padding: 5px 7px;
  margin-right: 13px;
  border-radius: 4px;
  border: none;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease-in-out;
}
.butn::before {
  background: #fff;
  content: "";
  height: 155px;
  opacity: 0;
  position: absolute;
  top: -50px;
  transform: rotate(35deg);
  width: 50px;
  transition: all 3000ms cubic-bezier(0.19, 1, 0.22, 1);
}
.butn::after {
  background: #fff;
  content: "";
  height: 20rem;
  opacity: 0;
  position: absolute;
  top: -50px;
  transform: rotate(35deg);
  transition: all 3000ms cubic-bezier(0.19, 1, 0.22, 1);
  width: 8rem;
}
.butn__new::before {
  left: -50%;
}

.butn__new::after {
  left: -100%;
}

.butn:hover,
.butn:active {
  transform: translateY(-3px);
  box-shadow: 0 10px 20px 0 rgba(0, 0, 0, 0.3);
}

.butn__new:hover::before {
  left: 120%;
  opacity: 0.5s;
}

.butn__new:hover::after {
  left: 200%;
  opacity: 0.6;
}
.butn span {
  z-index: 20;
}
.nav_xs {
  display: flex;
  width: 60vw;
  justify-content: space-around;
}

.button {
  position: relative;
  display: inline-block;
  width: 90px;
  height: 90px;
  background: var(--bg-icon-color);
  background: rgba(0, 0, 0, 0.4);
  margin: 10px;
  border-radius: 25%;
  box-shadow: 0 5px 15px -5px var(--shadow-icon-color);
  color: var(--icon-color);
  overflow: hidden;
}

.button i {
  line-height: 90px;
  font-size: 2.3rem;
  transition: 0.2s linear;
}

.button:hover i {
  transform: scale(1.3);
  color: var(--hover-icon);
}

.button::before {
  content: "";
  position: absolute;
  width: 120%;
  height: 120%;
  background: var(--bg-before);
  transform: rotate(45deg);
  left: -110%;
  top: 90%;
}

.button:hover::before {
  animation: anima 0.5s 1;
  top: -10%;
  left: -10%;
}

@keyframes anima {
  0% {
    top: 90%;
    left: -110%;
  }
  50% {
    top: -30%;
    left: 10%;
  }
  100% {
    top: -10%;
    left: -10%;
  }
}
</style>
