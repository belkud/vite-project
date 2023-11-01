import './style.css'



// const intervalId = setInterval(function() {
//   console.log('Я выполняюсь каждую секунду')
// }, 1000)

// clearInterval(intervalId)
// clearTimeout(timerId)

function sss() {
  console.log(multycolor)
  multycolor.classList.remove('colored')
  multycolor.classList.add('red')
  multycolor.classList.toggle ('blue')
  // border.classList.toggle('bord')
}
const multycolor = document.querySelector('#multycolor') as HTMLButtonElement
multycolor.addEventListener('click', sss)


const box = document.querySelector('.box') as HTMLButtonElement
box.onmouseup =()=> {
  console.log(box)

  box.classList.toggle('box2')
  
}




const list = document.querySelector('.list') as HTMLUListElement
list.style.backgroundColor = 'lightgray'
console.log(list);


list.addEventListener ('click', (event)=> {
 const changeClass = event.target
//  changeClass.classList.add('blue')
// changeClass.classList.toggle('red')
 changeClass.classList.add('red')
  
 
//  console.log(target.classlist.add);
 
})
 

// console.log(event.timeStamp);

const circle = document.querySelector('.circle') as HTMLDivElement
circle.addEventListener ('click', (event)=> {
  console.log(event.timeStamp);
  circle.innerHTML = `pageY = ${event.pageY}px <br> clientY = ${event.clientY}px`
  circle.classList.toggle ('circle2')
  cat_animation.style.display= 'none'
  setTimeout(() => {
    
   cat_animation.style.display= 'block'
 }, 2000);
})

const switcher = document.querySelector('#switcher') as HTMLButtonElement
switcher.addEventListener('click', ()=> {
  if (ball_switcher.style.display == 'none') {
    ball_switcher.style.display = 'block'
    field_switcher.style.display = 'none'
  } else {
    ball_switcher.style.display = 'none'
    field_switcher.style.display = 'block'

  }
})




// Задание 1

const task1 = document.querySelector('#task1') as HTMLButtonElement
const enteranswer1 = document.querySelector('#enteranswer1') as HTMLButtonElement
const answer1 = document.querySelector('#answer1') as HTMLButtonElement
const showanswer1 = document.querySelector('#showanswer1') as HTMLButtonElement

task1.addEventListener('click', () =>
  alert('Давайте посмотрим, являетесь ли вы совершеннолетним'))

answer1.addEventListener('click', () => {
  if (enteranswer1.value>0 && enteranswer1.value <= 18) {
    showanswer1.value = 'Вы несовершеннолетний';
  } else if (enteranswer1.value > 18) {
    showanswer1.value = 'Вы совершеннолетний';
  } else if (enteranswer1.value) {
    showanswer1.value = 'Введите корректную информацию';
  } else {
    showanswer1.value = 'Пустой запрос';
    //!расширение окна под количество символов??? showanswer1.style.width = showanswer1.value
  }
})


// Задание 2

const task2 = document.querySelector('#task2') as HTMLButtonElement
const enteranswer2 = document.querySelector('#enteranswer2') as HTMLButtonElement
const answer2 = document.querySelector('#answer2') as HTMLButtonElement
const showanswer2 = document.querySelector('#showanswer2') as HTMLButtonElement

task2.addEventListener('click', () =>
  alert('Запросить у пользователя год и проверить, високосный он или нет.'))


answer2.addEventListener('click', () => {
  if (enteranswer2.value % 100 == 0) {
    showanswer2.value = 'год не високосный'
  } else if (enteranswer2.value % 4 == 0) {
    showanswer2.value = 'год високосный'
  } else {
    showanswer2.value = 'год не високосный'
  }
})



// Задание 3

const task3 = document.querySelector('#task3') as HTMLButtonElement
const enteranswer3 = document.querySelector('#enteranswer3') as HTMLButtonElement
const enteranswer3_2 = document.querySelector('#enteranswer3_2') as HTMLButtonElement
const answer3 = document.querySelector('#answer3') as HTMLButtonElement
const showanswer3 = document.querySelector('#showanswer3') as HTMLButtonElement

task3.addEventListener('click', () =>
  alert('Написать конвертор валют. Пользователь вводит количество USD, выбирает, в какую валюту хочет перевести: EUR, UAN или AZN и получает в ответ соответствующую сумму'))

answer3.addEventListener ('click', ()=> {
  if (enteranswer3.value == 'azn') {
showanswer3.value = 2*enteranswer3_2.value +'azn'
  } else if(enteranswer3.value == 'uan') {
showanswer3.value = 0.9*enteranswer3_2.value +'uan'
  } else if (enteranswer3.value == 'euro') {
  }})
  


let summ = 100
let currency = 'euro'
switch (currency) {
  case 'euro': 
  console.log (summ * 0.8 + ' euro')
  break 
  case 'uan': 
  console.log (summ * 5 + ' uan')
  break 
  case 'azn': 
  console.log (summ * 10 + ' azn')
  break 
  default:
}



const eye = document.querySelector('#eye') as HTMLPictureElement
const button_eye = document.querySelector('#button_eye') as HTMLButtonElement
button_eye.addEventListener('click', ()=> {
  eye.style.display === 'none' ? eye.style.display = 'block' : eye.style.display = 'none';
})

const cat_leg = document.querySelector ('#cat_leg')
const cat_leg2 = document.querySelector ('#cat_leg2')
const button_cat_leg = document.querySelector ('#button_cat_leg')
button_cat_leg?.addEventListener('click', ()=>{
 
 if (cat_leg.style.display=='none'){
    cat_leg.style.display='block'
    cat_leg2.style.display='none'
    button_cat_leg.innerHTML= 'Спасибо, кот '
} else {
    cat_leg.style.display='none'
    cat_leg2.style.display='block'
    button_cat_leg.innerHTML= 'Кот, помаши лапкой '
 }
 // cat_leg.classList.add('anim')
})

  

const cat = document.querySelector('#cat') as HTMLImageElement
const cat_phrase = document.querySelector('#cat_phrase') as HTMLDivElement
const button_phantom = document.querySelector('#button_phantom') as HTMLButtonElement
const button_remove_cat = document.querySelector('#button_remove') as HTMLButtonElement
const cat_die = document.querySelector('#cat_die') as HTMLButtonElement
const cat_phantom = document.querySelector('#cat_phantom') as HTMLButtonElement
const cat_animation = document.querySelector('#cat_animation') as HTMLButtonElement
const rope = document.querySelector('#rope') as HTMLDivElement
const rope1 = document.querySelector('#rope1') as HTMLDivElement
const rope2 = document.querySelector('#rope2') as HTMLDivElement


button_remove_cat.addEventListener('click', ()=> {
  
    setTimeout(() => {
 
    cat_phrase.style.opacity = 1 
    cat_phrase.style.transition = 2.5 +'s'
    }, 1000);
    
    setTimeout(() => {
      cat_option1.style.opacity = 1 
      cat_option1.style.transition = 3 + 's' 
    }, 2000);
    
    setTimeout(() => {
      cat_option2.style.opacity = 1 
      cat_option2.style.transition = 3 + 's' 
    }, 3000);
})


const cat_phrase3 = document.querySelector('cat_phrase3') as HTMLDivElement

button_phantom.addEventListener ('click', ()=> {
  setTimeout(() => {
    cat_phantom.style.display = 'block'
  }, 500);
  
  setTimeout(() => {
    cat_phantom.style.marginLeft = 300 +'px'
    cat_phantom.style.marginTop = 300 +'px'
    cat_phantom.style.transition = 5 +'s'
    
  }, 1000);

  setTimeout(() => {
    cat_phantom.style.filter = 'brightness(5.3)'
    cat_phantom.style.animation = 2+ 's'
  }, 6000);
  setTimeout(() => {
    cat_phantom.style.opacity = 0
    cat_phantom.style.animation = 2 + 's'
  }, 8000);

  // setTimeout(() => {
  //   cat_phrase3.style.display = 'block'
  // }, 7000);

})




const tomb_cat = document.querySelector('#tomb_cat') as HTMLDivElement
const tomb_cat2 = document.querySelector('#tomb_cat2') as HTMLDivElement
const cat_ghost_to_tomb = document.querySelector('#cat_ghost_to_tomb') as HTMLImageElement

const cat_phrase2 = document.querySelector('#cat_phrase2') as HTMLDivElement
const cat_dialog = document.querySelector('#cat_dialog') as HTMLDivElement
const cat_option1 = document.querySelector('#cat_option1') as HTMLDivElement
const cat_option2 = document.querySelector('#cat_option2') as HTMLDivElement


//! поднять наверх кота
cat_option1.addEventListener ('click', ()=> { 
  setTimeout(() => {
    cat_dialog.style.display = 'none' 
    rope1.style.display = 'block'
    rope2.style.display = 'block'
    rope.style.marginTop = 230 +'px'
    rope.style.transition = 3 + 's'
  }, 500);
  
  setTimeout(() => {
    rope.style.marginTop = 80 +'px'
    rope.style.transition = 1.5 + 's'
    cat_animation.style.marginTop = 200+ 'px'
    cat_animation.style.transition = 1.5 + 's'
  }, 4000);
 
  setTimeout(() => {
    cat_leg.style.display = 'none'
    cat_leg2.style.display = 'none'
    cat_die.style.display = 'none'
    cat.style.display = 'none'
    cat_phantom.style.display = 'block'
    cat_ghost_to_tomb.style.display = 'block'
    cat_ghost_to_tomb.style.position = 'relative'
  }, 6000);
  
  setTimeout(() => {
    cat_phantom.style.marginTop = -550 +'px'
    cat_phantom.style.transition = 6 + 's'
    eye.style.marginTop = -550 +'px'
    eye.style.transition = 0.5 + 's'
    
    cat_ghost_to_tomb.style.opacity = 1
    cat.style.opacity = 0
  }, 7000);
  
  setTimeout(() => {
    tomb_cat.style.display = 'block'
  }, 11000);

  setTimeout(() => {
    button_cat_digger.style.opacity = 1
    button_cat_digger.style.transition = 3 +'s'
  }, 11000);
})
 

// !закопать кота

const button_cat_digger = document.querySelector('#button_cat_digger') as HTMLButtonElement
button_cat_digger.addEventListener ('click', ()=> {
  
    setTimeout(() => {
    rope1.style.display = 'none'
    rope2.style.display = 'none'
  }, 2000);
  
  
  setTimeout(() => {
   tomb_cat2.style.opacity = 1
   tomb_cat2.style.animation = 3 +'s'
    
  }, 3000);
  
  setTimeout(() => {
    cat_ghost_to_tomb.style.marginTop = 420 +'px'
    cat_ghost_to_tomb.style.transition = 3 + 's'
  }, 4500);
  
  setTimeout(() => {
   tomb_cat.style.display = 'relative'
   tomb_cat.style.opacity = 1
   tomb_cat.style.animation = 3 +'s'
  }, 8000);

  setTimeout(() => {
    button_phantom.style.opacity = 1
    button_phantom.style.transition = 3 + 's'
  }, 9000);
  
})




//! диалог с котом
cat_option2.addEventListener ('click', ()=> {
  setTimeout(() => {
    cat_phrase.style.opacity = 0 
    cat_phrase.style.transition = 2.5 +'s' 
    cat_option1.style.opacity = 0 
    cat_option2.style.opacity = 0 
  }, 500);
  setTimeout(() => {
    cat_phrase2.style.opacity = 1
    cat_phrase2.style.transition = 3 + 's' 
  }, 3000);
  setTimeout(() => {
    cat_phrase2.style.opacity = 0
    cat_phrase2.style.transition = 2 + 's' 
  }, 5000);
})













// cat_phantom.style.filter = 'brightness(5.3)'


const clear = document.querySelector('#clear') as HTMLButtonElement
clear.addEventListener ('click', ()=>{
  // answer1.style.display = 'none'
  // cat_phrase3.style.display= 'none'

  
  
})









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

