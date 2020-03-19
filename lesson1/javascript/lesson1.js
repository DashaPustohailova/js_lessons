//однострочный коммент ctrl+ /
/*МНОГОСТРОЧНЫЙ КОММЕНТ CTRL + SHIFT + / */

//объявление переменных
let title = "Книга";
//переопределение значения переменной
title ="Журнал";
// var тоже самое что и let, но это устаревший способ объявления переменных
var count = 147;

//Отладка - вывод в консоль
console.log(title);
console.log(title, count);


//значение констант нельзя изменить
//значение константам необходимо присваивать в момент объявления
//принятно писать в верхнем регистре, каждое послед.слово через подчеркивание
const VERSION_CODE = 564;
console.log(VERSION_CODE);

let message;//  объявление переменной
//присвоили значение переменной
message = "Авторизация прошла успешно";
//переопределение значения переменной
message = 23;

//ПРИМИТИВНЫЕ ТИПЫ ДАННЫХ

//числа (number)
let age = 57; //целые числа
age = 57.5; //числа с плавающей точкой
// специальные числовые значения (в консоли так и пишутся):
// Infinity //бесконечность
// -Infinity
// NaN (ошибка вычисления)
//деление на ноль для языка не ошибка. результат = +- бесконечность
console.log(age / 0);
console.log(-age / 0);
console.log("Возраст" / age); //результат - NaN

// Строки (string) пишутся в двойных/одинарных кавычках (не принципиально)
let auth_info = "Успешная авторизация";
let reg_info = 'Успешная регистрация';
console.log(auth_info);
console.log(reg_info);
//текст без кавычек написать не можем - ошибка синтаксиса
//кавычки - элемент строки - просто использовать другие кавычки
let welcome = "Добро пожаловать в 'МАГАЗИН'";
console.log(welcome);
// \" \" экранирование
welcome = "Добро пожаловать в \"Магазин\"";
console.log(welcome);


//логический тип данных (boolean)
//может принимать два значения: true false=0 (для формирования условий\сохранения каких-либо состояний)
//При преобразованиях 0=false=null=undefined=пустая_строка. Все остальное = true
let stopped = true;
let isActive = false;
console.log(stopped, isActive);

//undefined - значение переменной не присвоено
let undefined_value;
console.log(undefined_value);

//null - значение неизвестно (прописываем физически)
let null_value = null;
console.log(null_value);

//определение типа данных переменной typeof(всегда возвращает строчку типа string с названием типа данных)
console.log(typeof age);
console.log(typeof reg_info);
console.log(typeof isActive);

//операторы
//арифметические операторы
// + | - | * | / | % взятие остатка от деления
// ** возведение в степень

// + 1) сложение чисел 2) используется для преобразования строки с числом в тип number(число)
let a = '5'; //тут тип данных string
console.log (a, typeof a);
a = +a; //преобразование а в число
console.log(a, typeof a);
console.log(+"4 не число"); //NaN, но тип данных будет number
// console.log(+"4", typeof +"4");
//3) Для конкатенации (склеивание) строк
//ЕСЛИ ОДИН ИЗ ОПЕРАНДОВ - СТРОКА, ТО ВТОРОЙ ОПЕРАНД АВТОМАТИЧЕСКИ БУДЕТ ПРЕОБРАЗОВАН К СТРОКЕ
auth_info = "Успешная авторизация";
reg_info = 'Успешная регистрация';

let info = auth_info + reg_info;
console.log(info);

//остальные арифметические операторы преобрезаут операнды к числам
//если преобразование невозможно, то будет NaN
console.log('30'/'2'); //15
console.log('30px' * 2); //NaN
console.log(30 - '2'); //28

console.log("Проверка на NaN"); //isNaN() - функция, с помощью которой мы можем проверить переменную на НЕ ЧИСЛО
console.log(isNaN("string")); //Преобразовать к числу нельзя -> true
console.log(isNaN("123px")); //Преобразовать к числу нельзя -> true
console.log(isNaN("123")); //Преобразовать к числу можно -> false
console.log(isNaN(true)); //false
console.log(isNaN(false)); //false


console.log("Взятие остатка от деления"); //проверяет на кратность числу
console.log(9 % 2);
console.log(8 % 2);
console.log(810 % 2);
console.log(546 % 2);
console.log(7 % 2);

console.log(13 % 10); //3
console.log(76 % 10); //6
console.log(8 % 3); //2

//операторы присваивания
// = | += | -= | *= | /= | %=
let num = 10;
num = num + 10; // num += 10; Для других операций аналогично

// операторы сравнения
//результат работы операторов сравнения: true/false
// > | < | >= | <=
// == (равенство) | === (строгое равенство)
// != (неравенство) | !== (строгое неравенство)
//в js мы пользуемся === и !==

let height = 120;
let width = '120';

console.log(height == width); //сначала приводим к одному типу, потом сравниваем ( в данном случае будет true)
console.log(height === width); //без приведения типов (если разные типы, то автоматически false)

console.log(true == 1); //true
console.log(true === 1); //false


// префиксная форма ++i
//инкремент - увеличивает значение переменной на 1
//инкремент и декремент (применяются только к переменным, нельзя применять к числам)
// префиксная форма ++i
// num = 2;
console.log(++num); //3
console.log(num);
//постфиксная форма i++
num = 2;
console.log(num++); //2
console.log(num);
//декремент - уменьшает значение переменной на 1
// префиксная форма ++i
// num = 2;
console.log(--num); //1
console.log(num);//1
//постфиксная форма i++
num = 2;
console.log(num--); //2
console.log(num);//1

num = 7;
let result = num++ - num++ + num++ - --num;
//7 -8 + 9 - 9
console.log(result); //-1



//логические операторы
//результат работы логических операторов: true/false
//используются в основном для объединения условий
// || (or) | && (and) | ! (not)
height = 120;
width = 120;
console.log(height < width); //false
console.log(height <= width); //true
console.log(height > 100); //true
console.log(height < width && height > 100); // false (&& нашел хоть один false -  дальше даже не смотрит, результат false)
console.log(height < width || height > 100); // true (|| нашел хоть один true -  дальше даже не смотрит, результат true)

//тернарный оператор ?
// res = (условие) ? значение 1 : значение 2;


height = 560;
width = 124;
res = height > width ? "height" : "width";
console.log(res);


// дано целое число. Если число четное, делим его на два, если нет - вычитаем 2.
num=340;
res = !(num % 2) ? num/2 : num-2;
console.log(res);

//задать высоту, длину и ширину прямоугольного параллепипеда. Найти его площадь, вывести результат на консоль
height = 1;
width = 4;
length = 2;

let square = 2 *(height*width + height*length + width*length);
//2*(4+2+8)= 2* 14 = 28
console.log(square);
// console.log(2 *(height*width + height*length + width*length));

//преобразование строки в число
age = "12 65 age 99";
width = "1.6em 9em";
age = parseInt(age);//хотим прочитать целое число (читаем до первого не числового символа)
console.log(age);