var n = prompt('Enter number betwin 0 and 999');
var ones = ["zero","One","Two","Three","Four","Five","Six","Seven","Eight",
            "Nine","Ten","Eleven","Twelve","Thirteen","Fourteen",
            "Fifteen","Sixteen","Seventeen","Eighteen","Nineteen"]; 

var tens = ["","","Twenty","Thirty","Forty","Fifty","Sixty","Seventy",
            "Eighty","Ninety"]; 

if ((n>=0)&&(n<100)) {
		function words99(n)   {    // n is an integer less than or equal to 99.
	//
	// Accept any 2 digit int incl 00 & 99 and return words.
	// 

	    var words = ''; var Dn = 0; var Un = 0;

	    Dn = Math.floor(n99 / 10);           // # of tens

	    Un = n99 % 10;                       // units

	    if (Dn > 0 || Un > 0) {

	      if (Dn < 2) {

	        words += ones[Dn * 10 + Un];     // words for a # < 20

	      } else {

	        words += tens[Dn];

	        if (Un > 0) words += "-" + ones[Un];
	      }
	    }                               // if ( Dn > 0 || Un > 0 )

	    return words;
		}                                   
}
else{
	function words999(n)   {    // n is an integer less than or equal to 999.
//
// Accept any 3 digit int incl 000 & 999 and return words.
//

    var words = ''; var Hn = 0; var n99 = 0;

    Hn = Math.floor(n / 100);                  // # of hundreds in it

    if (Hn > 0)   {                               // if at least one 100

      words = words99(Hn) + " Hundred";           // one call for hundreds
    }

    n99 = n - (Hn * 100);                      // subtract the hundreds.

    words += ((words == '')?'':' ') + words99(n99); // combine the hundreds with tens & ones.

    return words;
}                            // function words999( n999 );
}



console.log(words999(n));
console.log(words99(n));