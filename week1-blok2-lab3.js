var array1 = [1,2,3,4,5,6,7,8,9,10];
var array2 = [2,4,6,8,10,12,14,16,18,20];


document.write('optellen van de arrays:');
document.write('<br/>');
for (var i = 0; i < array1.length; i++) {
	var answer = array1[i] + array2[i];
	document.write(array1[i] +"+"+ array2[i]+"=" + answer);
	
	document.write('<br/>');
}


document.write('<br/>');
document.write('<br/>');
document.write('aftrekken van de arrays:');
document.write('<br/>');
for (var i = 0; i < array1.length; i++) {
	var answer = array2[i] - array1[i];
	document.write(array2[i] +"-"+ array1[i]+"=" + answer);
	
	document.write('<br/>');
}


document.write('<br/>');
document.write('<br/>');
document.write('vermedigvuldigen van de arrays:');
document.write('<br/>');
for (var i = 0; i < array1.length; i++) {
	var answer = array1[i] * array2[i];
	document.write(array1[i] +"x"+ array2[i]+"=" + answer);
	
	document.write('<br/>');
}


document.write('<br/>');
document.write('<br/>');
document.write('delen van de arrays:');
document.write('<br/>');
for (var i = 0; i < array1.length; i++) {
	var answer = array2[i] / array1[i];
	document.write(array2[i] +":"+ array1[i]+"=" + answer);
	
	document.write('<br/>');
}


var tafels = prompt