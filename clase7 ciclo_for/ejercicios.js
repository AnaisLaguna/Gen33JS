

   const users = [
    {
      name: "Alice",
      lastname: "Johnson",
      age: 28,
      gender: "Female",
      country: "USA",
    },
    {
      name: "Bob",
      lastname: "Smith",
      age: 32,
      gender: "Male",
      country: "Canada",
    },
    {
      name: "Carlos",
      lastname: "Gomez",
      age: 24,
      gender: "Male",
      country: "Mexico",
    },
    {
      name: "Daniela",
      lastname: "Martinez",
      age: 30,
      gender: "Female",
      country: "Colombia",
    },
    {
      name: "Erik",
      lastname: "Svensson",
      age: 29,
      gender: "Male",
      country: "Sweden",
    },
    {
      name: "Fiona",
      lastname: "O'Donnell",
      age: 35,
      gender: "Female",
      country: "Ireland",
    },
    {
      name: "Gautam",
      lastname: "Patel",
      age: 27,
      gender: "Male",
      country: "India",
    },
    {
      name: "Hana",
      lastname: "Kim",
      age: 22,
      gender: "Female",
      country: "South Korea",
    },
    {
      name: "Ivan",
      lastname: "Petrov",
      age: 34,
      gender: "Male",
      country: "Russia",
    },
    {
      name: "Julia",
      lastname: "Santos",
      age: 25,
      gender: "Female",
      country: "Brazil",
    },
  ];


//1: Necesitamos una lista con unicamente los nombres completos de cada usaurio

for (let i = 0; i < users.length; i++) {
    const nombreompleto = (console.log(users[i].name + " " + users[i].lastname));
}

//2:Necesitamos una lista con unicamente aquellos usuarios con genero "Male"

const usuariosMale= [];
for (let i = 0; i < users.length; i++) {
  if (users[i].gender === 'Male') {
    usuariosMale.push(users[i].name);
  }
}
console.log("Los usuarios con el parametro Male son: ", (usuariosMale));

//3: Necesitamos una lista con unicamente aquellos usuarios con genero "Female"

const usuariosFem= [];
for (let i = 0; i < users.length; i++) {
  if (users[i].gender === 'Female') {
    usuariosFem.push(users[i].name);
  }
}
console.log("Los usuarios con el parametro Female son: ", (usuariosFem));

// 4: Necesitamos saber la edad promedio de los usuarios

let totalEdad = 0;
for (let i = 0; i < users.length; i++) {
    totalEdad += users[i].age;
}

const promedioEdad = totalEdad / users.length;
console.log("La edad promedio de los usuarios es:", (promedioEdad));

//5: Necesitamos saber la mayor edad

let mayorEdad = users[0].age;
let usuarioGrande = users[0];
for (let i = 1; i < users.length; i++) {
  if (users[i].age > mayorEdad) {
    mayorEdad = users[i].age;
    usuarioGrande = users[i];
  }
}
console.log("El usuario con mayor edad es" , (usuarioGrande));

//6: Necesitamos saber la menor edad
let menorEdad = users[0].age;
let usuarioChico = users[0];
for (let i = 1; i < users.length; i++) {
  if (users[i].age > menorEdad) {
    menorEdad = users[i].age;
    usuarioChico = users[i];
  }
}
console.log("El usuario con menor edad es" , (usuarioChico));