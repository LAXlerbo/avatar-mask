import App from './App'

// #ifndef VUE3
import Vue from 'vue' // main.js
import uView from "uview-ui";
import music from '@/utils/music.js'
//引入vuex
import store from '@/utils/store.js'
import cuCustom from './colorui/components/cu-custom.vue'

Vue.config.productionTip = false
Vue.component('cu-custom',cuCustom)

//把vuex定义成全局组件
Vue.prototype.$store = store

// 挂载到vue实例上
Vue.prototype.$music = music 
Vue.use(uView);
Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
	...App
})
// 引入请求封装，将app参数传递到配置中
require('@/utils/request.js')(app)
app.$mount()
// #endif

// #ifdef VUE3
import {
	createSSRApp
} from 'vue'
export function createApp() {
	const app = createSSRApp(App)
	return {
		app
	}
}
// #endif
