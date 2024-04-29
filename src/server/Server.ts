import express from 'express';

const server = express();

server.get('/', (req, res) => {
    return res.status(200).send('Olá, DEV!');
})

export { server };