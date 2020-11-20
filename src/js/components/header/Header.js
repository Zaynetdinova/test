import logo from '../../../img/logo.jpg'
import english_logo from '../../../img/english.png'
export function Header() {
	return `
			<section class="Header">
				<img class="logo" src=${logo} alt="logo">
				<img class="english_logo" src=${english_logo} alt="english_logo">
			</section>
	`
}