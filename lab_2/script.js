//task1
// const existedUserLogin = 'the_best_user'
// const existedUserPassword = '12345678'

// const userLogin = prompt('Введите логин').trim()
// const userPassword = prompt('Введите пароль').trim()

// if (userLogin === existedUserLogin && userPassword === existedUserPassword) {
//     alert(`Добро пожаловать, ${userLogin}`)
// } else {
//     alert('Неверный логин или пароль')
// }

//task2
// let correctAnswers = 0;
// let incorrectAnswers = 0;
// const questions = [
//     { task: 'Сколько будет 2+2', answer: 4 },
//     { task: 'Сколько будет 2*2', answer: 4 },
//     { task: 'У Пети было 5 яблок. 3 из них он съел, 1 отдал другу. Сколько яблок у Пети осталось?', answer: 1 },
//     { task: 'У Маши было 10 конфет. 2 она съела, 1 отдала другу. После мама дала Маше ещё 5 конфет. Сколько в итоге конфет осталось у Маши?', answer: 12 },
//     { task: 'Сколько будет 2+2*2?', answer: 6 }
// ]
// questions.forEach(question => {
//     const askQuest = Number(prompt(`${question.task}`));
//     if (askQuest === question.answer) {
//         alert('Ответ верный');
//         correctAnswers += 1;
//     } else {
//         alert('Ответ неверный');
//         incorrectAnswers += 1;
//     }
// })
// alert(`Тест завершён. Правильные ответы - ${correctAnswers}. Неправильных ответов - ${incorrectAnswers}`);

//task3
// const answer1 = confirm('JavaScript появился в 1995 году?')
// if (answer1) {
//     alert('Верно')
// } else {
//     alert('Неверно, JavaScript появился в 1995 год')
// }
// const answer2 = confirm('Спецификация JavaScript называется ECMAScript?')
// if (answer2) {
//     alert('Верно')
// } else {
//     alert('Неверно, спецификация JavaScript называется ECMAScript')
// }
// const answer3 = confirm('JavaScript был создан за 1 месяц?')
// if (answer3) {
//     alert('Верно')
// } else {
//     alert('Неверно, javaScript был создан за 1 месяц?')
// }

//task4
// let i = 0;
// while (i < 3) {
//     let newStudent = prompt('Введите имя нового студента!');
//     newStudent = newStudent.trim();
//     if (newStudent) {
//         alert(`Добро пожаловать, ${newStudent}!`);
//     }
//     i += 1;
// }
// let i1 = 0;
// do {
//     let newStudent = prompt('Введите имя нового студента!');
//     newStudent = newStudent.trim();
//     if (newStudent) {
//         alert(`Добро пожаловать, ${newStudent}!`);
//     }
//     i1 += 1;
// } while (i1 < 3);

//task5
// let sum = 0;
// for (i = 0; i <= 100; i++) {
//     sum += i
// }
// alert(`Сумма = ${sum}`)

//task6
// const clientName = 'Игорь'
// let clientSpentForAllTime = 110;
// const clientSpentToday = 25;
// let discount;

// if (clientSpentForAllTime >= 100 && clientSpentForAllTime <= 300) {
//     discount = 10;
// } else if (clientSpentForAllTime > 300 && clientSpentForAllTime <= 500) {
//     discount = 20;
// } else if (clientSpentForAllTime > 500) {
//     discount = 30;
// }

// alert(`Вам предоставляется скидка в ${discount}%`)
// clientSpentForAllTime += clientSpentToday;
// const discountPay = clientSpentToday - (clientSpentToday * discount / 100)
// alert(`Спасибо, ${clientName}. К оплате ${discountPay}. За все время вы потратили ${clientSpentForAllTime}`)

//task7
// const clientName = prompt('Введите имя клиента');
// const clientSpentToday = Number(prompt('Сколько клиент потратил сегодня?'));
// const clientSpentForAllTime = Number(prompt('Сколько клиент потратил за все время?'));

// if (isNaN(clientSpentToday) || isNaN(clientSpentForAllTime)) {
//     alert('Сумма, которую клиент потратил за все время и которую потратил сегодня, должна быть числом! Перезагрузите страницу, чтобы повторить попытку.');
// } else {
//     let discount;
//     if (clientSpentForAllTime >= 100 && clientSpentForAllTime <= 300) {
//         discount = 10;
//     } else if (clientSpentForAllTime > 300 && clientSpentForAllTime <= 500) {
//         discount = 20;
//     } else if (clientSpentForAllTime > 500) {
//         discount = 30;
//     }
//     alert(`Вам предоставляется скидка в ${discount}%`);
//     clientSpentForAllTime += clientSpentToday;
//     const discountPay = clientSpentToday - (clientSpentToday * discount / 100);
//     alert(`Спасибо, ${clientName}. К оплате ${discountPay}$. За все время вы потратили ${clientSpentForAllTime}$`);
// }

//task8
const password = prompt('Введите пароль')
const hasNumber = /[0-9]/.test(password);
const passwLength = password.length >= 3 && password.length <= 20;
const hasLetters = /[A-Z]/.test(password)

if (!hasLetters || !hasNumber || !passwLength) {
    alert('Пароль не удовлетворяет условиям! Перезагрузите страницу и попробуйте ввести его еще раз.')
} else {
    alert('Пароль валидный. Добро пожаловать в аккаунт!')
}