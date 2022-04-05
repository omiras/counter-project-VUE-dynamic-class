// Tu código aquí.

Vue.createApp({
    data() {
        return {
            count: 0
        }
    },

    methods: {
        addCount() {
            this.count++
        },
        lowerCount() {
            this.count--
        }

    }
}).mount('#app')