// let summ = prompt ('введите сколько долларов хотите поменять')
// let currency = prompt ('выбор валюты')
// if (currency== 'eur') {
//   console.log (summ * 0.9 + ' eur')
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










// let x10 = 18
// console.log((x10 >= 18) ? 'you are adult' : 'you are young')


//  if ( year % 100 == 0) {
///   console.log ('год не високосный')
//  } else if (year % 4 == 0) {
//   console.log ('год високосный')
//   } else {
//   console.log ('год не високосный')
//  }







// // let i = 3
// // for (i=0, i>5, i++)
// // console.log (i)

// // let year = prompt ('Ваш возраст')
// // console.log (2023 - year)

// // // Запросить у пользователя число от 0 до 9 и вывести ему
// // // спецсимвол, который расположен на этой клавише (1–!,
// // // 2–@, 3–# и т. д).
// // let symbol = 6;
// // switch(symbol) {
// // case 1: 
// // console.log ('!');
// // break;
// // case 2:
// //   console.log ('@');
// //   break;
// //   case 3:
// //     console.log ('#')
// //     break
// //     case 4:
// //       console.log ('$')
// //       break
// //       case 5: 
// //       console.log ('%')
// //       break
// //       default: 
// //       console.log('В данной области нет этого значения')
// // }






// // Запросить у пользователя год и проверить, високосный он
// // или нет. Високосный год либо кратен 400, либо кратен 4 и
// // при этом не кратен 100


// // let year = 2000
// //  if ( year % 100 == 0) {
// //   console.log ('год не високосный')
// //  } else if (year % 4 == 0) {
// //   console.log ('год високосный')
// //   } else {
// //   console.log ('год не високосный')
// //  }



// // Написать конвертор валют. Пользователь вводит количе-
// // ство USD, выбирает, в какую валюту хочет перевести: EUR,
// // UAN или AZN, и получает в ответ соответствующую сумму.

// // let summ = prompt ('введите сколько долларов хотите поменять')
// // let currency = prompt ('выбор валюты')
// // if (currency== 'eur') {
// //   console.log (summ * 0.8 + ' eur')
// // }
// // else if (currency== 'uan') {
// //   console.log (summ * 5 + ' uan')
// // }
// // else if (currency== 'azn') {
// //   console.log (summ * 10 + ' azn')
// // }
// // else {
// // console.log ('Данную валюту не меняем')
// // }


// // let summ = 100
// // let currency = 3
// // switch (currency) {
// //   case 1: 
// //   console.log (summ * 0.8 + ' euro')
// //   break 
// //   case 2: 
// //   console.log (summ * 5 + ' uan')
// //   break 
// //   case 3: 
// //   console.log (summ * 10 + ' azn')
// //   break 
// //   default:
// // }




// !
// // Запросить у пользователя сумму покупки и вывести сумму
// // к оплате со скидкой: от 200 до 300 – скидка будет 3%, от 300
// // до 500 – 5%, от 500 и выше – 7%.

// // let summ = 200
// // if (summ>=200 && summ<=300) {
// //   console.log (summ - 0.03*summ)
// // } else if (summ>300 && summ <=500) {
// //   console.log (summ - 0.05*summ)
// // } else if (summ>500) {
// //   console.log (summ - 0.07*summ)
// // } else {
// //   console.log ('Скидка не действует')
// // }


// // Запросить у пользователя длину окружности и периметр
// // квадрата. Определить, может ли такая окружность поме-
// // ститься в указанный квадрат.
// // let x1 = prompt (' введите длину окружности')
// // let x2 = prompt ('введите периметр квадрата')
// // let circle = x1*x1*3.14
// // let square = x2/4*(x2/4)
// // console.log(circle + ' circle cm')
// // console.log(square + ' square cm')
// //  if (circle > square) {
// //   console.log ('окружность не помещается')
// //  } else {
// //   console.log ('окужность помещается')
// //  }


// // let x3 
// // let z1=5
// // for (x3=0; x3<10; x3++) {
// // if (x3%z1==0) 
// //   console.log(z1)
// // }


// // число 7   ==== 2 4 6 8 

// // let x1 = 1
// // if (x1 )

// // В переменной day лежит какое-то число из интервала от 1 до 31. 
// // Определите в какую декаду 
// // месяца попадает это число (в первую, вторую или третью).



// // const day = Math.floor (((prompt('номер дня'))-1)/10)
// // switch (day) {
// //   case 0:
// //   console.log ('first decade')
// //   break
// //   case 1:
// //   console.log ('second decade')
// //   break
// //   case 2:
// //   console.log ('third decade')
// //   break
// //   case 3:
// //   console.log ('third decade')
// //   break
// //   default:
// // }

// // let z = Math.max(7/2)
// // console.log(z)


// // for (let z =0; z<20; z++) {
// //   console.log (Math.trunc(Math.random(z)*20))
// // }


// // убрать  цифры "456"
// // const num = 1.23456
// // console.log(Math.round (num*100) /100   )

// // console.log (9999999999999999 )

// console.log((parseInt('15.5px') - 6))
// console.log(parseInt('100px'))

// console.log(Math.max(3, 5, -10, 0, 1)); // 5
// console.log(Math.min(1, 2)); // 1
// console.log(Math.pow(2, 11))

// // let month = 6
// // for (let i = 0; i < month; i++) {
// //     console.log(`платеж за ${i+ 1} месяц` , '1000 р')
// //   }



// //   console.log(`платеж за ${i+1} месяц`, '1000 р')
// // // console.log('платеж за ' + i + ' месяц', '1000 р')

// // var arr0 = [];
// // var arr1 = new Array();
// // // создали массив с данными
// // const array = [0, 2, 3, 5, 7, 8, 9]
// // console.log(array)
// // array.push(10)
// // console.log(array)
// // array.pop()
// // console.log(array)





// function random(min: number, max: number) {
//   return Math.round(Math.random() * (max - min) + min);
// }
// // console.log(Math.round(Math.random()*(10-8)+8))
// // random(0-1)*(max - min) + min


// console.log(random(55, 80))


// console.log(Math.max(3, 5, -10, 0, 1))
// console.log(Math.min(3, 5, -10, 0, 1))


// // let string = prompt("Введи что-то:")
// // for (let i = 0; i < string.length / 2; i++) {
// // console.log ('полиндром' )
// // }

// // Получить сам символ можно string[i], как получить соответствующий с конца, подсчитаешь индекс самостоятельно.



// // "Задача 9: Запросите у пользователя трехзначное число и выведите его задом наперед. Для решения задачи вам понадобится оператор % (остаток от деления)"
// // );
// // let nmb = prompt('введите число');
// // var a = Number(nmb % 10);
// // var b = Number((nmb - a) / 10 % 10);
// // var c = Number((nmb - a - b * 10) / 100);
// // console.log('Перевертыш: ' + (a * 100 + b * 10 + c));

// function checkParity(num: number) {
//   num % 2 == 0
//   console.log('Число четное')
// }

// checkParity(8)

// //  Запросить у пользователя число и определить,
// //  оно полjжительное, отрицательное или ноль.

// // let x = +prompt ('введите число')
// // if (x>0) {
// //   console.log ('число положительное')
// // } else if (x<0) {
// //   console.log ('число отрицательное')
// // } else if (x==0) {
// //   console.log ('число ноль')
// // } else {
// //   console.log ('это не число')
// // }



// // . Запросить у пользователя число и вывести его модуль 
// // (|7| = 7, |-7| = 7).
// // let x = prompt('введите число')
// //   console.log (`|${-x}|`)




// // 2. Реализовать калькулятор. Пользователь вводит 2 числа и 
// // знак (+ - * /). В зависимости от введенного знака решить 
// // пример и вывести результат.

// // let x = 5
// // let y =10
// // let a = 3
// // switch (3) {
// //   case 1:
// //   console.log (x+y)
// //   break
// //   case 2:
// //   console.log (x-y)
// //   break
// //   case 3:
// //   console.log (x*y)
// //   break
// //   case 4:
// //   console.log (x/y)
// //   break
// //   default:
// //   console.log ('данная операция не поддерживается')
// // }

// // 1. Запросить 2 числа и вывести большее из них
// let x5 = 5
// let y5 = 7
// console.log((y5 > x5) ? 'true' : 'false')

// // 2. Запросить 1 число и проверить, оно кратно 5 или нет.
// // let x2 = 15
// // console.log((x2%5==0) ? 'true' : 'false')


// // 3. Запросить у пользователя название планеты. Если пользователь 
// // ввел «Земля» или «земля», то вывести «Привет, землянин!», 
// // в остальных случаях вывести «Привет, инопланетянин!». 

// // let x = prompt ('Введите название планеты')
// // console.log ((x=='земля'|| x=='Земля') 
// // ? 'true' + ' Привет, землянин!'
// // : 'false' + ' Привет, инопланетянин!')


// // Подсчитать сумму всех чисел в заданном пользователем диапазоне.
// // let num1 = 1
// // let num2 = 14
// // let sum = 0;
// //        if (num1 < num2) {
// //     while (num1 <= num2) {
// //         sum += num1
// //         num1++
// //     }
// // } else if (num1 > num2) {
// //     while (num1 >= num2) {
// //         sum += num2
// //         num2++
// //     }
// // }   
// //     console.log(`Сумма всех чисел в указанном диапазоне ${sum}`)



// // let number1 = Number(prompt('Для нахождения НОД двух чисел введите первую цифру'));
// // let number2 = Number(prompt('Введите вторую цифру'));

// // while (number1 != 0 && number2 != 0) {
// //     if (number1 > number2) {
// //         number1 = number1 % number2;
// //     } else {
// //         number2 = number2 % number1;
// //     };
// // };
// // alert(` Наибольший общий делитель двух указанных чисел равен ${number1 + number2}`);

// // let number = Number(prompt(' Введите число'));
// // let divisor = [];
// // for (let i = 2; i < number; i++) {
// //     if (number % i == 0 && number !== 1 ) {
// //         console.log(i);
// //         divisor.push(i);
// //     };
// // };
// // alert(`Все делители числа ${number}:  ${divisor}`);

// console.log(Math.pow(2, 10))

// // let a = 3
// // let b = 7
// // let c = a + b
// // console.log(c)
// // a = 5
// // b = 9
// // c = a + b
// // console.log(c)
// // console.log

// // function sum(a, b) {
// //   const c = a + b 
// //   console.log(c)
// // }

// // console.dir(myFn)
// let v = 5
// function cube(v: number) {
//   // let c
//   // c = v*v*v
//   // return c
//   return v * v * v

// }
// console.log(cube(v))
// console.log(cube(3) + `  ${'куб чего-нибудь'}`)


// // let a =4
// // let b = 5

// // function myFn(a, b){
// // let c 
// // a = a + 1
// // c = a + b
// // return c
// // }
// // console.log (myFn(10, 15))
// // console.log (a + b)


// // console.log(Math.abs(-10))
// // console.log(Math.pow(3, 10))

// // 1. Написать функцию, которая принимает 2 числа и 
// // возвращает меньшее из них

// let a = 7
// let b = 5
// function min(a: number, b: number) {
//   if (a < b) {
//     return a;
//   } else {
//     return b;
//   }
// }
// console.log(min(a, b))

// // 2. Написать функцию, которая возводит переданное число 
// // в указанную степень.

// function pow123(a: number, b: number) {
//   if (Math.pow(a, b))
//     return Math.pow(a, b)
// }
// console.log(pow123(a, b))

// // 3. Написать функцию, которая принимает 2 числа и знак 
// // (+ - * /), считает пример и возвращает результат.
// const myFunc = (a: number, b: number, c: any) => {
//   if (c === '+') return a + b
//   if (c === '-') return a - b
//   if (c === '*') return a * b
//   if (c === '/') return a / b
// }
// console.log(myFunc(a, b, '*'))



