var oplopend = [,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
var piramide = [];
 var aantal = prompt ('Voer een getal in:');

 for (var i = 0; i < aantal; i++) {
 	piramide[i] = i	
 }
 document.write ('array: ' + piramide);

 for (var j = 0; j <= aantal; j++) {
 	 document.write('<br/>');

 	 for (var i = 0; i < j; i++) {
 	 	document.write(piramide[i]);
 	 }
 }