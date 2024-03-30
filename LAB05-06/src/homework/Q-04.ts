(() => {

  /* APLICA DRY (Don't Repeat Yourself) 
  Esto implica reutilizar código en lugar de repetirlo. Las funciones genéricas como calculateOperation son un buen ejemplo de esto. */

  // Función genérica para realizar operaciones de suma y multiplicación
  function calculateOperation(a: number, b: number, c: number): number {
    let sumResult = a + b;
    let multiplicationResult = sumResult * c;
    return multiplicationResult;
  }

  // Ejemplo de uso de calculateOperation
  let result1 = calculateOperation(2, 3, 4);
  console.log("Resultado de calculateOperation:", result1);

  // EX - 2
  function calculateRectangleArea(length: number, width: number): number {
    return length * width;
  }

  function calculateCircleArea(radius: number): number {
    return Math.PI * radius * radius;
  }

  // Ejemplos de uso de las funciones calculateRectangleArea y calculateCircleArea
  let rectangleArea = calculateRectangleArea(5, 10);
  console.log("Área del rectángulo:", rectangleArea);

  let circleArea = calculateCircleArea(3);
  console.log("Área del círculo:", circleArea);

  // EX - 3
  // No es necesario aumentar código en este ejercicio

  // Aquí deberías implementar la lógica real de validación de email
  function validateEmail(email: string): boolean {
    // Por ejemplo:
    // return /^\S+@\S+\.\S+$/.test(email);
    return false; // Devuelve siempre falso en este momento
  }

  // Aquí deberías implementar la lógica real de validación de username
  function validateUsername(username: string): boolean {
    // Por ejemplo:
    // return /^[a-zA-Z0-9_]{3,16}$/.test(username);
    return false; // Devuelve siempre falso en este momento
  }

  // Ejemplos de uso de las funciones validateEmail y validateUsername
  let isValidEmail = validateEmail("example@example.com");
  console.log("¿Es un correo electrónico válido?", isValidEmail);

  let isValidUsername = validateUsername("username123");
  console.log("¿Es un nombre de usuario válido?", isValidUsername);

})();
