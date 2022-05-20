const { writeFileSync } = require('fs');
const colors = require('colors');

const multiplication = async (baseNumber, listMultiplication, limitTo) => {
    try{
        let output = '';
        let consoleOutput = '';
        let fileName = `tabla-${ baseNumber }.txt`;

        for (let i = 1; i <= limitTo; i++) {
            consoleOutput += `${baseNumber} ${ 'x'.green } ${i} ${ '='.green } ${baseNumber * i}\n`;
            output += `${baseNumber} x ${i} = ${baseNumber * i}\n`;
        }

        if (listMultiplication) {
            console.log('==============='.green);
            console.log(' Tabla del:'.green, colors.magenta(baseNumber));
            console.log('==============='.green);
            console.log(consoleOutput);
        }

        writeFileSync(`./files/${fileName}`, output);
        return `Archivo creado exitosamente: ${fileName}`.magenta;
    }
    catch (error){
        throw error;
    }
}

module.exports = {
    multiplication
}