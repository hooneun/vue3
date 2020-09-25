import { ref } from "vue";
import axios from "axios"

export const countries = (name) => {
    const country = ref({})
    const getCountry = async () => {
        await axios
            .get(`https://restcountries.eu/rest/v2/name/${name}`)
            .then((res) => {
                country.value = res.data[1]
            });
    };

    // onMounted(() => getKoreaCountry)

    return {
        country,
        getCountry
    }
}