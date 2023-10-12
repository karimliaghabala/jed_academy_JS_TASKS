//   let per = +prompt('Faizi daxil edin:')
//   const laptop = {
//     name:"Acer",
//     model:"Aspire",
//     price: 400
//   }

//   if(per>1 && per<30){
//     console.log("Endirimli qiymet:" + (laptop.price = laptop.price - (laptop.price * per/100)))
//   }else{
//     console.log("30% den yuxari olmamalidir")
//   }

const employee = {
  id: 1,
  name: "Ağabala",
  surname: "Karimli",
  peshe: "developer",
  maash: 1200,
  shirket: "Jed",
  yash: 30,
  infoEmp: () => {
    console.log(
      employee.name +
        " " +
        employee.shirket +
        "-de " +
        employee.peshe +
        " ishleyir"
    );
  },
  hbd: () => {
    console.log(employee.yash + +(1));
  },
  getFullname: () => {
    console.log(employee.name + " " + employee.surname);
  },
  upgradeSalary:()=>{
    console.log(employee.maash + + + 100)
  }
};
employee.infoEmp();
employee.hbd();
employee.getFullname();
employee.upgradeSalary();
