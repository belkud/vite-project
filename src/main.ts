import './style.css'


let x = 18
console.log((x>=18) ? 'you are adult' : 'you are young')

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
let x1 = +prompt (' введите длину окружности')
let x2 = +prompt ('введите периметр квадрата')
let circle = x1*x1*3.14
let square = x2/4*(x2/4)
console.log(circle + ' circle cm')
console.log(square + ' square cm')
 if (circle > square) {
  console.log ('окружность не помещается')
 } else {
  console.log ('окужность помещается')
 }





// число 7   ==== 2 4 6 8 

// let x1 = 1
// if (x1 )
