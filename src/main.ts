import './style.css'


let x10 = 18
console.log((x10>=18) ? 'you are adult' : 'you are young')

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

console.log ((parseInt ('15.5px') - 6))
console.log ( parseInt('100px'))

console.log( Math.max(3, 5, -10, 0, 1) ); // 5
console.log( Math.min(1, 2) ); // 1
console.log( Math.pow(2, 11) )

// let month = 6
// for (let i = 0; i < month; i++) {
//     console.log(`платеж за ${i+ 1} месяц` , '1000 р')
//   }


  
//   console.log(`платеж за ${i+1} месяц`, '1000 р')
// // console.log('платеж за ' + i + ' месяц', '1000 р')

var arr0 = [];
var arr1 = new Array();
// создали массив с данными
const array = [0,2,3,5,7,8,9]
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


console.log (random(55,80))


console.log ( Math.max(3, 5, -10, 0, 1) )
console.log ( Math.min(3, 5, -10, 0, 1) )
 

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

// числа от 0 до 20, без чисел делящихся на 4

// let y5
// for (y5=0; y5<20; y5++){
//   if (y5%4==0) continue
//   console.log (Math.round(Math.random(y5)*20))
// }




// ???????????????????????????????????
// let deposit = +prompt ('Введите сумму')
// let procent = +prompt ('Введите процент')
// for (;x=0; x++) {
//   if (deposit< deposit*2)
// deposit+=deposit*procent
//   x++
// }
// console.log ('у вас удвоится сумма через ' + x + ' лет')



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
console.log ((y5 > x5) ? 'true':'false')

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

console.log (Math.pow (2, 10))

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
  return v*v*v

}
console.log(cube(v))
console.log (cube(3) + `  ${'куб чего-нибудь'}`)


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

function pow123(a,b) {
  if (Math.pow(a,b))
  return Math.pow(a,b)
}
console.log (pow123(a,b))

// 3. Написать функцию, которая принимает 2 числа и знак 
// (+ - * /), считает пример и возвращает результат.
let c
const myFunc = (a,b,c) => {
  if (c === '+') return a + b 
  if (c === '-') return a - b 
  if (c === '*') return a * b 
  if (c === '/') return a / b 
}
console.log (myFunc(a,b,'*'))



let g = 9
function Func(g) {
  if (Math.round(g)%2==0) {
    return Math.round (g)
  } else if (g < Math.round(g)) {
    return Math.round(g)-1
  } else
    return Math.round(g)+1
}
console.log (Func(g))
console.log (Func(7.7))
console.log (Func(9.5))

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
console.log ('"Error ' + showError(x3) + ' occured!"')
console.log ('"Error ' + showError(x3) + ' occured!"')


// 3. Создайте функцию createHeaders(N), которая создаст на 
// странице N заголовков 
// второго уровня (<h2>) с надписями Header1, Header2 … HeaderN

function createHeaders(N) {
  for (N=0; N<=5; N++)
  return 'asdasd'
}
document.write (createHeaders(N))