document.getElementById('numberOne').oninput = UpData
document.getElementById('numberTwo').oninput= UpData
function UpData(){
	if (document.getElementById('numberOne').value=='' || document.getElementById('numberTwo').value==''){
		answer.innerHTML = 'Ответ'
	}
}

function summ(){
	answer.innerHTML = numberOne.value - (-numberTwo.value)
}

function subtraction(){
	answer.innerHTML = numberOne.value - numberTwo.value
}

function multiplication(){
	answer.innerHTML = numberOne.value * numberTwo.value
}

function division(){
	if (numberTwo.value == 0){
		answer.innerHTML = "На ноль делить нельзя"
	}
	else{
		answer.innerHTML = numberOne.value / numberTwo.value
	}
}