var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Функция, которая принимает массив чисел и возвращает новый массив, содержащий только числа, кратные заданному числу.
function filterMultiplesOf(array, divisor) {
    return array.filter(function (num) { return num % divisor === 0; });
}
// Пример использования:
console.log(filterMultiplesOf([1, 2, 3, 4, 5, 6], 2)); // [2, 4, 6]
// Функция, которая принимает массив строк и возвращает новую строку, содержащую все строки, объединенные заданным разделителем.
function joinStrings(strings, separator) {
    return strings.join(separator);
}
// Пример использования:
console.log(joinStrings(['ХаотичноДобрый', 'ХаотичноЗлой', 'Нейтральный'], ', ')); // "hello, world"
// Функция, которая принимает массив объектов и возвращает новый массив, отсортированный по значению определенного свойства.
function sortByProperty(array, property) {
    return __spreadArray([], array, true).sort(function (a, b) {
        if (a[property] < b[property]) {
            return -1;
        }
        if (a[property] > b[property]) {
            return 1;
        }
        return 0;
    });
}
var people = [
    { name: 'Ирина', age: 21 },
    { name: 'Екатерина', age: 20 },
    { name: 'Евгений', age: 24 }
];
console.log(sortByProperty(people, 'age'));
// Создайте функцию, которая принимает другую функцию в качестве аргумента и возвращает новую функцию, которая выполняет логирование перед вызовом исходной функции.
function withLogging(fn) {
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        console.log('Вызов функции с аргументами:', args);
        var result = fn.apply(void 0, args);
        console.log('Вывод результата функции в консоль:', result);
        return result;
    };
}
// Пример использования:
var sum = function (a, b) { return a + b; };
var loggedSum = withLogging(sum);
console.log(loggedSum(3, 4)); // Logs: Calling function with arguments: [3, 4] — Function result: 7
