const { createApp } = Vue;

createApp({
    data() {
        return {
            taskList: [{
                text: 'fare la spesa',
                done: ` `
            },
            {
                text: 'ritirare i panni',
                done: ` `
            },
            ],
            newTaskData: {
                text: ''
            }
        }
    },

    methods: {}

}).mount("#app")