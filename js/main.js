const { createApp } = Vue;

createApp({
    data() {
        return {
            taskList:[{
                text: 'prova',
                done: ``
            },
            {
                text: 'creo',
                done: ``
            },
        ],
            newTaskData:{
                text: ''
            }
    }
},

    methods: {}

}).mount("#app")