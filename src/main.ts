import '@/scss/main.scss'  // Import Main SCSS file

import { library } from '@fortawesome/fontawesome-svg-core'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon, FontAwesomeLayers, FontAwesomeLayersText } from '@fortawesome/vue-fontawesome'

library.add(far, fab, fas)

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

var app = createApp(App)

app.component('fa-icon', FontAwesomeIcon)
app.component('fa-layers', FontAwesomeLayers)
app.component('fa-layers-text', FontAwesomeLayersText)

app.use(router)

app.mount('#app')