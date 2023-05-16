const argv= require('yargs')
                        .option('b', {
                            alias: 'base',
                            type: 'number',
                            demandOption: true,
                            describe: 'Es la base de la tabla de multiplicar'
                        })
                        .option('l', {
                            alias: 'listar',
                            type: 'boolean',
                            default: false,
                            description: 'Muestra la tabla en consola'
                        })
                        .option('h', {
                            alias: 'hasta',
                            type: 'number',
                            default: 10,
                            description: 'Es la cantidad de veces que seultiplicará la base'
                        })
                        .check((argv, options) => {
                            if( isNaN(argv.b)){
                                throw 'La base tiene que ser un número'
                            } else if(argv.b < 1){
                                throw 'El "hasta" debe ser mayor a 0'
                            }
                            return true;
                        })
                        .argv;


module.exports = argv;