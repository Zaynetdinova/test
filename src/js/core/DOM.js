import {Template} from '../components/Template'
export class Dom {
	constructor(selector) {
		this.$el = document.querySelector(selector)
		this.render()
	}

	render() {
		this.$el.innerHTML = Template()
	}
}

