// Code your solutions in this file

const name = ['Lisa', 'Kaitlin', 'Jan'];
const event = 'surprise';

function writeCards(name, event) {
    let newArr = [];
    for (let i = 0; i < name.length; i++) {
        newArr.push(`Thank you, ${name[i]}, for the wonderful ${event} gift!`)
    }
    return newArr;
}

writeCards('name', 'event');

function countDown(init = 10) {
    while (init >= 0) {
        console.log(init--);
    }
}