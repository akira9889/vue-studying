<template>
  <div>
    GrandChildren
  </div>
  <div>{{ userName }}</div>
</template>

<script>
export default{
  name: 'GrandChildren',
  data() {
    return {
    }
  },
  inject: ['userName']
};
</script>

<style scoped>

</style>
