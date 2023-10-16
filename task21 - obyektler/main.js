// Bir add funksiyasi yazin. 3 arqument alsin. ilk 2si ededler (eded1 ve eded2) 3cusu ise, funksiya olsun. (callback). men o funksiyaya console.log ve ya alert verib, ozum teyin edim, neticeni alert-de gostersin, yoxsa console-da.



let name = (eded1,eded2,callback)=>{
    let result = eded1+eded2
        if(callback === console.log){
            console.log(result)
        }else if(callback === alert){
            alert(result)
        }
}
name(3,5,console.log) 
name(3,5,alert) 


// Bir parametrli funksiya yazın, parametr olaraq cins(K,Q) və ad qəbul etsin. 
// Həmin funksiya geriyə funksiya göndərsin. 
// Geriyə göndərdiyi funksiyada əgər cins qadındırsa qarşısına Xanım, kişidirsə cənab yazılıb, console-a çıxarılsın.

let gender = (g,name)=>{
    let genderG = ()=>{
        if(g === "K" || g === "k"){
            console.log("Cenab " + name)
        }else if ((g === "Q" || g === "q")){
            console.log("Xanim " + name);
        }else{
            console.log("cinsiyyet duzgun mueyyen olunmayib")
        }
    }
    return genderG()
}

gender("k", "Agabala")
gender("q", "Sema")