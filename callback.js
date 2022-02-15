const myDisplayer = ((sum) => {
    console.log(sum)
})
const myCalulator = ((num1, num2, callback) => {
    let result = num1 + num2;
    callback(result);
})

myCalulator(5, 5, myDisplayer);
const displayer = myDisplayer(10)
console.log(calculator)
console.log(displayer)
let setinterval = "name"
// setInterval(() => {
//     if (setInterval == "name") {
//         console.log("setinterval")
//         clearInterval;
//     }
// }, 50);

setInterval(() => {
    let d = new Date();
    console.log(d.getHours() + " : " + d.getMinutes() + ":" + d.getSeconds())
}, 1000);

