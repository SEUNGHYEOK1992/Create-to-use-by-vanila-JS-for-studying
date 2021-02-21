const clockContainer = document.querySelector(".js-clock"),
    clockTitle = clockContainer.querySelector("h1")

function getTime(){ //init- -> getTime으로 변경 무언가를 만들 때에는 작은 거부터 순서대로 만든다.
    const date = new Date();
    const minutes = date.getMinutes();
    const hours = date.getHours();
    const seconds = date.getSeconds();
    clockTitle.innerText =`${hours < 10 ? `0${hours}` : hours}:${
        minutes <10 ? `0${minutes}` : minutes}:${
        seconds <10 ? `0${seconds}` : seconds
    }`;
}

function init(){
    getTime();
    setInterval(getTime,1000);
}


init();