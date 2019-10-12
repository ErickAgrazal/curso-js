const express = require('express');
const app = express()

const PORT = 3000;

app.use(express.json());

let notas = [
  {
    nombre: 'Parcial #1',
    valor: 100,
  },
  {
    nombre: 'Parcial #2',
    valor: 100,
  },
];

app.get('/notas', (req, res) => {
  let average = 0;
  notas.forEach((v, i) => {
    average += v.valor;
    notas[i] = {...v, id: i};
  });
  const response = {
    data: notas,
    count: notas.length,
    average: average / notas.length,
  };
  res.json(response);
});

app.get('/notas/:id', (req, res) => {

});

app.listen(PORT, function(){
  console.log(`Ejecutando en el puerto: 3000`);
})