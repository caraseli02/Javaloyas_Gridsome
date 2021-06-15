<template>
  <section
    id="about"
    class="setBg relative text-white d-flex flex-col justify-center items-center"
  >
    <div class="h-12 w-full bg-gradient-to-b from-black to-transparent"></div>

    <div class="movie" id="movie-card">
      <div class="flex flex-col justify-center items-center  font-medium">
          <h4 class="text-4xl text-black bg-gray-50 p-2 lg:pl-4 lg:-ml-6 rounded">Proximo Evento</h4>
          <span class="text-2xl mb-2 text-gray-700 inline-flex justify-center items-center bg-gray-100 p-2 rounded">
            <svg class="mr-2" width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20" stroke="currentColor" color="#000"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>19 de Junio</span>
          <span class="text-2xl text-gray-700 inline-flex justify-center items-center bg-gray-100 p-2 rounded">
            <svg class="mr-2" width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" color="#000"><path d="M0 0h24v24H0z" fill="none"></path><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5z"></path></svg>Muro</span>
        </div>
      <div class="w-full mx-auto" id="movie-data">
        <div class="flex justify-center items-center">
          <!-- <span class="movie__poster--fill">
            <img
              src="@/assets/img/partitura1.jpg"
            />
          </span> -->
            <img class="w-64 mt-8" src="@/assets/img/conciertoMuro.jpg" />
        </div>
        <!-- <div class="movie__details">
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
        </div> -->
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
  background-image: url(../../assets/img/conciertoMuro.jpg);
  background-size: cover;
  background-position: center;
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
