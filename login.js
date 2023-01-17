// 載入 Vue
import { createApp } from 'https://cdnjs.cloudflare.com/ajax/libs/vue/3.2.45/vue.esm-browser.min.js';

const app ={
    data() {
        return {
            user: {
                username: '',
                password: ''
            }
        }
    },
    methods: {
        login(){
            console.log(this.user.username ,this.user.password);
        }
    },

}

createApp(app).mount('#app');