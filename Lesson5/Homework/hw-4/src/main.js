import { createApp } from 'vue'
import App from './App.vue'

// https://stackoverflow.com/questions/66389974/using-font-awesome-in-vue-3
import { library } from "@fortawesome/fontawesome-svg-core";
import { faExclamationCircle, faCheckCircle, faExclamation } from "@fortawesome/free-solid-svg-icons";
library.add(faExclamationCircle, faCheckCircle,faExclamation);
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

//import 'element-plus/packages/theme-chalk/src/base.scss';

import { ElButton, ElDialog} from 'element-plus';
//import 'element-plus/packages/theme-chalk/src/base.scss';

createApp(App)
    .component("font-awesome-icon", FontAwesomeIcon)
    .component(ElButton.name, ElButton)
    .component(ElDialog.name, ElDialog)

    .mount('#app')

import 'bootstrap/dist/css/bootstrap.min.css';