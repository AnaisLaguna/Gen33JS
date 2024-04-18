let data = [
    ["Israel", "Salinas", 34],
    ["Charles", "Silva", 27],
    ["Naomi", "Lopez", 27],
    ["David", "Moranchel", 28],
  ];
  
  /*
      
     
      
          }
      ]
  */

      //1. Necesitamos una lista con los nombres completos de las personas que se encuentran en la data

      let listaNombres = data.map((persona) => {
        return `${persona[0]} ${persona[1]}`;
      });
      console.log (listaNombres);


     // 2.- Necesitamos saber cual es la mayor y la menor edad de las personas en la lista
     const edades = (data) => {

        let menor = data.reduce(
            (min, person) => (person[2] < min ? person[2] : min),
            data[0][2]
        );
        let mayor = data.reduce(
            (max, person) => (person[2] > max ? person[2] : max),
            data[0][2]
        );
        return { menor, mayor };
    };
    
    console.log(edades(data));
    

      /*3.- Necesitamos reestructurar la data para que quede de la siguiente forma:
  
      let restructuredData = [
          {
              name:
              lastname:
              age
        */


      let dataReestructurada = data.map((persona) => {
        return {
          name: persona[0],
          lastname: persona[1],
          age: persona[2],
        };
      });
      console.log(dataReestructurada);