// let g = 9
// function Func(g: number) {
//   if (Math.round(g) % 2 == 0) {
//     return Math.round(g)
//   } else if (g < Math.round(g)) {
//     return Math.round(g) - 1
//   } else
//     return Math.round(g) + 1
// }
// console.log(Func(g))
// console.log(Func(7.7))
// console.log(Func(9.5))

// // . Создайте функцию sayError(), которая будет выводить (при помощи диалогового окна alert) сообщение 
// // с текстом «Some error occurred!».

// function sayError() {
//   return 'Some error occurred!'
// }
// console.log(sayError())

// // 2. Создайте функцию showError(x), которая будет выводить 
// // (при помощи диалогового окна alert) сообщение 
// // с текстом «Error X occurred!», где Х — текст из аргумента
// //  функции (например, вызов showError(‘Out of memory’) 
// // должен вывести сообщение «Error Out of memory occurred!»).
// // let x3
// // function showError(x3:any) {
// //   return 'good job'
// // }
// // console.log('"Error ' + showError(x3) + ' occured!"')


// // 3. Создайте функцию createHeaders(N), которая создаст на 
// // странице N заголовков 
// // второго уровня (<h2>) с надписями Header1, Header2 … HeaderN

// function createHeaders(N:number) {
//   for (let N = 0; N <= 5; N++)
//     return 'asdasd'
// }
// document.write (createHeaders())

// // 4. Создайте функцию checkPassword(x), которая вернет 
// // значение true, если в качестве аргумента в нее будет 
// // передан допустимый пароль (одно из значений «Step», 
// // «Web» или «JavaScript»). Иначе функция должна вернуть false.

// let password = 'web'
// function checkPassword(password: any) {
//   if (password == 'step' || password == 'web' || password == 'javascript') {
//     return 'пароль верный'
//   } else {
//     return 'пароль неверный'
//   }
// }
// console.log(checkPassword(password))


// // 5. Создайте функцию определения знака числа sign(x), которая 
// // вернет значение –1, если аргумент «х» — отрицательное число, 
// // 1 — если положительное, 0 — если аргумент «х» равен нулю.

// let c1 = 5
// function sign(c1: any) {
//   console.log(c1)
//   if (c1 > 0) {
//     return 'число положительное'
//   } else if (c1 < 0) {
//     return 'число отрицательное'
//   } else if (c1 == 0) {
//     return 'число ноль'
//   } else {
//     return 'введите корректное число'
//   }
// }
// console.log(sign(c1))
// sign('"дополнительна" функция')
// sign('"дополнительна" функция')

// // 6. Предложите имя (согласно правилам именования) и  создайте 
// // функцию, которая будет возвращать названия дней недели по их
// // номеру: 0-Sunday, 1-Monday, 2-Tuesday, 3-Wednesday, 4-Thursday, 
// // 5-Friday, 6-Saturday.



// let day = 5
// function week(day: any) {
//   if (day == 0) {
//     return 'Sunday'
//   } else if (day == 1) {
//     return 'Monday'
//   } else if (day == 2) {
//     return 'Tuesday'
//   } else if (day == 3) {
//     return 'Wednesday'
//   } else if (day == 4) {
//     return 'Thursday'
//   } else if (day == 5) {
//     return 'Friday'
//   } else if (day == 6) {
//     return 'Saturday'
//   } else {
//     return 'Number is wrong'
//   }
// }
// console.log(week(day))





// // числа от 0 до 20, без чисел делящихся на 4

// console.log('START')

// // for (let y5 = 0; y5 < 10;) {
// //   let a = Math.round(Math.random(y5) * 20)
// //   if (a % 4 == 0) continue
// //   y5++
// //   console.log(a)
// // }

// console.log('END')

// // let deposit = prompt ('Введите сумму')
// // let procent = prompt ('Введите процент')
// //  let money=deposit
// //  let x6
// // for (x6=0;money<deposit*2;x6++) {
// //     money+=deposit*procent/100
// //   }
// //   console.log ('у вас удвоится сумма через ' + x6 + ' лет')


// // ВАЖНО ВАЖНО ВАЖНО!!!!! РАЗОБРАТЬ ПРЕДЫДУЩИЕ ДВЕ ЗАДАЧИ


// // function myCity(name5) {
// //   console.log(name5 + ' это мой город')
// // }
// // myCity('Белгород')
// // myCity('Сочи ')

// // function myFunc2(name: string, name2: string) {
// //   console.log('My name is ' + name + ' My age is ' + name2)
// // }
// // myFunc2('Vladimir', 32)

// // let a3 = 7
// // let b3 = 10
// // function myFunc3(a3: number, b3: number) {
// //   console.log(a3 + b3)
// // }
// // myFunc3(3, 3)

// // function myFunc4(a3: number, b3: number) {
// //   return (a3 + b3)
// // }
// // console.log(myFunc4(a3, b3))

// // function multiplication(a, b) {
// //   console.log(a * b)
// // }
// // multiplication(a, b)

// function multiplication2(a: number, b: number) {
//   return (a * b)
// }
// console.log(multiplication2(a, b))
// multiplication2(a, b)


// function addNumbers(a: number, b: number) {
//   return (a + b);
// }
// console.log(addNumbers(40, 2))

// function max(a: number, b: number) {
//   if (a >= b) {
//     return (a)
//   } else {
//     return (b)
//   }
// }
// console.log(max(a, b))


// function myFunc5(s5 = 10, d5 = 15) {
//   v = s5 + d5
//   return (v)
// }
// console.log(myFunc5(v))


// function logArguments() {
//   for (let i = 0; i < arguments.length; i++)
//     console.log("argument" + (i + 1) + " = " + arguments[i])
// }
// console.log(logArguments())

// //  let x = sumAll(1, 123, 500, 115, 44, 88);

// //  function sumAll() {
// //      var i;
// //      var sum = 0;
// //  // arguments.length — количество аргументов, переданных в функцию.
// //      for (i = 0; i < arguments.length; i++) {
// //          sum += arguments[i];
// //      }
// //      return sum;
// //  }
// //  console.log (x)



// // let x8 = Number(prompt ('Введите первое число'))
// // let y8 = Number(prompt ('Введите второе число'))
// // let sum = 0

// // if (x8<y8) { 
// //     while (x8<=y8) {
// //        sum+=x8
// //     x8++
// // }
// // } else if (x8>y8) { 
// //   while (x8>= y8) {
// //   sum += y8
// //  y8++
// // }
// // }
// // alert ('сумма всех чисел в указанном диапазоне ' + sum)




// // Запросить 2 числа и найти только наибольший общий делитель.

// let x4 = 50
// let y4 = 6
// while (x4 != 0 && y4 != 0) {
//   if (x4 > y4) {
//     x4 = x4 % y4
//   } else if (x4 < y4) {
//     y4 = y4 % x4
//   }
// }
// console.log(`самый большой делитель ${x4 + y4}`)




// // Определить количество цифр в введенном числе.

// // let userNumber = 25
// // let count = 0
// // for (let i = 0; i < userNumber.lenght; i++) {
// //   count += 1
// // }
// // console.log(count)

// // let userNumber = prompt(' Введите число'); 
// // let count = 0;

// // for (let i = 0; i < userNumber.length; i++) {
// //     count += 1;
// // };
// // alert(` Число состоит из ${count} цифр`);


// // Запросить у пользователя число и вывести все делители этого числа.
// // let x = 10
// // let sum
// // while (x!=0) {
// //   if (x == x%sum){
// //     x >=sum
// //     sum++
// //   }
// // }
// // console.log (sum)






// // Запросить у пользователя 10 чисел и подсчитать, сколько он 
// // ввел положительных, отрицательных и нулей. При этом также посчитать, 
// // сколько четных и нечетных. Вывести статистику на экран. Учтите, что 
// // достаточно одной переменной (не 10) для ввода чисел пользователем.









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




// // Зациклить калькулятор. Запросить у пользователя 2 числа и знак, решить 
// // пример, вывести результат и спросить, хочет ли он решить еще один пример. 
// // И так до тех пор, пока пользователь не откажется.

// // let x = 10
// // let y = 15
// // if (x + y) {
// //   console.log (x+y)
// // }
// // if (x - y) {
// //   console.log (x-y)
// // }


// // do {
// //   let firstNumber = prompt(' Введите первое число', 'zero + infinity');
// //   let secondNumber = prompt(' Введите второе число');
// //   let operator = prompt(' Введите математический оператор', '+, -, *, /')
// //   let answer = eval(`${firstNumber} ${operator} ${secondNumber}`);
// //   alert(`Ответ ${answer}`);

// // } while (confirm(' Решить еще один пример?'));


// // let x11 = prompt ('как тебя зовут?')
// // console.log (`Вас зовут ${x11}`)

// // const year = prompt ('Введите год вашего рождения')
// // console.log (`Вам ${2023 - year} года`)

// // let lenth = prompt('Введите длину стороны квадрата')
// // console.log (`Перимерт квадрата = ${4*lenth}`)

// // let radius = prompt ('Радиус окружности = ')
// // console.log (`Площадь окружности = ${3.14 * radius *radius}`)

// // let distance = prompt('Введите растояние между городами')
// // let time = prompt('Ориентировочное время в пути')
// // console.log (`Ваша средняя скорость = ${distance / time} километров в час`)

// // let dollar = prompt ('Введите количество долларов')
// // let euro = 0.8 * dollar
// // console.log (`${euro} euro`)

// // let capacity = prompt('Введите объем флешки')
// // let sizeOfCard = 0.82
// // console.log(`Количество файлов = ${parseInt(capacity / sizeOfCard)}`)

// // let money = prompt ('Введите сумму в вашем кошельке')
// // let cost = prompt ('Введите стоимость шоколадки')
// // let amount = parseInt ( money / cost)
// // let changeOfCash = (money - cost * amount) 
// // console.log (amount + ' Количество шоколадок')
// // console.log ('Ваша сдача ' + changeOfCash + ' рублей')

// // let digital = prompt ('Введите число')
// // if (digital%2 == 0) {
// //   console.log ('Число четное')
// // } else if (digital%2 == 1) {
// //   console.log ('Число нечетное')
// // } else if (digital == 0) {
// //   console.log ('Ноль')
// // } else {
// //   console.log ('Это не число')
// // }


// // let x7 = +prompt ('введите число')
// // if (x7>0) {
// //   console.log ('число положительное')
// // } else if (x7<0) {
// //   console.log ('число отрицательное')
// // } else if (x7==0) {
// //   console.log ('число ноль')
// // } else {
// //   console.log ('это не число')
// // }

// // UAN или AZN, и получает в ответ соответствующую сумму
// // const summ = Number(prompt ('Введите количество долларов'))
// // let x7 = prompt ('Выберете валюту')

// // if (x7=='EUR') {
// //   console.log (`вы получили ${summ * 0.8} EUR`)
// // } else if (x7=='UAN'){
// //   console.log (`вы получили ${summ * 10} UAN`)
// // } else if (x7=='AZN'){
// //   console.log (`вы получили ${summ * 12} AZN`)
// // } else {
// //   console.log ('Такую валюту не обмениваем')
// // }






// // do {
// //   let firstNumber = prompt(' Введите первое число', 'zero + infinity');
// //   let secondNumber = prompt(' Введите второе число');
// //   let operator = prompt(' Введите математический оператор', '+, -, *, /')
// //   let answer = eval(`${firstNumber} ${operator} ${secondNumber}`);
// //   alert(`Ответ ${answer}`);

// // } while (confirm(' Решить еще один пример?'));




// // Запросить у пользователя число и вывести все делители этого числа.
// let number = 90
// let divisor = []
// for (let i = 1; i < number; i++) {
//   if (number % i == 0) {
//     // console.log(i)
//     divisor.push(i)
//   }
// }
// console.log(`Все делители числа ${number}:  ${divisor}`)







// // ??????????????      Задания, в которых необходимо использовать DO WHILE.
// // Предлагать пользователю решить пример 2 + 2 * 2 до тех 
// // пор, пока он не решит его правильно


