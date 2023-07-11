import './style.css'


let x10 = 18
console.log((x10 >= 18) ? 'you are adult' : 'you are young')

// let i = 3
// for (i=0, i>5, i++)
// console.log (i)

// let year = prompt ('Ваш возраст')
// console.log (2023 - year)

// // Запросить у пользователя число от 0 до 9 и вывести ему
// // спецсимвол, который расположен на этой клавише (1–!,
// // 2–@, 3–# и т. д).
// let symbol = 6;
// switch(symbol) {
// case 1: 
// console.log ('!');
// break;
// case 2:
//   console.log ('@');
//   break;
//   case 3:
//     console.log ('#')
//     break
//     case 4:
//       console.log ('$')
//       break
//       case 5: 
//       console.log ('%')
//       break
//       default: 
//       console.log('В данной области нет этого значения')
// }








// Запросить у пользователя год и проверить, високосный он
// или нет. Високосный год либо кратен 400, либо кратен 4 и
// при этом не кратен 100


// let year = 2000
//  if ( year % 100 == 0) {
//   console.log ('год не високосный')
//  } else if (year % 4 == 0) {
//   console.log ('год високосный')
//   } else {
//   console.log ('год не високосный')
//  }


// Написать конвертор валют. Пользователь вводит количе-
// ство USD, выбирает, в какую валюту хочет перевести: EUR,
// UAN или AZN, и получает в ответ соответствующую сумму.

// let summ = prompt ('введите сколько долларов хотите поменять')
// let currency = prompt ('выбор валюты')
// if (currency== 'eur') {
//   console.log (summ * 0.8 + ' eur')
// }
// else if (currency== 'uan') {
//   console.log (summ * 5 + ' uan')
// }
// else if (currency== 'azn') {
//   console.log (summ * 10 + ' azn')
// }
// else {
// console.log ('Данную валюту не меняем')
// }


// let summ = 100
// let currency = 3
// switch (currency) {
//   case 1: 
//   console.log (summ * 0.8 + ' euro')
//   break 
//   case 2: 
//   console.log (summ * 5 + ' uan')
//   break 
//   case 3: 
//   console.log (summ * 10 + ' azn')
//   break 
//   default:
// }


// Запросить у пользователя сумму покупки и вывести сумму
// к оплате со скидкой: от 200 до 300 – скидка будет 3%, от 300
// до 500 – 5%, от 500 и выше – 7%.

// let summ = 200
// if (summ>=200 && summ<=300) {
//   console.log (summ - 0.03*summ)
// } else if (summ>300 && summ <=500) {
//   console.log (summ - 0.05*summ)
// } else if (summ>500) {
//   console.log (summ - 0.07*summ)
// } else {
//   console.log ('Скидка не действует')
// }


// Запросить у пользователя длину окружности и периметр
// квадрата. Определить, может ли такая окружность поме-
// ститься в указанный квадрат.
// let x1 = prompt (' введите длину окружности')
// let x2 = prompt ('введите периметр квадрата')
// let circle = x1*x1*3.14
// let square = x2/4*(x2/4)
// console.log(circle + ' circle cm')
// console.log(square + ' square cm')
//  if (circle > square) {
//   console.log ('окружность не помещается')
//  } else {
//   console.log ('окужность помещается')
//  }


// let x3 
// let z1=5
// for (x3=0; x3<10; x3++) {
// if (x3%z1==0) 
//   console.log(z1)
// }


// число 7   ==== 2 4 6 8 

// let x1 = 1
// if (x1 )

// В переменной day лежит какое-то число из интервала от 1 до 31. 
// Определите в какую декаду 
// месяца попадает это число (в первую, вторую или третью).



// const day = Math.floor (((prompt('номер дня'))-1)/10)
// switch (day) {
//   case 0:
//   console.log ('first decade')
//   break
//   case 1:
//   console.log ('second decade')
//   break
//   case 2:
//   console.log ('third decade')
//   break
//   case 3:
//   console.log ('third decade')
//   break
//   default:
// }

// let z = Math.max(7/2)
// console.log(z)


// for (let z =0; z<20; z++) {
//   console.log (Math.trunc(Math.random(z)*20))
// }


// убрать  цифры "456"
// const num = 1.23456
// console.log(Math.round (num*100) /100   )

// console.log (9999999999999999 )

console.log((parseInt('15.5px') - 6))
console.log(parseInt('100px'))

console.log(Math.max(3, 5, -10, 0, 1)); // 5
console.log(Math.min(1, 2)); // 1
console.log(Math.pow(2, 11))

// let month = 6
// for (let i = 0; i < month; i++) {
//     console.log(`платеж за ${i+ 1} месяц` , '1000 р')
//   }



//   console.log(`платеж за ${i+1} месяц`, '1000 р')
// // console.log('платеж за ' + i + ' месяц', '1000 р')

var arr0 = [];
var arr1 = new Array();
// создали массив с данными
const array = [0, 2, 3, 5, 7, 8, 9]
console.log(array)
array.push(10)
console.log(array)
array.pop()
console.log(array)





function random(min: number, max) {
  return Math.round(Math.random() * (max - min) + min);
}
// console.log(Math.round(Math.random()*(10-8)+8))
// random(0-1)*(max - min) + min


console.log(random(55, 80))


console.log(Math.max(3, 5, -10, 0, 1))
console.log(Math.min(3, 5, -10, 0, 1))


