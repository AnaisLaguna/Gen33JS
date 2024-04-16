/*1.- Necesitamos poder entregar las iniciales del nombre de una persona, considerando 
    únicamente primer nombre, apellido paterno y apellido materno
    input => Israel Salinas Martínez
    output => I. S. M.*/

    const nombres = ['Juan Pedro Carlos Pérez', 'María Eugenia José González', 
    'José Luis Rodríguez Perez', 'Anais Lourdes Laguna Torres', 'Juan Jose Perez Castilla'];

    const iniciales = nombres.map(nombre => {
      const partes = nombre.split(' ');
      return `${partes[0][0]}. ${partes[partes.length - 2][0]}. ${partes[ partes.length - 1][0]}.`;
    });
    
    console.log(iniciales);

    /*2.- Necesitamos una ruleta de nombres, es decir, de una lista de nombres, debemos poder obtener algún 
    nombre al azar. El nombre seleccionado debe ser eliminado de la lista original para poder volver
     a usar la ruleta.
    Cuando ya no haya nombres, debe avisar que ya no hay nombres en la lista.*/

/*=> funcion que usamos para que tome el arrayde los nombres y los vea como argumentoy si ya no hay nombres
 me regresa el mensaje*/
/*Seleccionamos el nombre aleatorio con el rango con los metodos math.flor de los nombres luego selecciona 
el index y lo elimina*/
      
    function ruleta(names) {
        if (names.length === 0) {
          return "Ya no hay mas nombres en la lista";
        }
      
        const indexVariado = Math.floor(Math.random() * names.length);
        const name = names[indexVariado];
        names.splice(indexVariado, 1);
        console.log(name);
        return name;
      }
      
      const names = ["Juan", "Jennifer", "Miguel", "Juana", "Jordana", "Maria"];
      ruleta(names); 
      console.log(names); 
      