// // do {
// //   let r = prompt ('Введите ответ')
// //   if (Number(r==6)) {
// //     console.log (`Решение верно ${r}`)
// //   } else {
// //     console.log('Решение не верно, попробуйте еще раз')
// //   }
// // } while (confirm ('Решить еще раз?'))






// // ???????????????? const z = prompt (['one', 'two', 'three']) ????????????????


// const z = [10, 15, 25]
// console.log(z)
// const zReverse = z.reverse()
// console.log(zReverse)






// // Запросить у пользователя год и проверить, високосный он 
// // или нет. Високосный год либо кратен 400, либо кратен 4 и 
// // при этом не кратен 100.

// // let year = prompt ('Введите год')
// // if (year%100==0) {
// //   console.log ('год не високосный')
// // } else if (year%400==0){
// //   console.log ('год високосный')
// // } else if (year%4==0){
// //   console.log ('год високосный')
// // } else {
// //   console.log ('Год не високосный')
// // }





// // Вывести все числа от 1 до 100, которые кратные указанному 
// // пользователем числу

// // let devider = 9
// // let massive = []
// // for (let i=1; i<100; i++) {
// //   if (i%devider==0) {
// //     // console.log  (i)
// //     massive.push(i)
// // }
// // }
// // console.log (`Все делимые числа числа ${devider} в диапазоне от 0 до 100: 
// // ${massive}`)

// // Вывести каждый 4-й элемент из указанного пользователем диапазона. Пользователь 
// // указывает минимальное и максимальное значения диапазона

// // let minDiapason = prompt ('Введите первое число')
// // let maxDiapason = prompt ('Введите второе число')
// // let massive2 = []
// // for (let i=minDiapason; i<maxDiapason; i++) {
// //   if (i%4==0)  {
// //     massive2.push (i)
// //   }
// // }
// // console.log(`числа в вашем диапазоне от ${minDiapason} до ${maxDiapason}: ${massive2}`)








// // Запросить число и проверить, простое ли оно. Простое 
// // число делится без остатка только на себя и на единицу.

// let number3 = 5
// for (let i = 1; i <= number3; i++) {
//   if (number3 / i != 1 || i != 1) {
//     console.log('число не простое')
//   } else {
//     console.log('число простое')
//   }
// }

// // let num = +prompt('kk')
// // function isPrime(num) {
// //   for (var i = 2; i < num; i++)
// //     if (num % i === 0) return false;
// //   return num > 1;
// // };

// // function getMessage(num) {
// //       alert(isPrime(num) ? 'Число простое': 'Число непростое')
// // }
// // console.log(isPrime(num))


// // function isPrime(n) {
// //   if (n < 2) {
// //     return 'Число должно быть больше 1';
// //   } else if (n === 2) {
// //     return 'Простое число';
// //   }

// //   let i = 2;
// //   const limit = Math.sqrt(n);
// //   while (i <= limit) {
// //     if (n % i === 0) {
// //       return 'Составное число';
// //     }
// //     i +=1;
// //   }

// //   return 'Простое число';
// // }


// // console.log(100, isPrime(100));
// // console.log(7, isPrime(7));
// // console.log(0, isPrime(0));
// // console.log(23, isPrime(23));
// // console.log(2, isPrime(2));



// let user = {
//   name: "John",
//   age: 30
// }
// console.log(user.name)
// console.log(user.age)



// console.log(user)

// // function checkAge(age:number) {
// //   return age>18||confirm('Родители разрешили?')
// // return (age > 18) ? true : confirm('Родители разрешили?')
// // if (age > 18) {
// //   return true;
// // } else {
// //   return confirm('Родители разрешили?');
// // }
// // }








// let value = 10
// console.log(value)

// // При описании функции мы указываем параметры, которые ожидаем получить как аргументы при вызове
// const showMessage = function (n: number, a = ' Я значение по умолчанию аргумента "а"') {
//   let local = 6
//   let value = 7
//   console.log('локальная переменная вместо глобальной', value)
//   // console.log(n)
//   console.log(local)
//   n++
//   console.log('Всем привет!' + a + ' ' + local + ' ' + n)
//   return n
// }

// // При вызове функции в неё передаются аргументы
// showMessage(value, ' Я аргумент "a"')
// console.log('Возвращаемое значение функции', showMessage(value))
// console.log(value)
// // showMessage()

// // Мы объявляем функции со списком параметров, затем вызываем их, передавая аргументы

// // Несколько вариантов возврата значения по условию
// function checkAge(age: number) {
//   // return age>18||confirm('Родители разрешили?')
//   // return (age > 18) ? true : confirm('Родители разрешили?')
//   if (age > 18) {
//     return true;
//   } else {
//     return confirm('Родители разрешили?');
//   }
// }

// console.log(checkAge)

// function ask(question: string, yes: Function, no: Function) {
//   if (confirm(question)) yes()
//   else no();
// }
// console.log(ask)


// // Анонимные функции-колбэки
// // ask(
// //   "Вы согласны?",
// //   function () { alert("Вы согласились."); },
// //   function () { alert("Вы отменили выполнение."); }
// // )

// // ask(
// //   "Вы согласны?",
// //   () => alert('Вы согласились.') :
// // () => alert("Вы отменили выполнение.")
// // )


// // Стрелочная функция
// // let func = (arg1, arg2, ...argN) => expression
// // let func = function (arg1, arg2, ...argN) {
// //   return expression
// // }

// // Отсутствие фигурных скобок после стрелки, НЕЯВНО (не пишем return) возвращает результат
// // let func1 = (a: number, b: number) => a+b;
// // let func1 = (a: number, b: number) => { return a }

// // let func2 = function (a: number, b: number) {
// //   return a + b
// // }
// // Стрелочная функция с логикой и явным возвратом
// // let func3 = (a: number, b: number) => {
// //   const c = a + b
// //   return c
// // }

// // console.log('func1', func1(3, 2))
// // console.log('func2', func2(1, 2))
// // console.log('func3', func3(1, 2))

// // ################### OBJECTS ######################
// // let user
// // user = new Object() // синтаксис "конструктор объекта"

// // type User = {
// //   age: number,
// //   name: string
// // }

// // user = {} as any // синтаксис "литерал объекта"
// // console.log({...user})
// // user.age = 18
// // console.log({...user})
// // user.name = 'Vasya'
// // console.log({...user})
// // user.height = 180


// // console.log(user.age)
// // console.log({...user})

// // const user1 = {
// //   age: 18,
// //   name: 'Vasya',
// //   height: 180,
// //   'master pass': '[admin}',
// // } as any

// // for (let key in user1) {
// //   console.log(key, user1[key])
// // }

// // user1.age = 20
// // console.log(user1['age'])
// // let key = 'master pass'
// // console.log(user1[key])
// // delete user1['master pass']
// // console.log(user1)

// // let name = '123'
// // let age = 20

// // const user3 = {
// //   name, 
// //   age,
// // }
// // console.log(user3)

// // оператор «in» позволяет проверить, существует ли ключ в объекте
// // console.log('age' in user3)
// // console.log('tall' in user3)

// let newUser = {
//   name: 'Ivan',
//   age: 32,
//   'angry birds': 'true'
// }
// console.log(newUser)
// console.log(newUser.name)
// console.log(newUser.age + ' years')

// let city = {
//   City: 'Sochi',
//   location: 'Russia',
//   'power of country': 123
// }
// console.log(city)
// console.log(city['City'])
// console.log(city.City)
// console.log(city['power of country'])


// const name3 = {
//   name3: 'Sasha',
//   job3: 'Plumber',
// }
// console.log(name3.name3)
// name3.name3 = 'Alex'
// console.log(name3)







// let fruit = 'apple'
// let bag = {
//   [fruit + 'Computers']: 5,
// }
// console.log(fruit)
// console.log(bag)


// // let user2
// // user2 = new Object() // синтаксис "конструктор объекта"

// // type User2 = {
// //   age: number,
// //   name: string
// // }

// // user = {} as any // синтаксис "литерал объекта"
// // console.log({ ...user })
// // user.age = 18
// // console.log({ ...user })
// // user.name = 'Vasya'
// // console.log({ ...user })
// // user.height = 180


// console.log(user.age)
// console.log({ ...user })

// // let aboutMe = prompt('Введите данные', 'age, name, city')
// let aboutMe = {
//   name: 'Vova',
//   age: 32,
//   city: 'Sochi',
// }
// console.log(aboutMe)
// console.log(aboutMe.name)
// console.log([aboutMe.name])
// let key = 'name'
// // console.log(aboutMe[key])
// // console.log('name' in aboutMe)
// // console.log(aboutMe.aaa === undefined)
// // for (let key in aboutMe) {
// console.log([key])
// //   console.log(aboutMe[key])
// // }
// let user3 = {
//   name: 'Jhon' as any,
//   surname: 'Smith',
//   'birds birds': 123,
// }
// console.log(user3)

// user3.name = 'Peter'
// console.log(user3)

// delete user3.name
// console.log(user3)
// console.log(user3['birds birds'])



// // let number = 90
// // let divisor = []
// // for (let i = 1; i < number; i++) {
// //   if (number % i == 0) {
// //       // console.log(i)
// //       divisor.push(i)
// //   }
// // }
// // console.log (`Все делители числа ${number}:  ${divisor}`)

// let capitals = {
//   Russia: 'Moscow',
//   USA: 'Wasington',
//   Spain: 'Madrid',
// }
// console.log(capitals)
// capitals.USA = 'Moscow'
// console.log(capitals)
// // alert (`${capitals.Russia}  ${capitals.USA}`)


// let fruct = 'apple'
// let r = {
//   [fruct]: 5,
// }
// console.log(fruct)
// console.log(r)


// // . Запросить у пользователя число и вывести все делители 
// // этого числа.
// // let num = 96
// // let divider = []
// // for (let i=1; i<num; i++) {
// // if (num%i==0 && num!=1) {
// //   divider.push (i)
// //   console.log (i)
// // }
// // }
// // console.log (`Все делители числа ${num}: ${divider}`)



// // let num2 = 55
// // let summ = []
// // for (let i=1; i<num2; i++) {
// //   if (num2%i==0) {
// //     summ.push(i)
// //     // console.log (i)
// //   }
// // }
// // console.log (summ)


// // Пользователь ввел число, а на экран вывелись все числа 
// // от введенного до 0.

// // let numb = prompt ('Введите число')
// // for (let i=1; i<=numb; i++) {
// //   console.log (i)
// // }

// //  Запросить 2 числа и найти все общие делители
// let numb1 = 30
// let numb2 = 20
// let div: any = []
// if (numb1 > numb2) {
//   while (numb1 % numb2 == 0) {
//     div++
//   }
// } else {
//   while (numb2 % numb1 == 0) {
//     div++
//   }
// }
// console.log(div)



// // ОБЪЕКТЫ

// let car = {
//   brand: 'Rio',
//   color: 'white',
//   speed: 85,
//   engine: {
//     horsePower: 123
//   }
// }

// console.log(car)
// console.log(car.engine)

// let massive3 = ([car])
// console.log(massive3)


// let city2 = 'Belgorod'
// let city3 = 'Sochi'

// let user5 = {
//   city2,
//   city3,
//   name: 'Nastya',
//   age: 29,
//   // 'like birds': true,
//   extraInfo: {
//     knowledge: 'average',
//     height: '159 cm',
//     nativeCity: 'Ufa',
//   },
//   dopInfo: {
//     color: 'light'
//   }
// }
// console.log(user5)
// console.log(user5.extraInfo.knowledge)




// // delete user5.extraInfo.knowledge
// console.log(user5)

// let x9 = user5.name
// console.log(x9)
// let x11 = user5['name']
// console.log(x11)
// user5.age = 30

// // let key5 = "likes birds";
// // // то же самое, что и user["likes birds"] = true;
// // user5[key5] = true;
// // console.log(user5[key5])

