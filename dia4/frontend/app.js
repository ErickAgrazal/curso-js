(function(){
  var App = {
    config: {
      urls: {
        base: 'http://localhost:3000/notas'
      }
    },
    htmls: {
      notas: document.getElementById('notas'),
      formulario: document.getElementById('formulario'),
      nombre: document.getElementById('nombre'),
      valor: document.getElementById('valor')
    },
    init: function(){
      App.initTable();
      App.bindEvents();
    },
    initTable: function(){
      fetch(App.config.urls.base)
        .then(App.events.onInitTableSuccess)
        .catch(App.events.onInitTableError);
    },
    bindEvents: function(){
      App.htmls.formulario.addEventListener('submit', App.events.onFormularioSubmit);
    },
    events: {
      onInitTableSuccess: function(resp){
        resp.json()
          .then(App.events.onJsonParsingSuccess)
          .catch(App.events.onJsonParsingErorr);
      },
      onInitTableError: function(error){
        console.log('Error: ', error);
      },
      onJsonParsingSuccess: function(response){
        let table = '';
        response.data.forEach(function(v, i){
          table += `
            <tr>
              <td>${v.nombre}</td>
              <td>${v.valor}</td>
            </tr>
          `
        });
        App.htmls.notas.innerHTML = table;
      },
      onJsonParsingError: function(error){
        console.log('Error: ', error);
      },
      onFormularioSubmit: async function(e){
        e.preventDefault();
        var body = JSON.stringify({
          nombre: App.htmls.nombre.value,
          valor: App.htmls.valor.value,
        })
        const response = await fetch(App.config.urls.base, { 
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body,
        });
        const data = await response.json();
        console.log(data);
        App.initTable();
      },
    }
  };
  App.init();
})()