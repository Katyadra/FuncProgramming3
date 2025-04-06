// Функция, которая принимает массив чисел и возвращает новый массив, содержащий только числа, кратные заданному числу.
function filterMultiplesOf(array: number[], divisor: number): number[] {
    return array.filter((num) => num % divisor === 0);
}

// Пример использования:
console.log(filterMultiplesOf([1, 2, 3, 4, 5, 6], 2)); // [2, 4, 6]

// Функция, которая принимает массив строк и возвращает новую строку, содержащую все строки, объединенные заданным разделителем.
function joinStrings(strings: string[], separator: string): string {
    return strings.join(separator);
}

// Пример использования:
console.log(joinStrings(['ХаотичноДобрый', 'ХаотичноЗлой', 'Нейтральный'], ', ')); // "hello, world"

// Функция, которая принимает массив объектов и возвращает новый массив, отсортированный по значению определенного свойства.
function sortByProperty<T, K extends keyof T>(array: T[], property: K): T[] {
    return [...array].sort((a, b) => {
        if (a[property] < b[property]) {
            return -1;
        }
        if (a[property] > b[property]) {
            return 1;
        }
        return 0;
    });
}

// Пример использования:
type ExampleObject = { name: string; age: number; };

const people: ExampleObject[] = [
    { name: 'Евстахий', age: 21 },
    { name: 'Екатерина', age: 20 },
    { name: 'Евгений', age: 24 }
];
console.log(sortByProperty(people, 'age'));

// Создайте функцию, которая принимает другую функцию в качестве аргумента и возвращает новую функцию, которая выполняет логирование перед вызовом исходной функции.
function withLogging<T extends (...args: any[]) => any>(fn: T): T {
    return function(...args: Parameters<T>): ReturnType<T> {
        console.log('Вызов функции с аргументами:', args);
        const result = fn(...args);
        console.log('Вывод результата функции в консоль:', result);
        return result;
    } as T;
}

// Пример использования:
const sum = (a: number, b: number): number => a + b;
const loggedSum = withLogging(sum);
console.log(loggedSum(3, 4)); // Logs: Calling function with arguments: [3, 4] — Function result: 7
