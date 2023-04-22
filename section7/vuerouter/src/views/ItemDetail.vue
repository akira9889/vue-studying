<template>
  <div>
    <router-link to="1">Item1</router-link><br>
    <router-link to="2">Item2</router-link><br>
    {{  $route.params.id }}
  </div>
</template>

<script>
export default {
  name: 'ItemDetail',

  data() {
    return {

    };
  },

  created() {
    //同じコンポーネント同士の切り替えの場合はライフサイクルフックが使えない
    console.log('created');
  },
  watch: {
    $route(to, from) {
      console.log(to);
      console.log(from);
    }
  }
};
</script>

<style scoped>
nav a.router-link-exact-active {
  color: #42b983;
}
</style>
