const tillDate=new Date('May 31,2024 23:59:59').getTime();

const countdown=setInterval(function(){
    const now=new Date().getTime();

    const gap=tillDate-now;

    // 1s = 1000ms
    // 1m = 60s
    // 1hr = 60m
    // 1d = 24hr

    // values in miliseconds
    const oneDay=1000*60*60*24;
    const oneHour=1000*60*60;
    const oneMinute=1000*60;

    const days=Math.floor(gap/oneDay);
    const hours=Math.floor((gap%oneDay)/oneHour);
    const minutes=Math.floor((gap%oneHour)/oneMinute);
    const seconds=Math.floor((gap % oneMinute)/1000);

    document.getElementById('days').innerText=days;
    document.getElementById('hours').innerText=hours;
    document.getElementById('minutes').innerText=minutes;
    document.getElementById('seconds').innerText=seconds;

    //If the countdown is finished, show 'Sorry, this giveaway has expired!':
    if (gap<0){
    clearInterval(countdown);
    document.getElementById('countdown').innerHTML='<p id="error">Sorry, this giveaway has expired!</p>';
    }
}, 1000);