// let string = prompt("Введи что-то:")
// for (let i = 0; i < string.length / 2; i++) {
// console.log ('полиндром' )
// }

// Получить сам символ можно string[i], как получить соответствующий с конца, подсчитаешь индекс самостоятельно.



// "Задача 9: Запросите у пользователя трехзначное число и выведите его задом наперед. Для решения задачи вам понадобится оператор % (остаток от деления)"
// );
// let nmb = prompt('введите число');
// var a = Number(nmb % 10);
// var b = Number((nmb - a) / 10 % 10);
// var c = Number((nmb - a - b * 10) / 100);
// console.log('Перевертыш: ' + (a * 100 + b * 10 + c));





//  Запросить у пользователя число и определить,
//  оно полjжительное, отрицательное или ноль.

// let x = +prompt ('введите число')
// if (x>0) {
//   console.log ('число положительное')
// } else if (x<0) {
//   console.log ('число отрицательное')
// } else if (x==0) {
//   console.log ('число ноль')
// } else {
//   console.log ('это не число')
// }



// . Запросить у пользователя число и вывести его модуль 
// (|7| = 7, |-7| = 7).
// let x = prompt('введите число')
//   console.log (`|${-x}|`)




// 2. Реализовать калькулятор. Пользователь вводит 2 числа и 
// знак (+ - * /). В зависимости от введенного знака решить 
// пример и вывести результат.

// let x = 5
// let y =10
// let a = 3
// switch (3) {
//   case 1:
//   console.log (x+y)
//   break
//   case 2:
//   console.log (x-y)
//   break
//   case 3:
//   console.log (x*y)
//   break
//   case 4:
//   console.log (x/y)
//   break
//   default:
//   console.log ('данная операция не поддерживается')
// }

// 1. Запросить 2 числа и вывести большее из них
let x5 = 5
let y5 = 7
console.log((y5 > x5) ? 'true' : 'false')

// 2. Запросить 1 число и проверить, оно кратно 5 или нет.
// let x2 = 15
// console.log((x2%5==0) ? 'true' : 'false')


// 3. Запросить у пользователя название планеты. Если пользователь 
// ввел «Земля» или «земля», то вывести «Привет, землянин!», 
// в остальных случаях вывести «Привет, инопланетянин!». 

// let x = prompt ('Введите название планеты')
// console.log ((x=='земля'|| x=='Земля') 
// ? 'true' + ' Привет, землянин!'
// : 'false' + ' Привет, инопланетянин!')


// Подсчитать сумму всех чисел в заданном пользователем диапазоне.
// let num1 = 1
// let num2 = 14
// let sum = 0;
//        if (num1 < num2) {
//     while (num1 <= num2) {
//         sum += num1
//         num1++
//     }
// } else if (num1 > num2) {
//     while (num1 >= num2) {
//         sum += num2
//         num2++
//     }
// }   
//     console.log(`Сумма всех чисел в указанном диапазоне ${sum}`)



// let number1 = Number(prompt('Для нахождения НОД двух чисел введите первую цифру'));
// let number2 = Number(prompt('Введите вторую цифру'));

// while (number1 != 0 && number2 != 0) {
//     if (number1 > number2) {
//         number1 = number1 % number2;
//     } else {
//         number2 = number2 % number1;
//     };
// };
// alert(` Наибольший общий делитель двух указанных чисел равен ${number1 + number2}`);

// let number = Number(prompt(' Введите число'));
// let divisor = [];
// for (let i = 2; i < number; i++) {
//     if (number % i == 0 && number !== 1 ) {
//         console.log(i);
//         divisor.push(i);
//     };
// };
// alert(`Все делители числа ${number}:  ${divisor}`);

console.log(Math.pow(2, 10))

// let a = 3
// let b = 7
// let c = a + b
// console.log(c)
// a = 5
// b = 9
// c = a + b
// console.log(c)
// console.log

// function sum(a, b) {
//   const c = a + b 
//   console.log(c)
// }

// console.dir(myFn)
let v = 5
function cube(v) {
  // let c
  // c = v*v*v
  // return c
  return v * v * v

}
console.log(cube(v))
console.log(cube(3) + `  ${'куб чего-нибудь'}`)


// let a =4
// let b = 5

// function myFn(a, b){
// let c 
// a = a + 1
// c = a + b
// return c
// }
// console.log (myFn(10, 15))
// console.log (a + b)


// console.log(Math.abs(-10))
// console.log(Math.pow(3, 10))

// 1. Написать функцию, которая принимает 2 числа и 
// возвращает меньшее из них

let a = 7
let b = 5
function min(a, b) {
  if (a < b) {
    return a;
  } else {
    return b;
  }
}
console.log(min(a, b))

// 2. Написать функцию, которая возводит переданное число 
// в указанную степень.

function pow123(a, b) {
  if (Math.pow(a, b))
    return Math.pow(a, b)
}
console.log(pow123(a, b))

// 3. Написать функцию, которая принимает 2 числа и знак 
// (+ - * /), считает пример и возвращает результат.
let c
const myFunc = (a, b, c) => {
  if (c === '+') return a + b
  if (c === '-') return a - b
  if (c === '*') return a * b
  if (c === '/') return a / b
}
console.log(myFunc(a, b, '*'))



let g = 9
function Func(g) {
  if (Math.round(g) % 2 == 0) {
    return Math.round(g)
  } else if (g < Math.round(g)) {
    return Math.round(g) - 1
  } else
    return Math.round(g) + 1
}
console.log(Func(g))
console.log(Func(7.7))
console.log(Func(9.5))

