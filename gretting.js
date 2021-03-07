const form = document.querySelector(".js-form"),
    input = form.querySelector("input"),//부모에 따른 input 을 얻기 위해서 입력.
    greeting = document.querySelector(".js-greetings");
//querySelector를 사용해서 tag,아이디,클래스 등을 불러옴
//querySelectorAll은 모든 태그,아이디,클래스를 불러온다
//get element by tag name은 태그로 엘리먼트를 가져오는 것 ex) input, body, html, div, section

const USER_LS = "currentUser",  
    SHOWING_CN = "showing"; 

function saveName(text){
    localStorage.setItem(USER_LS,text);//변수로 선언한 USER_LS를 다시 한번 text값을 담는다.
}
//localStorage는 작은정보들을 해당컴퓨터에 저장하는 것.

function handleSubmit(event){//이벤트가 발생하면 root에서 발생 form에서 발생
    event.preventDefault();// preventDefault 메소는 취소가능한 이벤트를 취소한다. 해당 이벤트의 디폴트 액션이 발생하지 않는다.
    const currentValue = input.value;
    paintGreeting(currentValue);//29번째 줄에 있는 paintGreeting이라는 함수를 가져왔다.
    saveName(currentValue);
}

function askForName(){
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit",handleSubmit);
}


function paintGreeting(text){
    form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    greeting.innerText = `Hello ${text}`;
}

function loadName(){
    const currentUser = localStorage.getItem(USER_LS);
    if(currentUser === null){
        askForName();
        //유저 이름이 없는경우
    }else {
        paintGreeting(currentUser);//유저이름이 있으면 색깔을 칠한다.
    }
}

function init() {
    loadName();
}

init();