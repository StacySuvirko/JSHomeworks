'use strict';

/*### 1
Напишите функцию создания генератора sequence(start, step). 
Она при вызове возвращает другую функцию-генератор, которая при каждом вызове дает число на 1 больше, и так до бесконечности.
Начальное число, с которого начинать отсчет, и шаг, задается при создании генератора. 
Шаг можно не указывать, тогда он будет равен одному.
Начальное значение по умолчанию равно 0. Генераторов можно создать сколько угодно.*/

function sequence(start = 0, step = 1) {
    let accum = start;
    return function() {
      let inner = accum;
        accum += step;
        return inner;
    }
}

const generator = sequence(10, 3);
const generator2 = sequence(7, 1);

console.log(generator()); // 10
console.log(generator()); // 13

console.log(generator2()); // 7

console.log(generator()); // 16

console.log(generator2()); // 8


/*###2
Сделать функцию, которая вычисляет разность между двумя числами и вернет разность.
Выполнить используя замыкание, результат должен выглядеть примерно так 
const sub = substract(a)(b); // a - b */

function substract(a) {
    return function(b) {
        return a - b;
    }
}

console.log(substract(5)(2));
console.log(substract(19)(7));
console.log(substract(9)(10));

/* ###3
Добавить возможность вызова на числах метода для получения суммы цифр из которых состоит это число. Пример:

const num = 2021;
const sumOfDigits = num.getSumOfDigits(); // 5 */

Number.prototype.getSumOfDigits = function() {
    return Array.from(this.toString()).reduce((sum, num)  => sum + +num, 0);
}

const num = 678;
console.log(num.getSumOfDigits());

/* ###4
Создать класс Shape. В этом классе должно быть два пустых метода: getPerimeter(), getArea().
Создать классы Circle, Triangle, Square. Они должны наследовать класс Shape и переопределять getPerimeter(), getArea(),
т.е. в каждом дочернем классе будет своя реализация этих методов. 
Конструкторы Circle, Triangle, Square принимают свои наборы входных данных, которые нелбходимы для вычисления периметра и площади.
Пример:
const circle = new Circle(10); // радиус
const triangle = new Triangle(10, 20, 30); // стороны
const square = new Square(50); // сторона

console.log(circle.getPerimeter());
console.log(circle.getArea());

console.log(triangle.getPerimeter());
console.log(triangle.getArea());

console.log(square.getPerimeter());
console.log(square.getArea()); */

class Shape {
    getPerimeter(){}
    getArea(){}
}

class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }
    getPerimeter() {
        return Math.round(2 * Math.PI * this.radius);
    }

    getArea() {
        return Math.round(Math.PI * Math.pow(this.radius, 2));
    }
}

class Triangle extends Shape {
    constructor(side1, side2, side3) {
        super();
        this.side1 = side1;
        this.side2 = side2;
        this.side3 = side3;
    }

    getPerimeter() {
        return this.side1 + this.side2 + this.side3;
    }

    getArea() {
        return Math.round(.5 * this.side1 * this.side2 * (this.side1 / this.side3));
    }
}

class Square extends Shape {
    constructor(side) {
        super();
        this.side = side;
    }

    getPerimeter() {
        return this.side * 4;
    }

    getArea() {
        return Math.pow(this.side, 2);
    }
}

const circle = new Circle(10); // радиус
const triangle = new Triangle(10, 20, 30); // стороны
const square = new Square(50); // сторона

console.log(circle.getPerimeter());
console.log(circle.getArea());

console.log(triangle.getPerimeter());
console.log(triangle.getArea());

console.log(square.getPerimeter());
console.log(square.getArea());

