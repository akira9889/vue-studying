<template>
  <div>
    PropsEmitTest
  </div>
  <div>{{ setupBooks }}</div>
  <div>{{ dataBooks }}</div>
  <ul>
    <li v-for="book in setupBooks" :key="book">
      {{ book.title }}
    </li>
  </ul>
  <button @click="emitTest">emitテスト</button>
</template>

<script>
export default {
  name: 'PropsEmitTest',
  props: {
    setupBooks: Array,
    dataBooks: Array,
  },

  setup(props, {emit}) {
    console.log(props.setupBooks[0].title);
    console.log(props.dataBooks);

    const emitTest = () => {
      emit('custom-event', '子の値')
    }

    return {
      emitTest
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
