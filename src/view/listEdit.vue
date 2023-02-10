<template>
  <div class="flex flex-col items-center justify-center mt-10">
    <form class="space-y-3">
      <div class="bg-white p-6 rounded-lg">
        <textarea
          class="outline-none max-w-[30rem] min-w-[20rem] h-72 border border-gray-300 p-2 rounded-md"
          type="text"
          v-model="list"
          name="name"
          id="name"
        >
        </textarea>
      </div>
      <button @click.prevent="handleForm" class="btn bg-green-500">save</button>
    </form>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { getOneList, patchList } from "../plugins/axiosRequsets";
const route = useRoute();
const router = useRouter();
const id = route.params.id;

const list = ref("");

onMounted(async () => {
  try {
    const res = await getOneList(id);
    list.value = res.list;
  } catch (e) {
    console.log(e);
  }
});

async function handleForm() {
  try {
    await patchList({ list: list.value }, id);
    router.push("/");
  } catch (e) {
    console.log(e);
  }
}
</script>
