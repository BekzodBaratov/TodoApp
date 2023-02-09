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
        <ul v-auto-animate class="lists">
          <li v-for="list in lists" :key="list.id" class="list pb-3">
            <div
              :class="list.type ? 'bg-green-300' : 'bg-blue-300'"
              class="rounded-md overflow-hidden flex justify-between group box-border"
            >
              <div
                @click="handleType(list.id, !list.type)"
                class="w-12 aspect-square box-border bg-primary text-white flex justify-center items-center"
              >
                <i v-if="!list.type" class="far fa-circle text-xl"></i>
                <i v-if="list.type" class="far fa-circle-check text-xl"></i>
              </div>
              <RouterLink class="inline-block box-border w-full" :to="'/list/' + list.id">
                <p class="py-2 pl-2 line-clamp-1 max-w-[24rem] leading-loose">{{ list.list }}</p>
              </RouterLink>
              <span
                @click="() => delList(list.id)"
                class="delete md:opacity-0 group-hover:opacity-100 box-border text-white duration-200 cursor-pointer bg-red-500 p-2 w-12 rounded-md flex items-center justify-center"
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
import { ref, watch } from "vue";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import soundAdd from "../assets/paper_add.wav";
import soundTear from "../assets/paper_tear.wav";
const addAudio = new Audio(soundAdd);
const tearAudio = new Audio(soundTear);

const newList = ref("");
const lists = ref("");

async function handleList() {
  if (!newList.value) {
    alert("Enter a value in the input");
    return;
  }
  try {
    addAudio.play();
    await axios.post(`lists`, {
      id: uuidv4(),
      list: newList.value,
      created_at: new Date(),
      type: false,
    });
    newList.value = "";
    const res = await axios.get("lists");
    lists.value = res.data;
  } catch (e) {
    alert("type 'npm run dev' and 'npm run server' in the terminal to start the site!");
    console.log(e);
  }
}
async function handleType(id, bool) {
  try {
    await axios.patch(`/lists/${id}`, { type: bool });
    const res = await axios.get("/lists/");
    lists.value = res.data;
  } catch (e) {
    alert("type 'npm run dev' and 'npm run server' in the terminal to start the site!");
    console.log(e);
  }
}

async function fetchLists() {
  try {
    const res = await axios.get("/lists/");
    lists.value = res.data;
  } catch (e) {
    alert("type 'npm run dev' and 'npm run server' in the terminal to start the site!");
    console.log(e);
  }
}
fetchLists();

async function delList(i) {
  try {
    tearAudio.play();
    await axios.delete(`/lists/${i}`);
    const res = await axios.get(`lists`);
    lists.value = res.data;
  } catch (e) {
    alert("type 'npm run dev' and 'npm run server' in the terminal to start the site!");
    console.log(e);
  }
}
watch(
  () => lists.value,
  () => {
    if (lists.value) {
      lists?.value?.reverse();
    }
  }
);
</script>

<style scoped lang="scss">
.container {
  @apply min-h-screen flex items-center justify-center;
}
</style>
