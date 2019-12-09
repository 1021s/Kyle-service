const moment = require('moment');
moment.locale('en');

let now = moment();
let Hour = now.get('hour');
let minute = now.get('minute');
const dummyTimes = moment().format('LLLL');
console.log(dummyTimes.split(','));
console.log(dummyTimes);
console.log(now);
console.log(now.format('MMM'));

// const times = [];
// let hour;
// if(Hour < 9 ? hour = 9 : hour = Hour + 2);
// for (hour = Hour + 2; hour < 19; hour++ ) {
//     times.push(moment({hour}).format('h:mm A'));
//     times.push(moment({
//         hour,
//         minute: 30
//     }).format('h:mm A')
//     );
// }
// times.push(moment({hour: 19}).format('h:mm A'));

// console.log(times);


// const dates = [];
// // let now = moment();
// let date = now.get('date');

// for(let i = date; i < date + 7; i++) {
//     dates.push(moment({date: i}))
// }
// console.log('dates: ', dates);