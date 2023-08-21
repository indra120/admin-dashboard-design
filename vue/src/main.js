import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { OhVueIcon, addIcons } from 'oh-vue-icons'
import * as Icon from 'oh-vue-icons/icons/md'

addIcons(
  Icon.MdDashboard,
  Icon.MdPersonOutlined,
  Icon.MdReceiptlong,
  Icon.MdInsights,
  Icon.MdMailoutline,
  Icon.MdInventory,
  Icon.MdReportgmailerrorred,
  Icon.MdSettings,
  Icon.MdAdd,
  Icon.MdLogout,
  Icon.MdClose
)

createApp(App).component('v-icon', OhVueIcon).mount('#app')
