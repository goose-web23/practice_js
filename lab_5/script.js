//task1
// const users = [
//     {
//         username: 'David',
//         status: 'online',
//         lastActivity: 10
//     },
//     {
//         username: 'Lucy',
//         status: 'offline',
//         lastActivity: 22
//     },
//     {
//         username: 'Bob',
//         status: 'online',
//         lastActivity: 104
//     }
// ];
// const onlineUsers = users.filter(user => user.status === 'online');
// const onlineNames = onlineUsers.map(user => user.username);
// const usersOnlineNames = onlineNames.join(', ');
// alert(`Сейчас в онлайн следующие пользователи: ${usersOnlineNames}`);

//task2
function giveTalonsInOrder(patients, orders) {
    const orderedPatients = [];
    for (let id of orders) {
        const patient = patients.find(patient => patient.id === id);
        if (patient) {
            orderedPatients.push(patient);
        }
    }
    return orderedPatients;
}

//task3
function handleObject(obj, key, action) {
    switch (action) {
        case 'get':
            return obj[key];

        case 'add':
            obj[key] = "";
            return obj;

        case 'delete':
            delete obj[key];
            return obj;

        default:
            return obj;
    }
}

//task4
// function giveJobToStudent(student, jobName) {
//     const updatedStudent = {
//         ...student,
//         job: jobName
//     };
//     alert(`Поздравляем! У студента ${updatedStudent.fullName} появилась новая работа! Теперь он ${updatedStudent.job}`);
//     return updatedStudent;
// }
// const student = {
//     fullName: 'Максим',
//     experienceInMonths: 12,
//     stack: ['HTML', 'CSS', 'JavaScript', 'React'],
// };
// const updatedStudent = giveJobToStudent(student, 'веб-разработчик');

//task5
// const groceries = {
//     "Orange Juice": {
//         price: 1.5,
//         discount: 10,
//     },
//     "Chocolate": {
//         price: 2,
//         discount: 0,
//     },
// };
// function getTotalPriceOfShoppingBag(shoppingBag) {
//     let totalPrice = 0;
//     for (let item of shoppingBag) {
//         const productInfo = groceries[item.product];

//         if (productInfo) {
//             const priceWithDiscount = productInfo.price - (productInfo.price / 100 * productInfo.discount);
//             totalPrice += priceWithDiscount * item.quantity;
//         }
//     }
//     return totalPrice.toFixed(2);
// }
// const shoppingBag = [
//     { product: 'Chocolate', quantity: 3 },
//     { product: 'Orange Juice', quantity: 23 },
// ];
// const totalPrice = getTotalPriceOfShoppingBag(shoppingBag);
// console.log('totalPrice', totalPrice);

//task6
function startGame(heroPlayer, enemyPlayer) {
    while (heroPlayer.health !== 0 && enemyPlayer.health !== 0) {
        const number = Math.random() < 0.5 ? 0 : 1;
        if (number === 0) {
            heroPlayer.heatEnemy(enemyPlayer)
        } else {
            enemyPlayer.heatHero(heroPlayer)
        }
    }
    if (heroPlayer.health > 0) {
        alert(`${heroPlayer.name} победил! У него осталось ${heroPlayer.health} здоровья`);
    } else {
        alert(`${enemyPlayer.name} победил! У него осталось ${enemyPlayer.health} здоровья`);
    }
}
heroPlayer = {
    name: 'Bob',
    health: 100,
    heatEnemy: function (enemyPlayer) {
        enemyPlayer.health -= 10;
    }
}
enemyPlayer = {
    name: 'Alex',
    health: 100,
    heatHero: function (heroPlayer) {
        heroPlayer.health -= 10;
    }
}
startGame(heroPlayer, enemyPlayer)

//task7
const suspects = {
    'James': ['Jacob', 'Bill', 'Lucas'],
    'Johnny': ['David', 'Kyle', 'Lucas'],
    'Peter': ['Lucy', 'Kyle']
};
const dead = ['Lucas', 'Bill'];
function getKiller(suspectInfo, deadPeople) {
    for (let suspect in suspectInfo) {
        const seenPeople = suspectInfo[suspect];
        const hasSeenAllDead = deadPeople.every(deadPerson =>
            seenPeople.includes(deadPerson)
        );
        if (hasSeenAllDead) {
            return suspect;
        }
    }
}
console.log(getKiller(suspects, dead));

//task8
function getRandomNumberInRange(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function getWinner(applicants, winnerObject) {
    const applicantKeys = Object.keys(applicants);
    const randomIndex = getRandomNumberInRange(0, applicantKeys.length);
    const randomKey = applicantKeys[randomIndex];
    const winner = applicants[randomKey];
    return {
        ...winnerObject,
        ...winner
    };
}
