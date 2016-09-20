var radius = prompt('Enter number for radius');

var height = prompt('Enter number for heihgt');

function calcCylinderVol(radius, height){
    var vol = Math.PI * Math.pow(radius,2) * height;
    return vol.toFixed(3);
}
console.log(calcCylinderVol(radius,height));
