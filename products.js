// 載入 Vue
import { createApp } from 'https://cdnjs.cloudflare.com/ajax/libs/vue/3.2.45/vue.esm-browser.min.js';

const app = {
    data() {
        return {
            text: 1
        }
    },
};

createApp(app).mount('#app')