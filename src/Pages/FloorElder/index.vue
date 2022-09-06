<script setup>
    import BaselineArrowUpward from "../../assets/svg/baseline-arrow-upward.vue";
    import { useRouter } from "vue-router";
    import CardLayout from "../../components/public/cardLayout.vue";
    const router = useRouter()

    function pushRoute(nameRoute, param) {

      router.push({ name: nameRoute, params: param })
      window.scrollTo(0, 0);
    }



    </script>

    <template>
      <div class="wrapper justify-center">
        <section class="flats w-full">
          <div class="flats__intro bas p-8 bg-white rounded-lg shadow-lg">
            <div class="flats__text text-center text-3xl text-primary">
              Выберите квартиру
            </div>
          </div>
          <div class="
              flats__content
              p-8
              mt-24
              grid
              gap-6
              sm:grid-cols-2
              md:grid-cols-2
              lg:grid-cols-3
              3xl:grid-cols-6
            ">
            <div class="flats__info" v-for="item in 6" :key="item">
              <CardLayout class="h-72 rounded-lg" @click="pushRoute('Flat', {id:item+302})">
                <div class="flex flex-col h-full justify-center items-stretch">
                  <div class="
                      cursor-default
                      h-2/3
                      flex
                      relative
                      z-10
                      items-center
                      text-7xl
                      text-primary
                      justify-center
                    ">
                    {{ item + 302 }}
                  </div>
                  <div class="
                      absolute
                      flex
                      justify-center
                      text-blue-opac
                      items-center
                      text-5xl
                      z-0
                      centeredT
                      right-0
                      bottom-0
                      left-0
                      md:top-[20%]
                      lg:top-[15%]
                    ">
                    {{ item + 302 }}
                  </div>
                  <div class="action flex justify-center">
                    <BaselineArrowUpward class="cursor-pointer" />
                  </div>
                </div>
              </CardLayout>
            </div>
          </div>
        </section>
      </div>
    </template>

    <style scoped>
    .centeredT {
      top: 15%;
      transform: translateY(-30%);
    }

    </style>