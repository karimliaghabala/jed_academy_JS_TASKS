
let userWords = prompt("Login daxil edin (açar sözlər: user,guest,admin):")
  
let a = true
    switch (a === true) {
        case (userWords === "user"): console.log("xoş gəldin istifadəçi ");
        break;
        case (userWords === "admin" ) : console.log("xoş gəldin cənab admin");
        break;
        case (userWords === "guest" ) : console.log("xoş gəldin qonaq");
        break;
        default: console.warn("istifadçi təyin olunmayıb");
        break;
    }
    
