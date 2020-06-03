import express from 'express';

const app = express();

app.get('/users', (request, response) => {
    console.log('Listagem de usuários');

    response.json([
        'Gabriel',
        'Pereira',
        'Ribeiro',
        'Gabriel'
    ]);
});

app.listen(3333);