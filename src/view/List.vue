<template>
  <div class="flex flex-col items-center justify-center mt-10">
    <div>
      <div class="bg-white p-8 rounded-lg">
        <p class="max-w-[30rem] min-w-[20rem]">{{ list.list }}</p>
      </div>
      <div class="flex gap-2 py-3">
        <button @click="() => delList()" class="btn text-lg bg-danger">
          <i class="fas fa-trash"></i>
        </button>
        <RouterLink :to="'/list/edit/' + id" class="btn text-lg bg-primary">
          <i class="fas fa-edit"></i>
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { getOneList, delLists } from "../plugins/axiosRequsets";

const route = useRoute();
const router = useRouter();
const id = route.params.id;

const list = ref({});
async function delList() {
  try {
    await delLists(id);
    router.push("/");
  } catch (e) {
    console.log(e);
  }
}

onMounted(async () => {
  list.value = await getOneList(id);
});
</script>