// . Создайте функцию sayError(), которая будет выводить (при помощи диалогового окна alert) сообщение 
// с текстом «Some error occurred!».

function sayError() {
  return 'Some error occurred!'
}
console.log(sayError())

// 2. Создайте функцию showError(x), которая будет выводить 
// (при помощи диалогового окна alert) сообщение 
// с текстом «Error X occurred!», где Х — текст из аргумента
//  функции (например, вызов showError(‘Out of memory’) 
// должен вывести сообщение «Error Out of memory occurred!»).
let x3
function showError(x3) {
  return 'good job'
}
console.log('"Error ' + showError(x3) + ' occured!"')


// 3. Создайте функцию createHeaders(N), которая создаст на 
// странице N заголовков 
// второго уровня (<h2>) с надписями Header1, Header2 … HeaderN

function createHeaders(N) {
  for (N = 0; N <= 5; N++)
    return 'asdasd'
}
// document.write (createHeaders(N))

// 4. Создайте функцию checkPassword(x), которая вернет 
// значение true, если в качестве аргумента в нее будет 
// передан допустимый пароль (одно из значений «Step», 
// «Web» или «JavaScript»). Иначе функция должна вернуть false.

let password = 'web'
function checkPassword(password) {
  if (password == 'step' || password == 'web' || password == 'javascript') {
    return 'пароль верный'
  } else {
    return 'пароль неверный'
  }
}
console.log(checkPassword(password))


// 5. Создайте функцию определения знака числа sign(x), которая 
// вернет значение –1, если аргумент «х» — отрицательное число, 
// 1 — если положительное, 0 — если аргумент «х» равен нулю.

let c1 = 5
function sign(c1) {
  console.log(c1)
  if (c1 > 0) {
    return 'число положительное'
  } else if (c1 < 0) {
    return 'число отрицательное'
  } else if (c1 == 0) {
    return 'число ноль'
  } else {
    return 'введите корректное число'
  }
}
console.log(sign(c1))
sign('"дополнительна" функция')
sign('"дополнительна" функция')

// 6. Предложите имя (согласно правилам именования) и  создайте 
// функцию, которая будет возвращать названия дней недели по их
// номеру: 0-Sunday, 1-Monday, 2-Tuesday, 3-Wednesday, 4-Thursday, 
// 5-Friday, 6-Saturday.



let day = 5
function week(day) {
  if (day == 0) {
    return 'Sunday'
  } else if (day == 1) {
    return 'Monday'
  } else if (day == 2) {
    return 'Tuesday'
  } else if (day == 3) {
    return 'Wednesday'
  } else if (day == 4) {
    return 'Thursday'
  } else if (day == 5) {
    return 'Friday'
  } else if (day == 6) {
    return 'Saturday'
  } else {
    return 'Number is wrong'
  }
}
console.log(week(day))





// числа от 0 до 20, без чисел делящихся на 4

console.log('START')

for (let y5 = 0; y5 < 10;) {
  let a = Math.round(Math.random(y5) * 20)
  if (a % 4 == 0) continue
  y5++
  console.log(a)
}

console.log('END')

// let deposit = prompt ('Введите сумму')
// let procent = prompt ('Введите процент')
//  let money=deposit
//  let x6
// for (x6=0;money<deposit*2;x6++) {
//     money+=deposit*procent/100
//   }
//   console.log ('у вас удвоится сумма через ' + x6 + ' лет')


// ВАЖНО ВАЖНО ВАЖНО!!!!! РАЗОБРАТЬ ПРЕДЫДУЩИЕ ДВЕ ЗАДАЧИ


function myCity(name5) {
  console.log(name5 + ' это мой город')
}
myCity('Белгород')
myCity('Сочи ')

function myFunc2(name: string, name2: string) {
  console.log('My name is ' + name + ' My age is ' + name2)
}
myFunc2('Vladimir', 32)

let a3 = 7
let b3 = 10
function myFunc3(a3: number, b3: number) {
  console.log(a3 + b3)
}
myFunc3(3, 3)

function myFunc4(a3: number, b3: number) {
  return (a3 + b3)
}
console.log(myFunc4(a3, b3))

function multiplication(a, b) {
  console.log(a * b)
}
multiplication(a, b)

function multiplication2(a, b) {
  return (a * b)
}
console.log(multiplication2(a, b))
multiplication2(a, b)


function addNumbers(a: number, b: number) {
  return (a + b);
}
console.log(addNumbers(40, 2))

function max(a, b) {
  if (a >= b) {
    return (a)
  } else {
    return (b)
  }
}
console.log(max(a, b))

let s5 = 10
let d5 = 15
function myFunc5(s5, d5) {
  v = s5 + d5
  return (v)
}
console.log(myFunc5(s5, d5))

s5 = 30
d5 = 25
myFunc5(s5, d5)

function logArguments() {
  for (i = 0; i < arguments.length; i++)
    console.log("argument" + (i + 1) + " = " + arguments[i])
}

//  let x = sumAll(1, 123, 500, 115, 44, 88);

//  function sumAll() {
//      var i;
//      var sum = 0;
//  // arguments.length — количество аргументов, переданных в функцию.
//      for (i = 0; i < arguments.length; i++) {
//          sum += arguments[i];
//      }
//      return sum;
//  }
//  console.log (x)



