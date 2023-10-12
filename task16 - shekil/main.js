

for(let i = 1;i<5;i++){
  if(i===1){
      console.log("*");
    }
    if(i===2){
      console.log("**");
    }
    if(i===3){
      console.log("***");
    }
    if(i===4){
      console.log("****");
    }
}


for(let i = 1;i<5;i++){
  console.log("*".repeat(i))
}


// for(let i = 1;i>=4;i++){
//   let star = ''
//   for(let n = 4;n>=i;n--){
//     star += '*'
//   }
//   console.log(star)
// }
 
// for (let i = 1; i <= 4; i++) {
//   let line = '';
//   for (let j = 4; j >= i; j--) {
//     line += '*';
//   }
//   console.log(line);
// }

for (let i = 1; i <= 4; i++) {
  let line = '';
  for (let j = 1; j <= i; j++) {
    line += '*';
  }
  console.log(line);
}
