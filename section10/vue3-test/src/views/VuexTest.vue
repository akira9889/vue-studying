<template>
  <div>
    Vuex
  </div>
  <div>{{ count }}</div>
  <button @click="increment">+</button>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
export default {
  name: 'VuexTest',
  setup() {
    const store = useStore()
    const count = computed(() => {
      return store.state.count
    })

    const increment = () => {
      store.commit('increment')
    }

    return {
      count,
      increment
    }
  },
  data() {
    return {

    };
  },

  mounted() {

  },
};
</script>

<style scoped>

</style>
