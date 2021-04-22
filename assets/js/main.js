//Password Generator
//Ask First Name
var firstName = prompt("Ciao, qual'è il tuo nome ?").toLowerCase(firstName);
console.log(firstName);

//Ask last Name
var lastName = prompt(" Qual' è il tuo cognome ?").toLowerCase(lastName);
console.log(lastName);

//Ask favourite color
var favColor = prompt("Qual' è il tuo colore preferito ?").toLowerCase(favColor);
console.log(favColor);

//Generate Password
document.getElementById(passwordgen).innerHTML = firstName, lastName, favColor, "21";