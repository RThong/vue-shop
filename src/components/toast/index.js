import init from './toast'

const Toast = {}

Toast.install = (Vue) => {
	Vue.prototype.$toast = init
}

export default Toast