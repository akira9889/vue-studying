<template>
  <div>
    <p>本の詳細</p>
    <p>タイトル：{{ title }}</p>
    <p>本の内容：{{ content }}</p>
  </div>
</template>

<script>
export default {
  // name: '',
  props: {
    id: Number,
    title: String,
    content: String,
  },
  data() {
    return {
      bookIndex: this.$route.params.id -1,
      books: [
        { id: 1, title: 'タイトル1', content: '本の内容1' },
        { id: 2, title: 'タイトル2', content: '本の内容2' },
        { id: 3, title: 'タイトル3', content: '本の内容3' },
      ]
    };
  },
  created() {
    if (this.$route.params.id > this.books.length) {
      this.$router.push('/book')
    }
  },
};
</script>

<style scoped>
</style>
