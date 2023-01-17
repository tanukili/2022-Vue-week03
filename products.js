// 載入 Vue
import { createApp } from 'https://cdnjs.cloudflare.com/ajax/libs/vue/3.2.45/vue.esm-browser.min.js';

const app = {
    data() {
        return {
            // api 路徑
            apiUrl: 'https://vue3-course-api.hexschool.io/v2',
            apiPath: 'vuejslive2022',
            products: {},
            data: {
                title: "草莓莓果夾心圈 02",
                category: "甜甜圈",
                origin_price: 150,
                price: 99,
                unit: "個",
                description: "濃郁的草莓風味，中心填入滑順不膩口的卡士達內餡，帶來滿滿幸福感！",
                content: "尺寸：14x14cm",
                is_enabled: 1,
                imageUrl: "https://images.unsplash.com/photo-1583182332473-b31ba08929c8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzR8fGRvbnV0fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
                imagesUrl: [
                  "https://images.unsplash.com/photo-1626094309830-abbb0c99da4a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2832&q=80",
                  "https://images.unsplash.com/photo-1559656914-a30970c1affd?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTY0fHxkb251dHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
                  "圖片網址三",
                  "圖片網址四",
                  "圖片網址五"
                ]
              }

        }
    },
    methods: {
        // 串接 api：取得產品資料
        getData() {
            const url = `${this.apiUrl}/api/${this.apiPath}/admin/products`
            axios.get(url)
                .then((res) => {
                    this.products= res.data.products;
                    console.log(this.products);
                })
                .catch((err) => {
                    alert(err.data.message);
                })
        },
        // 串接 api：新增產品
        addProduct(){
            const url = `${this.apiUrl}/api/${this.apiPath}/admin/product`
            axios.post(url ,this.data)
                .then((res) => {
                    console.log(res);
                })
                .catch((err) => {
                    console.log(err);
                })
        }
    },
    created() {
        // 取出 token
        const token = document.cookie.replace(/(?:(?:^|.*;\s*)loginToken\s*\=\s*([^;]*).*$)|^.*$/, "$1");
        axios.defaults.headers.common['Authorization'] = token;
        // 記得要加 this
        this.getData();
    },
};

createApp(app).mount('#app')