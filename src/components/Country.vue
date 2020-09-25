<template>
  <div>Country</div>

  <ul>
      <li v-for="(value, key) in country" :key="key">
          {{ key }}: {{ value }}
      </li>
  </ul>
</template>

<script>
import { onMounted } from "vue";
import { countries } from "@/compositions/country";

export default {
  props: {
    name: {
      type: String,
    },
  },
  setup(props) {
    const { country, getKoreaCountry } = countries(props.name);

    onMounted(getKoreaCountry);

    return {
      country,
    };
  },
};
</script>