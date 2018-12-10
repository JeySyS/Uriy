
var cases = document.getElementById('case');
document.getElementById('start-button').onclick = start;
var casesdraw = document.getElementById('cases1');
var left=0;


 

 function start(){
	left = left - Math.random() * 1400;
	
	cases.style.left = left + 'px';

	setTimeout(3000);
	left = 0
 }


	function win(){

	if (left  >=71  <= 140){
		
		
		alert("");
	  }
	  setTimeout(win, 3000);
 }


 
	


	
	
	






   
function img() {
	
	  var img = document.createElement('img');
	
	  img.setAttribute('src', 'cases.png');
	
	  document.body.appendChild(img);
}