// let x8 = Number(prompt ('Введите первое число'))
// let y8 = Number(prompt ('Введите второе число'))
// let sum = 0

// if (x8<y8) { 
//     while (x8<=y8) {
//        sum+=x8
//     x8++
// }
// } else if (x8>y8) { 
//   while (x8>= y8) {
//   sum += y8
//  y8++
// }
// }
// alert ('сумма всех чисел в указанном диапазоне ' + sum)




// Запросить 2 числа и найти только наибольший общий делитель.

let x4 = 50
let y4 = 6
while (x4 != 0 && y4 != 0) {
  if (x4 > y4) {
    x4 = x4 % y4
  } else if (x4 < y4) {
    y4 = y4 % x4
  }
}
console.log(`самый большой делитель ${x4 + y4}`)




// Определить количество цифр в введенном числе.

let userNumber = 25
let count = 0
for (let i = 0; i < userNumber.length; i++) {
  count += 1
}
console.log(count)

// let userNumber = prompt(' Введите число'); 
// let count = 0;

// for (let i = 0; i < userNumber.length; i++) {
//     count += 1;
// };
// alert(` Число состоит из ${count} цифр`);


// Запросить у пользователя число и вывести все делители этого числа.
// let x = 10
// let sum
// while (x!=0) {
//   if (x == x%sum){
//     x >=sum
//     sum++
//   }
// }
// console.log (sum)






// Запросить у пользователя 10 чисел и подсчитать, сколько он 
// ввел положительных, отрицательных и нулей. При этом также посчитать, 
// сколько четных и нечетных. Вывести статистику на экран. Учтите, что 
// достаточно одной переменной (не 10) для ввода чисел пользователем.


// let positive = 0;
// let negative = 0;
// let zero = 0;
// let even = 0;
// let odd = 0;

// for (let i = 1; i <= 10; i++ ) {
//     const num = prompt("Введите число");

//     if (num > 0) {
//     positive++;
//     };
//     if (num < 0) {
//     negative++;
//     };
//     if (num == 0) {
//     zero++;
//     };
//     if (num % 2 == 0) {
//     even++;
//     };
//     if (num % 2 !== 0) {
//     odd++;
//     };
// };

// alert(` Из введенных цифр - положительных: ${positive}, отрицательных: ${negative}, нулей: ${zero}, четных: ${even}, нечетных: ${odd}.`)




// Зациклить калькулятор. Запросить у пользователя 2 числа и знак, решить 
// пример, вывести результат и спросить, хочет ли он решить еще один пример. 
// И так до тех пор, пока пользователь не откажется.

// let x = 10
// let y = 15
// if (x + y) {
//   console.log (x+y)
// }
// if (x - y) {
//   console.log (x-y)
// }


// do {
//   let firstNumber = prompt(' Введите первое число', 'zero + infinity');
//   let secondNumber = prompt(' Введите второе число');
//   let operator = prompt(' Введите математический оператор', '+, -, *, /')
//   let answer = eval(`${firstNumber} ${operator} ${secondNumber}`);
//   alert(`Ответ ${answer}`);

// } while (confirm(' Решить еще один пример?'));


// let x11 = prompt ('как тебя зовут?')
// console.log (`Вас зовут ${x11}`)

// const year = prompt ('Введите год вашего рождения')
// console.log (`Вам ${2023 - year} года`)

// let lenth = prompt('Введите длину стороны квадрата')
// console.log (`Перимерт квадрата = ${4*lenth}`)

// let radius = prompt ('Радиус окружности = ')
// console.log (`Площадь окружности = ${3.14 * radius *radius}`)

// let distance = prompt('Введите растояние между городами')
// let time = prompt('Ориентировочное время в пути')
// console.log (`Ваша средняя скорость = ${distance / time} километров в час`)

// let dollar = prompt ('Введите количество долларов')
// let euro = 0.8 * dollar
// console.log (`${euro} euro`)

// let capacity = prompt('Введите объем флешки')
// let sizeOfCard = 0.82
// console.log(`Количество файлов = ${parseInt(capacity / sizeOfCard)}`)

// let money = prompt ('Введите сумму в вашем кошельке')
// let cost = prompt ('Введите стоимость шоколадки')
// let amount = parseInt ( money / cost)
// let changeOfCash = (money - cost * amount) 
// console.log (amount + ' Количество шоколадок')
// console.log ('Ваша сдача ' + changeOfCash + ' рублей')

// let digital = prompt ('Введите число')
// if (digital%2 == 0) {
//   console.log ('Число четное')
// } else if (digital%2 == 1) {
//   console.log ('Число нечетное')
// } else if (digital == 0) {
//   console.log ('Ноль')
// } else {
//   console.log ('Это не число')
// }


// let x7 = +prompt ('введите число')
// if (x7>0) {
//   console.log ('число положительное')
// } else if (x7<0) {
//   console.log ('число отрицательное')
// } else if (x7==0) {
//   console.log ('число ноль')
// } else {
//   console.log ('это не число')
// }

// UAN или AZN, и получает в ответ соответствующую сумму
// const summ = Number(prompt ('Введите количество долларов'))
// let x7 = prompt ('Выберете валюту')

// if (x7=='EUR') {
//   console.log (`вы получили ${summ * 0.8} EUR`)
// } else if (x7=='UAN'){
//   console.log (`вы получили ${summ * 10} UAN`)
// } else if (x7=='AZN'){
//   console.log (`вы получили ${summ * 12} AZN`)
// } else {
//   console.log ('Такую валюту не обмениваем')
// }






