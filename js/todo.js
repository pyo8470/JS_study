const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
// == document.querySelector("#todo-form input")
const toDoList = document.getElementById("todo-list");
const TODOS_KEY = "todos";

let toDos = [];

function saveToDos(){
    localStorage.setItem(TODOS_KEY,JSON.stringify(toDos)); // JSON 문자열로 변환(숫자는 숫자로 유지)
}
function deleteToDo(event){
    const li = event.target.parentElement;
    li.remove();
    // li를 지워버렸어도 id는 남아있네요.
    toDos=toDos.filter((toDo)=>toDo.id !== parseInt(li.id)); 
    // 지워버린 id와 같지 않은 것만 걸러서 남김.
    saveToDos();
    // 이걸 save
}

function paintToDo(newTodo){
    const li = document.createElement("li"); // list element
    li.id = newTodo.id;

    const span = document.createElement("span"); // span

    span.innerText=newTodo.text;
    const button = document.createElement("button");
    button.innerText ="❌";
    button.addEventListener("click",deleteToDo);
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}

function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value="";
    
    const newTodoObj ={
        text : newTodo,
        id: Date.now(),
    };
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
}

toDoForm.addEventListener("submit",handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos != null){
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    toDos.forEach((item=>paintToDo(item))); // 이전 것도 복원하기.
}