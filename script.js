let start = document.querySelector(".start");
let stop = document.querySelector(".stop");
let reset = document.querySelector(".reset");
let interval;
let ms = "00";
let s= "00";
let m="00";
let timer = document.querySelector(".screen");


start.addEventListener("click", () => {
   
        clearInterval(interval);
        interval = setInterval(startTimer, 10);

} )

stop.addEventListener("click", () => {
    clearInterval(interval);
})

reset.addEventListener("click", () => {
    
      clearInterval(interval);
      timer.innerHTML = "00:00.00";
      ms= "00";
      s="00";
      m="00";

})


function startTimer() {

           ms++;
           if (ms > 99){
          
              s++;
              ms=0;
              if(s < 10){
                s = "0" + s;
         }   
        } 
         if(s === 60){
            m++;
            s="00";
           if ( m < 10){
               m = "0" + m;
           } 
        }
   
        timer.innerHTML = `${m} : ${s} . ${ms}`;

}

