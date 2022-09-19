<script setup>
import Application from "../../../components/Application/index.vue";
import Dialog from "../../../components/public/dialog.vue";
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from "@headlessui/vue";
import ButtonTail from "../../../components/public/buttonTail.vue";
import TaskLayout from "../../../components/public/taskLayout.vue";
import InputGroup from "../../../components/public/inputGroup.vue";
import DropBox from "../../../components/public/dropBox.vue";
import { ref } from "@vue/reactivity";
import { useRouter } from "vue-router";

const router = useRouter();
const residentId = ref(0);
const tabHeader = ["Мои мероприятия", "Редактировать запрос"];
const Active = ref(false);
const selectedItem = ref(false);

const dropboxFile = ref("");

const openDialog = () => {
  Active.value = !Active.value;
};

const selectItem = (item) => {
  selectedItem.value = { title: item };
  Active.value = !Active.value;

  console.log(selectedItem.value, Active.value);
};

function pushRoute(nameRoute, param) {
  router.push({ name: nameRoute, params: param });
  window.scrollTo(0, 0);
}

const openTable = (item) => {
  residentId.value = item;
  pushRoute("tableResident", { id: residentId.value });
};
</script>


<template>
  <Dialog v-if="selectedItem" @CloseDialog="openDialog" :show="Active">
    <template #title-dialog>
      <div class="text-center">
        {{ selectedItem?.title }}
      </div>
    </template>
    <template #dialog-inner>
      <div
        class="
          mx-auto
          w-full
          px-4
          pt-8
          pb-14
          sm:px-6 sm:pb-20 sm:pt-12
          lg:px-8
          xl:px-10
        "
      >
        <InputGroup
          name="Название мероприятия"
          :value="selectedItem?.title"
          disabled
        />
        <InputGroup
          name="Дата проведения"
          :value="selectedItem?.title"
          disabled
        />
        <DropBox></DropBox>
      </div>
    </template>
    <template #dialog-actions>
      <ButtonTail>Подтвердить</ButtonTail>
      <ButtonTail @click="openDialog" state="danger">Отмена</ButtonTail>
    </template>
  </Dialog>

  <div v-if="false" class="application__form flex flex-col w-full">
    <Application @select-item="openTable" />
  </div>

  <div
    
    class="
      profile-actions
      grow
      pt-6
      pb-9
      md:-mt-2.5 md:pt-1.5 md:pb-0 md:ltr:pl-7
      lg:ltr:pl-10 lg:rtl:pr-10
      xl:ltr:pl-14 xl:rtl:pr-14
    "
  >
    <TabGroup>
      <TabList
        class="
          relative
          mb-6
          bg-body
          text-sm
          uppercase
          before:absolute
          before:left-0
          before:bottom-0
          before:w-full
          before:rounded-sm
          before:bg-gray-200
          sm:gap-8 sm:rounded-none
          md:before:h-0.5
        "
      >
        <div class="flex gap-6 md:gap-8 xl:gap-10">
          <Tab v-slot="{ selected }" v-for="tab in tabHeader" :key="tab">
            <button
              class="
                relative
                py-2
                uppercase
                tracking-wider
                hover:text-primary
                focus:outline-none
                xs:py-2.5
                sm:py-3
              "
              :class="
                selected
                  ? `font-['Raleway-Medium'] text-primary`
                  : `text-blue-600 font-['Raleway-Regular']`
              "
            >
              <span class="flex w-full justify-between px-3 md:px-0">
                {{ tab }}
              </span>
              <span
                class="
                  absolute
                  left-0
                  right-0
                  bottom-0
                  z-[1]
                  h-0.5
                  rounded-lg
                  bg-primary
                  md:z-0
                  translate-effect
                  transition-[width]
                  duration-300
                "
                :class="selected ? 'w-full' : 'w-0'"
              ></span>
            </button>
          </Tab>
        </div>
      </TabList>
      <TabPanels>
        <TabPanel class="focus:outline-none">
          <div class="block">
            <div
              class="
                grid grid-cols-1
                gap-3
                sm:grid-cols-2
                md:grid-cols-1
                lg:grid-cols-2
              "
            >
              <TaskLayout
                class="transition-transform hover:-translate-y-1"
                v-for="item in 6"
                :key="item"
              >
                <div class="flex item-center">
                  <div
                    class="text-blue-600 rounded-full w-8 h-8 sm:w-10 sm:h-10"
                  >
                    <span
                      style="
                        box-sizing: border-box;
                        display: inline-block;
                        overflow: hidden;
                        width: initial;
                        height: initial;
                        background: none;
                        opacity: 1;
                        border: 0px;
                        margin: 0px;
                        padding: 0px;
                        position: relative;
                        max-width: 100%;
                      "
                      ><span
                        style="
                          box-sizing: border-box;
                          display: block;
                          width: initial;
                          height: initial;
                          background: none;
                          opacity: 1;
                          border: 0px;
                          margin: 0px;
                          padding: 0px;
                          max-width: 100%;
                        "
                      >
                        <Icon
                          class="w-8 h-8 sm:w-10 sm:h-10"
                          icon="ion:unlink-sharp"
                          :class="
                            item?.status === 'ongoing'
                              ? 'text-primary'
                              : item?.status === 'fsa'
                              ? 'text-green-500'
                              : 'text-red-500'
                          "
                        />
                      </span>
                    </span>
                  </div>
                  <div class="ltr:ml-2 rtl:mr-2">
                    Title events<span
                      class="
                        block
                        pt-0.5
                        text-xs
                        font-['Raleway-Regular']
                        capitalize
                        text-gray-600
                        dark:text-gray-400
                      "
                      >date events</span
                    >
                  </div>
                </div>
                <div
                  class="
                    overflow-hidden
                    text-ellipsis
                    -tracking-wider
                    ltr:pl-2
                    rtl:pr-2
                  "
                >
                  <ButtonTail @click="selectItem(item)">Открыть</ButtonTail>
                </div>
              </TaskLayout>
            </div>
          </div>
        </TabPanel>
      </TabPanels>
    </TabGroup>
  </div>
</template>