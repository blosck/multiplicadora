const fs = require('fs') // Es como se hace la importación del paquete de FileSystem
const colors = require('colors');

const crearArchivo = async( div, listar = false, hasta = 10 ) => {

        try {            
            let salida = '';
            let consola = '';
        
            for(let i=1; i<=hasta; i++){
                salida += `${div} x ${i} = ${div*i}\n`;
                consola += `${div} ${'x'.red} ${i} ${'='.red} ${div*i}\n`;
            }

            if(listar){
                console.log(consola);
            }
        
            fs.writeFileSync(`./salida/tabla-${div}.txt`, salida); // fs.writeFile es el método para crear/escribir o sobre-escribir un archivo
        
            return`tabla-${div}.txt` // En las async functions, dentro del try, en luegar del return, se usa el resolvem que tiene un return implicito.
        } catch (error) {
            throw err
        }    
}

module.exports = {
    crearArchivo
}