<template>
  <div>{{ message }}</div>
  <button @click="clickMessage">{{ reverseMessage }}</button>

  <div>
    AddNum {{ numbersToString }}
    <add :numbers="numbers" />
  </div>
</template>

<script>
import { computed, onMounted, reactive, ref, watch } from "vue";
import Add from "@/components/Add";
import { messages } from "@/compositions/message";

export default {
  components: { Add },
  setup() {
    const { message, reverseMessage, clickMessage } = messages();

    onMounted(() => (message.value = message.value + "????"));
    watch(message, () => console.log(message));
    const numbers = ref([1, 2, 3]);
    const numbersToString = computed(() => numbers.value.join(", "));

    const count = ref(1)
    const state = reactive({
      count
    })

    console.log(state.count)
    count.value ++
    console.log(count.value)
    console.log(state.count)

    return {
      message,
      reverseMessage,
      clickMessage,
      numbers,
      numbersToString,
    };
  },
};
</script>