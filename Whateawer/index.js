const cityInput= document.getElementById('0')
const button = document.getElementById('1')

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
	.then(response => console.log(response))
	.catch(err => console.error(err));
}



/* 
итог:
получаем объекты кнопки и поля инпут, где вводим название города латиницей.пример: Moscow, London
при нажатии на кнопку мы получаем значение из input
полученное значение мы передаем в фунцию zapros, которая делает запрос и вывид в консоль результат

*/