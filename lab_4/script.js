//task1
const people = ['Кристина', 'Олег', 'Кирилл', 'Мария', 'Светлана', 'Артем', 'Глеб'];
function giveParcel() {
    const person = people.shift();
    alert(`${person} получил(a) посылку. В очереди осталось ${people.length} человек.`);
}
function leaveQueueWithoutParcel() {
    const person = people.pop();
    alert(`${person} не получил(a) посылку и ушел(а) из очереди`);
}
giveParcel();
giveParcel();
giveParcel();
while (people.length > 0) {
    leaveQueueWithoutParcel();
}

//task2
function getSumOfSequence(number) {
    const sequence = [];

    for (let i = 1; i <= number; i++) {
        sequence.push(i);
    }

    return sequence[0] + sequence[sequence.length - 1];
}

//task3
const coffees = ['Latte', 'Cappuccino', 'Americano'];
const coffeeName = prompt('Поиск кофе по названию:');
const coffeeIndex = coffees.findIndex(coffee => coffee.toLowerCase() === coffeeName.toLowerCase());
if (coffeeIndex !== -1) {
    alert(`Держите ваш любимый кофе ${coffees[coffeeIndex]}. Он ${coffeeIndex + 1}-й по популярности в нашей кофейне.`);
} else {
    alert('К сожалению, такого вида кофе нет в наличии');
}

//task4
const prices = [1.5, 1, 2];
const updatedPrices = prices.map(price => price + 0.5);
coffees.forEach((coffee, index) => {
    alert(`Кофе ${coffee} сейчас стоит ${updatedPrices[index]} евро`);
});

//task5
const clientsEstimations = [];
function askClientToGiveEstimation() {
    const estimation = Number(prompt('Как вы оцениваете нашу кофейню от 1 до 10?'));

    if (estimation >= 1 && estimation <= 10) {
        clientsEstimations.push(estimation);
    }
}
for (let i = 0; i < 5; i++) {
    askClientToGiveEstimation();
}
const goodEstimations = clientsEstimations.filter(estimation => estimation > 5).length;
const notGoodEstimations = clientsEstimations.filter(estimation => estimation <= 5).length;
alert(`Всего положительных оценок: ${goodEstimations}; Всего отрицательных оценок: ${notGoodEstimations}`);

//task6
const numbers = [10, 4, 100, -5, 54, 2];
let sumFor = 0;
for (let i = 0; i < numbers.length; i++) {
    sumFor += numbers[i] ** 3;
}
console.log('1. for:', sumFor);

let sumForOf = 0;
for (let number of numbers) {
    sumForOf += number ** 3;
}
console.log('2. for of:', sumForOf);

let sumForEach = 0;
numbers.forEach(number => {
    sumForEach += number ** 3;
});
console.log('3. forEach:', sumForEach);

const sumReduce = numbers.reduce((sum, number) => sum + number ** 3, 0);
console.log('4. reduce:', sumReduce);

//task7
const goals = [8, 1, 1, 3, 2, -1, 5];

const maxGoals = Math.max(goals);
const maxIndex = goals.indexOf(maxGoals);
alert(`Самый результативный матч был под номером ${maxIndex + 1}. В нем было забито ${maxGoals} гол(ов).`);

const positiveGoals = goals.filter(goal => goal >= 0);
const minGoals = Math.min(positiveGoals);

const minIndexes = [];
for (let i = 0; i < goals.length; i++) {
    if (goals[i] === minGoals) {
        minIndexes.push(i + 1);
    }
}

alert(`Самые нерезультативные матчи были под номерами ${minIndexes.join(', ')}. В каждом из них было забито по ${minGoals} мячу(a).`);

const totalGoals = positiveGoals.reduce((sum, goal) => sum + goal, 0);
alert(`Общее количество голов за сезон равно ${totalGoals}`);

const hasAutoDefeats = goals.some(goal => goal === -1);
alert(`Были автоматические поражения: ${hasAutoDefeats ? 'да' : 'нет'}`);

const averageGoals = totalGoals / positiveGoals.length;
alert(`Среднее количество голов за матч равно ${averageGoals}`);

const sortedGoals = goals.sort((a, b) => a - b);
alert(`Голы по возрастанию: ${sortedGoals.join(', ')}`);

//task8
function getMathResult(array) {
    let validValues = [];

    if (array.length > 3) {
        for (let i = 0; i < array.length; i++) {
            const item = array[i];

            if (!isNaN(Number(item))) {
                validValues.push(Number(item));
            }
            else if (['>', '<', '=', '+', '-', '*', '/'].includes(item)) {
                validValues.push(item);
            }

            if (validValues.length === 3) break;
        }
    } else if (attay.length === 3) {
        validValues = array;
    }

    const [num1, operator, num2] = validValues;

    const a = Number(num1);
    const b = Number(num2);

    switch (operator) {
        case '>': return a > b;
        case '<': return a < b;
        case '=': return a === b;
        case '+': return a + b;
        case '-': return a - b;
        case '*': return a * b;
        case '/': return a / b;
    }
}
//task9
const matrix = [];

for (let i = 0; i < 3; i++) {
    const row = [];
    for (let j = 1; j <= 5; j++) {
        row.push(j);
    }
    matrix.push(row);
}

console.log(matrix);