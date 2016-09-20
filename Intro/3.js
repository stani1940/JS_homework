var n = prompt('Please enter 3 digit number ');
var digit = n.toString();

function checkDigit(n) {
   
    if (n < 1000) {
        console.log('invalid' + ' ' + 'number');
    } 
    else {
      
       
        var res = digit.split('');
           
        if (res[res.length-3] == 7) {
                return true;
            }
            else {
                return false;
            }
          
    } 
}  
console.log(checkDigit(n));
