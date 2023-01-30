<template>
  <div class="flex justify-center mt-10">
    <div class="bg-white p-8 rounded-lg">
      {{ id }}
    </div>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import { useRoute } from "vue-router";
import { getOneList } from "../plugins/axiosRequsets";

const route = useRoute();
const id = route.params.id;

onMounted(() => {
  getOneList(id);
});
</script>
