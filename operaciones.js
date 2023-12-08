// operaciones.js: En este archivo se deberán crear 2 funciones para:
// ○ Registrar: Agregar una nueva cita de una atención veterinaria que debe incluir:
// ■ Nombre del animal
// ■ Edad
// ■ Tipo de animal
// ■ Color del animal
// ■ Enfermedad
// ○ Leer: Mostrar por consola todas las citas registradas.
const fs = require("fs");
const crypto = require("crypto");

const registrar = (nombre, edad, animal, color, enfermedad) => {
  const citas = JSON.parse(fs.readFileSync("citas.json", "utf-8"));
  id = crypto.randomBytes(8).toString("hex");
  citas.push({ id, nombre, edad, animal, color, enfermedad });
  fs.writeFileSync("citas.json", JSON.stringify(citas));
};

const leer = () => {
  const citas = JSON.parse(fs.readFileSync("citas.json", "utf-8"));
  console.log(citas);
};

module.exports = { registrar, leer };
