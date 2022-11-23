const { createApp } = Vue;

createApp({
    data() {
        return {
            taskList: [
                {
                    text: "fare la spesa",
                    done: true
                },
                {
                    text: "ritirare i panni",
                    done: false
                },
            ],
            newTaskData: {
                text: ''
            }
        }
    },

    methods: {}

}).mount("#app")