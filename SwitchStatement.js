// Mon - Wed - 7 am 
// Tue - Thur - 4 am 
// Fri - 9 am 
// Sat - Sun - 8 am 

let  day = "Holidays"
switch (day){
 case 'Monday':
   console.log('7am');
   break;
 case 'Tuesday':
 case 'Wednesday':
 case 'Thursday' :
   console.log('4am');
   break;
 case 'Friday' :
    console.log('9am');
    break;
 case 'Saturday':
 case 'Sunday' :
    console.log('8am');
    break;
default:
    console.log('7am - Watch  videos')
}


