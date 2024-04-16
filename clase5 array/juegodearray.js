/*1.- Se requiere conocer la cantidad de letras de una palabra dentro de la frase. La palabra se debe seleccionar
por su posicion.
  ( quiero saber la longitud de la segunda palabra)
  si preguntamos por una posicion que no existe en la frase, devolvemos un mensaje que indique el error
    2.- De la frase, necesitamos eliminar una palabra con base en su posicion, y recibir una nueva frase sin la palabra borrada
    3.- Se requiere eliminar todas las palabras cortas de la frase, considerando que una palabra corta es aquella que tiene 3 caracteres o menos, y debemos obtener la nueva frase sin palabras cortas
[21:29] 4.- Se requiere obtener la frase, pero escrita en orden inve*/
//1

const numLetras = (phrase, position) => {
    const espacioDePalabra = phrase.split(' ');
    if (position < 0 || position >= espacioDePalabra.length) {
      return 0;
    }
    return espacioDePalabra[position].length;
  };
  
  const phrase = 'Today is Wednesday, April 10, 2024';
  const position = 1; // 1-based index
  const length = numLetras(phrase, position);
  console.log(`The length of the word at position ${position} in the phrase "${phrase}" is ${length}.`);