// // let x = 'orange'
// // let market = {
// //   [x]: 5,
// // }
// // console.log(market[x])



// // Запросить число и проверить, простое ли оно. Простое 
// // число делится без остатка только на себя и на единицу.

// // let number10 = 91
// // for (let i=2; i<number10; i++) {
// //   if (number10%i==0) {
// //     console.log ('число непростое')
// //     break;
// //   } else {
// //     console.log ('число простое')
// //     break;
// //   }
// // }
// // Пользователь ввел число, а на экран вывелись все числа 
// // от введенного до 0.
// // let numb = 15
// // let mass =[]
// // for (let i=0; i<numb; i++) {
// //   mass.push (i)
// // }
// // console.log(`все числа от введенного числа ${numb}: ${mass}`)


// // Вывести # столько раз, сколько указал пользователь.















// // Подсчитать сумму всех чисел в заданном пользователем диапазоне.
// let num1 = 1
// let num2 = 14
// let sum = 0;
// if (num1 < num2) {
//   while (num1 <= num2) {
//     sum += num1
//     num1++  // зачем писать num1++ ?
//   }
// } else if (num1 > num2) {
//   while (num1 >= num2) {
//     sum += num2
//     num2++
//   }
// }
// console.log(sum)


// // Определить количество цифр в введенном числе.

// let num = 12378;
// let str = String(num);
// console.log(str.length);

// let me = {
//   name: 'vova',
//   age: 32,
//   'job is good ': 'yes',
// }

// console.log(me['job is good '])

// // //проверка существования свойств объекта
// // console.log(me.age === undefined)
// // console.log(me.height === undefined)
// // console.log(me.height)
// // //вторая проверка (используется редко)
// // console.log('age' in me)

// // for (let key in me) {
// //   console.log(key)
// //   console.log(me[key])
// // }

// // let usr = {
// //   name: "John",
// //   age: 30,
// //   isAdmin: true
// // };
// // usr.name = 'Lana'
// // console.log(usr.name)


// // for (let key in usr) {
// //   // ключи
// //   console.log(key);  // name, age, isAdmin
// //   // значения ключей
// //   console.log(usr[key]); // John, 30, true
// //   1
// // }
// // function makeUser(nam, ag) {
// //   return {
// //     nam,
// //     ag: ag
// //     // ...другие свойства
// //   };
// // }

// // let use = makeUser(30, 'john :)))');
// // console.log(use); // John



// // let codes = {
// //   "+49": "Германия",
// //   "+41": "Швейцария",
// //   "+44": "Великобритания",
// //   // ..,
// //   "+1": "США"
// // }
// // console.log(codes)
// // for (let key in codes) {
// //   console.log(key)
// //   console.log(codes[key])
// // }

// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130
// }
// let summm = (salaries.John + salaries.Ann + salaries.Pete)
// console.log(summm)

// // function isEmpty(obj) {
// //   for (let key in obj) {
// //     // если тело цикла начнет выполняться - значит в объекте есть свойства
// //     return false;
// //   }
// //   return true;
// // }



// // function person (name, age, color) {
// //   this.name = name;
// //   this.age = age;
// //   this. favColor = color;
// // }

// // var p1 = new person('john', 43, 'green');
// // console.log (p1.age)

// // console.log (p1.person)

// let rr = {
//   name: 'aaa',
// }
// console.log(rr)

// rr.name = 'bbb'
// console.log(rr)

// let likes_birds = true;
// console.log(likes_birds)










// let simba = {
//   animal: 'pig',
//   age: 23,
// }
// console.log(simba)
// // document.write(simba)


// function abc() {
//   console.log('  alphabet: cirilic')
//   return
// }
// console.log(abc)
// console.log('  alphabet: cirilic')
// abc();
// abc();

// function hello(a: number, b: number) {
//   let c
//   a = 15;
//   b = 3;
//   c = a + b
//   return c
// }
// // console.log (c);
// console.log(hello)



// // JS_PZ_Modul_1_Week_4_функции

// // 1. Написать функцию, которая принимает 2 числа и возвращает
// // меньшее из них.
// // function compare(a: number = 7, b: number = 10) {
// //   return a < b ? a : b
// // }
// // console.log(compare())
// // console.log(compare(5, 8))


// // 2. Написать функцию возведения числа в степень.
// function pow(a: number, b: number) {
//   return a ** b;
// }
// console.log(pow(2, 3))


// // 3. Написать функцию, которая принимает 2 числа и знак 
// // (+ - * /), считает пример и возвращает результат.

// function calculator(a: any, b: any, operator: any) {
//   if (operator == "+") {
//     return (a + b)
//   }
//   else if (operator == "-") {
//     return (a - b)
//   }
//   else if (operator == "*") {
//     return (a * b)
//   }
//   if (operator == "/") {
//     return (a / b)
//   }
// }

// console.log('calc', calculator(1, 3, '+'))

// // 4. Написать функцию, которая проверяет, является ли переданное
// //  ей число простым
// function simpleNumber(a: number) {
//   for (let i = 2; i < a; i++) {
//     if (a % i == 0) {
//       return false
//     }
//   }
//   return true
// }
// console.log(simpleNumber(9))



// // 6. Написать функцию, которая реализует работу оператора %. 
// // Функция принимает 2 параметра и возвращает остаток от 
// // деления первого параметра на второй. 
// // В функции использовать только + - * /, оператор % не использовать.

// function operator(firstNum: number = 7, secondNum: number = 5) {
//   let count = 0
//   let accum = firstNum
//   while (accum >= secondNum) {
//     accum -= secondNum
//     count++
//   }
//   return firstNum - secondNum * count
// }
// console.log(operator())
// console.log('1%5', 1 % 5)
// console.log(operator(1, 5))
// console.log(112 % 8, operator(112, 8))
// console.log(112 % 11, operator(112, 11))


// // 7. Написать функцию, которая принимает от 1 до 5 чисел и 
// // возвращает их сумму.

// function summ(a = 0, b = 0, c = 0, d = 0, e = 0) {
//   let answer = (a + b + c + d + e)
//   return answer
// }
// console.log(summ(1))
// console.log(summ(1, 2))
// console.log(summ(1, 2, 3))
// console.log(summ(1, 2, 3, 4))
// console.log(summ(1, 2, 3, 4, 5))

// // 8. Написать функцию, которая принимает от 1 до 5 чисел и 
// // возвращает большее из них

// function biggestNumber(a = 7, b = 5, c = 12, d = 9, e = 8) {
//   return Math.max(a, b, c, d, e)
// }
// console.log(biggestNumber())

// // 9. Написать функцию, которая выводит все четные или нечетные числа, в 
// // указанном пользователем диапазоне.Какие числа выводить, определяется 
// // третьим параметром типа bool(true – четные, false – нечетные).

// function evenOdd(min = 5, max = 15, type = true) {
//   let arr = []
//   for (; min <= max; min++) {
//     if (type && min % 2 == 0) {
//       arr.push(min)
//     } else if (!type && min % 2 != 0) {
//       arr.push(min)
//     }
//   }
//   return arr
// }
// console.log(evenOdd())
// console.log(evenOdd(1, 100, false))



// // JS_DZ_Modul_1_Week_5_функции



// // 2. Написать функцию поиска наибольшего общего делителя
// function maxDiv(a = 24, b = 16) {
//   let div = 0
//   for (let i = 1; i <= Math.min(a, b); i++) {
//     if (a % i == 0 && b % i == 0) {
//       div = i
//     }
//   }
//   return (div)
// }
// console.log('divider', maxDiv())

// // let number1 = Number(prompt('Для нахождения НОД двух чисел введите первую цифру'));
// // let number2 = Number(prompt('Введите вторую цифру'));

// // while (number1 != 0 && number2 != 0) {
// //     if (number1 > number2) {
// //         number1 = number1 % number2;
// //     } else {
// //         number2 = number2 % number1;
// //     };
// // };
// // alert(` Наибольший общий делитель двух указанных чисел равен ${number1 + number2}`);






// // 3. Написать функцию для поиска максимальной цифры в числе.

// function maxDigital(a = 123) {
//   let str = String(a)
//   let max = 0
//   for (let num of str) {
//     if (max < +num) {
//       max = +num
//     }
//   }
//   return max
// }
// console.log(maxDigital())
// console.log(maxDigital(465465469874))





// // ?????
// // 5. Написать функцию для вывода всех множителей переданного числа в 
// // возрастающем порядке. Например: число 18 – множители 2 * 3 * 3.
// function multiplier(a = 18) {
//   let array = []
//   for (let i = 2; i <= a; i++) {
//     if (a % i == 0) {
//       array.push(i)
//       a = a / i
//       // console.log(i)
//       i--
//     }
//   }
//   return array
// }
// console.log(multiplier(333))
// console.log(multiplier(90))


// // 6. Написать функцию, которая возвращает число Фибоначчи 
// // по переданному порядковому номеру. 
// // Числа Фибоначчи: 1, 1, 2, 3, 5, 8, 13… Ряд основывается на 
// // том, что каждое число равно сумме двух предыдущих чисел. 
// // Например: порядковый номер 3 – число 2, порядковый 
// // номер 6 – число 8
// function fib(n: number) {
//   let a = 1;
//   let b = 1;
//   for (let i = 3; i <= n; i++) {
//     let c = a + b;
//     a = b;
//     b = c;
//   }
//   return b;
// }
// console.log(fib(6))
// console.log(`fibonachi 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89 `)

// // через рекурсивную функцию
// // function fib(n) {
// //   return n<=1 ? n : fib(n-1) + fib(n-2);
// // }
// console.log(fib(19))
// console.log(fib(7))
// console.log(fib(23))

// // 4. написать функцию, которая считает сумму цифр числа.
// // например: число 1357, сумма 1 + 3 + 5 + 7= 16

// // первый способ
// function summNumber(num = 1357) {
//   let str = String(num)
//   let sum = 0
//   console.log(str.length) // количество аргументов
//   console.log(+str.split('').reverse().join('')) //числа наоборот
//   str.split('').forEach((el) => {
//     sum += +el
//   })
//   return sum
// }

// // второй способ/ рекурсия
// function summNumberRec(num = 1357): number {
//   const str = String(num)
//   if (str.length == 1) {
//     return num
//   }
//   const currNum = Math.floor(num / (10 ** (str.length - 1)))
//   return currNum + summNumberRec(num - currNum * 10 ** (str.length - 1))
// }

// // третий способ/ рекурсия
// function summNumberRec2(num = 1357): number {
//   const str = String(num)
//   if (str.length == 1) {
//     return num
//   }
//   return +str[0] + summNumberRec(+str.slice(1))
// }
// console.log(summNumber())
// console.log(summNumberRec(123))
// console.log(summNumberRec2(123))


// // 3. Написать функцию для поиска максимальной цифры в числе.

// // первый способ

// function maxNum(a: number) {
//   let str = String(a)
//   return Math.max(...str.split('').map(el => +el))
// }
// console.log(maxNum(123459))


// // второй способ

// // function maxDigital (a=123) {
// //   let str = String(a)
// //   let max = 0
// //   for (let num of str) {
// //     if (max<+num) {
// //       max = +num
// //     }
// //   }
// //   return max
// // }
// console.log(maxDigital())
// console.log(maxDigital(465465469874))


// console.log(Math.max(3, 5, -10, 0, 1))

// // 2. Написать функцию поиска наибольшего общего делителя.
// // Найти общие делители

// function maxDiv2(a = 24, b = 16) {
//   let div = 0
//   let massive = []
//   for (let i = 1; i <= Math.min(a, b); i++) {
//     if (a % i == 0 && b % i == 0) {
//       div = i
//       massive.push(i)
//     }
//   }
//   return { div, massive }
// }
// console.log(maxDiv2())


// // 3. Написать функцию, которая выводит переданное ей число 
// // задом наперед. Например: число 1234 вывести как 4321.

