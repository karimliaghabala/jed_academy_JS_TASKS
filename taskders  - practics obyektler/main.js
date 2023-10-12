let myInfo = {
  name: "Aghabala",
  surname: "Karimli",
  age: "30",
  birthday: {
    day: "03",
    month: "mart",
    year: 1993,
    // task 1
    getFullBirthday: () => {
      return (
        myInfo.birthday.day +
        " " +
        myInfo.birthday.month +
        " " +
        myInfo.birthday.year
      );
    },
  
  },
  address: {
    country: "Azerbaycan",
    city: "Baku",
    home: "Hovsan",
    postCode: 1089,
    getFullAddress: () => {
      return `Men   ${myInfo.address.country} nin ${myInfo.address.city} sheherinin ${myInfo.address.home} qesebesinde yashayiram`;
    },
  },
  contact: {
    phonenumber: "+994504131597",
    email: "agabala.93@gmail.com",
  },
  getFullInfo:()=>{
    return `Men   ${myInfo.surname}  ${myInfo.name}.Menim  ${myInfo.age} yashim var. Men   ${myInfo.address.country} nin ${myInfo.address.city} sheherinin ${myInfo.address.home} qesebesinde yashayiram. Elaqe nomrem ${myInfo.contact.phonenumber} -dir. Elektron poct ve poct unvanim:${myInfo.contact.email}, ${myInfo.address.postCode}`;
  }
};
// task 1
console.log(myInfo.birthday.getFullBirthday());
// task 2
console.log(myInfo.address.getFullAddress());
//task 3
console.log(myInfo.getFullInfo());
