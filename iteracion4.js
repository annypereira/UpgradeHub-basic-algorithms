// 1.1 Consigue el valor "HULK" del array de cars y muestralo por consola.
const avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"];

let verAvengers = avengers[0];
console.log(verAvengers);


// 1.2 Cambia el primer elemento de avengers a "IRONMAN"

avengers.shift();

avengers.unshift("IRONMAN");

console.log(avengers);


// 1.3 Alert numero de elementos en el array usando la propiedad correcta de Array.
// const avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"];

avengers.shift();

avengers.unshift("HULK");

alert(avengers.length);


// 1.4 Añade 2 elementos al array: "Morty" y "Summer". 
// Muestra en consola el último personaje del array
const rickAndMortyCharacters = ["Rick", "Beth", "Jerry"];

rickAndMortyCharacters.push("Morty", "Summer");

let verRickAndMorty = rickAndMortyCharacters[4];

console.log(verRickAndMorty);


// 1.5 Elimina el último elemento del array y muestra el primero y el último por consola.
// const rickAndMortyCharacters = ["Rick", "Beth", "Jerry", "Morty", "Summer", "Lapiz Lopez"];

rickAndMortyCharacters.push("Lapiz Lopez");
rickAndMortyCharacters.pop();

let verPrimeroUltimo = rickAndMortyCharacters[0] + " " + rickAndMortyCharacters[4];

console.log(verPrimeroUltimo);


// 1.6 Elimina el segundo elemento del array y muestra el array por consola.
// const rickAndMortyCharacters = ["Rick", "Beth", "Jerry", "Morty", "Summer", "Lapiz Lopez"];

rickAndMortyCharacters.push("Lapiz Lopez");

rickAndMortyCharacters.splice(1,1);

console.log(rickAndMortyCharacters);