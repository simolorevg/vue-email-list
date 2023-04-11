const { createApp } = Vue;
createApp({
    data() {
        return {
            mailArray: [],
            mailtoPush:''
        }
    },
    mounted(){
        for(let i = 0; i < 10;i++){
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((result) =>{
                this.mailArray.push(result.data.response);
            });
        }
        console.log(this.mailArray);
    },
    methods: {
    }
}).mount('#app');