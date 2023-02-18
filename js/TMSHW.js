'use strict';

/*### 1
Напишите функцию создания генератора sequence(start, step). 
Она при вызове возвращает другую функцию-генератор, которая при каждом вызове дает число на 1 больше, и так до бесконечности.
Начальное число, с которого начинать отсчет, и шаг, задается при создании генератора. 
Шаг можно не указывать, тогда он будет равен одному.
Начальное значение по умолчанию равно 0. Генераторов можно создать сколько угодно.*/

// function sequence(start = 0, step = 1) {
//     let accum = start;
//     return function() {
//       let inner = accum;
//         accum += step;
//         return inner;
//     }
// }

// const generator = sequence(10, 3);
// const generator2 = sequence(7, 1);

// console.log(generator()); // 10
// console.log(generator()); // 13

// console.log(generator2()); // 7

// console.log(generator()); // 16

// console.log(generator2()); // 8


/*###2
Сделать функцию, которая вычисляет разность между двумя числами и вернет разность.
Выполнить используя замыкание, результат должен выглядеть примерно так 
const sub = substract(a)(b); // a - b */

// function substract(a) {
//     return function(b) {
//         return a - b;
//     }
// }

// console.log(substract(5)(2));
// console.log(substract(19)(7));
// console.log(substract(9)(10));

