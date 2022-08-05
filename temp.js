let secs = 60;
let mins = 1;

function time(){
    secs = secs - 1
    console.log(mins,secs);
    if (secs == 0) {
        secs = 60
        mins = mins - 1
    }

    if(mins == 0){
        mins = 1
    }
}

setInterval(time , 1000)