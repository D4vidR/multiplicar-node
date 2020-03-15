
const fs = require('fs');
const colors = require('colors');

let listarTabla = (base, limite = 10) => {
    if (!Number(base) || !Number(limite)) {
        console.log('Los dos parametros deben ser numericos.');
        return;
    }

    console.log('=================================='.red);
    console.log(`============TABLA DE ${base}===========`.red);
    console.log('=================================='.red);

    for (let i = 1; i <= limite; i++) {
        console.log(`${base} * ${i} = ${base * i}\n`);
    }

};

let crearArchivo = (base, limite = 10) => {

    return new Promise((resolve, reject) => {
        
        if (!Number(base) || !Number(limite)) {
            reject(`Los valores ${base} y ${limite} deben ser numericos.`);
            return;
        }
        
        let data = '';
        
        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${ i } = ${ base * i }\n`;
        }
        
        fs.writeFile(`tablas/tabla${base}-hasta-${limite}.txt`, data, (err) => {
            if (err) {
                reject(err);
            } else {
                resolve(`tabla${ base }-hasta${limite}.txt`);
            }
        });
    });

};

module.exports = {
    crearArchivo,
    listarTabla
}

