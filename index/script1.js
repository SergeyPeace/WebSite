function UpData(){
	if (numberZadan.value == 'z1_1'){
		zadan1_1()
	}
	else if (numberZadan.value == 'z1_2'){
		zadan1_2()
	}
	else if (numberZadan.value == 'z1_3'){
		zadan1_3()
	}
	else if (numberZadan.value == 'z1_4'){
		zadan1_4()
	}
	else if (numberZadan.value == 'z1_5'){
		zadan1_5()
	}
	else if (numberZadan.value == 'z1_6'){
		zadan1_6()
	}
	else if (numberZadan.value == 'z1_7'){
		zadan1_7()
	}
	else if (numberZadan.value == 'z1_8'){
		zadan1_8()
	}
	else if (numberZadan.value == 'z1_9'){
		zadan1_9()
	}
	else if (numberZadan.value == 'z2_1'){
		zadan2_1()
	}
	else if (numberZadan.value == 'z2_2'){
		zadan2_2()
	}
	else if (numberZadan.value == 'z2_3'){
		zadan2_3()
	}
	else if (numberZadan.value == 'z2_4'){
		zadan2_4()
	}
	else if (numberZadan.value == 'z3_1'){
		zadan3_1()
	}
	else if (numberZadan.value == 'z4_1'){
		zadan4_1()
	}
}
function zadan1_1(){
	const number = 1938
	let name = 'Елена'

	console.log(name)
	alert(number)
}

function zadan1_2(){
	let a = 'переменная, красивая очень'
	const number_5 = 'пятый номер'
	let age = 27
	const status = 'условие'
	console.log(age)
	alert(status)
}

function zadan1_3(){
	let name = prompt('Введите Имя:')
	let surename = prompt('Введите Фамилию:')
	let patronymic = prompt('Введите Отчество:')
	let fullName = surename+" "+name+" "+patronymic
	if (name == null & surename == null & patronymic == null){fullName=''}
	console.log(fullName)
	div1.innerHTML = fullName
}

function zadan1_4(){
	const a = 150
	const b = 25
	console.log(a+b)
	console.log(a-b)
	console.log(a*b)
	console.log(a/b)
	allSume = (a+b)+(a-b)+(a*b)+(a/b)
	alert(allSume)
}

function zadan1_5(){
	const bool = true
	const name = 'Егорка'
	const age = 89
	let x
	console.log(typeof bool)
	console.log(typeof name)
	console.log(typeof age)
	console.log(typeof x)
}

function zadan1_6(){
	let birthday = 1997
	let year = prompt("Какой сегодня год?")
	console.log('Поздравляем! Вам, наверное, '+(year-birthday)+' лет!')
}

function zadan1_7(){
	let a = prompt("Введите число: ")
	if (a>10){
		alert('Вы ввели число, больше десяти')
	}
	else if (a<10){
		alert('Вы ввели число меньше десяти')
	}
	else if (a==10){
		alert('О пааа')
	}
	else {
		alert('Пожалуйста, используйте цифры')
	}
}

function zadan1_8(){
	let operatorBool = true
	alert(operatorBool == true ? 'Все готово!' : 'Все не готово!')
}

function zadan1_9(){
	let number = Number(prompt("Введите число: "))
	alert(number+1)
}

function zadan2_1(){
	let fruits = ['Яблоки', 'Бананы', 'Апельсины', 'Киви', 'Манго']
	div1.innerHTML = ''
	let i = 0
	while(i<5){
		console.log(fruits[i])
		div1.innerHTML +=(fruits[i]+' ')
		i++
	}
}

function zadan2_2(){
	let fruits = ['Яблоки', 'Бананы', 'Апельсины', 'Киви', 'Манго']
	div1.innerHTML = ''
	let isAnswer = confirm('Добрый день, изменить массив?')
	let isAnswer_2 = null
	isAnswer ? isAnswer_2 = confirm('Что нужно сделать? "OK" - добавить элемент массива, "Отмена" - удалить элемент массива') : null
	if (isAnswer_2 == true){
		fruits.push(prompt('Введите новый элемент массива'))
	}
	else if (isAnswer_2 == false){
		proverka = (prompt('Введите номер элемента массива, который нужно удалить:'))
		fruits.splice(proverka-1, 1)
	}

	for (let elem of fruits) {
		console.log(elem)
		div1.innerHTML +=(elem+' ')
	} 
}

function zadan2_3(){
	function answer_1(name, age){
		if (name == 'Игорь' & age == 25){
			alert('очень поздравляю')
		}
		else{
			alert('извините, уходите')
		}
	}
	function answer_2(name, age){
		if (name == 'Игорь' | age == 25){
			alert('очень поздравляю')
		}
		else{
			alert('извините, уходите')
		}
	}
	function answer_3(name, age){
		if (name == 'Игорь' & age == 25){
			alert('извините, уходите')
		}
		else{
			alert('очень поздравляю')
		}
	}

	let name = prompt('Введите имя:')
	let age = prompt('Введите возраст: ')
	let variant = prompt('Введите номер функции (1-3)')

	if (variant == 1){
		answer_1(name, age)
	}
	else if (variant == 2){
		answer_2(name, age)
	}
	else{
		answer_3(name, age)
	}
}

function zadan2_4(){
	let price = [50, 134, 213, 105, 332]
	let money = prompt('Введите количество Ваших денег в рублях: ')
	let product = prompt("Введите ID товара: 0 -'Яблоки', 1 -'Бананы', 2 - 'Апельсины', 3- 'Киви', 4 - 'Манго'")
	if (price[product]<= money){
		alert('Спасибо за покупку, остаток на Вашем счету '+(money - price[product]) + ' рублей')
	}
	else{
		alert('Недостаточно средств, извините, уходите!')
	}
}

function zadan3_1(){
	document.location.href = '../log/log.html'
}

function zadan4_1(){
	document.location.href = '../calculator/index.html'
}