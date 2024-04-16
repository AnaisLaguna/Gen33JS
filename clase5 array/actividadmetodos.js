/*1.- Se requiere conocer la cantidad de letras de una palabra dentro de la frase. La palabra 
se debe seleccionar por su posicion.
( quiero saber la longitud de la segunda palabra)
si preguntamos por una posicion que no existe en la frase, devolvemos un mensaje que indique el error*/

const numLetras = (frase, index) => {
    const espacioDePalabra = frase.split(' ');
    if (index < 0 || index >= espacioDePalabra.length) {
      return 'Esta posicion no existe en la frase. ';
    }
    return espacioDePalabra[index].length;
    
  };
  
  const frase = 'La mejor forma de predecir el futuro es creándolo';
  const index = 15;
  const length = numLetras(frase, index);

  console.log(`La cantidad de letras de una palabra es: ${index} en la frase "${frase}" es: ${length}.`);

  /*2.- De la frase, necesitamos eliminar una palabra con base en su posicion, y 
  recibir una nueva frase sin la palabra borrada*/

  const removerPosicion = (frase1, index1) => {
    const espacioDePalabra = frase1.split(' ');
    if (index1 < 0 || index1 >= espacioDePalabra.length) {
      return  'Esta posicion no existe en la frase. ';
    }
    espacioDePalabra.splice(index1, 1);
    return espacioDePalabra.join(' ');
  };
  
  const frase1 = 'La mejor forma de predecir el futuro es creándolo';
  const index1 = 8; 
  const fraseNueva = removerPosicion(frase1, index1);
  console.log(`La nueva frase despues de remover el indice queda, ${index1} asi: "${fraseNueva}".`);

/*3.- Se requiere eliminar todas las palabras cortas de la frase, considerando que una palabra corta
 es aquella que tiene 3 caracteres o menos, y debemos obtener la nueva frase sin palabras cortas*/

 const removerPartesFrase = (frase2) => {
    const espacioDePalabra = frase2.split (' ');
    const filtradoPalabrasCortas = espacioDePalabra.filter(palabraCorta => palabraCorta.length > 3);
    return filtradoPalabrasCortas.join(' ');

 };

 const frase2 = 'La mejor forma de predecir el futuro es creándolo';
 const nuevaFrase = removerPartesFrase(frase2);
 console.log(`la nueva frase sin palabras cortas queda asi: "${nuevaFrase}".`);

 // 4.- Se requiere obtener la frase, pero escrita en orden inve

 const fraseInvertida = (frase3) => {
 return frase3.split('').reverse().join('');
 };
 
 const frase3 = 'La mejor forma de predecir el futuro es creándolo';
 const revers = fraseInvertida(frase3);

 console.log(`la actividad se visualiza, asi "${revers}".`);



