import { createApp } from "vue";
import { autoAnimatePlugin } from "@formkit/auto-animate/vue";
import store from "./store";

import App from "./App.vue";
import router from "./routes";

import "./style.css";
import "./plugins/axios";

createApp(App).use(router).use(store).use(autoAnimatePlugin).mount("#app");
