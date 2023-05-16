const { crearArchivo } = require('./helpers/asyncMultiplicar')
const argv = require('./config/yargs')

console.clear() // Sirve para borrar la consola de la impresión previa

console.log(process.argv);
console.log( argv );

console.log('base: yargs', argv.base);

crearArchivo( argv.b, argv.l, argv.h )
    .then( nombreArchivo => console.log(nombreArchivo.yellow.bold, 'creado'.yellow.bold) )
    .catch( err => console.log( err ) )
