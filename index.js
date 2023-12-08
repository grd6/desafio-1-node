// index.js: Archivo principal que deberá ser ejecutado para interactuar con la
// aplicación. En este archivo se deberán importar las operaciones que creen y lean las
// citas de atención en la veterinaria.
const { registrar, leer } = require("./operaciones");
const [funcion, nombre, edad, animal, color, enfermedad] =
  process.argv.slice(2);

if (funcion === "registrar") {
  registrar(nombre, edad, animal, color, enfermedad);
}
if (funcion === "leer") {
  leer();
}
