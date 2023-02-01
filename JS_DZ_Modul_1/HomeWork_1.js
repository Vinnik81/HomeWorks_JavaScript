//Task 1
// var name = prompt("Введите своё имя ");
// alert("Привет " + name);

//Task 2
// let bith_year = prompt("Введите год своего рождения ");
// const year = 2023;
// let age = year - bith_year;
// alert("Вам " + age + " лет");

//Task 3
// let width = prompt("Ввудите длинну стороны квадрата");
// let p = width * 4;
// alert("Пириметр квадрата равен: " + p);

//Task 4
// let r = prompt("Введите радиус окружности");
// let s = Math.PI * Math.pow(r,2);
// alert("Площадь круга равна: " + s);

//Task 5
// let s = prompt("Введите растояния от одного города до другого", "км");
// let t = prompt("Введите время за которое вы чотите добраться", "часов");
// let v = s / t;
// alert("Чтобы успеть во время вам нужно двигаться со скоростью: " + v + " км/ч");

//Task 6
// const course = 1.0854;
// let dolor = prompt("Введите количество долоров");
// let evro = dolor / course;
// alert("Количество евро: " + evro);

//Task 7
// let size = prompt("Введите объём флешки", "Гб");
// let count = Math.floor((size*1024)/820);
// alert(count + " файлов");

//Task 8
// let cash = prompt("Введите сумму");
// let price = prompt("Введите стоимость одной шоколадки");
// let count = Math.floor(cash/price);
// alert(count + " шоколадок");
// let change = cash - price*count;
// alert("Сдача составляет: " + change);

//Task 9
// let number = prompt("Введите трёхзначное число");
// let n1 = number%10;
// rez = Math.floor(number/10);
// let n2 = rez%10;
// let n3 = Math.floor(rez/10);
// alert("Реверс заданного числа: " + n1 + "" + n2 + "" + n3);

//Task 10
let number = prompt("Введите целое число");
let rez = number%2;
alert(rez==0&&"чётное"||rez!=0&&"нечётное");