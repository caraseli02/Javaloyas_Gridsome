<template>
  <section id="about" class="relative py-20 bg-black text-white">
    <div class="container mx-auto px-4">
      <div class="items-center flex flex-wrap">
        <div
            class="w-full md:w-4/12 ml-auto mr-auto px-4"
            data-aos="fade-right"
        >
          <g-image
              alt="..."
              class="max-w-full rounded-lg shadow-lg"
              src="@/assets/img/grupo.png"
          />
        </div>
        <div
            class="w-full md:w-5/12 ml-auto mr-auto px-4"
            data-aos="fade-left"
        >
          <div class="md:pr-12">
            <small class="text-orange-500">Sobre el grupo</small>
            <h3 class="text-4xl uppercase font-bold">Un grupo de profesionales</h3>
            <p class="mt-4 text-lg leading-relaxed">
              El mas veterano de los grupos pop españoles,
            </p>
            <ul class="list-none mt-6">
              <li class="py-2">
                <div class="flex items-center">
                  <div>
                        <span
                            class="font-semibold inline-block py-3 mr-3 text-orange-500"
                        ><i class="fas fa-dumbbell fa-2x"></i
                        ></span>
                  </div>
                  <div>
                    <h4 class="text-xl">
                      Rock de los sesenta
                    </h4>
                  </div>
                </div>
              </li>
              <li class="py-2">
                <div class="flex items-center">
                  <div>
                        <span
                            class="font-semibold inline-block py-3 mr-3 text-orange-500"
                        ><i class="fas fa-hard-hat fa-2x"></i
                        ></span>
                  </div>
                  <div>
                    <h4 class="text-xl">
                      Rumbas o Sambas
                    </h4>
                  </div>
                </div>
              </li>
              <li class="py-2">
                <div class="flex items-center">
                  <div>
                        <span
                            class="font-semibold inline-block py-3 mr-3 text-orange-500"
                        ><i class="fas fa-users fa-2x"></i
                        ></span>
                  </div>
                  <div>
                    <h4 class="text-xl">Siempre un sonido fresco</h4>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "About"
}
</script>

<style scoped>

</style>