// do {
//   let firstNumber = prompt(' Введите первое число', 'zero + infinity');
//   let secondNumber = prompt(' Введите второе число');
//   let operator = prompt(' Введите математический оператор', '+, -, *, /')
//   let answer = eval(`${firstNumber} ${operator} ${secondNumber}`);
//   alert(`Ответ ${answer}`);

// } while (confirm(' Решить еще один пример?'));




// Запросить у пользователя число и вывести все делители этого числа.
let number = 90
let divisor = []
for (let i = 1; i < number; i++) {
  if (number % i == 0) {
    // console.log(i)
    divisor.push(i)
  }
}
console.log(`Все делители числа ${number}:  ${divisor}`)







// ??????????????      Задания, в которых необходимо использовать DO WHILE.
// Предлагать пользователю решить пример 2 + 2 * 2 до тех 
// пор, пока он не решит его правильно


// do {
//   let r = prompt ('Введите ответ')
//   if (Number(r==6)) {
//     console.log (`Решение верно ${r}`)
//   } else {
//     console.log('Решение не верно, попробуйте еще раз')
//   }
// } while (confirm ('Решить еще раз?'))






// ???????????????? const z = prompt (['one', 'two', 'three']) ????????????????


const z = [10, 15, 25]
console.log(z)
const zReverse = z.reverse()
console.log(zReverse)






// Запросить у пользователя год и проверить, високосный он 
// или нет. Високосный год либо кратен 400, либо кратен 4 и 
// при этом не кратен 100.

// let year = prompt ('Введите год')
// if (year%100==0) {
//   console.log ('год не високосный')
// } else if (year%400==0){
//   console.log ('год високосный')
// } else if (year%4==0){
//   console.log ('год високосный')
// } else {
//   console.log ('Год не високосный')
// }





// Вывести все числа от 1 до 100, которые кратные указанному 
// пользователем числу

// let devider = 9
// let massive = []
// for (let i=1; i<100; i++) {
//   if (i%devider==0) {
//     // console.log  (i)
//     massive.push(i)
// }
// }
// console.log (`Все делимые числа числа ${devider} в диапазоне от 0 до 100: 
// ${massive}`)

// Вывести каждый 4-й элемент из указанного пользователем диапазона. Пользователь 
// указывает минимальное и максимальное значения диапазона

// let minDiapason = prompt ('Введите первое число')
// let maxDiapason = prompt ('Введите второе число')
// let massive2 = []
// for (let i=minDiapason; i<maxDiapason; i++) {
//   if (i%4==0)  {
//     massive2.push (i)
//   }
// }
// console.log(`числа в вашем диапазоне от ${minDiapason} до ${maxDiapason}: ${massive2}`)








// Запросить число и проверить, простое ли оно. Простое 
// число делится без остатка только на себя и на единицу.

let number3 = 5
for (let i = 1; i <= number3; i++) {
  if (number3 / i != 1 || i != 1) {
    console.log('число не простое')
  } else {
    console.log('число простое')
  }
}

// let num = +prompt('kk')
// function isPrime(num) {
//   for (var i = 2; i < num; i++)
//     if (num % i === 0) return false;
//   return num > 1;
// };

// function getMessage(num) {
//       alert(isPrime(num) ? 'Число простое': 'Число непростое')
// }
// console.log(isPrime(num))


// function isPrime(n) {
//   if (n < 2) {
//     return 'Число должно быть больше 1';
//   } else if (n === 2) {
//     return 'Простое число';
//   }

//   let i = 2;
//   const limit = Math.sqrt(n);
//   while (i <= limit) {
//     if (n % i === 0) {
//       return 'Составное число';
//     }
//     i +=1;
//   }

//   return 'Простое число';
// }


// console.log(100, isPrime(100));
// console.log(7, isPrime(7));
// console.log(0, isPrime(0));
// console.log(23, isPrime(23));
// console.log(2, isPrime(2));



let user = {
  name: "John",
  age: 30
}
console.log(user.name)
console.log(user.age)



console.log(user)

// function checkAge(age:number) {
//   return age>18||confirm('Родители разрешили?')
// return (age > 18) ? true : confirm('Родители разрешили?')
// if (age > 18) {
//   return true;
// } else {
//   return confirm('Родители разрешили?');
// }
// }








let value = 10
console.log(value)

// При описании функции мы указываем параметры, которые ожидаем получить как аргументы при вызове
const showMessage = function (n: number, a = ' Я значение по умолчанию аргумента "а"') {
  let local = 6
  let value = 7
  console.log('локальная переменная вместо глобальной', value)
  // console.log(n)
  console.log(local)
  n++
  console.log('Всем привет!' + a + ' ' + local + ' ' + n)
  return n
}

// При вызове функции в неё передаются аргументы
showMessage(value, ' Я аргумент "a"')
console.log('Возвращаемое значение функции', showMessage(value))
console.log(value)
// showMessage()

// Мы объявляем функции со списком параметров, затем вызываем их, передавая аргументы

// Несколько вариантов возврата значения по условию
function checkAge(age: number) {
  // return age>18||confirm('Родители разрешили?')
  // return (age > 18) ? true : confirm('Родители разрешили?')
  if (age > 18) {
    return true;
  } else {
    return confirm('Родители разрешили?');
  }
}

console.log(checkAge)

function ask(question: string, yes: Function, no: Function) {
  if (confirm(question)) yes()
  else no();
}
console.log(ask)


