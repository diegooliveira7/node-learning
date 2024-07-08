//Manipular o sistema de arquivos

const { error } = require('console');
const fs = require('fs');
const path = require('path');
//para criar arquivos
// fs.mkdir(path.join(__dirname, '/test'), (error) => {
//     if (error) {
//         return console.log('Erro', error);
//     }

//     console.log("Pasta criada com sucesso")
// })

//criação de arquivos
// fs.writeFile(path.join(__dirname, "/test", "test.txt"), "helo", (error)=> {
//     if (error) {
//         return console.log("Erro: ", error);
//     }

//     console.log("Arquivo criado com sucesso");
// });

//leitura de arquivos
// fs.readFile(path.join(__dirname, "/test", "test.txt"), "utf8", (error, data) => {
//     if(error) {
//         return console.log("Erro: ", error);
//     }
//     console.log(data);
// });