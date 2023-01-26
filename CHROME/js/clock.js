// Clock Functions

const clock = document.querySelector("h2#clock");

function getClock(){
    const date = new Date();
    const hours =String(date.getHours()).padStart(2,"0");
    const minutes =String(date.getMinutes()).padStart(2,"0");
    const seconds =String(date.getSeconds()).padStart(2,"0");
    clock.innerText=`${hours}:${minutes}:${seconds}`;
}

getClock();
setInterval(getClock,1000); // Interval을 주지 않는다면 그대로 멈춰라(주기적인 사용을 위한 함수.)
                            // setTimeout() -> 일정 시간 기다린후 실행.