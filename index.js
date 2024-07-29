const allFilter = document.getElementById('show-all')
const filter1 = document.getElementById('filter1')
const filter2 = document.getElementById('filter2')
const filter3 = document.getElementById('filter3')
const filter4 = document.getElementById('filter4')
const price = document.querySelectorAll('#price')

// Преобразование строки цены в число
function transformInNumber(price) {
	let str = price
	let number = parseInt(str.replace(/\s+/g, '').replace('₽', ''))
	return number
}

allFilter.onclick = function () {
	price.forEach(item => {
		item.closest('#apartments__cards-item').style.display = 'block'
	})
}

filter1.onclick = function () {
	price.forEach(item => {
		let number = transformInNumber(item.textContent)
		if (number <= 30000000 && number >= 20000000) {
			item.closest('#apartments__cards-item').style.display = 'block'
		} else {
			item.closest('#apartments__cards-item').style.display = 'none'
		}
	})
}

filter2.onclick = function () {
	price.forEach(item => {
		let number = transformInNumber(item.textContent)
		if (number <= 50000000 && number >= 30000000) {
			item.closest('#apartments__cards-item').style.display = 'block'
		} else {
			item.closest('#apartments__cards-item').style.display = 'none'
		}
	})
}

filter3.onclick = function () {
	price.forEach(item => {
		let number = transformInNumber(item.textContent)
		if (number <= 100000000 && number >= 50000000) {
			item.closest('#apartments__cards-item').style.display = 'block'
		} else {
			item.closest('#apartments__cards-item').style.display = 'none'
		}
	})
}

filter4.onclick = function () {
	price.forEach(item => {
		let number = transformInNumber(item.textContent)
		if (number >= 100000000) {
			item.closest('#apartments__cards-item').style.display = 'block'
		} else {
			item.closest('#apartments__cards-item').style.display = 'none'
		}
	})
}
