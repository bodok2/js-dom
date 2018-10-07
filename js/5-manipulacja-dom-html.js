//let parSecond = document.querySelector("#parSecond p").innerHTML;

let tablicaParagrafow  = document.querySelectorAll("#parSecond p");



tablicaParagrafow.forEach(function(element, index) {
	 element.setAttribute("class", "pierwsza klasa");
});

let allLinks= document.getElementsByClassName("link")
allLinks[1].href = "https://www.google.pl";
allLinks[1].className = "google-class";//zamienia klasę;
//allLinks[1].classList.add("link");//dodaje nową klasę

console.log(allLinks);
						  
//	element.style.color = "red";
//	element.innerHTML = "Nowy tekst";
//	element.outerHTML = "<a href='#' >teraz link</a><br />"; //text oraz tagi <></>...
//						   })

//console.log(tablicaParagrafow);