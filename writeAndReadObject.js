function writeAndReadFunc(objeto_recibido) {

const fs = require("fs/promises");

// CON THEN/CATCH
let data = JSON.stringify(objeto_recibido);

fs.writeFile("lecturaindex.json", data)
.then (() => {
    console.log("Archivo creado correctamente");
})
.then (() => {
    return fs.readFile("lecturaindex.json", "utf-8");
})
.then ((data) => {
    console.log(JSON.parse(data));
})

.catch ((error) => {
    console.log(error);
})
}

module.exports = {writeAndReadFunc}