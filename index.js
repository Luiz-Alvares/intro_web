const express = require('express');

const app = express();

app.get('/', (request, response) => {
        response.send('ok');
    });

app.listen(3000);

//METODOS HTTP
//POST - criar - Creat
//GET - buscar, trazer - Read
//PUT - atualizar - Update
//DELETE - deletar, remover - Delete

const usuarios = [{
    nome:'Luiz',
    idade: 31,
}];



app.get('/usuarios', (request, response) => {
    response.json(usuarios);
});

app.get('/usuarios', (request, response) => {
    const usuariosNovo = usuarios.push
    response.json(usuarios);
});
