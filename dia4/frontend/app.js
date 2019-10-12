(function(){
  var App = {
    config: {
      urls: {
        base: 'http://localhost:3000/notas'
      }
    },
    init: function(){
      App.initTable();
    },
    initTable: function(){
      fetch(App.config.urls.base)
        .then(App.events.onInitTableSuccess)
        .catch(App.events.onInitTableError);
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
      onJsonParsingSuccess: function(data){
        console.log(data);
      },
      onJsonParsingError: function(error){
        console.log('Error: ', error);
      }
    }
  };
  App.init();
})()