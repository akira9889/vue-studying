<template>
  <div>
    Children
    <grand-children />
  </div>
</template>

<script>
import GrandChildren from "@/components/GrandChildren.vue";
export default {
  name: 'ChildrenView',
  components: {
    GrandChildren
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
