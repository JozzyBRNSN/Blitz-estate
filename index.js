const allFilter = document.getElementById('show-all')
const filter1 = document.getElementById('filter1')
const filter2 = document.getElementById('filter2')
const filter3 = document.getElementById('filter3')
const filter4 = document.getElementById('filter4')
const price = document.querySelectorAll('#price')

function transformInNumber(price) {
	let str = price
	let number = parseInt(str.replace(/\s+/g, '').replace('₽', ''))
	return number
}

function filter(min, max) {
	price.forEach(item => {
		let number = transformInNumber(item.textContent)
		if (number >= min && number <= max) {
			item.closest('#apartments__cards-item').style.display = 'block'
		} else {
			item.closest('#apartments__cards-item').style.display = 'none'
		}
	})
}

allFilter.onclick = function () {
	price.forEach(item => {
		item.closest('#apartments__cards-item').style.display = 'block'
	})
}

filter1.onclick = function () {
	filter(20000000, 30000000)
}

filter2.onclick = function () {
	filter(30000000, 50000000)
}

filter3.onclick = function () {
	filter(50000000, 100000000)
}

filter4.onclick = function () {
	filter(100000000, 200000000)
}

const hBtn = document.getElementById('header__phone-btn')
const popup = document.getElementById('header__btn-popup')

hBtn.onclick = function () {
	document.getElementById('body').classList.add('header__phone-btn--active')
	document.getElementById('header__popup').style.display = 'block'
}

popup.onclick = function () {
	document.getElementById('body').classList.remove('header__phone-btn--active')
	document.getElementById('header__popup').style.display = 'none'
}
