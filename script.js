const title = "Exercise 02 Light";
const screens = "Простые, Сложные, Интерактивные";
const screenPrice = 7;
const rollback = 33;
const fullPrice = 300000;
const adaptive = true;

console.log(typeof title);
//Вывести в консоль тип данных значений переменных title / string 

console.log(typeof fullPrice);
//Вывести в консоль тип данных значений переменных fullPrice / number

console.log(typeof adaptive);
//Вывести в консоль тип данных значений переменных adaptive / boolean

console.log(screens.length);
//Вывести в консоль длину строки из переменной screens / 31

console.log("Стоимость верстки экранов " + screenPrice + " рублей " +
    "и" + " Стоимость разработки сайта " + fullPrice + " рублей");
//Стоимость верстки экранов 7 рублей и Стоимость разработки сайта 300000

const b = screens.toLowerCase();
console.log(b.split(", "));
// [ 'простые', 'сложные', 'интерактивны]

console.log(fullPrice * (rollback / 100));
//Выводит 99000