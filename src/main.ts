import { createApp } from 'vue'

// * css引入css样式
import './styles/index.css'

//* unocss
import 'virtual:uno.css'
// import 'uno.css'

//* element-plus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import App from './App.vue'

createApp(App).use(ElementPlus).mount('#app')
