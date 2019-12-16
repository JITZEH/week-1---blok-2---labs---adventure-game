//opdracht 2
var namen = []


var vraagh = prompt('Hoeveel namen wilt u in de array stoppen?');


if (vraagh > 2) {
	for (var i = 0; i != vraagh; i++) {
	var vraagw = prompt('welke namen wilt u invoeren?');	
	namen.push (vraagw);
	}
	uitkomst(namen);

} 

else {
	alert(" je moet minimaal 3 namen invoeren");
}

function uitkomst(namen) {
	document.write("<h2>de zijn de namen in de array:</h2> ");
	document.write("<br/>");
	document.write(namen);
	document.write("<br/>");
	document.write("<br/>");
	document.write("<h2>de zijn de namen omgekeerd in de array:</h2> ");
	document.write("<br/>");
	document.write(namen.reverse());

}