//task1
// const addZero = (numberStr) => String(numberStr).length === 1
//     ? `0${numberStr}` : String(numberStr);

// const getDateFormat = (date, separator = '.') => {
//     const dateItem = date.getDate();
//     const month = date.getMonth();
//     const year = date.getFullYear();
//     const dateArray = [dateItem, month + 1, year].map((item) => addZero(item));
//     console.log('dateArray', dateArray)
//     return dateArray.join(separator);
// }

//task2
const convertMsToDays = (ms) => Math.round(ms / (24 * 60 * 60 * 1000));
function getDaysBeforeBirthday(nextBirthdayDate) {
    const currentDate = new Date();
    const days = convertMsToDays(nextBirthdayDate - currentDate);
    return days;
}
const birthday = new Date(2026, 2, 16);
const daysLeft = getDaysBeforeBirthday(birthday);
console.log(`До дня рождения осталось ${daysLeft} дней`);

//task3
// function addDays(date, day = 1) {
//     const timestamp = date.getTime()
//     const newDate = new Date(timestamp + day * 24 * 60 * 60 * 1000)
//     return newDate;
// }
// const today = new Date();
// const nextWeek = addDays(today, 7);
// console.log(nextWeek);

//task4
function isDateValid(date) {
    const [days, month, year] = date.split('.')
    const passDate = new Date(year, month - 1, days)
    const dateNow = new Date();
    return dateNow < passDate;
}
function allowVisa(clients) {
    const filteredPeople = [];
    for (let i = 0; i < clients.length; i++) {
        const client = clients[i];
        if (!client.criminalRecord && isDateValid(client.passportExpiration)) {
            filteredPeople.push(client)
        }
    }
    return filteredPeople;
}
const peopleWithVisa = [
    {
        firstName: 'Stasia',
        lastName: 'Ward',
        criminalRecord: false,
        passportExpiration: '19.06.2026',
    },
    {
        firstName: 'Elliot',
        lastName: 'Baker',
        criminalRecord: false,
        passportExpiration: '04.06.2027',
    },
    {
        firstName: 'Leighann',
        lastName: 'Scott',
        criminalRecord: true,
        passportExpiration: '31.07.2022',
    },
    {
        firstName: 'Nick',
        lastName: 'Pop',
        criminalRecord: false,
        passportExpiration: '31.12.2021',
    },
];
const result = allowVisa(peopleWithVisa);
console.log('result', result);
