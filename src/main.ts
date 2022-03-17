import { createApp } from "vue";
import ElementPlus from "element-plus";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "element-plus/dist/index.css";
import zhCn from "element-plus/lib/locale/lang/zh-cn";

const app = createApp(App);
app.use(store).use(router).use(ElementPlus, { size: "default", zIndex: 3000, locale: zhCn });
app.mount("#app");
