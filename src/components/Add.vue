<template>
  <div>Number Add: {{ addNumbers }}</div>
</template>
<script>
import { computed } from "vue";
export default {
  props: {
    numbers: { type: Array },
  },
  setup(props) {
    const addNumbers = computed(() => {
      return props.numbers.reduce((prev, curr) => prev + curr);
    });

    return {
      addNumbers,
    };
  },
};
</script>