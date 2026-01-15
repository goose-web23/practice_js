const userName = prompt('Введите своё имя');
const userAge = prompt('Введите свой возраст');
if (userAge < 18) {
    console.log(`Привет, ${userName}! Ты ещё школьник.`)
} else if (userAge >= 18 && userAge <= 65) {
    console.log(`Привет, ${userName}! Ты взрослый человек, заходи.`)
} else if (userAge > 65) {
    console.log(`Привет, ${userName}! Для возрастных лиц у нас скидки.`)
}
