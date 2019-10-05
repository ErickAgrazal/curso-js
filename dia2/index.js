// Control de flujo

/**
 * If
 */
(function(){
  const a = 3;
  if(a === 10){
    console.log('La A vale: ', a);
  } else if (a === 15) {
    console.log('Estas superdotado');
  } else {
    console.log('Eres muy pequeño');
  }
})();

/**
 * Switch
 */
(function(){
  const a = 5;
  switch(a){
    case 5:
      console.log('Excelente Nota');
      break;
    case 4:
      console.log('Buena nota');
      break;
    default:
      console.log('Saliste mal, perrón.');
  }
})();

/**
 * Throw
 */
(function(){
  // throw 10;
  // throw "Este programa no funcionó.";
  // throw { toString: function(){ return 'Soy tu padre.' } };
  function UserException(aviso, contexto){
    this.aviso = aviso;
    this.nombre = "UserException";
    this.fecha = new Date();
    this.contexto = contexto;
  }
  UserException.prototype.toString = function () {
    const { aviso, nombre, fecha, contexto } = this;
    return `${nombre} (${fecha}): ${aviso}\n${JSON.stringify(contexto)}`;
    // return this.nombre + ': "' + this.aviso + '"';
  }
  try {
    const contexto = {
      nombre: 'Erick',
      apellido: 'Agrazal',
      edad: 28,
    }
    throw new UserException('Este es un ejemplo de excepción', contexto);
  } catch (error) {
    console.log(error.toString());
  }
})();


/**
 * While
 */
(function(){
  const arr = [1, 2, 3, 4];
  let i = 0;
  while(i < arr.length){
    console.log(arr[i]);
    i += 1;
  }
})();

/**
 * For
 */
const API_URL = 'https://jsonplaceholder.typicode.com/posts';
(async function(apiUrl){
  // fetch(apiUrl).then(function(resp){
  //                 resp.json().then(function(r){
  //                   console.log(r)
  //                 });
  //               });
  const resp = await fetch(apiUrl);
  const data = await resp.json();
  console.log(data);
})(API_URL);