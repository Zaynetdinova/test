import {Model} from '../Model'

export function Mode() {
	return `
			<section class="Mode">
				<div class="common">
					<span class="title">ЧЕТЫРЕ <span class="red">БЕСПЛАТНЫХ</span> ЗАНЯТИЯ</span>
					<hr class="line1">
				</div>

					
				<div class="grid">
					<div>
						<div class="data">Суббота 7 декабря 2019</div>
						${models.left.map((item) => {return Model(item)}).join('')}
					</div>
					<div>
						<div class="data">Воскресенье 8 декабря 2019</div>
						${models.right.map((item) => {return Model(item)}).join('')}
					</div>					
				</div>
				<hr class="line2">
			</section>
	`
}

// const models = [
// 	{
// 		time : '10:00-12:30',
// 		text: 'Обзор грамматики уровня Upper Intermediate',
// 		author: 'Дэвид Снайдер'
//
// 	},
// 	{
// 		time : '10:00-12:30',
// 		text: 'Эффективное ведение переговоров на английском языке: Часть 1',
// 		author: 'Ричард Томар'
// 	},
// 	{
// 		time : '13:30-16:00',
// 		text: 'Эффективный письменный английский для HR-профессионалов : Часть 1',
// 		author: 'Райан Бейли'
// 	},
// 	{
// 		time : '13:30-16:00',
// 		text: 'Эффективный нетворкинг на английском языке',
// 		author: 'Аманда Вейверс'
// 	},
// ]

const models = {
	left: [{
		time : '10:00-12:30',
		text: 'Обзор грамматики уровня Upper Intermediate',
		author: 'Дэвид Снайдер'

	},
		{
			time : '10:00-12:30',
			text: 'Эффективное ведение переговоров на английском языке: Часть 1',
			author: 'Ричард Томар'
		},],
	right: [
		{
			time : '13:30-16:00',
			text: 'Эффективный письменный английский для HR-профессионалов : Часть 1',
			author: 'Райан Бейли'
		},
		{
			time : '13:30-16:00',
			text: 'Эффективный нетворкинг на английском языке',
			author: 'Аманда Вейверс'
		},
	]
}