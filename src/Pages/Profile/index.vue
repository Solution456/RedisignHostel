<script setup>
import InfoBlock from "../../components/public/InfoBlock.vue";
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from "@headlessui/vue";
import ButtonTail from "../../components/public/buttonTail.vue";
import TaskLayout from "../../components/public/taskLayout.vue";
import Dialog from "../../components/public/dialog.vue";
import InputGroup from "../../components/public/inputGroup.vue";
import DropBox from "../../components/public/dropBox.vue";
import Application from "../../components/Application/index.vue";
import Table from "../../components/Table/index.vue";
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useTableStore } from '../../stores/table/table';

const { tableData } = useTableStore();
const tabHeader = ["Мои мероприятия", "Редактировать запрос"];
const router = useRouter()
const Active = ref(false);
const selectedItem = ref(false);
const residentId = ref(false);
const mockHeader = [
  {
    name: "Имя",
    value: "name"
  },
  {
    name: "Электронная почта",
    value: "email"
  },
  {
    name: "Телефон",
    value: "phone"
  },
  {
    name: "Электронный сайт",
    value: "website"
  },
  {
    name: "Псевдоним",
    value: "username"
  }
]

function pushRoute(nameRoute, param) {
  router.push({ name: nameRoute, params: param })
  window.scrollTo(0, 0);
}

const dropboxFile = ref('')

const openDialog = () => {
  Active.value = !Active.value;
  console.log(Active.value);
};

const selectItem = (item) => {
  selectedItem.value = { title: item };
  Active.value = !Active.value;

  console.log(selectedItem.value, Active.value);
};

const openTable = (item) => {
  residentId.value = item;
}

</script>

