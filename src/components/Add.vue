<template>
  <form class="flex gap-1 pb-3">
    <input
      class="w-full border border-gray-300 p-2 rounded-md outline-none text-gray-700"
      type="text"
      name="addtodo"
      v-model="newList"
      id="addtodo"
      placeholder="add your new todo"
    />
    <button @click.prevent="handleList" class="p-2 aspect-square h-12 bg-primary rounded-md text-white">
      <i class="far fa-plus text-xl"></i>
    </button>
  </form>
</template>

<script setup>
import { ref } from "vue";
import { v4 as uuidv4 } from "uuid";
import { useStore } from "vuex";
const store = useStore();

const newList = ref("");

function handleList() {
  if (!newList.value) return alert("Enter a value in the input");

  store.dispatch("addListApi", {
    id: uuidv4(),
    list: newList.value,
    created_at: new Date(),
    is_done: false,
  });

  newList.value = "";
}
</script>
