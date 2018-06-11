import toast from './toast.vue'
import Vue from 'vue'


//插件拓展需要的参数
const ToastConstructor = Vue.extend({
	extends: toast,
	mounted() {
		this.autoClose()
		//触发closed,需要手动删除节点,调用$destroy()
		this.$on('closed', () => {
			document.body.removeChild(this.$el)
			this.$destroy()
			this.callback()
		})
	},
	beforeDestroy(){
		this.clearTimer()
	},
	methods: {
		autoClose() {
			this.timer = setTimeout(() => {
				this.visiable = false			
			}, this.closeTime)
		},
		clearTimer() {
			if (this.timer) {
				clearTimeout(this.timer)
			}
		}
	}
})

//调用时才给的参数
const init = (text, options) => {
	//创建组件实例
	const instance = new ToastConstructor({
		data() {
			return {
				closeTime: options.closeTime === undefined ? 2000 : options.closeTime
			}
		},
		propsData: {
			text,
			...options
		}
	}).$mount()

	//将节点添加到body
	document.body.appendChild(instance.$el)
}

export default init

