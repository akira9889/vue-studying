<template>
  <div>
    CompositionTest
    <p>{{ name }}</p>
    <p>{{ age }}</p>
    <p>ref:{{ nameRef }}</p>
    <p>reactive: {{ book.title }}</p>
    <p>reactive: {{ book.author[0] }}</p>
    <p>reactiveToRefs: {{ titleRef }}</p>
    <p>reactiveToRefs: {{ authorRef[1] }}</p>
    <button @click="btnClick">クリック</button>
    <p>computed: {{ totalPrice }}</p>
    <div>watch:<input v-model="search"></div>
    <div>watchEffect<input v-model="searchEffect"></div>
  </div>
</template>

<script>
import {ref, reactive, toRefs, computed, watch, watchEffect, onMounted} from 'vue'
export default {
  name: 'CompositionTest',

  setup() {
    let name = '大谷'
    let age = 30
    const nameRef = ref('錦織')

    const book = reactive({
      title: 'タイトル',
      author: ['大谷', '伊藤']
    })

    const bookRefs = reactive({
      titleRef: 'タイトル2',
      authorRef: ['大谷2', '伊藤2']
    })

    const btnClick = e => {
      console.log(book.title);
      console.log(e);
    }

    const search = ref('')
    watch(search, (newValue, oldValue) => {
      console.log(`watch: ${search.value}`);
      console.log(`newValue: ${newValue}`);
      console.log(`oldValue: ${oldValue}`);
    })

    const searchEffect = ref('')
    watchEffect(() => {
      console.log(`watchEffect: ${searchEffect.value}`);
    })

    const item = reactive({
      price: 100,
      number: 1
    })

    const totalPrice = computed(() => {
      return item.price * item.number
    })

    onMounted(() => {
      console.log('onMounted');
    })

    console.log('setup');
    console.log(this);
    console.log(nameRef.value);
    return {
      // name: name,
      // age: age
      //上の省略記法
      name,
      age,
      nameRef,
      book,
      ...toRefs(bookRefs),
      btnClick,
      item,
      totalPrice,
      search,
      searchEffect,
    }
  },
  data() {
    return {
      number: 1,
      sports: 'サッカー'
    };
  },
  created() {
    console.log('created');
    console.log(this);
  },
  mounted() {
    console.log('mounted');
  },
};
</script>

<style scoped>

</style>
