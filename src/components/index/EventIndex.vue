<template>
  <section
    id="about"
    class="setBg relative text-white d-flex flex-col justify-center items-center"
  >
    <div class="h-12 w-full bg-gradient-to-b from-black to-transparent"></div>

    <div class="movie" id="movie-card">
      <div class="movie__data" id="movie-data">
        <div class="movie__poster">
          <!-- <span class="movie__poster--fill">
            <img
              src="@/assets/img/partitura1.jpg"
            />
          </span> -->
          <span class="movie__poster--featured">
            <img src="@/assets/img/trueTeatre.jpg" />
          </span>
        </div>
        <div class="movie__details">
          <span
            class="d-flex justify-center items-center mb-24 text-center w-1/2 mx-auto p-2 rounded-lg text-black"
          >
            Próximo evento
          </span>
          <h2 class="movie__title text-black">ALEGRIA EN NUESTROS CORAZONES</h2>
          <p class="movie__plot">
            LOS JAVALOYAS en Concierto, artista invitado Santi Carulla de los
            MUSTANGS
          </p>
          <div class="movie__credits">
            <p><strong>Recinto:</strong> TRUI TEATRE Palma</p>
            <p><strong>INICIO:</strong> 18.30h</p>
            <p><strong>APERTURA DE PUERTAS:</strong> 17.30h</p>
            <p class="buyBtn flex justify-center z-30 items-center">
              <a
                target="_blank"
                rel="noopener noreferrer"
                class="comprar"
                href="https://tickets.janto.es/truiteatre/public/janto/main.php?Nivel=Evento&idEvento=Javaloyas"
                >Comprar entradas</a
              >
            </p>
          </div>
        </div>
      </div>
      <!-- <input
        class="movie__search"
        id="movie-search"
        type="text"
        placeholder="Enter a movie title"
      /> -->
    </div>
    <div class="h-12 w-full bg-gradient-to-t from-black to-transparent"></div>
  </section>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
.buyBtn {
  background: #97fac9;
  width: 70%;
  margin: 0 auto;
  padding: 5px 10px;
  border-radius: 15px;
}

.name {
  color: #adc0ca;
}

.comprar {
  color: black;
}
.setBg {
  background-image: url(../../assets/img/partitura2.jpg);
  background-size: cover;
}

.eventImg {
  background-image: url(../../assets/img/trueTeatre.jpg);
  background-size: cover;
}

@import url("https://fonts.googleapis.com/css?family=Lato:400,900");

$font-body: "Lato", sans-serif;
$font-heading: $font-body;
$base-spacing: 12px;
$base-radius: 0.8em;
$poster-width: 370px;
$poster-span: 300px;
$bp-md: 600px;
$bp-sm: 400px;

h1,
h2,
p,
ul {
  line-height: 1.2;

  &:not(:last-child) {
    margin-bottom: $base-spacing;
  }
}

p,
li {
  font-size: 0.9em;
  line-height: 1.5;
}

p + ul {
  margin-top: -$base-spacing + 2px;
}

h1,
h2,
strong {
  font-weight: 900;
}

input {
  padding: 6px;
  font-family: $font-body;
  font-size: 16px;
  border: 1px solid gainsboro;
  border-radius: 2px;
  -webkit-appearance: none;
}

.list {
  &--inline li {
    display: inline-block;

    &:not(:last-child) {
      margin-right: $base-spacing;
    }
  }
}

.movie {
  position: relative;
  overflow: hidden;
  margin: $base-spacing auto;
  width: 100%;
  max-width: 800px;
  border-radius: $base-radius;
  box-shadow: rgba(black, 0.2) 0 30px 18px -24px;

  &__data {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: $poster-span * 2;

    @media (min-width: $bp-md) {
      flex-direction: row;
    }
  }

  &__search {
    position: absolute;
    top: $base-spacing * 2;
    right: $base-spacing * 2;
    margin: auto;
    width: calc(100% - (#{$base-spacing} * 4));

    @media (min-width: $bp-sm) {
      max-width: 200px;
    }
  }

  &__tags {
    font-size: 0.75em;
    color: darkgray;
  }

  &__poster {
    position: relative;
    display: flex;
    width: 100%;
    background: transparent;
    -webkit-backdrop-filter: blur(5px);

    @media (min-width: $bp-md) {
      margin-right: $base-spacing;
      width: $poster-span;
    }

    &--fill {
      position: absolute;
      overflow: hidden;
      top: -80%;
      bottom: -20%;
      left: -20%;
      width: 150%;
      height: 150%;
      transform: rotate(5deg);

      @media (min-width: $bp-md) {
        top: -20%;
        width: 100%;
      }

      img {
        filter: blur(6px);
        object-fit: cover;
        width: 100%;
        height: 100%;
        transform: scale(1.4);
      }
    }

    &--featured {
      position: relative;
      align-self: center;
      overflow: hidden;
      margin: 0 auto;
      margin-top: $base-spacing * 7;
      width: $poster-width;
      background-color: gainsboro;
      border-radius: 2px;
      box-shadow: rgba(black, 0.6) 0 6px 12px -6px;
      z-index: 1;

      @media (min-width: $bp-md) {
        left: $poster-width / 5;
        margin: auto;
      }

      img {
        width: $poster-width;
        vertical-align: middle;

        &[src="N/A"] {
          min-height: 206px;
          opacity: 0;
        }
      }
    }
  }

  &__details {
    background: rgba(255, 255, 255, 0.4);
    border-radius: 10px;
    border: 1px solid rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    color: black;
    flex: 1;
    padding: $base-spacing * 2;

    @media (min-width: $bp-md) {
      padding: $base-spacing * 6;
    }
  }

  &__title {
    font-family: $font-heading;
    font-size: 2em;
  }

  &__no-results {
    align-self: center;
    justify-self: center;
    width: 100%;
    text-align: center;
  }
}
</style>
