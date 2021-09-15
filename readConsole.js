const { writeAndReadFunc } = require("./writeAndReadObject");

function readConsole(objinicial) {

const readline = require("readline")

    const question = new Promise((resolve, reject) => {
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
            });


        rl.question("¿Cual es tu nombre?: ", (respuesta1) => {
            resolve(respuesta1);
            objinicial.name = respuesta1;
            rl.question(`Vale ${respuesta1}, ahora dime tu apellido: `, (respuesta2) => {
                resolve(respuesta2);
                objinicial.surname = respuesta2;
                rl.question(`¿Cuántos años tienes ${respuesta1} ${respuesta2}?: `, (respuesta3) => {
                    resolve(respuesta3);
                    objinicial.age = parseFloat(respuesta3);
                    rl.close();
                    writeAndReadFunc(objinicial);
                })
            })            
        })
    });
    return question;
}


module.exports = {readConsole}