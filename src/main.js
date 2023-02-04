import { createApp } from "vue";
import { autoAnimatePlugin } from "@formkit/auto-animate/vue";

import App from "./App.vue";
import router from "./routes";

import "./style.css";
import "./plugins/axios";

createApp(App).use(router).use(autoAnimatePlugin).mount("#app");
