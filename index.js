const now = new Date();
const date1 = new Date('May 11 2018 09:00');
const date2 = new Date(2022,0,18,9,0); // 0 for jan

console.log(now);
console.log(date1);
console.log(date2);

now.setFullYear(2017);
console.log(now);

console.log(now.toDateString()); // Sun Jul 02 2017
console.log(now.toTimeString()); // 11:14:39 GMT-0500 (Central Daylight Time)
console.log(now.toISOString()); // commonly used on back ends

