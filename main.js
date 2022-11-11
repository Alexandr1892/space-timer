const counterElement = document.querySelector('#counter')

let counter = 0;

let timerId;



// start

const btnSrart = document.querySelector('#start');


    btnSrart.onclick = function() {
        timerId = setInterval(function(){
        counter = counter + 1;

        counterElement.innerText = counter;

   
}, 1000)
}


// stop

const btnStop = document.querySelector('#pause');

    btnStop.onclick = function() {
        clearInterval(timerId)
    }   
    
// reset


const btnReset = document.querySelector('#reset');
    btnReset.onclick = function() {
        counter = 0;
        clearInterval(timerId)
        counterElement.innerText = counter;
    }


    