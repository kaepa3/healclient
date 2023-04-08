import { createApp } from "vue";
import { createMetaManager } from "vue-meta";
import "./style.css";
import App from "./App.vue";
import router from "./router";

const app = createApp(App);
const prop = import.meta.env;
if (typeof prop.SERVER_URL !== "undefined") {
  app.config.globalProperties.$server_url = prop.SERVER_URL;
} else {
  app.config.globalProperties.$server_url = "http://localhost:3000";
}
console.log(prop);

app.use(router);
app.use(createMetaManager());
app.mount("#app");
