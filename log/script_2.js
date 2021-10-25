document.getElementById('entrance_in').onclick = Entrance
document.getElementById('registr_in').onclick = Register

let LoginIn = document.getElementById('login_in')
let PasswordIn = document.getElementById('password_in')
let Login = 123
let Password = 321
let NewPassword



function Entrance(){
    if(LoginIn.value == Login && PasswordIn.value == Password && document.getElementById('checkbox').checked) {
        document.location.href='../index.html'

    }
    else if (LoginIn.value == Login && PasswordIn.value == Password){
        document.getElementById('answer').innerHTML = ''
        alert('Вы вошли')
    }
    else if(PasswordIn.value != Password && LoginIn.value == Login){
        document.getElementById('answer').innerHTML = 'Введён неверный пароль!'
    }
    else{
        document.getElementById('answer').innerHTML = 'Данный аккаунт не найден. Проверьте правильность введенных данных, либо пройдите регистрацию!'
    }
    document.getElementById('registr_in').onclick = Register
}


function Register(){
    LoginIn.value =''
    PasswordIn.value =''
    document.getElementById('answer').innerHTML = ''
    document.getElementById('entrance_in').style.zIndex = -10                                       //Скрываем кнопку войти на задний план

    document.getElementById('headerRegEntr').innerHTML = 'Регистрация'                             //Меняем название страницы
    document.getElementById('registr_in').style.zIndex= -10                                         //Переименновываем кнопку "Регистрация" в кнопку "Сохранить"
    document.getElementById('save').style.zIndex= 10                                            //добавляем кнопки 'сохранить' и 'назад'
    document.getElementById('exit').style.zIndex= 10
    document.getElementById('save').setAttribute('disabled',true)                             //атрибут 'disabled' делает кнопку невидимой
    PasswordIn.oninput = Test_2
    LoginIn.oninput = Test
    function Test(){
        if (LoginIn.value === ''){                                                                          //Проверка заполненых данных строки пароля (не должно оставаться пустым)
            document.getElementById('test_login').innerHTML = "*Данное поле обязательно к заполнению"
        }
        else{
            document.getElementById('test_login').innerHTML = ""
        }

        if(LoginIn.value === '' || PasswordIn.value === ''){                                   //Проверка заполненых данных
            document.getElementById('save').setAttribute ('disabled', true)
        }
        else{
            document.getElementById('save').removeAttribute('disabled')                       //если обе строки являются заполненными, то атрибут 'disabled' отменяется
        }
        
    }

    function Test_2(){                                                                                          //Проверка заполненых данных строки пароля (не должно оставаться пустым)
        if (PasswordIn.value === ''){
            document.getElementById('test_password').innerHTML = "*Данное поле обязательно к заполнению"
        }
        else{
            document.getElementById('test_password').innerHTML = ""
        }

        if(LoginIn.value === '' || PasswordIn.value === ''){                                   //Проверка заполненых данных
            document.getElementById('save').setAttribute ('disabled', true)
        }
        else{
            document.getElementById('save').removeAttribute('disabled')                       //если обе строки являются заполненными, то атрибут 'disabled' отменяется
        }
    }

    document.getElementById('save').onclick = Proverka
    function Proverka(){
        if ((LoginIn.value != Login) && (PasswordIn.value != Password)){
            Login = LoginIn.value
            Password = PasswordIn.value
            alert('Вы успешно прошли регистрацию!')
        }
        else{
            ((confirm('Данный аккаунт уже существует. Хотите изменить пароль?')) ? (((NewPassword = prompt('Введите старый пароль: ')) == Password) ? (((Password = prompt('Введите новый пароль:')) == NewPassword) ? (alert('Вы установили старый пароль!')) : (alert('Вы установили новый пароль!'))) : (alert('Вы ввели неверный пароль. Уходите!'))): (alert('Всего доброго!')))
        }
        Exit()
    }

     function Exit(){
        LoginIn.value =''
        PasswordIn.value =''
        document.getElementById('exit').style.zIndex= -10                                               //Скрываем кнопку 'назад'
        document.getElementById('entrance_in').style.zIndex = 0                                       //Возвращаем кнопку 'войти'
        document.getElementById('registr_in').style.zIndex = 0 
        document.getElementById('save').style.zIndex = -10 
        document.getElementById('test_password').innerHTML = ""
        document.getElementById('test_login').innerHTML = ""
        document.getElementById('headerRegEntr').innerHTML = 'Вход'                            //Возвращаем название формы
    }

    document.getElementById('exit').onclick = Exit          //кнопка назад вызывает функцию, возвращающую все назад
}

    
