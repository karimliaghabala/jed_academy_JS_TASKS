// Bir add funksiyasi yazin. 3 arqument alsin. ilk 2si ededler (eded1 ve eded2) 3cusu ise, funksiya olsun. (callback). men o funksiyaya console.log ve ya alert verib, ozum teyin edim, neticeni alert-de gostersin, yoxsa console-da.

// let name = (eded1,eded2,callback)=>{
//     let result = eded1+eded2
//         if(callback === console.log){
//             console.log(result)
//         }else if(callback === alert){
//             alert(result)
//         }
// }
// name(3,5,console.log)
// name(3,5,alert)

// Bir parametrli funksiya yazın, parametr olaraq cins(K,Q) və ad qəbul etsin.
// Həmin funksiya geriyə funksiya göndərsin.
// Geriyə göndərdiyi funksiyada əgər cins qadındırsa qarşısına Xanım, kişidirsə cənab yazılıb, console-a çıxarılsın.

// let gender = (g,name)=>{
//     let genderG = ()=>{
//         if(g === "K" || g === "k"){
//             console.log("Cenab " + name)
//         }else if ((g === "Q" || g === "q")){
//             console.log("Xanim " + name);
//         }else{
//             console.log("cinsiyyet duzgun mueyyen olunmayib")
//         }
//     }
//     return genderG()
// }

// gender("k", "Agabala")
// gender("q", "Sema")

// #task object
// Calculator obyekti yaradin. 5 methodu olsun: read(), sum(), multiply(), divide(), subtract()
// read() -> prompt-la 2 eded alsin, ve onlari calculator-da proeprty kimi yadda saxlasin,
// qalanlari da neticeni console-a cixarsin.
// istifade edeceyiniz seylerden biri de   [ ] dynamic property-dir, ya da this.

// const calculator = {
//   num1: 0,
//   num2: 0,
//   read: function () {
//     this.num1 = +prompt("1ci ededi daxil edin");
//     this.num2 = +prompt("1ci ededi daxil edin");
//   },
//   sum: function () {
//     return this.num1 + this.num2;
//   },
//   multiply: function () {
//     return this.num1 * this.num2;
//   },
//   divide: function () {
//     return this.num1 / this.num2;
//   },
//   subtract: function () {
//     return this.num1 - this.num2;
//   },
// };
// calculator.read();
// console.log(calculator.sum());
// console.log(calculator.multiply());
// console.log(calculator.divide());
// console.log(calculator.subtract());











// #task2
// Car constructor-u yaradin. Biz hemin constructor-u cagiranda onun modelini, istehsal ilini, sahibini verek. Ve elbette, masinin surmek, tormozlamaq kimi methodlari olmalidir ki, onlari da verin. Meselen, surmek methodunu cagirsam ekrana,  ali zapi markali masinina qaz verir.

// class Car {
//   constructor(model, istehsalIl, sahibi) {
//     (this.carname = model),
//       (this.istehsal = istehsalIl),
//       (this.person = sahibi);
//   }
//   surmek() {
//     return this.person + this.istehsal + " ci ilin " + this.carname + " markali mashinini surur";
//   }
// }

// const mashin = new Car("zapi",1998,"ali ");
// console.log(mashin.surmek())