// Анонимные функции-колбэки
// ask(
//   "Вы согласны?",
//   function () { alert("Вы согласились."); },
//   function () { alert("Вы отменили выполнение."); }
// )

// ask(
//   "Вы согласны?",
//   () => alert('Вы согласились.') :
// () => alert("Вы отменили выполнение.")
// )


// Стрелочная функция
// let func = (arg1, arg2, ...argN) => expression
// let func = function (arg1, arg2, ...argN) {
//   return expression
// }

// Отсутствие фигурных скобок после стрелки, НЕЯВНО (не пишем return) возвращает результат
// let func1 = (a: number, b: number) => a+b;
let func1 = (a: number, b: number) => { return a }

let func2 = function (a: number, b: number) {
  return a + b
}
// Стрелочная функция с логикой и явным возвратом
let func3 = (a: number, b: number) => {
  const c = a + b
  return c
}

console.log('func1', func1(3, 2))
console.log('func2', func2(1, 2))
console.log('func3', func3(1, 2))

// ################### OBJECTS ######################
// let user
// user = new Object() // синтаксис "конструктор объекта"

// type User = {
//   age: number,
//   name: string
// }

// user = {} as any // синтаксис "литерал объекта"
// console.log({...user})
// user.age = 18
// console.log({...user})
// user.name = 'Vasya'
// console.log({...user})
// user.height = 180


// console.log(user.age)
// console.log({...user})

// const user1 = {
//   age: 18,
//   name: 'Vasya',
//   height: 180,
//   'master pass': '[admin}',
// } as any

// for (let key in user1) {
//   console.log(key, user1[key])
// }

// user1.age = 20
// console.log(user1['age'])
// let key = 'master pass'
// console.log(user1[key])
// delete user1['master pass']
// console.log(user1)

// let name = '123'
// let age = 20

// const user3 = {
//   name, 
//   age,
// }
// console.log(user3)

// оператор «in» позволяет проверить, существует ли ключ в объекте
// console.log('age' in user3)
// console.log('tall' in user3)

let newUser = {
  name: 'Ivan',
  age: 32,
  'angry birds': 'true'
}
console.log(newUser)
console.log(newUser.name)
console.log(newUser.age + ' years')

let city = {
  City: 'Sochi',
  location: 'Russia',
  'power of country': 123
}
console.log(city)
console.log(city['City'])
console.log(city.City)
console.log(city['power of country'])


const name3 = {
  name3: 'Sasha',
  job3: 'Plumber',
}
console.log(name3.name3)
name3.name3 = 'Alex'
console.log(name3)







let fruit = 'apple'
let bag = {
  [fruit + 'Computers']: 5,
}
console.log(fruit)
console.log(bag)


let user2
user2 = new Object() // синтаксис "конструктор объекта"

type User2 = {
  age: number,
  name: string
}

user = {} as any // синтаксис "литерал объекта"
console.log({ ...user })
user.age = 18
console.log({ ...user })
user.name = 'Vasya'
console.log({ ...user })
user.height = 180


console.log(user.age)
console.log({ ...user })

// let aboutMe = prompt('Введите данные', 'age, name, city')
let aboutMe = {
  name: 'Vova',
  age: 32,
  city: 'Sochi',
}
console.log(aboutMe)
console.log(aboutMe.name)
console.log([aboutMe.name])
let key = 'name'
console.log(aboutMe[key])
console.log('name' in aboutMe)
console.log(aboutMe.aaa === undefined)
for (let key in aboutMe) {
  console.log([key])
  console.log(aboutMe[key])
}
let user3 = {
  name: 'Jhon' as any,
  surname: 'Smith',
  'birds birds': 123,
}
console.log(user3)

user3.name = 'Peter'
console.log(user3)

delete user3.name
console.log(user3)
console.log(user3['birds birds'])



// let number = 90
// let divisor = []
// for (let i = 1; i < number; i++) {
//   if (number % i == 0) {
//       // console.log(i)
//       divisor.push(i)
//   }
// }
// console.log (`Все делители числа ${number}:  ${divisor}`)

let capitals = {
  Russia: 'Moscow',
  USA: 'Wasington',
  Spain: 'Madrid',
}
console.log(capitals)
capitals.USA = 'Moscow'
console.log(capitals)
// alert (`${capitals.Russia}  ${capitals.USA}`)


let fruct = 'apple'
let r = {
  [fruct]: 5,
}
console.log(fruct)
console.log(r)


// . Запросить у пользователя число и вывести все делители 
// этого числа.
// let num = 96
// let divider = []
// for (let i=1; i<num; i++) {
// if (num%i==0 && num!=1) {
//   divider.push (i)
//   console.log (i)
// }
// }
// console.log (`Все делители числа ${num}: ${divider}`)



// let num2 = 55
// let summ = []
// for (let i=1; i<num2; i++) {
//   if (num2%i==0) {
//     summ.push(i)
//     // console.log (i)
//   }
// }
// console.log (summ)


// Пользователь ввел число, а на экран вывелись все числа 
// от введенного до 0.

// let numb = prompt ('Введите число')
// for (let i=1; i<=numb; i++) {
//   console.log (i)
// }

//  Запросить 2 числа и найти все общие делители
let numb1 = 30
let numb2 = 20
let div = []
if (numb1 > numb2) {
  while (numb1 % numb2 == 0) {
    div++
  }
} else {
  while (numb2 % numb1 == 0) {
    div++
  }
}
console.log(div)



