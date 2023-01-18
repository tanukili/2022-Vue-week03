// 載入 Vue
import { createApp } from 'https://cdnjs.cloudflare.com/ajax/libs/vue/3.2.45/vue.esm-browser.min.js';

// 宣告 Modal (因為全域會使用到)
let productModal = {};

let delProductModal = {};

const app = {
    data() {
        return {
            // api 路徑
            apiUrl: 'https://vue3-course-api.hexschool.io/v2',
            apiPath: 'vuejslive2022',
            products: [],

        }
    },
    // 使用 created() 會報錯，因為是 html 渲染前調用；mounted() 則是渲染後再針對 html 的 dom 進行操作
    mounted() {
        // modal 初始化
        productModal = new bootstrap.Modal(document.getElementById('productModal'), {
            keyboard: false
        });
        delProductModal = new bootstrap.Modal(document.getElementById('delProductModal'), {
            keyboard: false
        });

        // 取出 token
        const token = document.cookie.replace(/(?:(?:^|.*;\s*)loginToken\s*\=\s*([^;]*).*$)|^.*$/, "$1");
        axios.defaults.headers.common['Authorization'] = token;
        // 記得要加 this
        this.checkAdmin();
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
                    // 導回登入頁面
                    window.location = 'login.html';
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
        // 開啟互動視窗
        openModal(editStatus) {
            if(editStatus === 'new'){
                productModal.show();
            }else if(editStatus === 'edit'){
                productModal.show();
            }else if(editStatus === 'delete'){
                delProductModal.show();
            }
        }
        
    },
};

createApp(app).mount('#app')