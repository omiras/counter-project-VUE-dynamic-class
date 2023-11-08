// Tu código aquí.

import {
  createApp,
  ref,
  computed,
} from "https://unpkg.com/vue@3/dist/vue.esm-browser.js";

createApp({
  setup() {
    // 1. Creamos una variable para almacenar el valor del contador
    const counter = ref(0);

    // 3. Creamos una función que admite un parámetro, que es el valor a sumar o decrementar
    const updateCounter = (x) => {
      counter.value = counter.value + x;
    };

    const updateColor = computed(() => {
      if (counter.value > 0) {
        return "text-success";
      } else if (counter.value < 0) return "text-danger";
    });

    return {
      counter,
      updateCounter,
      updateColor,
    };
  },
}).mount("#app");
