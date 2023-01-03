let date = document.querySelector('.date');
let currentDate = new Date();
let cDay = currentDate.getDate();
let cMonth = currentDate.getMonth() + 1;
let cYear = currentDate.getFullYear();
const days = ["Sun","Mon","Tue","Wed","Thur","Fri","Sat"];
let eDay = days[currentDate.getDay()];

let sun = document.querySelector('.sun');

date.textContent = cDay+' '+ '.' + ' '+ cMonth+' '+ '.' +' '+ cYear+' '+ ' ' + ' ' ;

sun.textContent = `  ${eDay}   `

sun.style['color'] = 'salmon';

let d = document.querySelector('.d');
let d_txt = 'DIGITAL CLOCK';
let counts = 0;
let starts;

let auto_txt = () => {
    counts++;
  
    let result = d_txt.slice(0, counts);

    if(counts >= d_txt.length){
        clearInterval(starts);
        counts=0;
    }
  
    d.textContent = result;
  };

  starts = setInterval(auto_txt, 200);

let o = document.querySelector('.o');
let o_txt = 'DESIGN BY OSAR';
let count2 = 0;
let start2;

let auto_txt2 = () =>{
    count2++;

    let result2 = o_txt.slice(0, count2);

    if(count2 >= o_txt.length){

        clearInterval(start2);
        count2=0;
    }

    o.textContent = result2;
}

start2 = setInterval(auto_txt2,200);




let show_time = () => {
    let today = new Date();
    let ch = "AM";
    let hr = document.querySelector(".hr");
    let min = document.querySelector(".min");
    let sec = document.querySelector(".sec");
    let day = document.querySelector(".ch");
  
    let hour = today.getHours();
  
    let minute = today.getMinutes();
  
    let second = today.getSeconds();

     
    if (hour == 0) {
      hour = 12;
    }

    
    if (hour >= 12 ) {
      hour = hour - 12;
      ch = "PM";
      day.textContent = ch;
    }
  
    hour = hour < 10 ? "0" + hour : hour;
    minute = minute < 10 ? "0" + minute : minute;
    second = second < 10 ? "0" + second : second;
  
    hr.textContent = hour + ' '+ ":" + ' ';
  
    min.textContent = minute+ ' ' + ":" + ' ';
  
    sec.textContent = second + ' '+ " " + ' ';
  
    day.textContent = ch;

  };
  
  setInterval(show_time, 1000);