<template>
  <div class="wrapper">
    <Dialog v-if="selectedItem" @CloseDialog="openDialog" :show="Active">
      <template #title-dialog>
        <div class="text-center">
          {{ selectedItem?.title }}
        </div>
      </template>
      <template #dialog-inner>
        <div class="
          mx-auto
          w-full
          px-4
          pt-8
          pb-14
          sm:px-6 sm:pb-20 sm:pt-12
          lg:px-8
          xl:px-10
        ">
          <InputGroup name="Название мероприятия" :value="selectedItem?.title" disabled />
          <InputGroup name="Дата проведения" :value="selectedItem?.title" disabled />
          <DropBox></DropBox>
          <div class="
            mx-auto
            w-full
            px-4
            pt-8
            pb-14
            sm:px-6 sm:pb-20 sm:pt-12
            lg:px-8
            xl:px-10
          ">
            <InputGroup name="Название мероприятия" :value="selectedItem?.title" disabled />
            <InputGroup name="Дата проведения" :value="selectedItem?.title" disabled />
            <DropBox v-model="dropboxFile"></DropBox>
          </div>
        </div>
      </template>
      <template #dialog-actions>
        <ButtonTail>Подтвердить</ButtonTail>
        <ButtonTail @click="openDialog" state="danger">Отмена</ButtonTail>
      </template>
    </Dialog>
    <div class="profile-main mx-auto flex w-full shrink-0 flex-col md:px4 xl:px-6">
      <figure class="
        relative
        shrink-0
        overflow-hidden
        z-2
        mx-auto
        -mt-12
        sm:-mt-14
        md:mx-0 md:-mt-16
        xl:mx-0
        rounded-full
        border-white border-[5px]
        h-24
        w-24
        sm:h-28 sm:w-28
        md:h-32 md:w-32
        shadow-lg
      ">
        <span style="
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
        ">
          <span style="
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
          ">
            <img alt="" aria-hidden="true"
              src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27160%27%20height=%27160%27/%3e"
              style="
                display: block;
                max-width: 100%;
                width: initial;
                height: initial;
                background: none;
                opacity: 1;
                border: 0px;
                margin: 0px;
                padding: 0px;
            " />
          </span>
          <img alt="Author" src="https://i.pinimg.com/564x/04/38/f6/0438f6019adc4f0a1f8023ab5577fee4.jpg"
            decoding="async" data-nimg="intrinsic" class="rounded-full" style="
              position: absolute;
              inset: 0px;
              box-sizing: border-box;
              padding: 0px;
              border: none;
              margin: auto;
              display: block;
              width: 0px;
              height: 0px;
              min-width: 100%;
              max-width: 100%;
              min-height: 100%;
              max-height: 100%;
          " />
        </span>
      </figure>
      <div class="
        flex
        w-full
        flex-col
        pt-4
        md:flex-row md:pt-10
        lg:flex-row
        xl:pt-12
      ">
        <div class="
          shrink-0
          border-dashed border-gray-200
          md:w-72
          ltr:md:border-r
          md:rtl:border-l md:rtl:pl-7
          lg:ltr:pr-10 lg:rtl:pl-10
          xl:ltr:pr-10 xl:rtl:pl-14
        ">
          <div class="
            profile-main__text
            text-center
            ltr:md:text-left
            rtl:md:text-right
            mb-5
          ">
            <h2 class="
              text-xl
              font-['Raleway-Medium']
              tracking-tighter
              text-blue-700
              xl:text-2xl
            ">
              Erik Askarov
            </h2>
            <div class="
              mt-1
              text-sm
              font-['Raleway-Medium']
              tracking-tighter
              text-blue-500
              xl:mt-3
            ">
              6 этаж - 303 комната
            </div>
          </div>
          <div class="profile-main__bio hidden md:block">
            <InfoBlock class="border-y">
              <template #title> Номер телефона </template>
              <template #description> +7-399-333-25-25 </template>
            </InfoBlock>
            <InfoBlock class="border-y">
              <template #title> баллы </template>
              <template #description> 150 </template>
            </InfoBlock>
            <InfoBlock class="border-y">
              <template #title> Social </template>
              <template #description>
                <a href="vk/com" target="_blank" class="
                  mb-2
                  flex
                  items-center
                  gap-x-2
                  text-sm
                  transition
                  last:mb-0
                  hover:text-blue-700 hover:underline
                ">
                  <Icon icon="ion:logo-vk" height="24px" />
                  @link/social
                </a>
              </template>
            </InfoBlock>
          </div>
        </div>

        <div class="application__form flex flex-col w-full">
          <Application v-if="!residentId" @select-item="openTable"
            @click="pushRoute('tableResident', {id: residentId})" />
          <Table v-else :mock-header="mockHeader" :resident-id="residentId" :table-data="tableData" />
          <div class="application__form--button w-4 mx-auto">
            <ButtonTail @click="residentId = false">Назад</ButtonTail>
          </div>

        </div>

        <div class="
            profile-actions
            grow
            pt-6
            pb-9
            md:-mt-2.5 md:pt-1.5 md:pb-0 md:ltr:pl-7
            lg:ltr:pl-10 lg:rtl:pr-10
            xl:ltr:pl-14 xl:rtl:pr-14
          ">
          <TabGroup>
            <TabList class="
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
              ">
              <div class="flex gap-6 md:gap-8 xl:gap-10">
                <Tab v-slot="{ selected }" v-for="tab in tabHeader" :key="tab">
                  <button class="
                      relative
                      py-2
                      uppercase
                      tracking-wider
                      hover:text-primary
                      focus:outline-none
                      xs:py-2.5
                      sm:py-3
                    " :class="
                      selected
                        ? `font-['Raleway-Medium'] text-primary`
                        : `text-blue-600 font-['Raleway-Regular']`
                    ">
                    <span class="flex w-full justify-between px-3 md:px-0">
                      {{ tab }}
                    </span>
                    <span class="
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
                      " :class="selected ? 'w-full' : 'w-0'"></span>
                  </button>
                </Tab>
              </div>
            </TabList>
            <TabPanels>
              <TabPanel class="focus:outline-none">
                <div class="block">
                  <div class="
                      grid grid-cols-1
                      gap-3
                      sm:grid-cols-2
                      md:grid-cols-1
                      lg:grid-cols-2
                    ">
                    <TaskLayout class="transition-transform hover:-translate-y-1" v-for="item in 6" :key="item">
                      <div class="flex item-center">
                        <div class="
                            text-blue-600
                            rounded-full
                            w-8
                            h-8
                            sm:w-10 sm:h-10
                          ">
                          <span style="
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
                            "><span style="
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
                              ">
                              <Icon class="w-8 h-8 sm:w-10 sm:h-10" icon="ion:unlink-sharp" :class="
                                item?.status === 'ongoing'
                                  ? 'text-primary'
                                  : item?.status === 'fsa'
                                  ? 'text-green-500'
                                  : 'text-red-500'
                              " />
                            </span>
                          </span>
                        </div>
                        <div class="ltr:ml-2 rtl:mr-2">
                          Title events<span class="
                              block
                              pt-0.5
                              text-xs
                              font-['Raleway-Regular']
                              capitalize
                              text-gray-600
                              dark:text-gray-400
                            ">date events</span>
                        </div>
                      </div>
                      <div class="
                          overflow-hidden
                          text-ellipsis
                          -tracking-wider
                          ltr:pl-2
                          rtl:pr-2
                        ">
                        <ButtonTail @click="selectItem(item)">Открыть</ButtonTail>
                      </div>
                    </TaskLayout>
                  </div>
                </div>
              </TabPanel>
            </TabPanels>
          </TabGroup>
        </div>
        <!-- <Application v-if="!residentId" @selectItem="openTable"></Application>
        <Table v-else></Table> -->
      </div>
    </div>
  </div>
</template>



<style>

</style>