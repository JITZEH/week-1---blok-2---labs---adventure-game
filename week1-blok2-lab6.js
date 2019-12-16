var aflopend = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

 var aantal = prompt ('Voer een getal in:');

 for (var j = aantal; j > 0; j--) {
 	piramide(aflopend, j);
 	document.write('<br/>');

 }



 function piramide(getal, aantal) {
 	for (var i = 0; i < aantal; i++) {
 	 	document.write(aflopend[i]);
 	 }
 }

 piramide();