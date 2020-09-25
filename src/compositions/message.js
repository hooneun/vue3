import { computed, ref } from "vue";

export const messages = () => {
    const message = ref("Hi")
    const reverseMessage = computed(() => message.value + "!")
    const clickMessage = () => (message.value += "!")

    return {
        message,
        reverseMessage,
        clickMessage
    }
}

