import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './style/tailwind.css'

// Plugins
import 'virtual:svg-icons-register';
import axios from './plugins/axios'

const app = createApp(App)

app.use(axios)
app.use(router)
app.mount('#app')
