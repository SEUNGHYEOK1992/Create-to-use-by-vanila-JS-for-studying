const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = 'toDos';

function filterFn(toDo){
    return toDo.id === 1
}


let toDos = [];//여러가지 할일을 정해서 추가해야 되기 때문에 array를 추가

function deleteToDo(event){
    console.log(event.target.parentNode);
    const btn = event.target;
    const li = btn.parentNode;
    toDoList.removeChild(li);
    const cleanToDos = toDos.filter(function(toDo){
        console.log(toDo.id,li.id);
        return toDo.id !== li.id;
    });
    toDos = cleanToDos//cleanTodos와 filter가 하는것은 filterFn이 체크가 된 아이템들의 array를 주는것이다.
    saveToDos();
}

function saveToDos() {//toDos 를 가져와서 로컬에 저장하는 역할
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));//JSON.srtingify는 object를 string으로 바꿔준다.
}


function paintToDo(text){
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const span = document.createElement("span");
    const newId = toDos.length +1;
    delBtn.innerHTML = "❌";   
    delBtn.addEventListener("click", deleteToDo);
    span.innerText = text;
    li.appendChild(span);
    li.appendChild(delBtn);
    li.id = newId;
    toDoList.appendChild(li);
    const toDoObj = {
        text : text,
        id : newId
    };
        toDos.push(toDoObj);//toDos array 안에 toDoObj 를 넣는다.
        saveToDos(); //호출한뒤에 세이브todos를 쓸 것 그래야 저장되어 있는 자료가 호출.
}

function handleSubmit(event){
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value = "";
}

function loadToDos(){
    const loadedToDos = localStorage.getItem(TODOS_LS);
    if(toDos !== null){
        const parsedToDos = JSON.parse(loadedToDos);
        parsedToDos.forEach(function(toDo){
            paintToDo(toDo.text);
        });
      
    }
}



function init() {
    loadToDos();
    toDoForm.addEventListener("submit",handleSubmit)
}

init();