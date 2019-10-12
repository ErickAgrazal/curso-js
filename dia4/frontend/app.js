(function(){
  var App = {
    init: function(){
      console.log(fetch('http://localhost:3000/notas'));
    }
  };
  App.init();
})()