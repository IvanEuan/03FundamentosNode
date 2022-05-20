const argv = require('yargs')
                .options({ 
                    'b': {
                        alias: 'base',
                        type: 'number',
                        demandOption: true,
                        describe: 'Específica la base de la multiplicación'
                    },
                    'l': {
                        alias: 'list',
                        type: 'boolean',
                        default: false,
                        describe: 'Específica si se muestra el resultado de la multiplicación'
                    },
                    't' : {
                        alias: 'to',
                        type: 'number',
                        demandOption: true,
                        describe: 'Específica el límite de la multiplicación'
                    }
                })
                .check((argv, options) => {
                    if (isNaN(argv.b)) {
                        throw 'La base no es un número';
                    }
                    if (isNaN(argv.t)) {
                        throw 'El límite no es un número';
                    }
                    return true;
                })
                .argv;

module.exports = argv;