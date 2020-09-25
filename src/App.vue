<template>
  <div>{{ message }}</div>
  <button @click="clickMessage">{{ reverseMessage }}</button>

  <div>
    AddNum {{ numbersToString }}
    <add :numbers="numbers" />
  </div>

  <div>
    {{ repositories.greeting }}
  </div>

  <country :name="countryName" />
</template>

<script>
import { computed, onBeforeMount, onMounted, reactive, ref, watch } from "vue";
import Add from "@/components/Add";
import Country from "@/components/Country";
import { messages } from "@/compositions/message";

export default {
  components: {
    Add,
    Country,
  },
  setup() {
    const { message, reverseMessage, clickMessage } = messages();

    const numbers = ref([1, 2, 3]);
    const numbersToString = computed(() => numbers.value.join(", "));

    const count = ref(1);
    const state = reactive({
      count,
    });
    const countryName = ref("korea");

    let repositories = ref({});

    const getSyncTest = async () => {
      await setTimeout(() => {
        repositories.value = {
          greeting: "Hi",
        };
      }, 3000);
    };

    // console.log(state.count);
    count.value++;
    // console.log(count.value);
    // console.log(state.count);

    onBeforeMount(() => {
    });

    onMounted(() => {
      message.value = message.value + "????";
      getSyncTest();
    });

    watch(message, () => console.log(message));

    return {
      state,
      message,
      reverseMessage,
      clickMessage,
      numbers,
      numbersToString,
      repositories,
      countryName,
    };
  },
};
</script>