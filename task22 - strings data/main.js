// TASK1     
// repeatedSymbolCounter('ALIONALI', 'A') // return 2 -> must be done with for loop!!!

// const repeatedSymbolCounter = (a,b)=>{
//     let count = 0;
//     for(let i =0;i<a.length;i++){
//         if(a[i] === b){
//             count++
//         }
//     }   
//     return count
// }

// console.log(repeatedSymbolCounter('ALIONALI', 'A'))







// TASK2
// capitalize(str) -> alion -=> Alion

// const capitalize = (str)=>{
//     return str[0].toUpperCase() + str.slice(1)
// }
// console.log(capitalize("agabala"))




// TASK3
// snakeToKebab(str) -=> SNAKE_CASE to kebab-case -=> BU_TEST_UCUNDUR -> bu-test-ucundur

// const snakeToKebab = (str)=>{
//     return str.replace(/_/g, "-").toLowerCase();
// }
// console.log(snakeToKebab("SALAM_AGABALA"))






// TASK 4
// nameFormat(str) —> Alion GreenHeart-=> Alion G.

// const nameFormat = (str)=>{
//     return str.split(" ")[0] + " "+  str.split(" ")[1][0]+"."
    
// }
// console.log(nameFormat("Kerimli Agabala"))







// TASK 5    split metodu
//  const string = "agabala"
//  console.log(string.split("a")) verilen deyere gore yeni massiv yaradir 








// TASK 6
// Funksiya yaradin, ilk characterimizi deyisek: ilkHerfiDeyis(soz, ilkHerf)
// ilkHerfiDeyis('alion', "A") // Alion

// const trim = (esas,deyishen)=>{
//     return deyishen+esas.slice(1)
// }
// console.log(trim("agabala", "A"));\




// TASK7
// removeCharacterFromString("Alion","A") -> "lion" . bele bir funksiya yazin, sozden character silme. Alion sozu verdik ve A characteri verdik, sozden A-ni sildi.

// const removeCharter = (str)=>{
//     let a = str.split("")
//     a.shift()
//     let b = a.join('')
//     return b
// }
// console.log(removeCharter("Agabala"))
// const removeCharter1 = (str,b)=>{
//     let a1=str.split(b)
//     return a1[1]
// }
// console.log(removeCharter1("Agabala","A"))