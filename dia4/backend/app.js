const express = require('express');
const app = express()
const cors = require('cors')

const PORT = 3000;

app.use(express.json());
app.use(cors());

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
  const { id } = req.params;
  res.json(notas[id] ? notas[id] : {});
});

app.post('/notas', (req, res) => {
  const { nombre, valor } = req.body;
  if(nombre && valor){
    notas = [...notas, { nombre, valor }];
  }
  res.json({ nombre, valor });
});

app.delete('/notas/:id', (req, res) => {
  const { id } = req.params;
  notas.splice(id, 1);
  res.json({});
});

app.put('/notas/:id', (req, res) => {
  const { id } = req.params;
  const { nombre, valor } = req.body;
  if(notas[id] && nombre && valor){
    notas[id] = { nombre, valor };
  }
  res.json(nombre && valor ? { nombre, valor } : { } ); 
});

app.listen(PORT, function(){
  console.log(`Ejecutando en el puerto: 3000`);
});