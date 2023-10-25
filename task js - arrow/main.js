
// // task 1
// const number = (value) => {
//   return value % 10;
// };
// console.log(number(22));

// task 2
// const isEven = (number)=> number%2===0
// console.log(isEven(5))
// console.log(isEven(4))

//task3
// const average = (a,b)=> (a+b)/2
// console.log(average(5,10))
// console.log(average(15,12))
// console.log(average(5,23))

//task4
const multily = (a,b,callb) => {
    return callb(a+b)
}
 multily(23,22,(e)=>{console.log(e)})