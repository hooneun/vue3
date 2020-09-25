<template>
  <div>Country</div>

  <ul>
    <li v-for="(value, key) in country" :key="key">{{ key }}: {{ value }}</li>
  </ul>
</template>

<script>
import { onBeforeMount } from "vue";
import { countries } from "@/compositions/country";

export default {
  props: {
    name: {
      type: String,
    },
  },
  setup(props) {
    const { country, getCountry } = countries(props.name);

    onBeforeMount(() => {
      getCountry();
    });

    return {
      country,
    };
  },
};
</script>