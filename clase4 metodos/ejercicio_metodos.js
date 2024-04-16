/*se requiere:
    1.- Saber cuántos caracteres tiene la frase

    2.- Saber cuántas letras tiene la frase

    3.- Saber cuántas palabras tiene la frase

    4.- Obtener la misma frase pero en mayúsculas

    5.- Obtener la misma frase pero con todas las letras "a" reemplazadas por un "4"*/

    
    
    
    
    


    //1
//la funcion de caracteres es igual a la frase estipulada, me retorna el metodo .lenght donde se establecen los valores de los elementos
      const caracteresContadas = (frase) => {
        return frase.length;
      };
      
      const frase = "'La mejor forma de predecir el futuro es creándolo'";
      const contandoCaracteres = caracteresContadas(frase);
      console.log(`Tu frase "${frase}" tiene ${contandoCaracteres} caracteres.`);

      //2
      //la funcion de letras  es igual a la frase estipulada dandome el retorno de la frase con el metodo .match, teniendo el comando de la a-z y A-Z ingresando
      //a la frase con el metodo .length

      const letrasContadas = (frase1) => {
        return frase1.match(/[a-zA-Z]/g).length;
      };
      
      const frase1 = "La mejor forma de predecir el futuro es creándolo";
      const contandoLetras = letrasContadas(frase1);
      console.log(`Tu frase "${frase1}" tiene ${contandoLetras} letras.`);

      //3 
      //la funcion de palabras es igual a la frase inicial que la funcion flecha me 
      //retorna el resultado de la frase con el metodo y eliminamos los espacios con el metodo.trim 
      //y el metodo split, para ingresar  

      const palabrasContadas = (frase2) => {
        return frase2.trim().split(/\s+/).length;
      };
      
      const frase2 = "La mejor forma de predecir el futuro es creándolo";
      const contandoPalabras = palabrasContadas(frase2);
      console.log(`Tu frase "${frase2}" tiene ${contandoPalabras} palabras.`);

      //4 La funcion de mayusculas es igual al parametro de la frase que me regresa el
      //resultado con el metodo .toUpperCase 

      const fraseMayuscula = (frase3) => {
        return frase3.toUpperCase();
      };
      
      const frase3 = "La mejor forma de predecir el futuro es creándolo";
      const enMayusculas = fraseMayuscula(frase3);
      console.log(`La frase origina es:  "${frase3}".\n y la obtenemos en MAYUSCULAS ASI:  "${enMayusculas}".`);

      //5 la funcion del reemplazo cambiara la "a" por "4" en la funcion sus parametrso

        const reemplazoCon4 = (frase4) => {
        return frase4.replace(/e/gi, "3");
        };

        const frase4 = "La mejor forma de predecir el futuro es creándolo";
        const fraseModificada = reemplazoCon4(frase4);
        console.log(`La frase original es: " ${frase4}".\n La frase modificada es: "${fraseModificada}".`);

