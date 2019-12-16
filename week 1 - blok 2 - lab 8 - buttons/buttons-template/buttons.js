var teller = [0, 0, 0];
var b1js = document.getElementById('b1')
var b2js = document.getElementById('b2')
var b3js = document.getElementById('b3')
var img = document.createElement("IMG");




function counter1() {
    b1.innerHTML = teller[0] = teller[0] + 1;
    bg1();

}
b1.onclick = function() {
    counter1()

}; 
counter1(); 

function counter2() {
    b2.innerHTML = teller[1] = teller[1] + 1;
 	bg2();   
}
b2.onclick = function() {
    counter2()
};
counter2();

function counter3() {
    b3.innerHTML = teller[2] = teller[2] + 1;
    bg3();

}
b3.onclick = function() {
    counter3()
};
counter3();






function bg1() {
	document.body.style.backgroundImage = "url('images/bg1.jpg')"
}

function bg2() {
	document.body.style.backgroundImage = "url('images/bg2.jpg')"
}

function bg3() {
	document.body.style.backgroundImage = "url('images/bg3.jpg')"
}