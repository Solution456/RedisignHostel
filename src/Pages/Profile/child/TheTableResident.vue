<script setup>
import ButtonTail from "../../../components/public/buttonTail.vue";
import Table from "../../../components/Table/index.vue";
import Application from "../../../components/Application/index.vue";
import { useTableStore } from "../../../stores/table/table";
import { useRouter } from "vue-router";
import { ref } from "@vue/reactivity";


const props = defineProps({
    id: [String, Number]
})

const { tableData } = useTableStore();

const router = useRouter();


const mockHeader = [
  {
    name: "Имя",
    value: "name",
  },
  {
    name: "Электронная почта",
    value: "email",
  },
  {
    name: "Телефон",
    value: "phone",
  },
  {
    name: "Электронный сайт",
    value: "website",
  },
  {
    name: "Псевдоним",
    value: "username",
  },
];

function pushRoute(nameRoute) {
  router.push({ name: nameRoute});
  window.scrollTo(0, 0);
}

</script>


<template>
    {{props.residentId}}
    <Table
      :mock-header="mockHeader"
      :resident-id="id"
      :table-data="tableData"
    />
    <div class="application__form--button flex justify-center mt-3 mx-auto">
      <ButtonTail @click="pushRoute('profileMain')">Назад</ButtonTail>
    </div>
</template>