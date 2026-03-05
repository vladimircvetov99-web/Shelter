// 'use strict' Строгий режим , не дает работать без переменной 

// console.log('Привет!')
// console.log(123)
// console.log('Снова привет', 555, 'Что-то еще')
// console.log(message)

// let message = 'Привет'

// console.log(message)

// message = 'Пока'

// console.log(message)
// console.log(message)
// var message = 'Привет'
// const message = 'Привет'
                            // Можно присвоить , но нельзя изменить значение
// message = 'Пока'
// const age = 28
// const isDeveloper = true
// const name = 'Александр'
// const admin = name

// console.log(admin)

// Обьявление функции (Function Declaration)
// function имя(параметры) {
//     //тело (код) функции
// }

// Функция вывода сообщения 

function greet(name) {
    console.log('Hello -', name) ;
}

// Обьявление функции (Function Expression)
const greet2 = function greet(name) {
    console.log('Hello -', name) ;
}

greet('Vladimir')
greet2('Vladimir')