// ОБЪЕКТЫ

let car = {
  brand: 'Rio',
  color: 'white',
  speed: 85,
  engine: {
    horsePower: 123
  }
}

console.log(car)
console.log(car.engine)

let massive3 = ([car])
console.log(massive3)


let city2 = 'Belgorod'
let city3 = 'Sochi'

let user5 = {
  city2,
  city3,
  name: 'Nastya',
  age: 29,
  // 'like birds': true,
  extraInfo: {
    knowledge: 'average',
    height: '159 cm',
    nativeCity: 'Ufa',
  },
  dopInfo: {
    color: 'light'
  }
}
console.log(user5)
console.log(user5.extraInfo.knowledge)




// delete user5.extraInfo.knowledge
console.log(user5)

let x9 = user5.name
console.log(x9)
let x11 = user5['name']
console.log(x11)
user5.age = 30

let key5 = "likes birds";

// то же самое, что и user["likes birds"] = true;
user5[key5] = true;
console.log(user5[key5])

let x = 'orange'
let market = {
  [x]: 5,
}
console.log(market[x])



// Запросить число и проверить, простое ли оно. Простое 
// число делится без остатка только на себя и на единицу.

// let number10 = 91
// for (let i=2; i<number10; i++) {
//   if (number10%i==0) {
//     console.log ('число непростое')
//     break;
//   } else {
//     console.log ('число простое')
//     break;
//   }
// }

// Пользователь ввел число, а на экран вывелись все числа 
// от введенного до 0.
// let numb = 15
// let mass =[]
// for (let i=0; i<numb; i++) {
//   mass.push (i)
// }
// console.log(`все числа от введенного числа ${numb}: ${mass}`)


// Вывести # столько раз, сколько указал пользователь.















// Подсчитать сумму всех чисел в заданном пользователем диапазоне.
let num1 = 1
let num2 = 14
let sum = 0;
if (num1 < num2) {
  while (num1 <= num2) {
    sum += num1
    num1++  // зачем писать num1++ ?
  }
} else if (num1 > num2) {
  while (num1 >= num2) {
    sum += num2
    num2++
  }
}
console.log(sum)


// Определить количество цифр в введенном числе.

let num = 12378;
let str = String(num);
console.log(str.length);

let me = {
  name: 'vova',
  age: 32,
  'job is good ': 'yes',
}

console.log(me['job is good '])

//проверка существования свойств объекта
console.log(me.age === undefined)
console.log(me.height === undefined)
console.log(me.height)
//вторая проверка (используется редко)
console.log('age' in me)

for (let key in me) {
  console.log(key)
  console.log(me[key])
}

let usr = {
  name: "John",
  age: 30,
  isAdmin: true
};
usr.name = 'Lana'
console.log(usr.name)


for (let key in usr) {
  // ключи
  console.log(key);  // name, age, isAdmin
  // значения ключей
  console.log(usr[key]); // John, 30, true
  1
}
// function makeUser(nam, ag) {
//   return {
//     nam,
//     ag: ag
//     // ...другие свойства
//   };
// }

// let use = makeUser(30, 'john :)))');
// console.log(use); // John



let codes = {
  "+49": "Германия",
  "+41": "Швейцария",
  "+44": "Великобритания",
  // ..,
  "+1": "США"
}
console.log(codes)
for (let key in codes) {
  console.log(key)
  console.log(codes[key])
}

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}
let summm = (salaries.John + salaries.Ann + salaries.Pete)
console.log(summm)

// function isEmpty(obj) {
//   for (let key in obj) {
//     // если тело цикла начнет выполняться - значит в объекте есть свойства
//     return false;
//   }
//   return true;
// }



// function person (name, age, color) {
//   this.name = name;
//   this.age = age;
//   this. favColor = color;
// }

// var p1 = new person('john', 43, 'green');
// console.log (p1.age)

// console.log (p1.person)

let rr = {
  name: 'aaa',
}
console.log(rr)

rr.name = 'bbb'
console.log(rr)

let likes_birds = true;
console.log(likes_birds)










let simba = {
  animal: 'pig',
  age: 23,
}
console.log(simba)
// document.write(simba)


function abc() {
  return
  console.log('  alphabet: cirilic')
}
console.log(abc)
console.log('  alphabet: cirilic')
abc();
abc();

function hello(a, b) {
  let c
  a = 15;
  b = 3;
  c = a + b
  return c
}
// console.log (c);
// console.log (hello)



// JS_PZ_Modul_1_Week_4_функции

// 1. Написать функцию, которая принимает 2 числа и возвращает
// меньшее из них.
function compare(a: number = 7, b: number = 10) {
  return a < b ? a : b
}
console.log(compare())
console.log(compare(5, 8))


// 2. Написать функцию возведения числа в степень.
function pow(a, b) {
  return a ** b;
}
console.log(pow(2, 3))


// 3. Написать функцию, которая принимает 2 числа и знак 
// (+ - * /), считает пример и возвращает результат.

function calculator(a, b, operator) {
  if (operator == "+") {
    return (a + b)
  }
  else if (operator == "-") {
    return (a - b)
  }
  else if (operator == "*") {
    return (a * b)
  }
  if (operator == "/") {
    return (a / b)
  }
}

console.log('calc', calculator(1, 3, '+'))

