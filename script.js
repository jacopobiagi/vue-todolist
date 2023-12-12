const todos = [
    {
        text: 'Fare i compiti',
        done: false
    },
    {
        text: 'Fare la spesa',
        done: true
    },
    {
        text: 'Fare il bucato',
        done: false
    }
];
const { createApp } = Vue;

createApp({

    data(){

        return{
            todos : todos,
            message : "",
            error : false
        }
    },

    methods : {

        addTask(){

            let newTask = {
                text: this.message,
                done: false
            }

            if(newTask.text.length >= 5){

                this.todos.unshift(newTask);
                this.error = false;
                this.message = "";
            }else{
                
                this.error = true;
            }
            

            
        },

        removeTask(i){
            this.todos.splice(i,1);
        }
    },

    mounted(){

    }
}).mount("#app");