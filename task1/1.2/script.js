const userInput = prompt('Введите число');
if (isNaN(userInput)) {
    console.log('Это не число')
} else if (userInput % 2 !== 0) {
    console.log('Число нечётное')
} else {
    console.log('Число чётное')
}
