<template>
  <layout>
    <section
      class="setBg flex min-h-screen justify-around items-center flex-wrap"
    >
      <g-link
        v-for="edge in $page.allEvents.edges"
        :key="edge.node.id"
        :href="edge.node.url_link"
        class="pseudo-parallax-card-container flex flex-row"
      >
        <div class="mock top left"></div>
        <div class="mock top right"></div>
        <div class="mock bottom left"></div>
        <div class="mock bottom right"></div>

        <div
          class="content-container flex EventImg"
          :style="{ backgroundImage: `url(/${edge.node.cover_image})` }"
        >
          <div class="controls-container flex flex-row">
            <span class="control"></span>
            <span class="control"></span>
            <span class="control"></span>
          </div>

          <div class="message-container">
            <!--<div class="message message-one text-sm flex justify-center items-center">Sábado 7 Noviembre</div>
            <div class="message message-two flex justify-center items-center">20:30H</div>-->
            <div
              class="message message-three flex justify-center z-30 items-center"
            >
              <!-- <g-link class="comprar" href="https://www.truiteatre.es/"
                >Comprar entradas</g-link
              > -->
              <span class="inline-flex justify-center items-center ">
            <svg class="mr-2" width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20" stroke="currentColor" color="#000"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>19 de Junio</span>
             <span class="text-2xl text-gray-700 inline-flex justify-center items-center bg-gray-100 p-2  absolute -ml-72 -mt-8 rounded-full">
            <svg class="mr-2" width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" color="#000"><path d="M0 0h24v24H0z" fill="none"></path><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5z"></path></svg>Muro</span>
            </div>
            <div class="instructions">
              <!--<h2 class="name">Es Gremi </h2>-->
            </div>
          </div>
        </div>
      </g-link>
      
    </section>
  </layout>
</template>

<script>
export default {
  name: "Events",
  metaInfo() {
    return this.$seo({
      title: "Eventos", // Uses the titleTemplate in Gridsome config
      description: "",
      keywords: "Eventos",
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
};
</script>

<page-query>
query {
  allEvents {
    edges {
      node {
        id
        title
        url_link
        cover_image
      }
    }
  }
}
</page-query>

<style scoped lang="scss">
.EventImg{
 background-position: center;
 background-size: cover;
} 

.setBg {
  background-image: url(../assets/img/partitura2.jpg);
  background-size: cover;
}

// colors
$bg-color: #adc0ca;
$content-bg-color: #2e4362;
$violet: #528acf;
$pink-light: #e1b55e;
$green-light: #97fac9;
//dims
$card-width: 320px;
$card-height: 450px;

:root {
  --angleX: 0deg;
  --angleY: 0deg;
}

.flex {
  display: flex;

  &.flex-row {
    flex-flow: row wrap;
  }
}

.pseudo-parallax-card-container {
  width: $card-width;
  height: $card-height;
}

.mock {
  width: 50%;
  height: 50%;
  z-index: 2;

  &.left.top:hover ~ .content-container {
    --angleX: 8deg;
    --angleY: -25deg;
  }

  &.right.top:hover ~ .content-container {
    --angleX: 8deg;
    --angleY: 25deg;
  }

  &.left.bottom:hover ~ .content-container {
    --angleX: -8deg;
    --angleY: -25deg;
  }

  &.right.bottom:hover ~ .content-container {
    --angleX: -8deg;
    --angleY: 25deg;
  }
}

.content-container {
  position: absolute;
  justify-content: center;
  align-items: center;
  width: $card-width;
  height: $card-height;
  text-align: center;
  background-size: cover;
  border-radius: 10px;
  //    cursor: pointer;
  color: black;
  user-select: none;
  transition: box-shadow 0.5s ease, transform 0.65s ease;
  will-change: transform;
  box-shadow: -20px 10px 20px rgba($color: #000000, $alpha: 0.4);
  transform: translateY(0) rotateX(var(--angleX, 0)) rotateY(var(--angleY, 0))
    translateZ(-10px);
  filter: brightness(110%);
}

.controls-container {
  position: absolute;
  top: 5%;
  left: 75%;
  width: 50px;
  height: 20px;
  justify-content: space-between;

  & .control {
    width: 10px;
    height: 10px;
    border-radius: 100%;
    background-color: $content-bg-color;
    box-shadow: -2px 2px 1px black, -0.5px 1px 0px #f0f0f0 inset;
  }
}

.message-container {
  & .message {
    position: absolute;
    top: -5%;
    left: 0;
    width: 180px;
    height: 40px;
    z-index: 200;
    border-radius: 20px;
    box-shadow: -20px 10px 10px rgba(0, 0, 0, 0.2), -1px -1px 0px #a0a0a0 inset;

    &-one {
      background: $violet;
    }

    &-two {
      width: 80px;
      top: 5%;
      left: 0;
      background: $pink-light;
    }

    &-three {
      width: 180px;
      left: 45%;
      background: $green-light;
    }
  }

  & .instructions {
    position: absolute;
    top: 10%;
    width: 100%;
    left: 0%;
  }
}

.name {
  color: #adc0ca;
}

.comprar {
  color: black;
}
</style>
