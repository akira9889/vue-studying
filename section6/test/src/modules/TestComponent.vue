<template>
  <div class="red-b">
    <div class="border__blue">
      SCSSのテストです
    </div>
    <div class="background__primary">
      SCSSグローバルテスト
    </div>
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

<style scoped lang="scss">
.red-b {
  border: 1px solid red;
}

.border {
  &__blue {
    border: 1px solid blue;
  }
}

.background__primary {
  background-color: $color-primary;
}
</style>
