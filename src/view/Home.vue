<template>
  <div class="min-h-screen flex items-center justify-center">
    <div class="bg-white min-w-[30rem] p-4 rounded-lg shadow-md">
      <h2 class="text-2xl font-semibold pb-3">Todo App</h2>
      <div class="flex flex-col gap-3">
        <AddFrom />
        <ul v-auto-animate class="lists">
          <List v-for="list in lists2" :key="list.id" :list="list" />
          <Empty v-if="isEmptyList" />
        </ul>
        <PendingTasks />
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useStore } from "vuex";

import AddFrom from "../components/Add.vue";
import List from "../components/List.vue";
import Empty from "../components/Empty.vue";
import PendingTasks from "../components/PendingTasks.vue";

const store = useStore();

const lists2 = computed(() => store.getters.getAllLists);
const isEmptyList = computed(() => store.getters.isEmptyList);

store.dispatch("getListsApi");
</script>