/* ###5
Объектно-ориентированный список книг
Создать класс BookList. Создайть еще один класс под названием Book. 
BookList должен иметь следующие свойства:
1) Ссылка на следующую книгу для чтения (экземпляр Book)
2) Ссылка на читаемую в данный момент книгу (экземпляр Book)
3) Ссылка на последнюю прочитанную книгу (экземпляр Book)
4) Массив всех книг

BookList должен иметь следующие методы:
1) Добавить книгу в список книг .addBook(экземпляр Book)
2) Пометить книгу, которая в настоящее время читается, как "прочитанную" .finishCurrentBook()
   Данный метод должен:
      1. Установить читаемой книге дату прочтения new Date()
      2. Изменить последнюю прочитанную книгу на книгу, которую только что закончили
      3. Установить в поле текущая книга, следующую книгу, которую нужно прочитать
      4. Установить в поле следующая книга, первую непрочитанную книгу, которую вы найдете в списке.
3) Получить количество книг, отмеченных как прочитанные .getReadBooksCount()
4) Получить количество книг, отмеченных как непрочитанные .getUnreadBooksCount()

Каждая книга (класс Book) должна иметь несколько свойств:
1) Заголовок
2) Жанр
3) Автор
4) Читается в данный момент (true или false. Изначально false)
5) Дата прочтения. Если книгу не читали, то поле будет пустое, иначе должен быть объект Date.

Для BookList и Book может потребоваться больше методов. Постарайтесь придумать еще что-нибудь, что может быть полезно.

Пример:
const books = [
  new Book('Преступление и наказание', 'Проза', 'Фёдор Достоевский'),
  new Book('1984', 'Проза, Фантастика', 'Джордж Оруэлл'),
  new Book('Властелин колец', 'Фэнтези', 'Джон Рональд Руэл Толкин'),
  new Book('Война и мир', 'Роман-Эпопея', 'Лев Николаевич Толстой'),
  new Book('Алиса в Стране чудес', 'Сказка', 'Льюис Кэрролл')
];

const bookList = new BookList(books);

bookList.finishCurrentBook();

console.log(bookList.currentBook);
console.log(bookList.nextBook);
console.log(bookList.lastReadBook);

bookList.addBook(new Book('Скотный двор', 'Притча, сатира, антиутопия', 'Джордж Оруэлл'));
 */

class BookList {
    constructor(list) {
        this.list = list;
        this.current = this.list[0];
        this.next = this.list[1];
        this.last = this.list.filter(book => book.finishDate).sort((a, b) => a.finishDate - b.finishDate).at(-1);
    }

    addBook(book) {
        this.list.push(book);
    }

    finishCurrentBook() {
        this.current.finishDate = new Date();
        this.last = this.current;
        this.current = this.next;
         
        for(let i = this.list.indexOf(this.current) + 1; i < this.list.length; ++i) {
            if(!this.list[i].finishDate) {
                this.next = this.list[i];
                return;
            };
        }
    }
    
    getReadBooksCount() {
        let read = this.list.filter(book => book.finishDate);
        return console.log(read.length);
    }

    getUnreadBooksCount() {
        let unread = this.list.filter(book => !book.finishDate);
        return console.log(unread.length);
    }
}


class Book {
    constructor(title, genre, author) {
        this.title = title;
        this.genre = genre;
        this.autor = author;
        this.readingNow = false;
        this.finishDate = null;
    }
};

const books = [
    new Book('Преступление и наказание', 'Проза', 'Фёдор Достоевский'),
    new Book('1984', 'Проза, Фантастика', 'Джордж Оруэлл'),
    new Book('Властелин колец', 'Фэнтези', 'Джон Рональд Руэл Толкин'),
    new Book('Война и мир', 'Роман-Эпопея', 'Лев Николаевич Толстой'),
    new Book('Алиса в Стране чудес', 'Сказка', 'Льюис Кэрролл')
  ];
  
  const bookList = new BookList(books);
  
  bookList.finishCurrentBook();
  bookList.finishCurrentBook();
  
 bookList.addBook(new Book('Скотный двор', 'Притча, сатира, антиутопия', 'Джордж Оруэлл'));
