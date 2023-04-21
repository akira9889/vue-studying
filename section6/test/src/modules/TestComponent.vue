<template>
  <div class="red-b">
    テストです
    {{ testData }}
  </div>
</template>

<script>
export default {
  name: 'TestComponent',

  data() {
    return {
      testData: 'テストdataです'
    };
  },

  mounted() {

  },
};
</script>

<style scoped>
.red-b {
  border: 1px solid red;
}
</style>
