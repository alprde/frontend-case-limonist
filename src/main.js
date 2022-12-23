import { createApp } from "vue";
import { createPinia } from "pinia";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

import App from "./App.vue";
import router from "./router";

import "./assets/main.css";

/* import font awesome icon component */
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";

const app = createApp(App);

app.use(createPinia());
app.use(router);

library.add(fas);
app.component("fa", FontAwesomeIcon);

app.mount("#app");
