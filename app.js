function clockTick()    {
  var d = (new Date()).toString().split(' ').splice(1,3).join(' ');


      document.getElementById('date').innerHTML= d;
    }

    setInterval(function(){clockTick();}, 100);//setInterval(clockTick, 1000);


    // var objToday = new Date(),
    // 	weekday = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'),
    // 	dayOfWeek = weekday[objToday.getDay()],
    // 	domEnder = function() { var a = objToday; if (/1/.test(parseInt((a + "").charAt(0)))) return "th"; a = parseInt((a + "").charAt(1)); return 1 == a ? "st" : 2 == a ? "nd" : 3 == a ? "rd" : "th" }(),
    // 	dayOfMonth = today + ( objToday.getDate() < 10) ? '0' + objToday.getDate() + domEnder : objToday.getDate() + domEnder,
    // 	months = new Array('January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'),
    // 	curMonth = months[objToday.getMonth()],
    // 	curYear = objToday.getFullYear(),
    //
    // var today = curMonth +dayOfMonth + ", " + curYear;
    //
    //   document.getElementById('date').innerHTML = today;





$(function(){

  $('.circlechart').circlechart();

});
const hero=document.querySelector('.hero');
const image=document.querySelector('.image');
const slider=document.querySelector('.slider');
const content=document.querySelector('.content');

 const tl=new TimelineMax();
 tl.fromTo(slider,0.5,{x:"-100%"},{x:"0%",ease:Power2.easeInOut});
