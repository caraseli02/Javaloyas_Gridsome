<template>
  <layout>
    <div class="parallax flex flex-col justify-center items-center">
      <h1 class="text-white">LOS JAVALOYAS, HOY.</h1>
      <svg
        class="animate-bounce w-6 h-6 text-white text-center"
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
    <section v-for="(text, index) in texts" :key="index">
      <div class="parallax" :class="`p-${index}`">
        <p class="text-white md:w-3/4">{{ text }}</p>
      </div>
    </section>
  </layout>
</template>

<script>
export default {
  name: "About",
  data: function () {
    return {
      texts: [
        "Para la gran mayoría de seguidores y simpatizantes de Los Javaloyas es muy fácil identificarlos cuando , en algún lugar, suena una de sus canciones.",

        "El estilo y matices interpretativos de uno de sus integrantes, Serafín Nebot, son inconfundibles de tal forma que cuando en alguna ocasión actuó en solitario se le proclamó como “la voz” de Los Javaloyas.",

        "Sin embargo este conjunto fue ,inicialmente, concebido por su principal impulsor, Luis Pérez Javaloyas,- hace mas de 70 años- como una formación en la que el rasgo esencial seria la conjunción de diversas voces para apoyar con toda su variedad cualquier interpretación.",

        "En esa armonía coral se apoya toda-o la mayor parte- de su extenso repertorio que abarca desde temas románticos llenos de calidez a otros rebosantes de ritmo",

        "Si repasamos su historial discográfico comprobaremos que, Los Javaloyas, han experimentado con las canciones de mas variadas procedencias y sonidos aportando siempre a cada una de ellas el sello de su gran personalidad y riqueza vocal.",

        "Ahora , el quinteto, sale nuevamente a escena , con el aval de su prestigio y la frescura de la juventud que aportan sus actuales integrantes.",

        "De nuevo sonaran sus canciones con el encanto que siempre tuvieron y la fuerza de una generación que ha sabido unir experiencia y renovación.",
      ],
    };
  },
};
</script>

<style scoped lang="scss">
$color: #20b2aa;
.splide {
  &__autoplay {
    margin-top: 1em;
    text-align: center;
  }

  &__play,
  &__pause {
    border: none;
    background: $color;
    color: white;
    transition: background-color 0.2s linear;
    cursor: pointer;
    padding: 0.3em 1em;
    border-radius: 2em;
    outline: none;

    &:hover {
      background: darken($color, 20%);
    }
  }
}

.parallax {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100vh;
  width: 100%;
  background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
    url(../assets/img/landing2.jpg);
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  background-attachment: fixed;
  color: #fff;
}

.p-1 {
  background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
    url(https://scontent-cdg2-1.xx.fbcdn.net/v/t1.0-9/117314737_10158756411878734_8073963791518692685_o.jpg?_nc_cat=104&ccb=2&_nc_sid=825194&_nc_ohc=rm6Zmcci0A8AX__-g7m&_nc_ht=scontent-cdg2-1.xx&oh=b5779237d5e3a4bc96cea5581ef087d9&oe=5FEE8F97);
}

.p-2,
.p-0 {
  background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
    url(https://scontent-cdg2-1.xx.fbcdn.net/v/t1.0-9/48411354_2195315400535696_7742632596420427776_n.jpg?_nc_cat=111&ccb=2&_nc_sid=825194&_nc_ohc=KYGhr5NcmfIAX9DgCx3&_nc_ht=scontent-cdg2-1.xx&oh=77816a72775588855947253aca7bee52&oe=5FCBE948);
}

.p-3,
.p-14 {
  background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
    url(https://scontent-cdg2-1.xx.fbcdn.net/v/t1.0-9/42669606_2051290248271546_2614851397761368064_n.jpg?_nc_cat=109&ccb=2&_nc_sid=825194&_nc_ohc=pIgmt7yrMB0AX-aczHx&_nc_ht=scontent-cdg2-1.xx&oh=8c5c60a79cae5b0da1694d47ec597e29&oe=5FCF3817);
}

.p-4,
.p-13 {
  background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
    url(https://scontent-cdt1-1.xx.fbcdn.net/v/t1.0-9/74638374_2314394978873994_6858642345953329152_n.jpg?_nc_cat=110&ccb=2&_nc_sid=b9115d&_nc_ohc=M1rYFkKHBpAAX_1xPDY&_nc_ht=scontent-cdt1-1.xx&oh=8665516de13a506e62b807b01133f730&oe=5FDC007C);
}

.p-5,
.p-12 {
  background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
    url(https://scontent-cdt1-1.xx.fbcdn.net/v/t1.0-9/72827600_2313473022299523_7803337857455620096_n.jpg?_nc_cat=106&ccb=2&_nc_sid=b9115d&_nc_ohc=828f_RzSQoAAX-9sZUI&_nc_ht=scontent-cdt1-1.xx&oh=71e847e77c6b31b900cbceb306d95257&oe=5FDC8D78);
}

.p-6,
.p-11 {
  background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
    url(https://scontent-cdg2-1.xx.fbcdn.net/v/t1.0-9/75247493_2313472945632864_7725501350561185792_n.jpg?_nc_cat=108&ccb=2&_nc_sid=b9115d&_nc_ohc=3S21xhgw7EgAX-AUs4-&_nc_ht=scontent-cdg2-1.xx&oh=23991949b4d455799a2ea5a09b4332e9&oe=5FDF05E6);
}

.p-7,
.p-10 {
  background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
    url(https://scontent-cdt1-1.xx.fbcdn.net/v/t1.0-9/49206745_2207675389299697_7617723999581110272_n.jpg?_nc_cat=101&ccb=2&_nc_sid=825194&_nc_ohc=L73zDKKqligAX9dphMb&_nc_ht=scontent-cdt1-1.xx&oh=92cdf6f6535ba2aaf1333d14e4f90eeb&oe=5FDEF718);
}

.p-8,
.p-9 {
  background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
    url(https://scontent-cdg2-1.xx.fbcdn.net/v/t1.0-0/p417x417/48411354_2195315400535696_7742632596420427776_n.jpg?_nc_cat=111&ccb=2&_nc_sid=825194&_nc_ohc=oryBmmauszYAX8uybK-&_nc_ht=scontent-cdg2-1.xx&tp=6&oh=01b00c48996d2e46c95f3dde6e828225&oe=5FDC06A9);
}

p {
  line-height: 1.4;
  background-color: rgba(0, 0, 0, 0.4);
  padding: 10px;
  font-size: clamp(1.3rem, 2.5vw, 4rem);
}
</style>
