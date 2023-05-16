const fs = require('fs') // Escomo se hace la importación del paquete de FileSystem

const crearArchivo = ( div ) => {

    return new Promise(( resolve, reject ) => {

        let salida = '';
    
        for(let i=1; i<=10; i++){
            salida += `${div} x ${i} = ${div*i}\n`;
        }
    
        console.log(salida);
    
        fs.writeFileSync(`tabla-${div}.txt`, salida); // fs.writeFile es el método para crear/escribir o sobre-escribir un archivo
    
        (salida)
            ? resolve (`tabla-${div}.txt`)
            : reject (`Hubo un problema al crear el archivo.`)
    });

    
}

module.exports = {
    crearArchivo
}