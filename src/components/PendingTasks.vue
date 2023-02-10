<template>
  <div class="footer">
    <span class="text-gray-500 font-semibold">
      You have
      <span class="pendingTasks">{{ TaskCount }}</span>
      pending tasks
    </span>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useStore } from "vuex";
const store = useStore();

const TaskCount = computed(() => store.getters.getListCount);
</script>
