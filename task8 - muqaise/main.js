
let number1 = Number(prompt("Eded 1-i daxil edin:"))
let number2 = Number(prompt("Eded 2-ni daxil edin:"))
let number3 = Number(prompt("Eded 3-u daxil edin:"))


    alert( "daxil etdiyiniz reqemlerden en boyuyu: " +  Math.max(number1,number2,number3) )

    if((number1>number2) && (number1>number3)){
        console.log("en boyuk eded " + number1)
    }else if((number2>number1) && (number2>number3)){
        console.log("en boyuk eded " + number2)
    }else{
        console.log("en boyuk eded " + number3)
    }
