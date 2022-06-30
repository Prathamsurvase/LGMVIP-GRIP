// select DOM
let todoinput= document.querySelector(".todo-input");
let todobutton= document.querySelector(".todo-btn");
let todolist= document.querySelector(".todo-lists");                                            
let timeset= document.querySelector(".time");
// Event Listiners
todobutton.addEventListener("click", addtodo);
todolist.addEventListener("click", deletecheck)

// Functions
function addtodo(e) {
    
    e.preventDefault();
    
    let tododiv= document.createElement("div");
    tododiv.classList.add("todo-container");

    let todoitems= document.createElement("li");
    todoitems.innerText= todoinput.value;
    todoitems.classList.add("todo-items");
    tododiv.appendChild(todoitems);

    let completebutton= document.createElement('button');
    completebutton.innerHTML= '<i class="fas fa-check"></i>';
    completebutton.classList.add("complete-btn");
    tododiv.appendChild(completebutton);

    let deletebutton= document.createElement('button');
    deletebutton.innerHTML= '<i class="fas fa-trash"></i>';`1`
    deletebutton.classList.add("delete-btn");
    tododiv.appendChild(deletebutton);

    todolist.appendChild(tododiv);
    todoinput.value=""
}

function deletecheck(e){
    let item= e.target;
    if(item.classList[0]== "delete-btn"){
        let todo= item.parentElement;
        todo.remove();
    }

        if(item.classList[0]== "complete-btn"){
            let todo= item.parentElement;
            todo.classList.toggle("completed");

        }
    }
