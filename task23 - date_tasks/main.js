// const date = new Date();
// const a = date.getDay();
// console.log(date);
// console.log(date.getDay());
// console.log(date.getMonth());
// console.log(date.Year());
// console.log(date.getHours());
// 1. Normalda Bazar ertesinden Cumeye qeder ders olur. Ele bir funksiya qurun ki, bize alert-le desin bu gun derse getmeliyik ya yox.
// const weekdays = (a) => {
//   if (a > 0 && a < 6) {
//     switch (a) {
//       case 1:
//         alert("bu gun hefdenin 1 ci gunudur ve derse getmeliyik");
//         break;
//       case 2:
//         alert("bu gun hefdenin 2 ci gunudur ve derse getmeliyik");
//         break;
//       case 3:
//         alert("bu gun hefdenin 3 ci gunudur ve derse getmeliyik");
//         break;
//       case 4:
//         alert("bu gun hefdenin 4 ci gunudur ve derse getmeliyik");
//         break;
//       case 5:
//         alert("bu gun hefdenin 5 ci gunudur ve derse getmeliyik");
//         break;
//     default:
//         alert("bu gun istirahet gunudur")
//     }
//   }
// };
// weekdays(a);
//

// task  2
// 2. Bu gunki tarixi document.write ile html-e yazin.

// document.write(
//   date.getDate() + "." + (date.getMonth() + 1) + "." + date.getFullYear()
// );
// document.write("<br/>")
// let newDate = date.toDateString()
// document.write(newDate)





// task 3

// const gunler = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];
// const aylar = ["Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran", "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"];

// const gun = gunler[date.getDay()]
// const ay = aylar[date.getMonth()]
// console.log(gun);
// console.log(ay);






// task 4
// 5. Ezrail proqrami: user-den yasini sorusun. Ve omrune nece il qalib ona alert-le bildirin. Tutaq ki, insanlar ucun maksimum yas 77 ildir. (meselen, 60 yas yazsa 17 ili qalib 🥺)

// let yashSorush = +prompt("Yashinizi daxil edin:")
// const maxYash = 77
// const yashHesabla = (yashSorush)=>{
//     let qalib = maxYash-yashSorush
//     return `sizin omrunuze ${qalib} il qalib`
// }
// console.log(yashHesabla(yashSorush));







// task 5
// 6. Userin yasini sorusun. ve bele bir statistika yazin: doguldugu vaxtdan bu gune nece il, ay, gun, saat, deqiqe, saniye kecib. (heresini ayrica) meselen, 
// kecen il sayi: 23,
// kecen ay sayi: 234
// kecen gun sayi: 6974 
// ve s.

// const date = new Date();
// let dogIl = +prompt("doguldugunuz ili  daxil edin:")
// const yashFerq = date.getFullYear()
// const ayFerq = date.getMonth()
// const gunFerq = date.getDate()
// const yashHesabla = (dogIl)=>{
//     let yashiniz = yashFerq-dogIl
//     let ayHesab = yashiniz*12
//     let gunHesab = ayHesab*30.5
//     console.log(`kechen il sayi: ${yashiniz},kechen ay sayi ${ayHesab},kechen gun sayi ${gunHesab}`); 
// }
// yashHesabla(dogIl);


// const date = new Date(0)
// const dogudugunMlSn = (new Date(1993,2,3)).getTime()
// const indikiMl = Date.now()

// const ferqGun = parseInt((indikiMl-dogudugunMlSn)/1000/60/60/24)
// const ferqAy = parseInt((indikiMl-dogudugunMlSn)/1000/60/60/24/30.5)
// const ferqIl = parseInt((indikiMl-dogudugunMlSn)/1000/60/60/24/30.5/12)

// console.log(ferqGun);
// console.log(ferqAy);
// console.log(ferqIl);