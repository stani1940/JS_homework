var meter = prompt('Enter number for meter');
var inch = (meter/0.0254).toFixed(1); 
function meterInchconvertor(meter) {


    if (meter < 0) {
        console.log('invalid' + ' ' + 'number');
    } 
    else {
       
        return inch;
        
        } 
} 
console.log(meterInchconvertor(meter));
