console.log('Clock Exercise');

setInterval(() => {
    let date = new Date();
    let currentHour = date.getHours();
    let currentMinutes = date.getMinutes();
    let currenSeconds = date.getSeconds();
    let afterTime = (currentHour < 12 ? 'AM' : 'PM');

    currentMinutes = (currentMinutes < 10 ? "0": "") + currentMinutes;
    currenSeconds = (currenSeconds < 10 ? "0": "")  + currenSeconds; 
    
    currentHour = (currentHour > 12) ? currentHour-12 : currentHour
    currentHour = (currentHour==0) ?  12 : currentHour; 

    let time = currentHour + ':' + currentMinutes + ':' + currenSeconds + '' + afterTime
    let show = document.getElementById('clock')
    show.innerHTML = time;
}, 1000);