// // function reverce(a = 123457) {
// //   let str = String(a)
// //   // return (str.split('').reverse().join(''))
// //   return Math.max(...str.split('').map(el => +el))
// // }
// // console.log(reverce())
// // let arr = [1, 2, 3, 4, 5];

// // arr.forEach(function (elem) { console.log(elem) })



// // 1. Написать функцию, которая принимает 2 строки и сравнивает их длину. Функция 
// // возвращает 1, если в первой строке больше символов, чем во второй; -1 – если 
// // во второй больше символов, чем в первой; или 0 – если строки одинаковой длины.

// function compare(str: string, str2: string) {
//   if (str.length > str2.length) {
//     return 1
//   } else if (str.length == str2.length) {
//     return 0
//   } else {
//     return -1
//   }
// }
// console.log(compare('ssdsdh', 'vghb'))
// console.log(compare('55889892', 'jljlklf'))



// // 2. Написать функцию, которая переводит в верхний регистр 
// // первый символ переданной строки.

// // для одного слова
// function firstLetter(a = 'hello') {
//   return a[0].toUpperCase() + a.slice(1)
// }

// //для нескольких слов
// function firstLetter2(a = 'hello world') {
//   return a
//     .split(' ')
//     .map(function (a) {
//       return a[0].toUpperCase() + a.slice(1)
//     })
//     .join(' ');
// }

// console.log(firstLetter2())



// // 3. Написать функцию, которая считает количество гласных 
// // букв в переданной строке

// function score(str = 'sdfgdfgeeaoirgtxxcvg') {
//   let count = 0
//   for (let i = 0; i < str.length; i++) {
//     switch (str[i].toLowerCase()) {
//       case 'a':
//       case 'e':
//       case 'o':
//       case 'y':
//       case 'u':
//       case 'i':
//         count++
//     }
//   }
//   return count
// }

// function scoreLetters(str = 'sdfgdfgeeIAEaoirUUgtxxcvg') {
//   let count = {
//     a: 0,
//     e: 0,
//     o: 0,
//     y: 0,
//     u: 0,
//     i: 0,
//   }
//   for (let i = 0; i < str.length; i++) {
//     switch (str[i].toLowerCase()) {
//       case 'a':
//         count.a++
//         break
//       case 'e':
//         count.e++
//         break
//       case 'o':
//         count.o++
//         break
//       case 'y':
//         count.y++
//         break
//       case 'u':
//         count.u++
//         break
//       case 'i':
//         count.i++
//         break
//     }
//   }
//   return count
// }

// console.log(score())
// console.log(scoreLetters())


// // 4. Написать функцию для проверки спама в переданной 
// // строке. Функция возвращает true, если строка содержит 
// // спам. Спамом считать следующие слова: 100% бесплатно,
// // увеличение продаж, только сегодня, не удаляйте, ххх. 
// // Функция должна быть нечувствительна к регистру.

// function spamChecking(a: string) {
//   const b = a.toLowerCase()
//   if (b.includes('100% бесплатно') || b.includes('увеличение продаж') || b.includes('только сегодня')
//     || b.includes('не удаляйте') || b.includes('xxx')) {
//     return true
//   } else {
//     return false
//   }
// }
// console.log(spamChecking('vyvgvyt100% Бесплатно'))
// console.log(spamChecking('vXXyvgvyt10% Бесплатно'))


// // 6. Написать функцию, которая проверяет, является ли переданная 
// // строка палиндромом.
// function palindrom(str = 'hello') {
//   if (str == str.split('').reverse().join('')) {
//     console.log('является полиндромом')
//     return true
//   } else {
//     console.log('не является полиндромом')
//     return false
//   }
// }
// console.log(firstLetter())
// console.log(palindrom('1551'))


// // 7. Написать функцию, которая считает количество слов в предложении.
// function quantityWords(a: string = 'dasd asdfdfg dghdg wrf') {
//   return a.split(' ').length
// }
// console.log(quantityWords())
// console.log(quantityWords('as sd sd'))

// // 8. Написать функцию, которая возвращает самое длинное 
// // слово из предложения.
// function longestWord(str: string = 'asdfasd adf  dsfsdfsd sdfsdf') {
//   let arr = str.split(' ')
//   let max = 0
//   let i = 0
//   arr.forEach((el, index) => {
//     if (max < el.length) {
//       max = el.length
//       i = index
//     }
//   })
//   return arr[i]
//   console.log(longestWord())
//   console.log(longestWord('asd gfg dfggdfg'))
// }





// // 5. Написать функцию сокращения строки. Функция принимает строку и ее 
// // максимальную длину. Если длина строки 
// // больше, чем максимальная, то необходимо отбросить 
// // лишние символы, добавив вместо них троеточие. 
// // Например: truncate(“Hello, world!”, 8) должна вернуть 
// // “Hello...”.
// // 2
// // 

// //
// // 9. Написать функцию, которая считает среднюю длину слова 
// // в предложении.
// // 10. Написать функцию, которая принимает строку и символ 
// // и выводит индексы, по которым находится этот символ в 
// // строке. Также вывести, сколько всего раз встречается этот 
// // символ в строке. 









// //SPLICE
// // let arr  = ['I', 'love', 'JS', 'perfect', 'language']
// // console.log(arr) 

// // arr.splice (2, 2, 'to learn', 'english')
// // console.log(arr) 

// // arr.splice (4,0, 'and', 'JS')
// // console.log(arr) 


// //SLICE копирует часть массива (или весь массив) БЕЗ добавления данных и 
// //'меняет его в одной консоле'
// //console.log(arr.slice(2, 5)) 



// //CONCUT копирует массив и добавляет к нему свои данные и тоже
// //'меняет его в одной консоле'

// let arr = [1, 2]
// console.log(arr)

// console.log(arr.concat([3, 4])) // БЕЗ консоли метод не работает

// console.log(arr.concat([3, 4], [5, 6]))
// console.log(arr)



// // 2. Написать функцию, которая выводит все числа из заданного
// // пользователем диапазона в прямом порядке. И еще одну
// // функцию – для вывода в обратном порядке.

// function printNumbersRange(from = 1, to = 10) {
//   const arr = []
//   for (let i = from; i <= to; i++) {
//     arr.push(i)
//   }
//   console.log(arr.toString())
// }
// function printNumbersRangeReverse(from = 10, to = 1) {
//   const arr = []
//   for (let i = from; i >= to; i--) {
//     arr.push(i)
//   }
//   console.log(arr.toString())
// }

// // return +a.toString().split('').reverse().join('')

// var animal = {
//   eats: true
// } as any
// var rabbit = {
//   jumps: true
// } as any

// rabbit.__proto__ = animal
// console.log(rabbit.jumps)
// console.log(rabbit.eats)


// // 5. Написать функцию, которая принимает число и выводит 
// // соответствующее количество вложенных пар круглых скобок. 
// // Например: число 4 – (((()))).
// function brackets(a = 5) {
//   for (let i = 0; i <= a; i++) {
//     // i = ()
//   }

// }



// let people = [
//   { name: 'Kate', age: 17 },
//   { name: 'Sveta', age: 27 },
//   { name: 'Dasha', age: 29 },
// ]
// // for (let i = 0; i<people.length; i++) {
// //   console.log(people[i])

// // }

// people.forEach(person => console.log(person))
// let adults = people.filter(person => (person.age >= 18))
// console.log(adults)


// printNumbersRange()
// printNumbersRangeReverse()

// // console.log(people[1])


// // Метод arr.forEach позволяет запускать функцию для каждого элемента массива.
// // нужна точка с запятой, т.к. строка начинает с литерала массива
// arr = ["Бильбо", "Гэндальф", "Назгул"].forEach(function (item, index, array) {
//   console.log(`У ${item} индекс ${index} в ${array}`)
// })


// console.log(`ANSWER`)
// console.log(`\u25BD`)





// // найти наибольшее число в массиве

// let array = [1, 3, 5]
// console.log(Math.max(...array))

// // function maxNum(a: number) {
// //   let str = String(a)
// //   return Math.max(...str.split('').map(el => +el))
// // }
// // console.log(maxNum(123459))


// let mass = [1, 3, 5]
// console.log(mass)

// mass.push('hello' as any)
// console.log(mass)

// mass.push(95)
// console.log(mass)

// let ba = mass.pop()
// console.log(ba)


// console.log(mass)

// mass.shift()
// console.log(mass)

// mass.unshift('world' as any)
// console.log(mass)
// console.log(mass.length)


// let mass2 = ['hello world']
// let str2 = String(mass2)

// // str2.split('')
// console.log(str2.split(' ').reverse().join(' '))

// let f = 'Hi my name is Vladimir'
// console.log(f)
// let e = f.split(' ').reverse().join('-')
// if (e == f) {
//   console.log('полиндром')
// } else {
//   console.log('не полиндром')
// }

// console.log(e)

// console.log(`\u25B3`)
// console.log(`ANSWER`)


// // let people2 = [
// // {name: 'Kate', age: 17},
// // {name: 'Sveta', age: 27},
// // {name: 'Dasha', age: 29},
// // ]
// // .filter(person2 => person2.age>=18)
// // .map(person => person.age>=18)
// // .reduce((total, age)=>total + person2.age, 0)

// // console.log(people2)
// // console.log(person)
// // console.log(person2)


// let now = new Date()
// console.log(now)
// console.log()

// // var d = new Date(2014, 0, 30); // 30 января 2014
// // console.log(FormatDate(d)); // '30.01.14'


// // Задача 1
// // Создайте объект Date для даты: 20 февраля 2012 года, 3 часа 12 минут. 
// // Временная зона – местная.

// // let date = new Date(2012, 1, 20, 3, 12);
// // console.log(date)

// // Задача 2
// // Напишите функцию getWeekDay(date), показывающую день недели в коротком формате: 
// // «ПН», «ВТ», «СР», «ЧТ», «ПТ», «СБ», «ВС».

// // Например: 
// // let date = new Date(2012, 0, 3);  // 3 января 2012 года
// // alert( getWeekDay(date) );   

// function getWeekDay(date:Date)  {
//   let days = ['ВС','ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ']
//   return days[date.getDay()]
// }

// console.log(getWeekDay(new Date()))








// МОДУЛЬ 1, НЕДЕЛЯ 3

// 1. Вывести # столько раз, сколько указал пользователь.

// let number = 7
// let massive = []
// for (let i=1; i<number; i++) {
//   massive.push('#')
// }
// console.log (massive)



// ??????????
// 2. Пользователь ввел число, а на экран вывелись все числа 
// от введенного до 0.
// let number = 7
// let massive = []
// for (let i = number; i >= 0; i--) {
//   massive.push(i)
// }
// massive.reverse()
// console.log(massive)
// console.log (massive.reverse())

// 3. Запросить число и степень. Возвести число в указанную 
// степень и вывести результат
// function result(a: number, b: number) {
//   return a ** b
// }
// console.log(result(7, 2))


// 4. Запросить 2 числа и найти все общие делители
// function commonDivisor(a: number, b: number) {
//   let massive = []
//   for (let i = 1; i < a || i < b; i++)
//     if (a % i == 0 && b % i == 0)
//       massive.push(i)
//   return (massive)
// }
// // console.log (commonDivisor(100,20))
// console.log(commonDivisor(15, 10))


// 5. Посчитать факториал введенного пользователем числа
// факториал 5 = 1*2*3*4*5

// let a = 5;
// function facktorial(a: number) {
//   let num = 1
//   for (let i = 2; i <= a; i++)
//     num = num * i
//   return num

// }
// console.log(facktorial(a))
// console.log(facktorial(15))



//  1. Вывести все числа от 1 до 100, которые кратные указанному 
//   пользователем числу.
// function numbers (a:number) {
//   let massive = []
//   for (let i=1; i<=100; i++) {
//     if (i%a==0)
//     massive.push(i)
//   }
//   console.log(massive)
// }
// numbers(4)
// console.log(numbers(9))