// 4. Написать функцию, которая проверяет, является ли переданное
//  ей число простым
function simpleNumber(a: number) {
  for (let i = 2; i < a; i++) {
    if (a % i == 0) {
      return false
    }
  }
  return true
}
console.log(simpleNumber(9))



// 6. Написать функцию, которая реализует работу оператора %. 
// Функция принимает 2 параметра и возвращает остаток от 
// деления первого параметра на второй. 
// В функции использовать только + - * /, оператор % не использовать.

function operator(firstNum: number = 7, secondNum: number = 5) {
  let count = 0
  let accum = firstNum
  while(accum>=secondNum) {
    accum-=secondNum
    count++
  }
  return firstNum - secondNum*count
}
console.log(operator())
console.log('1%5',1%5)
console.log(operator(1,5))
console.log(112%8,operator(112,8))
console.log(112%11,operator(112,11))


// 7. Написать функцию, которая принимает от 1 до 5 чисел и 
// возвращает их сумму.

function summ(a=0, b=0, c=0, d=0, e=0) {
  let answer = (a + b + c + d + e)
  return answer
}
console.log(summ(1))
console.log(summ(1,2))
console.log(summ(1,2,3))
console.log(summ(1,2,3,4))
console.log(summ(1,2,3,4,5))

// 8. Написать функцию, которая принимает от 1 до 5 чисел и 
// возвращает большее из них

function biggestNumber (a=7, b=5, c=12, d=9, e=8) {
   return Math.max(a, b, c, d, e)
}
console.log(biggestNumber())

// 9. Написать функцию, которая выводит все четные или нечетные числа, в 
// указанном пользователем диапазоне.Какие числа выводить, определяется 
// третьим параметром типа bool(true – четные, false – нечетные).

function evenOdd (min = 5, max = 15, type=true) {
  let arr = []
  for (;min<=max; min++) {
  if (type && min%2==0) {
    arr.push(min)
  } else if (!type && min%2!=0) {
     arr.push(min)
   } 
  }
  return arr
}
console.log (evenOdd())
console.log (evenOdd(1,100,false))



// JS_DZ_Modul_1_Week_5_функции



// 2. Написать функцию поиска наибольшего общего делителя
function maxDiv (a = 24, b = 16) {
  let div=0
  for (let i=1; i<=Math.min(a,b); i++) {
      if (a%i==0 && b%i==0) {    
        div = i
      } 
    }
    return (div)
  }
  console.log('divider',maxDiv())
  
// let number1 = Number(prompt('Для нахождения НОД двух чисел введите первую цифру'));
// let number2 = Number(prompt('Введите вторую цифру'));

// while (number1 != 0 && number2 != 0) {
//     if (number1 > number2) {
//         number1 = number1 % number2;
//     } else {
//         number2 = number2 % number1;
//     };
// };
// alert(` Наибольший общий делитель двух указанных чисел равен ${number1 + number2}`);






// 3. Написать функцию для поиска максимальной цифры в числе.

function maxDigital (a=123) {
  let str = String(a)
  let max = 0
  for (let num of str) {
    if (max<+num) {
      max = +num
    }
  }
  return max
}
console.log (maxDigital())
console.log (maxDigital(465465469874))





// ?????
// 5. Написать функцию для вывода всех множителей переданного числа в 
// возрастающем порядке. Например: число 18 – множители 2 * 3 * 3.
function multiplier (a=18) {
  let array = []
  for (let i=2; i<=a; i++) {
    if (a%i==0) {
      array.push(i)
      a=a/i
      // console.log(i)
      i--
    } 
  }
  return array
}
console.log(multiplier(333))
console.log(multiplier(90))


// 6. Написать функцию, которая возвращает число Фибоначчи 
// по переданному порядковому номеру. 
// Числа Фибоначчи: 1, 1, 2, 3, 5, 8, 13… Ряд основывается на 
// том, что каждое число равно сумме двух предыдущих чисел. 
// Например: порядковый номер 3 – число 2, порядковый 
// номер 6 – число 8
function fib(n) {
  let a = 1;
  let b = 1;
  for (let i = 3; i <= n; i++) {
    let c = a + b;
    a = b;
    b = c;
  }
  return b;
}
console.log(fib(6))
console.log(`fibonachi 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89 `)

// через рекурсивную функцию
// function fib(n) {
//   return n<=1 ? n : fib(n-1) + fib(n-2);
// }
console.log(fib(19))
console.log(fib(7))
console.log(fib(23))

// 4. написать функцию, которая считает сумму цифр числа.
// например: число 1357, сумма 1 + 3 + 5 + 7= 16

// первый способ
function summNumber (num = 1357) {
  let str  = String(num)
  let sum = 0
  console.log (str.length)
  console.log(+str.split('').reverse().join('')) //числа наоборот
  str.split('').forEach((el)=>{
    sum+= +el
  })
  return sum
}

// второй способ/ рекурсия
function summNumberRec (num = 1357):number {
  const str = String(num)
  if (str.length == 1) {
    return num
  }
  const currNum = Math.floor(num/(10**(str.length-1)))
  return currNum + summNumberRec(num-currNum*10**(str.length-1))
}

// третий способ/ рекурсия
function summNumberRec2 (num = 1357):number {
  const str = String(num)
  if (str.length == 1) {
    return num
  }
  return +str[0] + summNumberRec(+str.slice(1))
}
console.log (summNumber())
console.log (summNumberRec(123))
console.log (summNumberRec2(123))




console.log('DOWN')
console.log('DOWN')
console.log('DOWN')

