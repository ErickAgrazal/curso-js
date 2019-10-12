const express = require('express');
const app = express()

const PORT = 3000;

let estudiantes = [
  {
    id: 0,
    nombre: 'Erick Agrazal',
    edad: '28',
    profesion: 'Programador'
  },
  {
    id: 1,
    nombre: 'Rafael Medina',
    edad: '23',
    profesion: 'Programador'
  }
];

app.use(express.json());

app.get('/estudiantes', function (req, res) {
  const response = {
    data: estudiantes,
    count: estudiantes.length,
  };
  res.json(response);
});

app.get('/estudiantes/:id', function(req, res){
  res.json(estudiantes[req.params.id]);
});

app.post('/estudiantes', function(req, res){
  const nuevoEstudiante = { id: estudiantes.length, ...req.body };
  estudiantes.push(nuevoEstudiante)
  res.json(nuevoEstudiante);
});

app.delete('/estudiantes/:id', function(req, res){
  const { id } = req.params;
  // for(estudiante of estudiantes){
  //   if(estudiante.id == id){
  //     delete estudiantes[id];
  //     break;
  //   }
  // }
  estudiantes.splice(id, 1);
  res.json({});
});

app.put('/estudiantes/:id', function(req, res){
  // Forma #1
  // estudiantes = estudiantes.map(function(v, i) {
  //   if(v.id === req.params.id){ return req.body }
  //   return v;
  // });
  // Forma #2
  // estudiantes = estudiantes.map((v, i) => {
  //   if(v.id == req.params.id){
  //     return {id: v.id, ...req.body};
  //   }
  //   else {
  //     return v;
  //   }
  // });
  // Forma #3
  estudiantes = estudiantes.map((v, i) => v.id == req.params.id ? {id: v.id, ...req.body} : v);
  console.log('Estudiantes: ', estudiantes)
  res.json(req.body);
})
 
app.listen(PORT, function(){
  console.log(`Ejecutando en el puerto: 3000`);
})