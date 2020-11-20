export function Model(data) {
	const {time, text, author} = data
	return `
		<div class="Model">
			<div class="time">${time}</div>
			<p class="text">${text}</p>
			<div class="author">${author}</div>
		</div>
	`
}