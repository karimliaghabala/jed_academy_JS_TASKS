//1. logGreeting() adında funksiya tərtib edin hansıki konsola «[Adınız] is a JS developer» mesajı çıxarsın.

let logGreeting = (name)=>{
    console.log(name + " is a JS developer")
}
logGreeting("Aghabala")

//İstifadəçi adını parametr kimi qəbul edən və konsola «[İstifadəçi adı] is active now» mesajı çıxaran funksiya tərtib edin.Funksiyanı 3 müxtəlif ad üçün çağırın.

let userName = (name)=>{
    console.log(name + " is active now")
}
userName("Aghabala")
userName("Orxan")
userName("AliSahib")

//Parametr kimi ədədi qəbul edən və onu dördüncü dərəcə qüvvətə yülsəldərək konsolda göstərən fourth() funksiyasını yazın.

let fourth = (number)=>{
    console.log(number**4);
}
fourth(2)

//# Evvelki movzulardan tasklar. Funksiyasiz. 
// 4. Sonu 0 ilə bitən bütün üçrəqəmli ədədləri konsola çıxaran proqram yazın. (for ile yazin)

for (let i = 100;i<200;i++){
    if(i % 10 === 0){
        console.log(i)
    }
}

// Bütün ikirəqəmli tək ədədlərin cəmini konsola çıxaran proqram yazın.
let cem = 0
for (let i = 10; i<100; i++){
    if(i%2!==0){
        console.log(cem = cem + i);
    }
}
//  İstifadəçinin daxil etdiyi ədədin bölünəni olan bütün üçrəqəmli ədədlərin cəmini hesablayan proqram yazın. Meselen, 50-ye hansi ucreqemli ededler bolunur?: 100, 150, 200, 250, ....
let b = +prompt("ededi daxil edin:")
let cem1 = 0
for(let i = 100; i<200; i++){
    if(i%b === 0){
        console.log(cem1=cem1+i)
    }
}