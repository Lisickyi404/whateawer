const cityInput= document.getElementById('0')
const button = document.getElementById('1')
const card = document.getElementById('2')
const cardsList = document.getElementById('3')

const days = ['Monday','Tuesday','Wednesday','Thursday','Friday ','Saturday','Sunday']

const imgRain = './Rain.png'
const imgSun = './Sun.png'

function getCityTemp(){
    const targetCity = cityInput.value
    zapros(targetCity)
}


button.addEventListener('click',()=>getCityTemp())

/* создаем объект настроек с типом запроса и токенном доступа*/
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '8310a092damsh88d5f346c407ed7p18784fjsn304e9d3e486b',
		'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
	}
};


/* создаем запрос по указаному адрессу, используя параметры запроса из options 
выводим результат запроса в консоль
*/
function zapros(city){
    fetch(`https://weatherapi-com.p.rapidapi.com/forecast.json?q=${city}&days=3`, options)
	.then(response => response.json())

	.then(response=>createWhtwrCards(response.forecast.forecastday))
	.catch(err => console.error(err));
}

function createCardOneDay(day){


	const date = new Date(day.date)
	console.log(date.getDay())
	const newCard = card.cloneNode(true)

	if (day.day.avgtemp_c > 25){
		newCard.style.backgroundImage= "url(./Sun.png)"
	}
	else{
		newCard.style.backgroundImage= "url(./Rain.png)"
	}
	
	newCard.getElementsByClassName('temp')[0].innerText = day.day.avgtemp_c
	newCard.getElementsByClassName('wind')[0].innerText = day.day.maxwind_kph
	newCard.getElementsByClassName('humidity')[0].innerText = day.day.avghumidity
	newCard.getElementsByClassName('date')[0].innerText = days[date.getDay()]
	cardsList.appendChild(newCard)

}


function  createWhtwrCards(list){
	cardsList.replaceChildren()
	console.log(list)
	list.forEach(element => {
		createCardOneDay(element)
	});
}


/* 
итог:
получаем объекты кнопки и поля инпут, где вводим название города латиницей.пример: Moscow, London
при нажатии на кнопку мы получаем значение из input
полученное значение мы передаем в фунцию zapros, которая делает запрос и вывид в консоль результат

*/


/* при получении данных о прогнозе мы вызываем функцию createWhtwrCards которой передаем список
прогноза на 3 дня, а затем для каждого дня вызываем функцию createCardOneDay
в createCardOneDay мы копируем первую карточку и меняем содержимое элементов и задний фон
*/