// 4. Вывести каждый 4 - й элемент из указанного пользователем
// диапазона.Пользователь указывает минимальное и максимальное значения диапазона.

// function diapason(a: number, b: number) {
//   let massive = []
//   for (let i = a; i < b; i++)
//     if (i % 4 == 0)
//       massive.push(i)
//   console.log('Диапазон ' + massive)
// }
// diapason(10, 20)
// diapason(25, 100)



// 1. Подсчитать сумму всех чисел в заданном пользователем 
// диапазоне. 

// function summs(min:number, max:number) {
//   let summ = 1
//   for (let i = min; i < max; i++)
//     summ = summ + i
//   return summ
// }
// console.log(summs(3, 12))




// let a = 5;
// function facktorial(a: number) {
//   let num = 1
//   for (let i = 2; i <= a; i++)
//     num = num * i
//   return num

// }
// console.log(facktorial(a))
// console.log(facktorial(15))



// 2. Запросить 2 числа и найти только наибольший общий 
// делитель.

// function compare (a:number, b:number) {
//   let massive=[]
//   for (let i=1; i<a || i<b; i++) 
//    if (a%i==0 && b%i==0) 
//     massive.push(i)
//     return massive.pop()
// }
// console.log (compare(15,120))




// 3. Запросить у пользователя число и вывести все делители 
// этого числа.
// function findDivider(a: number) {
//   let massive = []
//   for (let i = 1; i < a; i++)
//     if (a % i == 0)
//       massive.push(i)
//   return massive
// }
// findDivider(20)
// console.log(findDivider(30))


// 4. Определить количество цифр в введенном числе.
// function quantityNumbers(a = 123) {
//   let str = String(a)
//   return str.length

// }
// console.log(quantityNumbers(123))

// 7. Запросить у пользователя число и на сколько цифр его 
// сдвинуть. Сдвинуть цифры числа и вывести результат (если 
// число 123456 сдвинуть на 2 цифры, то получится 345612).

// let q = prompt(' Введите число', '1234567890');
//         let move = ( prompt(' На сколько цифр сдвинуть?') );
//         alert(q.slice(move) + q.slice(0, move));


// фигня с underfined))))))))))

// function shiftDigitals (a:number) {
//   let str = String(a)
//   return str.slice (3.1)

// }
// shiftDigitals(12345)

// console.log(Date.now())







// class Comment {
//   constructor(text) {
//     this.text = text
//     this.quantity = 0
//   }
//   upvote() {
//     quantity += 1
//   }
// }

// const firstComment = new Comment('проверяю')
// console.log(firstComment)




// function multyplier(a: number, b = 3) {
//   return a * b
// }
// console.log('multyplier ' + multyplier(12, 205))




// function diapason(a: number, b: number) {
//   let massive = []
//   for (let i = a; i < b; i++)
//     if (i % 4 == 0)
//       massive.push(i)
//   console.log('Диапазон ' + massive)
// }
// diapason(10, 20)
// diapason(25, 100)






// function Animal(name, years) {
//   this.name = name;
//   this.years = 10;
//   this.color = 'yellow'
//   this.years += 1
// }

// console.log(Animal)




// let piggy = new Animal('sticky')
// console.log(piggy)
// let piggy2 = new Animal('sweaty')
// console.log(piggy2)
// console.log(piggy2 instanceof Animal)
// console.log(piggy2 instanceof Object)
















// КОНСТРУКТОР
// function Car (brand, color) {
//   this.brand = brand
//   this.color = color
//   this.power = '123 horses'
// }

// let Rio = new Car ('Rio', 'White')
// console.log(Rio)

// let Reno
// console.log(Reno  = new Car( 'Reno', 'Grey'))




// МЕТОДЫ
// const cars = ['Renault', 'Kia']
// console.log(cars)

// console.log(cars.join('').split('').toString().toUpperCase())





// class Car {
//   brand
//   color
//   power
//   static type = 'Machine!'
//   constructor(brand:string, color:any) {
//     this.brand = brand
//     this.color = color
//     this.power = '123 horses'
//   }
//   start() {
//     console.log('Car start!')
//   }
//   stop() {
//     console.log(`${this.brand} - STOP!`)
//   }
//   static discount() {
//     console.log('Общая скидка 10%')
//   }
// }
// class Bicycle extends Car {
//   wheels
//   constructor(brand:string, color:any, wheels:number){
//     super(brand, color)
//     this.wheels=color.wheels 
//   }
//   start() {
//     super.start()
//       console.log('BIKE !')
//   }
// }

// Bicycle.prototype.wheels = '333'
// const bicycle = new Bicycle  ('qqq', 'www', 26)

// console.log(bicycle.start)

// let Renault = new Car('Renault', 'Grey')
// console.log(Renault)
// console.log(Renault.stop)

// console.log(Car.type)




// const Rio = new Car('Rio', 'White')
// console.log(Rio)
// console.log(Rio.start)






// Задание 1
// Реализовать класс, описывающий простой маркер. В классе
// должны быть следующие компоненты:
// ■ поле, которое хранит цвет маркера;
// ■ поле, которое хранит количество чернил в маркере (в про-
// центах);
// ■ метод для печати (метод принимает строку и выводит
// текст соответствующим цветом; текст выводится до тех
// пор, пока в маркере есть чернила; один не пробельный
// символ – это 0,5% чернил в маркере).
// Реализовать класс, описывающий заправляющийся маркер,
// унаследовав его от простого маркера и добавив метод для заправки
// маркера.
// Продемонстрировать работу написанных методов.




//!!!!!!!!!!!!!!!! КЛАССЫ!!!!!!!!!!!!!!!!!!!!!!!!!!
// class Marker {
//   color
//   amountInk
//   constructor(color: string, amountInk: number) {
//     this.color = color;
//     this.amountInk = amountInk;
//   }
//   print(text: string) {
//     if (this.amountInk === 0) {
//       alert('Нет чернил в маркере для вывода текста!');
//     }
//     let outputText = '';
//     for (let i = 0, length = text.length; i < length; i++) {
//       if (this.amountInk === 0) {
//         alert('Чернила в маркере для вывода текста закончились!');
//         break;
//       }
//       outputText += text[i];
//       if (text[i] !== ' ') {
//         this.amountInk -= 0.5;
//       }
//     }
//     const html = `<p style="color: ${this.color};">${outputText}</p>`;
//     document.body.insertAdjacentHTML('beforeend', html);
//   }
// }

// class RefuelingMarker extends Marker {
//   fillup(amountInk: number) {
//     if (this.amountInk + amountInk > 100) {
//       console.log('Нельзя заполнить маркер больше чем на 100%');
//     } else {
//       this.amountInk += amountInk;
//     }
//     console.log(amountInk)
//   }
// }




// const someMarker = new Marker('red', 100)
// someMarker.print('123 marker')
// const someRefuelMarker = new RefuelingMarker('#ff4332', 100)
// someRefuelMarker.print('marker refuel ')
// console.log(someRefuelMarker)

// someRefuelMarker.fillup(10)
// console.log(someRefuelMarker)

// console.log(someMarker)
// // console.log (window.innerHeight)
// // console.log (window.innerWidth)


// class Mmm {
//   color:string
//   constructor (color: string) {
//     this.color = color

//   }
// }



// // const letter = new Mmm{
// // color = 'red'
// // }
// // console.log (letter.color)
// // letter.print ('adsd')

// // Задание 2
// // Реализовать класс, описывающий новость (заголовок, текст, 
// // массив тегов, дата публикации). В классе необходимо реализовать 
// // один метод print, который выводит всю информацию в таком 
// // виде, как на рисунке 1.
// // Обратите внимание на то, как выводится дата:
// // ■ если с даты публикации прошло менее дня, то выводится 
// // «сегодня»;
// // ■ если с даты публикации прошло менее недели, то выводится «N дней назад»;
// // ■ в остальных случаях, полная дата в формате «дд.мм.гггг».

// class News {
//   title:string
//   text:string
//   tags:string[]
//   date:Date
//   constructor(title: string, text: string, tags: string[], date: Date) {
//     this.title = title;
//     this.text = text;
//     this.tags = tags;
//     this.date = date
//   }
//   get postDate() {
//     const now = Date.now()
//     if (this.date.valueOf() > now - 60 * 60 * 24 * 1000) {
//       return 'Запись опубликована сегодня'
//     } else if (this.date.valueOf() > now - 7 * 60 * 60 * 24 * 1000) {
//       return 'Запись опубликована' + Math.floor((now - this.date.valueOf())/(1000*60*60*24)) + 'дней назад'
//     } else {
//       return this.date.toDateString() // вывести в формате «дд.мм.гггг»
//     }   
//   }
//   print() {
// // need to solve first task
//   }
// }

// let news = new News()
// console.log(news.postDate())


// let now = new Date()
// console.log(now)

// console.log(News.prototype.postDate())

// setInterval(function() {
//   alert('hello friend')
// },10000)


// // вариант 1
// let arrow = () => console.log('Стрелочная функция')
// arrow()

// // вариант 2
// let arrow2 = () => {return 'Стрелочная функция'}
// console.log(arrow2())

// function name2 () {
//   console.log('123')
// }
// name2()

// let anonim = () => console.log('мышка')
// anonim()


// // Отсутствие фигурных скобок после стрелки, НЕЯВНО (не пишем return) возвращает результат
// let func1 = (a: number, b: number) => a+b;
// // let func1 = (a: number, b: number) => { return a }
// let func2 = function (a: number, b: number) {
//   return a+b
// }
// // Стрелочная функция с логикой и явным возвратом
// let func3 = (a: number, b: number) => { 
//   const c = a + b
//   return c 
// }

// console.log('func1', func1(1,2))
// console.log('func2', func2(1,2))
// console.log('func3', func3(1,2))


// const colorRed = [
//   {
//     name: 'color',
//     value: 'red'
//   },
//   {
//     name: 'text-decoration',
//     value: 'underline'
//   },
// ]


// // const purchase = [
// //   {
// //     name: 'a',
// //     count: 12,
// //     purchased: true,
// //   },
// //   {
// //     name: 'b',
// //     count: 6,
// //     purchased: false,
// //   },
// //   {
// //     name: 'c',
// //     count: 1,
// //     purchased: true,
// //   },
// // ]

// // const addPurchaseButton = document.querySelector('.addPurchase')
// // const setPurchasedButton = document.querySelector('.setPurchased')

// function whatToBuy(arr:any[]) {
//   let n = 1
//   for (let el of arr) {
//     if (!el.purchased) {
//       console.log(`${n}. ${el.name} Надо купить ${el.count} штук`)
//       n++
//       // console.log(n + ". " +el.name+" Надо купить "+el.cont+"штук")
//     }
//   }
//   for (let el of arr) {
//     if (el.purchased) {
//       console.log(`${n}. ${el.name} Куплено ${el.count} штук`)
//       n++
//       // console.log(n + ". " +el.name+" Надо купить "+el.cont+"штук")
//     }
//   }
// }

// // console.log('DOWN')
// // console.log('DOWN')
// // console.log('DOWN')
// // console.log('DOWN')
// // console.log('DOWN')


// // 3. Запросить у пользователя трехзначное и число и проверить,
// // есть ли в нем одинаковые цифры.
// // let number = +prompt( 'Введите трехзначное число: ');
// // let number1 = parseInt(number / 100);
// // let number2 = parseInt(number / 10) % 10;
// // let number3 = number % 10;
// // if(number1===number2 || number2===number3 || number1===number3)
// // console.log('Найдено совпадение цифр');
// // else
// // console.log('Совпадений не найдено')


// const facktorial2 = (n) =>{
//   if (n==1) {
//     return 1;
//   } else {
//     return n * facktorial2(n-1) 
//   }
// }
// const answer = facktorial2(7)
// console.log (answer)



// let x = 17

// console.log (x%2==0 ? 'четное':'не четное')

// console.log()


