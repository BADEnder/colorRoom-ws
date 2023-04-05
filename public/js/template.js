
const headerNavTemplate = Vue.createApp({
    data: function() {
        return {
            List :[
                {
                    name: "首頁",
                    url: "/"
                },
                {
                    name: "需求管理",
                    url: "/main-list"
                },
                {
                    name: "配方管理",
                    url: "/match-list"
                },
                {
                    name: "修改密碼",
                    url: "/member"
                },
                {
                    name: "登出",
                    url: "/api/log-out"
                },

            ]

        }
    },
    template:
    `
    <div class="logo">
            <div>配色房秤重管控系統</div>
    </div>
    <nav>
        <div v-for="(item, idx) in List">
            <a :href="item.url">{{item.name}}</a>
        </div>
    </nav>
    <button class="menu-button">
        <div class="menu-icon">
        </div>
    </button>


    `,
    // methods: {
    //     showHeaderList: function () {
    //         this.headerList.classList.toggle('d-md-none')
    //         this.headerList.classList.toggle('d-sm-none')
    //     }
    // }, 
    // mounted: function () {
    //     this.headerList = document.querySelector(".header-list")
    // }
})

headerNavTemplate.mount("#header")


const footerNavTempalte = Vue.createApp({
    data: function () {
        return {

        }
    }, 
    template: 
    `
    <div>
        <span>&copy; Copyright 2022</span>
    </div>
    `
})

footerNavTempalte.mount("#footer")
