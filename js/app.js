// Tu código aquí.

import {
  createApp,
  ref,
} from "https://unpkg.com/vue@3/dist/vue.esm-browser.js";

createApp({
  setup() {
    const counter = ref(0);

    const increaseValue = () => {
      counter.value++;
    };

    const decreaseValue = () => {
      counter.value--;
    };

    return {
      counter,
      increaseValue,
      decreaseValue,
    };
  },
}).mount("#app");
