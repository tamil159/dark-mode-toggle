const hour = document.getElementById("hour");
const minute = document.getElementById("minute");
const second = document.getElementById("second");

function setClock() {
    const now = new Date();

    const sec = now.getSeconds();
    const min = now.getMinutes();
    const hr = now.getHours();

    second.style.transform = `translateX(-50%) rotate(${sec * 6}deg)`;
    minute.style.transform = `translateX(-50%) rotate(${min * 6}deg)`;
    hour.style.transform =
      `translateX(-50%) rotate(${hr * 30 + min * 0.5}deg)`;
}

setInterval(setClock, 1000);
setClock();