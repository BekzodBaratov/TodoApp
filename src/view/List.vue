<template>
  <div class="flex flex-col items-center justify-center mt-10">
    <div>
      <div class="bg-white p-8 rounded-lg">
        <p class="max-w-[30rem] min-w-[20rem]">{{ list.list }}</p>
      </div>
      <div class="flex justify-between gap-2 py-3">
        <div class="flex gap-2">
          <button @click="() => delList()" class="btn text-lg bg-danger">
            <i class="fas fa-trash"></i>
          </button>
          <RouterLink :to="'/list/edit/' + id" class="btn text-lg bg-primary">
            <i class="fas fa-edit"></i>
          </RouterLink>
        </div>
        <span class="bg-white rounded-md px-3 flex items-center font-semibold text-gray-400">{{ createDate }}</span>
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

const createDate = ref();

const list = ref({});
async function delList() {
  try {
    await delLists(id);
    router.push("/");
  } catch (e) {
    console.log(e);
  }
}
async function dateFunction() {
  const date = new Date(list.value.created_at);
  const day = date.getDate();
  const month = date.getMonth();
  const monthString = ref("");

  switch (month) {
    case 0:
      monthString.value = "Jan";
      break;
    case 1:
      monthString.value = "feb";
      break;
    case 2:
      monthString.value = "mar";
      break;
    case 3:
      monthString.value = "apr";
      break;
    case 4:
      monthString.value = "may";
      break;
    case 5:
      monthString.value = "jun";
      break;
    case 6:
      monthString.value = "jul";
      break;
    case 7:
      monthString.value = "avg";
      break;
    case 8:
      monthString.value = "sep";
      break;
    case 9:
      monthString.value = "oct";
      break;
    case 10:
      monthString.value = "nov";
      break;
    case 11:
      monthString.value = "dec";
      break;
  }

  return `${monthString.value} ${day}`;
}

onMounted(async () => {
  list.value = await getOneList(id);
  createDate.value = await dateFunction();
});
</script>
