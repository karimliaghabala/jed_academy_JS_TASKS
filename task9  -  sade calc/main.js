
let day = Number(prompt("Həfdənin gününü daxil edin(1,2,3.....)"))
let language  = prompt("Nəticə hansı dildə verilsin(az,en):")
  


if(day === 1 && language === "az"){
    console.log("Bazar ertəsi");
}else if(day === 2 && language === "az"){
    console.log("Çərşənbə axşamı");
}else if(day === 3 && language === "az"){
    console.log("Çərşənbə ");
}else if(day === 4 && language === "az"){
    console.log("Cümə axşamı");
}else if(day === 5 && language === "az"){
    console.log("Cümə");
}else if(day === 6 && language === "az"){
    console.log("Şənbə");
}else if(day === 7 && language === "az"){
    console.log("Bazar");
}else{
    if(day === 1 && language === "en"){
        console.log("Monday");
    }else if(day === 2 && language === "en"){
        console.log("Tuesday");
    }else if(day === 3 && language === "en"){
        console.log("Wednesday ");
    }else if(day === 4 && language === "en"){
        console.log("Thursday");
    }else if(day === 5 && language === "en"){
        console.log("Friday");
    }else if(day === 6 && language === "en"){
        console.log("Saturday");
    }else if(day === 7 && language === "en"){
        console.log("Sunday");
    }
}

switch(day){
    case 1:
        console.log( language === az ? 'Bazar ertesi' : 'Monday')
}
    
