(() => {

  // Lista de emails de usuarios de Meta-X
  const listaEmails: string[] = [
    "email1@gmail.com", 
    "email2@gmail.com", 
    "email3@gmail.com"
  ];

  console.log(listaEmails);

  // Lista de compras de un carrito
  const listaCompras: { product: string }[] = [
    { product: "switch" },
    { product: "X-box Controller" },
    { product: "steam-gift-card" },
  ];

  console.log(listaCompras);
  
  // Función para sumar 3 a un número y retornarlo
  const sumarTres = (num: number): number => {
    return num + 3;
  }

  console.log(sumarTres(2));
  
  // Función para capitalizar una palabra pasada por parámetro
  const capitalizar = (palabra: string): string => {
    return palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase();
  }

  console.log(capitalizar("capricorn"));
  
  // Variable que indica si algún evento sucede
  let evento: boolean = false;

  if(evento) console.log('event');
  
  // Variable que indica si un usuario puede acceder o no
  let usuarioAcceso: boolean = true;

  if(usuarioAcceso) console.log('welcome');
  
  // Variable para hallar el promedio de 3 números
  const promedio: number = (1 + 2 + 3) / 3;

  console.log(promedio);
  
  // Variable que almacena el valor de PI
  let pi: number = 3.141592654;

  console.log(pi);
  
  // Variable que controla si un archivo es modificable 
  let archivoModificable: boolean = false;

  if(archivoModificable) console.log('¿Editar este archivo?');
  
  // Variable para almacenar el valor de e
  const euler: number = 2.718281828; 
  console.log(euler); // Se asegura de que la variable se utilice
  
})();
