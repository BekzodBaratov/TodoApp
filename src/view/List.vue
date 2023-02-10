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
        <span class="bg-white rounded-md px-3 flex items-center font-semibold text-gray-400">{{
          dateString(list.created_at)
        }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useStore } from "vuex";
import { dateString } from "../helpers";

const store = useStore();
const route = useRoute();
const router = useRouter();
const id = route.params.id;

const list = computed(() => store.getters.getOneList);

async function delList() {
  await store.dispatch("delListApi", { id });
  router.push("/");
}

store.dispatch("getOneListApi", { id });
</script>
