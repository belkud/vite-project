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





function random(min, max) {
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


// 2. Запросить 2 числа и найти только наибольший общий 
// делитель.
// 3. Запросить у пользователя число и вывести все делители 
// этого числа.



// 1. Подсчитать сумму всех чисел в заданном пользователем 
// диапазоне. 

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


//  1. Подсчитать сумму всех чисел в заданном пользователем 
// диапазоне.

// let num1 = Number(prompt('Для подсчета суммы чисел в заданном диапазоне введите начальную цифру диапазона'));
// let num2 = Number(prompt('Введите конечную цифру'));
// let sum = 0;

// if (num1 < num2) {
//     while (num1 <= num2) {
//         sum += num1;
//         num1++;
//     };
// } else if (num1 > num2) {
//     while (num1 >= num2) {
//         sum += num2;
//         num2++;
//     };
// };
// alert(`Сумма всех чисел в указанном диапазоне ${sum}`);


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


//  1. Подсчитать сумму всех чисел в заданном пользователем 
// диапазоне.
// let x9 = Number(prompt('Первое число'))
// let y9 = Number(prompt('Второе число'))
// let sum = 0
// if (x9 < y9){
//   while (x9<=y9) {
//     sum += x9
//     x9++
//   }
// } else if (y9 > x9){
//   while (y9>=x9) {
//     sum+=x9
//     x9++
//   }
// }
// console.log ('общая сумма чисел в заданном диапазоне ' + sum)




// Запросить 2 числа и найти только наибольший общий делитель.

// let x = 50
// let y = 6
// while (x!=0 && y!=0) {
// if (x > y) {
//   x=x%y
// } else if (x < y) {
//   y=y%x
// } 
// }
// console.log (`самый большой делитель ${x+y}`)




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

let x = 10
let y = 15
if (x + y) {
  console.log(x + y)
}
if (x - y) {
  console.log(x - y)
}


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







// ??????????????? Запросить у пользователя год и проверить, високосный он 
// или нет. Високосный год либо кратен 400, либо кратен 4 и 
// при этом не кратен 100.


// let year = prompt ('Введите год')
// if (year%400==0) {
//   console.log ('год високосный')
// } else if (year%100==0){
//   console.log ('год не високосный')
// } else if (year%4==0){
//   console.log ('год високосный')
// } else {
//   console.log ('Год не високосный')
// }






// let year = +(prompt ('Введите год') as string)
  
// if (year%400==0 || (year%4==0 && year%100)) {
//   console.log ('год високосный')
// } else {
//   console.log ('год not високосный')
// }



// Вывести все числа от 1 до 100, которые кратные указанному 
// пользователем числу

let devider = 9
let massive = []
for (let i = 1; i < 100; i++) {
  if (i % devider == 0) {
    // console.log  (i)
    massive.push(i)
  }
}
console.log(`Все делимые числа числа ${devider} в диапазоне от 0 до 100: 
${massive}`)




// ??????????????      Задания, в которых необходимо использовать DO WHILE.
// Предлагать пользователю решить пример 2 + 2 * 2 до тех 
// пор, пока он не решит его правильно


// let r
// do {
//   r = prompt ('2 + 2 * 2 = ?')
//   if (Number(r=='6')) {
//     console.log (`Решение верно ${r}`)
//   } else {
//     console.log('Решение не верно, попробуйте еще раз')
//   }
// } while (r!='6')






// Вывести каждый 4-й элемент из указанного пользователем диапазона. Пользователь 
// указывает минимальное и максимальное значения диапазона

// let minDiapason = prompt ('Введите первое число')
// let maxDiapason = prompt ('Введите второе число')
// let massive2 = []
// for (let i=minDiapason; i<maxDiapason; i++) {
//   if (i%4==0)  {
//     // continue
//     massive2.push (i)
//   }
// }
// console.log(`числа в вашем диапазоне от ${minDiapason} до ${maxDiapason}: ${massive2}`)





// Запросить число и проверить, простое ли оно. Простое 
// число делится без остатка только на себя и на единицу.

const checkIsSimple = +(prompt('input a number') as string)
let isSimple = true
for (let i=2; i<checkIsSimple; i++) {
  if (checkIsSimple%i==0) {
    isSimple = false
    break
  }
}
if (isSimple) {
  alert('simple')
} else {
  alert('not simple')
}

// let number3 = 10
// let massive3 = []
// for (let i = 1; i <= number3; i++) {
//   if (i % number == 0 && i % 1 == 0) {
//     massive3.push(i)
//     console.log(massive3)
//   } else {
//     console.log('число не простое')
//   }
// }


// Пользователь ввел число, а на экран вывелись все числа от введенного до 0.


let num = 10
let massive4 = []
let i
let massiveR = num.reverse()
for (let i = 1; i<=num; i++) {
  massive4.push(i)
}
console.log(`Все числа вашего массива: ${massive4}`)
// console.log(num.reverse())



// const z = [10, 15, 25]
// console.log(z)
// const zReverse = z.reverse()
// console.log(zReverse)

