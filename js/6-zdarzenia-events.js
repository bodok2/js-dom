//addevents by HTML DOM

let naszH2 = document.querySelector("#sectionFirst > h2");

function pokazNaClicku() {
	console.log(naszH2.innerHTML)
}

naszH2.onclick = pokazNaClicku;

//add event by addEventListerner



let mainHeader = document.querySelector("#main-header");

function mouseOverEvent() {
	mainHeader.style.color = "red";
}

function mouseOutEvent() {
	mainHeader.style.color = "green";
}

mainHeader.addEventListener("mouseover", mouseOverEvent);
mainHeader.addEventListener("mouseout", mouseOutEvent);


mainHeader.removeEventListener("mouseover", mouseOverEvent);

mainHeader.removeEventListener("mouseout", mouseOutEvent);


//preventDefault()


let superLink = document.getElementById("super-link");

function zablokuj(domyslneZachowanie) {
	domyslneZachowanie.preventDefault();
	console.log("click");
}

superLink.onclick = zablokuj;


//
//naszH2.onclick  = pokazNaClicku;
//naszH2.removeEventListener
//
//
//console.log(mainHeader);

//stopropagation;

function clickHeader () {
	console.log("Klinknięto w header");
}

function clickH1 (domyslneZachowanie) {
	domyslneZachowanie.stopPropagation();
	console.log("Klinknięto w <h1>");
	
}
	
document.querySelector("header").onclick = clickHeader;	
document.querySelector("#main-header").onclick = clickH1;	
	