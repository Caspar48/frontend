import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { 
    faLock,
    faShieldAlt,
    faSyncAlt,
    faCheckCircle,
    faInfoCircle
} from '@fortawesome/free-solid-svg-icons'

// 添加圖標到庫中
library.add(
    faLock,
    faShieldAlt,
    faSyncAlt,
    faCheckCircle,
    faInfoCircle
)

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.component('font-awesome-icon', FontAwesomeIcon)
})