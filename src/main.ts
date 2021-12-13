import { createApp } from "vue"

import ElementPlus from "element-plus"
import "element-plus/dist/index.css"

import router from "./router"

import store from "./store"

import App from "./App.vue"

// 引入全局less
import "./assets/less/index.less"

const app = createApp(App)

app.use(ElementPlus)
app.use(store)
app.use(router)
app.mount("#app")
