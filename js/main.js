const { createApp } = Vue;

createApp({
    data() {
        return {
            taskList: [
                {
                    text: "fare la spesa",
                    done: true
                },
            ],

            newTaskText: ""
        }
    },

    methods: {
        addList() {
            this.taskList.push({ 
                text: this.newTaskText, //vado a inserire la stringa nell'array di oggetti
                done: false
            })

        },

        delateList(index) { //passo l'indice della lista che bisogna eliminare
            const conferma = confirm('Are you sure you want to delete')

            if (conferma) {
                this.taskList.splice(index, 1);
            }

        }
    }

}).mount("#app")