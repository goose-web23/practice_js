const myName = 'Надежда'
const programmingLanguage = 'JavaScript'
const courseCreatorName = 'Никита Михайлович'
const reasonText = 'мне это интересно'
const numberofMonth = 6

let myInfoText = `Всем привет! Меня зовут ${myName}. Сейчас я изучаю язык программирования ${programmingLanguage} на курсе по ${programmingLanguage} у ${courseCreatorName}. Я хочу стать веб-разработчиком, потому что ${reasonText}. До этого я изучала ${programmingLanguage} ${numberofMonth} месяцев. Я уверена, что пройду данный курс до конца!`;
// task1
// console.log(myInfoText)

myInfoText = myInfoText.replaceAll('JavaScript', programmingLanguage.toUpperCase())
//task2
// console.log(myInfoText)
// console.log(`Длина строки - ${myInfoText.length}`)
// console.log(`Первыый символ - ${myInfoText[0]}. Последний символ - ${myInfoText[myInfoText.length - 1]}`)

//task3
// let userName = prompt('Как вас зовут?')
// userName = userName.toLowerCase()
// alert(`Вас зовут ${userName.trim()}`)

//task4
// let userName = prompt('Как вас зовут?').trim()
// let userAge = prompt('Сколько вам лет?')
// userName = userName.toLowerCase()
// userAge = Number(userAge.trim())
// alert(`Вас зовут ${userName} и вам ${userAge} лет`)

//task5
// let userString = prompt('Введите текст для обрезки').trim()
// const startSliceIndex = prompt('Введите индекс, с котрого нужно начать обрезку')
// const endSliceIndex = prompt('Введите индекс, которым нужно закончить обрезку')
// const string = userString.slice(Number(startSliceIndex), Number(endSliceIndex))
// alert(`Результат: ${string}`)

//task6
// let userText = prompt('Введите текст').trim()
// const wordFromText = prompt('Введите слово из текста').trim()
// const indexOfWord = userText.indexOf(wordFromText)
// userText = userText.slice(0, indexOfWord)
// alert(`Результат: ${userText}`)

//task7
let javaScriptDescription = 'JavaScript  - мультипарадигменный язык программирования. Поддерживает объектно-ориентирвоанный, императивный и функциональный стили. Является реализацией спецификации ECMAScript. JavaScript обычно используется как встраиваемый язык для программного доступа к объектам приложений';

const middleindex = Math.floor(javaScriptDescription.length / 2)
javaScriptDescription = javaScriptDescription.slice(0, middleindex).replaceAll('а', 'А')
javaScriptDescription = javaScriptDescription.replaceAll(' ', '')
const middleSymbol = javaScriptDescription[Math.floor(javaScriptDescription.length / 2)]
console.log(`Строка: ${javaScriptDescription.repeat(3)}. Символ посередине - ${middleSymbol}`)