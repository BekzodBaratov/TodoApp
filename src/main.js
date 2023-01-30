import { createApp } from "vue";

import App from "./App.vue";
import router from "./routes";

import "./style.css";
import "./plugins/axios";

createApp(App).use(router).mount("#app");
