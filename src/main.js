import { createApp } from "vue";
import App from "./App.vue";
// router를 사용하자
import router from "./router.js";

//use(router)로 이제 사용하면됨
createApp(App).use(router).mount("#app");
