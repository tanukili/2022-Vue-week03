// 載入 Vue
import { createApp } from 'https://cdnjs.cloudflare.com/ajax/libs/vue/3.2.45/vue.esm-browser.min.js';

const app = {
    data() {
        return {
            // api 路徑
            apiUrl: 'https://vue3-course-api.hexschool.io/v2',
            apiPath: 'vuejslive2022',
            products: [],

        }
    },
    methods: {
        // 串接 api：檢查權限
        checkAdmin() {
            const url = `${this.apiUrl}/api/user/check`;
            axios.post(url)
                .then(() => {
                    // 先確認權限，再渲染畫面
                    this.getData();
                })
                .catch((err) => {
                    alert(err.data.message);
                })
        },
        // 串接 api：取得產品資料
        getData() {
            const url = `${this.apiUrl}/api/${this.apiPath}/admin/products`;
            axios.get(url)
                .then((res) => {
                    this.products= res.data.products;
                })
                .catch((err) => {
                    alert(err.data.message);
                })
        },
        
    },
    created() {
        // 取出 token
        const token = document.cookie.replace(/(?:(?:^|.*;\s*)loginToken\s*\=\s*([^;]*).*$)|^.*$/, "$1");
        axios.defaults.headers.common['Authorization'] = token;
        // 記得要加 this
        this.checkAdmin();
    },
};

createApp(app).mount('#app')