// // // 3. Создайте функцию createHeaders(N), которая создаст на 
// // // странице N заголовков 
// // // второго уровня (<h2>) с надписями Header1, Header2 … HeaderN

// // createHeaders(5);

// // function createHeaders(N) {
// //     let ins = document.querySelector("body");
// //   for (let i = 0; i < N; i++) {
// //     ins.insertAdjacentHTML("beforeend", `ooo  ${i + 1} <h2>Header${i + 1}</h2>`);
// //   }
// // }

// // let arr = [1, 2, 3]
// //   for (let i=0; i<arr.length;i++) {
// //   console.log (arr.popl;(i))
// // }
// // arr.forEach(elem=>console.log(elem))





















// // числа умноженные друг за другом

// const multiplier  = (number:number) => {
//   if (number==1) {
//     return 1
//   } else {
//     return number * (multiplier (number-1))
//   }  
// }
// console.log (multiplier(5))




// // const facktorial2 = (n) =>{
// //   if (n==1) {
// //     return 1;
// //   } else {
// //     return n * facktorial2(n-1) 
// //   }
// // }
// // const answer = facktorial2(7)
// // console.log (answer)










// const sum = (num:number) => {
//   if (num == 1) {
//     return 1 
//   } else {
//     return num + sum(num-1)
//   }
// }
// console.log (sum(10))

// const mult = (n:number) => {
//   if (n==1){
//     return 1
//   } else {
//     return n * mult(n-1)
//   }
// }
// console.log(mult(10))

// // const fib = (n:number) => {
// //   let summ = 0
// //   summ 
// //   console.log (n + (n))
// // }
// // console.log(fib(10))
// // fib(10)




// function fib(n: number) {
//   let a = 1;
//   let b = 1;
//   for (let i = 1; i <= n; i++) {
//     let c = a + b;
//     a = b;
//     b = c;
//   }
//   return b ;

// }
// console.log(fib(6))
// console.log(`fibonachi 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89 `)

// // // через рекурсивную функцию
// // function fib(n) {
// //   return n<=1 ? n : fib(n-1) + fib(n-2);
// // }
// console.log(fib(19))
// console.log(fib(7))
// console.log(fib(23))






// 1. числа, которые плюсуются
// 2. числа, которые перемножаются (только НЕ четные числа)
// 3. числа фибоначи


// let summ = (num: number) => {
//   if (num == 1) {
//     return 1
//   } else {
//     return (num = num + summ(num - 1))

//   }
// }
// console.log(summ(5))


// ????????????
// let mult = (num: number) => {
// let odd = num
//   num % 2 == 0
//   if (num == 1) {
//     return 1
//   } else {
//     return (num = num * mult(num - 1))

//   }
// }
// console.log(mult(5))


// let mult = (num:number) => {
//   let total = 1
//   for (let i=1; i<=num; i+=2){
//     total*=i
//   }
//   return total
// }
// console.log(mult(9))



// вывести четные числа до 18 в массив
// const odd = (num: number) => {
//   let summ = []
//   for (let i = 0; i <= num; i += 2) {
//     summ.unshift(i)
//   }
//   return summ
// }

// console.log(odd(18))





// плюсануть четные в квадрате

// const numInSquare = (num: number) => {
//   let summ = 0
//   for (let i = 0; i <= num; i += 2) {
//     summ += i * i
//   }
//   return summ
// }
// console.log(numInSquare(6))
















// const areaOfSquare = (side: number) => {
//   return side * side
// }
// console.log(areaOfSquare(9))








// let totalDistance = (speed:number, time:number) => {
//   return speed * time
// }
// console.log(totalDistance(80,10))

// // если ввожу 5, то умножаются числа 1*2*3*4*5

// let facktorial3  = (num:number) => {
//   if (num==1) {
//     return 1
//   } else {
//     return num * (facktorial3(num-1))
//   }
// }
// console.log(facktorial3(5))



// //вывести общие делители двух чисел 
// //вывести макс и мин делитель двух чисел

// let num1 = 40
// let num2 = 30
// let massive =[]
// let max = 0
// for (let i=1; i<=num1 || i<=num2; i++) {
//   if (num1%i==0 && num2%i==0) {
//     massive.push(i)
//      massive.pop(i)
// }
// }
// console.log(massive)
// console.log(max)





// const iteration = (num:number) => {
//   const iter = (counter:number, acc:number) => {
//     if (counter==1) {
//       return acc
//     }
//     return iter (counter-1, counter*acc) 
//   }
//   return iter(num, 1)
// }
// console.log (iteration(5))







// const recursy = (num:number) => {
//   if (num==1)
//   return 1
//   else
//   return num* recursy(num-1)
// }
// console.log (recursy(7))





// let now = new Date(0)
// console.log(Date())


// let date = new Date(2023, 8, 17, 19, 41)
// console.log(date)

//  let today  = new Date ()
//  today.setDate(date.getDate()-2)
//  console.log(today)


//! ???????? плюсануть все числа кроме кратных 5 (11)
// let start = new Date()
// let evenOdd = (num: number) => {
//   let sum = 0
//   for (let i = 0; i <= num; i += 1) {
//     if (i % 5 != 0)
//       sum += i
//   }
//   return sum
// }
// console.log(evenOdd(6))

// let end = new Date()
// console.log(`цикл обработан за ${(end - start) / 1000} секунд`)

















//! Создайте объект Date для даты: 20 февраля 2012 года, 
//! 3 часа 12 минут. Временная зона – местная.

// let today1 = new Date(2012, 1, 20, 3, 12)
// console.log(today1)



















//* Создайте функцию getDateAgo(date, days), возвращающую число, которое было
//* days дней назад от даты date.

//* К примеру, если сегодня двадцатое число, то getDateAgo(new Date(), 1) вернёт 
//* девятнадцатое и getDateAgo(new Date(), 2) – восемнадцатое.

//* Функция должна надёжно работать при значении days=365 и больших значениях:

// function getDateAgo(date:number, days:any) {
//   let today = new Date ()
//   return today.toDateString()
// }

// console.log(getDateAgo())








// let start2 = new Date
// console.log(start2.getMilliseconds() + ' миллисекунды')


// let day = new Date
// console.log(day.toLocaleString())


// day.setMonth(day.getMonth() - 333)
// console.log(day)

// let day2 = new Date(2013, 8, 7, 12, 12)
// console.log(day2)


// let finish2 = new Date
// console.log(finish2.getMilliseconds() + ' миллисекунды')
// console.log(`${finish2 - start2}`)



// const day4 = new Date('03 september 1954')
// console.log(day4)

// const day5 = new Date()
// day5.getDay() + 1
// console.log(day5.getDay() + 3)



// >>>>>>> начиная со строчки с номером 3377


// const years = new Date ()
// years.setFullYear(years.getFullYear() +65)
// console.log(years.getFullYear());







//! Напишите функцию getWeekDay(date), показывающую день недели в 
//! коротком формате: «ПН», «ВТ», «СР», «ЧТ», «ПТ», «СБ», «ВС».

// const day5 = new Date()
// console.log(day5.getDay())





// function getWeekDay(date: any) {
//   let arr = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ']
//   return arr[date.getDay()]
// }
// let date = new Date()
// console.log(getWeekDay(date));






// const title = document.querySelector('.title')
// title?.addEventListener('click', function () {
//   alert('Добро пожаловать!!!')
// })







//! с понедельника (день номер 1), затем идёт вторник (номер 2) и
//!  так до воскресенья (номер 7). Напишите функцию getLocalDay(date),
//!  которая возвращает «европейский» день недели для даты date.






//! ПРАВИЛЬНЫЙ ВАРИАНТ!!!
// const timeDiv = document.querySelector('.time') as HTMLDivElement
// timeDiv.innerHTML = day5.toString();
// timeDiv.addEventListener('click', ()=>{
//   console.log(day5.toString())
//   timeDiv.innerHTML = day5.toLocaleString()
// })


// const texxDiv = document.querySelector('.texx') as HTMLDivElement
// texxDiv.innerHTML = 'fff hhh kkk' // чтобы не писать в html





const btns = document.querySelectorAll('.btn')
btns.forEach(button => button.addEventListener('click', arrow)
)

function arrow(event: any) {
  console.log('кнопка', parseInt(event.target.dataset.num))
}



const extraButton = document.querySelector('.cherry') as HTMLButtonElement
extraButton.addEventListener('click', arrow)





const colored = document.querySelectorAll('.color')
colored.forEach(color =>
  color.addEventListener('click', function () {
    alert('Успешно');
  })
)
console.log(
  '%c MultyCOLORed',
  'color:red; font-size:15px;'
);



console.log(
  '%c Shadow -^=^- ${.btns}',
  'font-size:15px; font-family:cursive'

);

console.log(btns);

function checkMashine(event: any) {
  console.log(event.target.dataset.number);
  console.log(event.target.textContent);
  // console.log(event.currentTarget.dataset.number);

}


const button2 = document.querySelectorAll('.newButton')
button2.forEach(newButton =>
  newButton.addEventListener('click', checkMashine));




// ! const colored = document.querySelectorAll('.color')
// ! colored.forEach(color=>
// !   color.addEventListener('click', function(){
// !     alert('Успешно');
// !   })
// !   )



function chase(event: any) {
  console.log(event.target.dataset.num);
  event.stopPropagation()
}

const buttonClick = document.querySelectorAll('.col')
buttonClick.forEach(col =>
  col.addEventListener('click', chase))




//!Игра в мячик
//поле
let removeBall = document.querySelector('.trickField') as HTMLPictureElement

//передвижение мяча
removeBall.addEventListener('click', action)

//мячик
let game = document.querySelector('.ball') as HTMLPictureElement

//координаты мячика при клике
function action(event: any) {
  // event.clientY = event.scrollHeight
  game.style.left = (event.pageX - 83) + 'px'
  game.style.top = (event.pageY - 308) + 'px'
  game.style.rotate = rotate()
}

// Закрытие надписи  'Вы забили гол!!!'
function goal() {
  closeTitle.style.display = 'none'
  // game.style.rotate.delete
}
let closeTitle = document.querySelector('.title2') as HTMLDivElement
closeTitle.addEventListener('click', goal)

let deg = 0
const rotate = () => {
  deg += 180
  if (deg == 360) deg = 0
  return deg + 'deg'
}

// Всплытие модального окна 
let block = document.querySelector('.gate') as HTMLDivElement
block.addEventListener('click', function (event) {
  closeTitle.style.display = 'block'
  action(event)
})

//установка мяча по центру поля
let ballInCenter = document.querySelector('.cherry') as HTMLButtonElement
ballInCenter.addEventListener('click', function () {
  game.style.left = 174 + 'px'
  game.style.top = 92 + 'px'
  //!как сделать так, чтобы команда срабатывала многократно?
  game.style.rotate = rotate()

})

//кнопка автогола
let handsome = document.querySelector('.title3')
handsome.addEventListener('click', function () {
  handsome.style.display = 'none'
})

//надпись 'сделать автогол?'
let ownGoal = document.querySelector('.cherry2') as HTMLButtonElement
ownGoal.addEventListener('click', function (event) {
  game.style.top = 90 + 'px'
  game.style.left = -20 + 'px'
  handsome.style.display = 'block'
  game.style.rotate = rotate()


})







//! Задание с животными








let coordinate = document.querySelector('.coordinates') as HTMLDivElement
let pageCoordinate = document.querySelector('.pageCoordinates') as HTMLDivElement
document.addEventListener('mousemove', function (event) {
  coordinate.innerHTML = `окна <br> Х=${event.clientX}px <br> У=${event.clientY}px`
  pageCoordinate.innerHTML = `документа <br> Х=${event.pageX}px <br> У=${event.pageY}px`
})





let anim  = document.querySelectorAll('.animal')




for (let animal of anim ) {
  animal.insertAdjacentHTML("afterbegin", '<span  class="cross">&#9746;</span>');
  // кнопка становится первым потомком плитки (animal)
  animal.firstChild.onclick = () => animal.remove();
}




