
let n1 = Number(prompt("Eded 1 - i daxil edin:"))
let opr = prompt("operatoru daxil edin (+,-,/,*):")
let n2  = Number(prompt("Eded 2 - ni daxil edin:"))
  

    if(opr === "+" ){
        console.log("if-else ile: " + (n1 + n2))
    }else if(opr === "-" ){
        console.log("if-else ile: " + (n1 - n2))
    }else if(opr === "/" ){
        console.log("if-else ile: " + (n1 / n2))
    }else {
        console.log("if-else ile: " + (n1 * n2))
    }

let a = true
    switch (a === true) {
        case (opr === "+"): console.log("case ile: " + (n1 + n2));
        break;
        case (opr === "-" ) : console.log("case ile: " + (n1 - n2));
        break;
        case (opr === "*" ) : console.log("case ile: " + (n1 * n2));
        break;
        case (opr === "/" ) : console.log("case ile: " + (n1 / n2));
        break;
    }
    
