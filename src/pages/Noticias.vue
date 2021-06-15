<template>
  <layout>
    <section class="flex min-h-screen justify-around items-center flex-wrap">
      <div class="pseudo-parallax-card-container flex flex-row">

        <div class="mock top left"></div>
        <div class="mock top right"></div>
        <div class="mock bottom left"></div>
        <div class="mock bottom right"></div>

        <div class="content-container flex">
          <div class="controls-container flex flex-row">
            <span class="control"></span>
            <span class="control"></span>
            <span class="control"></span>
          </div>

          <div class="message-container">
            <div class="message message-one text-sm flex justify-center items-center">Sábado 7 Noviembre</div>
            <div class="message message-two flex justify-center items-center">20:30H</div>
            <!-- <div class="message message-three flex justify-center items-center">Comprar entradas</div> -->
            <div class="instructions">
              <!--<h2 class="name">Es Gremi </h2>-->

            </div>
          </div>
        </div>
      </div>
    </section>
  </layout>
</template>

<script>
export default {
  name: "Noticias"
}
</script>

<style scoped lang="scss">
// colors
$bg-color: #adc0ca;
$content-bg-color: #2e4362;
$violet: #528acf;
$pink-light: #e1b55e;
$green-light: #97fac9;
//dims
$card-width: 300px;
$card-height: 350px;

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

  &.left.bottom:hover ~ .content-container {
    --angleX: -8deg;
    --angleY: -25deg;
  }

  &.right.top:hover ~ .content-container {
    --angleX: 8deg;
    --angleY: 25deg;
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
  background-image: url("http://grupesgremi.com/fotos_articulos/esgremi03_01.jpg");
  border-radius: 10px;
  //    cursor: pointer;
  color: black;
  user-select: none;
  transition: box-shadow 0.5s ease, transform 0.65s ease;
  will-change: transform;
  box-shadow: -20px 10px 20px rgba($color: #000000, $alpha: 0.4);
  transform: translateY(0) rotateX(var(--angleX, 0)) rotateY(var(--angleY, 0)) translateZ(-10px);
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
      width:180px;
      left: 45%;
      top: 95%;
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

</style>
