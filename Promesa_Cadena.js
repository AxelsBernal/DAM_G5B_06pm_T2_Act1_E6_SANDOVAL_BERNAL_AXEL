// 1. Creación de una promesa básica
const promesaBasica = new Promise((resolve, reject) => {
    const exito = true;
    if (exito) {
      resolve("Promesa básica completada");
    } else {
      reject("Promesa básica fallida");
    }
  });
  
  // 2. Uso de `.then()` para manejar el resultado de la promesa
  promesaBasica
    .then((resultado) => {
      console.log(resultado); // "Promesa básica completada"
  
      //  Retornamos otra promesa en el primer `.then()` para encadenar más promesas
      return new Promise((resolve, reject) => {
        setTimeout(() => resolve("Paso 1 completado (después de 1 segundo)"), 1000);
      });
    })
    .then((resultadoPaso1) => {
      console.log(resultadoPaso1); // "Paso 1 completado (después de 1 segundo)"
  
      // Retornamos una tercera promesa en el segundo `.then()`
      return new Promise((resolve, reject) => {
        setTimeout(() => resolve("Paso 2 completado (después de 2 segundos)"), 2000);
      });
    })
    .then((resultadoPaso2) => {
      console.log(resultadoPaso2); // "Paso 2 completado (después de 2 segundos)"
  
      //  Retornamos un valor directo, que se convierte en una promesa resuelta automáticamente
      return "Fin de la cadena de promesas";
    })
    .then((resultadoFinal) => {
      console.log(resultadoFinal); // "Fin de la cadena de promesas"
    })
    .catch((error) => {

      // 6. Manejo de errores con `.catch()`
      console.error("Ocurrió un error:", error);
    });
  
  // 7. Ejemplo de propagación de errores en una cadena de promesas
  const promesaConError = new Promise((resolve, reject) => {
    setTimeout(() => reject("Error en la promesa con error"), 1500);
  });
  
  promesaConError
    .then((resultado) => {
      console.log(resultado);
    })
    .then((resultado2) => {
      console.log(resultado2);
    })
    .catch((error) => {
      console.error("Ocurrió un error en la segunda cadena de promesas:", error); // Captura el error aquí
    });
  

    const promesaConError = new Promise((resolve, reject) => {
        setTimeout(() => reject("Error en la promesa"), 1000);
      });
      
      promesaConError
        .then((resultado) => {
          console.log(resultado);
        })
        .then((resultado2) => {
          console.log(resultado2);
        })
        .catch((error) => {
          console.error("Ocurrió un error:", error); // Captura el error aquí
        });


        const promesaCadena = new Promise((resolve) => {
            resolve("Iniciado");
          });
          
          promesaCadena
            .then((resultado) => {
              console.log(resultado); // "Iniciado"
              return "Siguiente paso";
            })
            .then((resultado2) => {
              console.log(resultado2); // "Siguiente paso"
            });
          
      
