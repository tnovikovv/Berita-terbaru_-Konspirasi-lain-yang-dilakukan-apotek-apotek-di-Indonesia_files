let time=3600;
const countDownEl=document.getElementByid
("countdown");

setInterval(updateCountdown, 1000);

function updateCountdown() {
const minutes=Math.floor(time/60);
let seconds=time%60;
seconds=seconds <10 ? "0" + seconds:
seconds;
countDownEl.innerHTML='${minutes}:${seconds}';
time--;
}