//on start, minutes and seconds should go to correct time
//5:35:53
//secondHand moves with each new second by 1
//when secondHand reaches 60, minute hand moves 1 
//when minuteHand reaches 60, hour hand moves 1
function showTime(id) {
    var d = new Date()
    var hours = d.getHours();
    var minutes = d.getMinutes();  
    var seconds = d.getSeconds();

    if(minutes < 10) {
        minutes = '0' + minutes;
    }
    if(seconds < 10) {
        seconds = '0' + seconds;
    }
    var result = hours+':'+minutes+':'+seconds;
   
    document.querySelector(".runningTime").innerHTML = result;
    setTimeout('showTime("+id+")', 1000);
    return true;
}

showTime();

