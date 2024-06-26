/*
    1.- Necesitamos obtener una lista con los objetos de todos los canes, pero su edad debe mostrarse en años perrunos ( 1 año humano = 7 años perrunos )
    2.- Necesitamos conocer la cantidad de canes que ya estan vacunados
    3.- Necesitamos una lista que contenga el nombre y la dirección completa de cada perro, en el siguiente formato:
        "{nombre}: {calle} #{numero}, {colonia}, {codigoPostal} "
    4.- Necesitamos saber la edad promedio en años humanos de los canes de la lista
    5.- Necesitamos una nueva lista con todos los objetos de los canes, pero cambiando el valor de la propiedad "vacunado" a "si || no" ( si el valor viene en true, cambiarlo a "Si", si el valor viene en false, cambiarlo a "No")
    6.- Necesitamos una nueva lista con únicamente el nombre de cada can
*/

const canes = [
    {
      nombre: "Rex",
      tipo: "Perro",
      edad: 4,
      vacunado: true,
      direccion: {
        calle: "Calle del Parque",
        numero: 23,
        colonia: "San José",
        codigoPostal: 78900,
      },
    },
    {
      nombre: "Bella",
      tipo: "Perro",
      edad: 6,
      vacunado: true,
      direccion: {
        calle: "Avenida Libertad",
        numero: 56,
        colonia: "El Bosque",
        codigoPostal: 78500,
      },
    },
    {
      nombre: "Max",
      tipo: "Perro",
      edad: 3,
      vacunado: false,
      direccion: {
        calle: "Callejón del Puente",
        numero: 12,
        colonia: "Villa Hermosa",
        codigoPostal: 78850,
      },
    },
    {
      nombre: "Rocky",
      tipo: "Perro",
      edad: 2,
      vacunado: false,
      direccion: {
        calle: "Camino Real",
        numero: 34,
        colonia: "Las Palmas",
        codigoPostal: 78600,
      },
    },
  ];


 /*1.- Necesitamos obtener una lista con los objetos de todos los canes, 
 pero su edad debe mostrarse en años perrunos ( 1 año humano = 7 años perrunos )
 */

 const canesEdadPerruna = canes.map((cane) => {
    return {
      ...cane,
      edad: cane.edad * 7,
    };
  });
  console.log(canesEdadPerruna);

  //2.- Necesitamos conocer la cantidad de canes que ya estan vacunados
    
  const canesVacunados = canes.filter((cane) => cane.vacunado);
  console.log(canesVacunados.length);

  //3.- Necesitamos una lista que contenga el nombre y la dirección completa de cada perro, en el
  // siguiente formato:
  //"{nombre}: {calle} #{numero}, {colonia}, {codigoPostal} "

  const canesDireccion = canes.map((cane) => {
    return `${cane.nombre}: ${cane.direccion.calle} #${cane.direccion.numero},
     ${cane.direccion.colonia}, ${cane.direccion.codigoPostal}`;
  });
  console.log(canesDireccion);

  //4.- Necesitamos saber la edad promedio en años humanos de los canes de la lista
  
  const edadPromedio = canes.reduce((promedio, cane) => {
    return promedio + cane.edad;
  }, 0) / canes.length;
  console.log(edadPromedio);

  /*5.- Necesitamos una nueva lista con todos los objetos de los canes, pero cambiando 
  el valor de la propiedad "vacunado" a "si || no" ( si el valor viene en true,
     cambiarlo a "Si", si el valor viene en false, cambiarlo a "No")*/

     const canesVacunadosSiNo = canes.map((cane) => {
        return {
          ...cane,
          vacunado: cane.vacunado ? "Si" : "No",
        };
      });
      console.log(canesVacunadosSiNo)

    

    //  6.- Necesitamos una nueva lista con únicamente el nombre de cada can
    const nombresCanes = canes.map((cane) => cane.nombre);
    console.log(nombresCanes);