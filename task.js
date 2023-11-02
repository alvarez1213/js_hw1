function formatTime(time) {    
    // создаем объект и переводим в миллисекунды, потом в строку
    const dateFormat = new Date(time * 1000).toISOString();

    // получаем время из даты
    const timeFormat = dateFormat.slice(11, 19);
    
    return timeFormat;
}

// преобразует строку вида "ЧЧ:ММ:СС" в секунды
function stringToSeconds(str) {
    const hours = str.split(":")[0];
    const minutes = str.split(":")[1];
    const seconds = str.split(":")[2];
    
    return parseInt(hours) * 3600 + parseInt(minutes) * 60 + parseInt(seconds);
}


const textTimer = document.getElementById('timer')
let sec = parseInt(stringToSeconds(textTimer.textContent))

let intId = setInterval(() => {
    sec--;
    if (sec >= 0) {        
        textTimer.textContent = formatTime(sec);
    } else {
        clearInterval(intId);
        alert('Вы победили в конкурсе!');        
    }    
}, 1000);

