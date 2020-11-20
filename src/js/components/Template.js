import {Header} from './header/Header'
import {Title} from './title/Title'
import {Description} from './description/Description'
import {Mode} from './mode/Mode'
import {Footer} from './footer/Footer'

export function Template() {
	return `
		<div class="Template">
			<div class="root">
				${Header()}
				${Title()}
				${Description()}
				${Mode()}
				${Footer()}
			</div>
		</div>
	`
}