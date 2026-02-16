//task1
// function getName1(name) {
//     return `Имя равно ${name}`;
// }
// const getName2 = function (name) {
//     return `Имя равно ${name}`;
// };
// const getName3 = (name) => {
//     return `Имя равно ${name}`;
// };
//()=>
// console.log(getName1("Анна"));
// console.log(getName2("Иван"));
// console.log(getName3("Мария"));

//task2
// function getSumOfNumbers(number, type = 'odd') {
//     let sum = 0;

//     for (let i = 0; i <= number; i++) {
//         if (type === 'odd' && i % 2 !== 0) {
//             sum += i;
//         } else if (type === 'even' && i % 2 === 0) {
//             sum += i;
//         } else if (type === '') {
//             sum += i;
//         }
//     }
//     return sum;
// }
// console.log(getSumOfNumbers(10, 'odd'));
// console.log(getSumOfNumbers(10, 'even'));
// console.log(getSumOfNumbers(10, ''));

//task3
// function getDivisorsCount(number = 1) {
//     if (!Number.isInteger(number) || number <= 0) {
//         alert("number должен быть целым числом и больше нуля!");
//         return;
//     }
//     let count = 0;
//     for (let i = 1; i <= number; i++) {
//         if (number % i === 0) {
//             count++;
//         }
//     }
//     return count;
// }
// console.log(getDivisorsCount(4));
// console.log(getDivisorsCount(5));
// console.log(getDivisorsCount(12));

//task4
// function checkQuestionAnswer(question, correctAnswer) {
//     const userAnswer = prompt(question);

//     const LowerCaseUserAnswer = userAnswer.toLowerCase().trim();
//     const LowerCaseCorrectAnswer = correctAnswer.toLowerCase().trim();

//     // Сравниваем ответы
//     if (LowerCaseUserAnswer === LowerCaseCorrectAnswer) {
//         alert("Ответ верный");
//     } else {
//         alert("Ответ неверный");
//     }
// }

// checkQuestionAnswer("Арбуз это фрукт или ягода?", "Ягода");
// checkQuestionAnswer("Сколько зубов у человека", "32");

//task5
function showSuccessMessage(message) {
    console.log(message);
}
function showErrorMessage(message) {
    console.error(message);
}

function checkTextOnErrorSymbol(text, errorSymbol, successCallback, errorCallback) {
    for (let i = 0; i < text.length; i++) {
        if (text[i] === errorSymbol) {
            errorCallback(`Найден запрещенный символ "${errorSymbol}" под индексом ${i}.`);
            return;
        }
    }
    successCallback("В данном тексте нет запрещенных символов");
}

const text = 'Привет! Как дела! Давно мы с тобой не виделись.';
checkTextOnErrorSymbol(text, 'а', showSuccessMessage, showErrorMessage); 