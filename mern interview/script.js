// const users = [
//   {
//     id: 1,
//     name: "Leanne Graham",
//     username: "Bret",
//     email: "since@gmail.com",
//   },
//   {
//     id: 2,
//     name: "Ervin Howell",
//     username: "Antonatte",
//     email: "shanna@gmail.com",
//   },
//   {
//     id: 3,
//     name: "Clementine Brouch",
//     username: "Samanta",
//     email: "nathan@gmail.com",
//   },
// ];

// 1.bir funksiya yazin ki yuxaridaki arraydan userin adini verim mene hemin obyekti geri qaytarsin

// const getUserName = (name) => users.find((user) => user.name === name);
// console.log(getUserName("Leanne Graham"));

// 2. adlari gizleyen funksiya yazin/ bele ki hemin funksiya array alsin ve hemin arrayin elementlerini gizledib  geriye gizledilmish adlardannibaret arry qaytarsin

// let arr = ["ali", "reza", "alirza", "muhammed", "coshqun", "eles"];

// const hiddenNames = (arr) => {
//   const newArr = arr.map((ad) => {
//     const ulduzSayi = ad.length - 2
//     return ad.slice(0,2) + "*".repeat(ulduzSayi)
//   });
//   console.log(newArr)
// };
// hiddenNames(arr); //[al* re** al***]




// 3.Adlar massivini parametr kimi qebul eden bir funksiya yazin, bele ki o funksiya bize en uzun adi cixaracaq


// let arr1 = ["ali", "reza", "alirza", "muhammed", "coshqun", "eles"];

// const findLongName = (arr1)=>{
//     let maxName = arr1[0]
//     arr1.forEach((ad)=>{
//         if(ad.length>maxName.length){
//             maxName = ad
//         }
//     })
//     console.log(maxName)
// }
// findLongName(arr1)



// 4.A herifi ile bashlayan original massivdeki elementlerden ibaret yeni massiv yaradin
// let names = ['agabala','sema','dinare','anna','inci']
//     const newArr =  names.filter((ad)=>ad.startsWith('a'))
// console.log(newArr);





// 5.metn tip deyishenlerden ibaret massivi dogum iline gore siralamaq uchun funksiya  yazin .  
let guys = ['Ada Lovelace, 1915', 'Nicola Tesla, 1856', 'Alan Turing, 2012']

let sortG = guys.sort((a,b)=>a.split(', ')[1] - b.split(', '[1]))
console.log(sortG);