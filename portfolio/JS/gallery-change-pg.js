// JavaScript Document
$(document).ready(function(){
	$('#gallery').load("gallery1.html");
	btn1.style.border= "1px solid red";
});

var btn1 = document.getElementById("buttonNumber1");
var btn2 = document.getElementById("buttonNumber2");
var btn3 = document.getElementById("buttonNumber3");
var btn4 = document.getElementById("buttonNumber4");
var btn5 = document.getElementById("buttonNumber5");
var btn6 = document.getElementById("buttonNumber6");
			
btn1.addEventListener("click", function(){
	$('#gallery').load("gallery1.html");
	btn1.style.border= "1px solid red";
	btn2.style.border= "";
	btn3.style.border= "";
	btn4.style.border= "";
	btn5.style.border= "";
	btn6.style.border= "";
})
			
btn2.addEventListener("click", function(){
	$('#gallery').load("gallery2.html");
	btn1.style.border= "";
	btn2.style.border= "1px solid red";
	btn3.style.border= "";
	btn4.style.border= "";
	btn5.style.border= "";
	btn6.style.border= "";
})

btn3.addEventListener("click", function(){
	$('#gallery').load("gallery3.html");
	btn1.style.border= "";
	btn2.style.border= "";
	btn3.style.border= "1px solid red";
	btn4.style.border= "";
	btn5.style.border= "";
	btn6.style.border= "";
})

btn4.addEventListener("click", function(){
	$('#gallery').load("gallery4.html");
	btn1.style.border= "";
	btn2.style.border= "";
	btn3.style.border= "";
	btn4.style.border= "1px solid red";
	btn5.style.border= "";
	btn6.style.border= "";
})

btn5.addEventListener("click", function(){
	$('#gallery').load("gallery5.html");
	btn1.style.border= "";
	btn2.style.border= "";
	btn3.style.border= "";
	btn4.style.border= "";
	btn5.style.border= "1px solid red";
	btn6.style.border= "";
})

btn6.addEventListener("click", function(){
	$('#gallery').load("gallery6.html");
	btn1.style.border= "";
	btn2.style.border= "";
	btn3.style.border= "";
	btn4.style.border= "";
	btn5.style.border= "";
	btn6.style.border= "1px solid red";
})
