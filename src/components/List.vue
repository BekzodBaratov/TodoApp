<template>
  <li class="list pb-3">
    <div
      :class="list.is_done ? 'bg-green-300' : 'bg-blue-300'"
      class="rounded-md overflow-hidden flex justify-between group box-border"
    >
      <div
        @click="handleType(list.id, !list.is_done)"
        class="w-12 aspect-square box-border bg-primary text-white flex justify-center items-center"
      >
        <i v-if="!list.is_done" class="far fa-circle text-xl"></i>
        <i v-if="list.is_done" class="far fa-circle-check text-xl"></i>
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
</template>

<script setup>
import { computed } from "vue";
import { useStore } from "vuex";
const store = useStore();

const props = defineProps(["list"]);
const list = computed(() => props?.list);

function handleType(id, bool) {
  store.dispatch("toggleDoneApi", { id: id, bool: bool });
}
function delList(i) {
  store.dispatch("delListApi", { id: i });
}
</script>
