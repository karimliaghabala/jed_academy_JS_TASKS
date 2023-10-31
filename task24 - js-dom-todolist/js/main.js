let inputValue = document.querySelector(".input>input");
let button = document.querySelector(".input>span");
let ulList = document.querySelector(".list");

button.onclick = (e) => {
  e.preventDefault();

  if (inputValue.value !== "") {
    let ul = document.createElement("ul");
    let div = document.createElement("div");
    let li = document.createElement("li");
    let iRemove = document.createElement("i");
    let iDone = document.createElement("i");
    let iChange = document.createElement("i");
    ulList.append(ul);
    ul.append(li,div);
    div.append(iRemove,iDone,iChange);
    iRemove.className = "fa-solid fa-xmark";
    iDone.className = "fa-solid fa-check";
    iChange.className = "fa-solid fa-cash-register";
    li.textContent = inputValue.value;
    inputValue.value = "";

    iRemove.onclick = () => {
      ul.remove()
    };

    let isDone = false
    iDone.onclick = ()=>{
        if(isDone){
            li.style.textDecoration = 'none'
        }else{
            li.style.textDecoration = 'line-through #ffd700'
        }
        isDone=!isDone
    }
    iChange.onclick = ()=>{
        let newTodo = prompt("neyi deyishmek isteyirsen",li.innerText )
        li.innerText = newTodo
    }
  }
};
