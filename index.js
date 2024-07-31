const day=document.getElementById('days')
const hour=document.getElementById('hours')
const minute=document.getElementById('minutes')
const second=document.getElementById('seconds')
setInterval(function upDateCountDown() {
    const Dday = new Date('August 15,2024 00:00:00').getTime()
    const present= new Date().getTime()
    const distance= Dday-present;
    const days = Math.floor(distance/(1000*60*60*24));
    const hours= Math.floor((distance % (1000*60*60*24))/(1000*60*60))
    const minutes= Math.floor((distance%(1000*60*60))/(1000*60))
    const seconds= Math.floor((distance%(1000*60))/1000)
day.innerHTML= days
hour.innerHTML=hours;
minute.innerHTML=minutes
second.innerHTML=seconds})
upDateCountDown() 
