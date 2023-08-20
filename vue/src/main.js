import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { OhVueIcon, addIcons } from 'oh-vue-icons'
import { MdDashboard } from 'oh-vue-icons/icons/md'

addIcons(MdDashboard)

createApp(App).component('v-icon', OhVueIcon).mount('#app')
