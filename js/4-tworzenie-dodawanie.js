let istniejacyWezel = document.getElementById("parFirst");

let newParagraf = document.createElement("p");

//newParagraf.appendChild(document.createTextNode("Tekst Java scriptu")); skrócony zapis tego co niżej

let newParagrafText = document.createTextNode("Tekst z Java Scriptu");
newParagraf.appendChild(newParagrafText);//dodaje tekst do <p>

istniejacyWezel.appendChild(newParagraf);

newParagraf.setAttribute("class", "custom-class");
//
newParagraf.removeAttribute("class", "custom-class");
//
istniejacyWezel.removeChild(newParagraf);//usuwa z html
//
////console.log(istniejacyWezel);
//console.log(newParagraf);



