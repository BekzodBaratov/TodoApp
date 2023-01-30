<template>
  <div class="container">
    <div class="bg-white min-w-[30rem] p-4 rounded-lg shadow-md">
      <h2 class="text-2xl font-semibold pb-3">Todo App</h2>
      <div class="flex flex-col gap-3">
        <div>
          <form class="flex gap-1">
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
        </div>
        <ul class="lists">
          <li v-for="list in lists" :key="list.id" class="list pb-3">
            <div class="bg-gray-100 rounded-md overflow-hidden flex justify-between group">
              <RouterLink class="inline-block w-full" :to="'/list/' + list.id">
                <p class="py-2 pl-2 line-clamp-1 max-w-[25rem] leading-loose">{{ list.list }}</p>
              </RouterLink>
              <span
                @click="() => delList(list.id)"
                class="del hidden group-hover:flex text-white duration-200 cursor-pointer bg-red-500 p-2 w-12 rounded-md items-center justify-center"
              >
                <i class="fas fa-trash"></i>
              </span>
            </div>
          </li>
          <li v-if="lists.length == 0" class="listempty">
            <p class="text-center py-5 text-lg font-semibold text-gray-400">Todo Empty</p>
          </li>
        </ul>
        <div class="footer">
          <span
            >You have <span class="pendingTasks">{{ lists.length }}</span> pending tasks</span
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { getLists, delLists, postList } from "../plugins/axiosRequsets";
import { v4 as uuidv4 } from "uuid";

const newList = ref("");
const lists = ref("");

async function handleList() {
  try {
    if (!newList.value) return;
    await postList({
      id: uuidv4(),
      list: newList.value,
      created_at: new Date(),
      type: false,
    });
    newList.value = "";
    lists.value = await getLists();
  } catch (e) {
    console.log(e);
  }
}
onMounted(async () => (lists.value = await getLists()));

async function delList(i) {
  try {
    await delLists(i);
    lists.value = await getLists();
  } catch (e) {
    console.log(e);
  }
}
</script>

<style scoped lang="scss">
.container {
  @apply min-h-screen flex items-center justify-center;
}
</style>
