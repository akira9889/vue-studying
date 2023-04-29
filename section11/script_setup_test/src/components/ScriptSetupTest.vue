<script setup>
import { ref } from "vue";

const props = defineProps({
  title: String
})

const emitTest = defineEmits(['custom-event'])

const count = ref(0)

const increment = () => {
  count.value++
}

const decrement = () => {
  count.value--
}
</script>
<template>
  <h1>{{ count }}</h1>
  <p>{{ props.title }}</p>
  <button @click="emitTest('custom-event', '子からの値')">エミット</button>
  <button @click="increment">Increment</button>
  <button @click="decrement">Decrement</button>
</template>


<style scoped>
</style>
