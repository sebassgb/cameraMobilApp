var app={
  inicio: function(){
    this.initButtons();
    this.initFastClick();
    this.initHammer();
  },

  initFastClick: function(){
    FastClick.attach(document.body);
  },

  initButtons: function(){
    var buttonClaire = document.querySelector('#claire');
    var buttonFonce = document.querySelector('#fonce');

    buttonClaire.addEventListener('click',this.setLight,false);
    buttonFonce.addEventListener('click',this.setDark,false);
    },

    initHammer: function(){
      var zone = document.getElementById('gesture-zone');//zone le llevamos sobre la zona que queremos que actúe
      var hammertime = new Hammer(zone);//Iniciamos Hammer sobre ese elemento

      hammertime.get('pinch').set({enable: true});//Por defecto están desactivados
      hammertime.get('rotate').set({enable: true});//Por defecto están desactivados

      zone.addEventListener('webkitAnimationEnd',function(e){
        zone.className='';//Debemos eliminar la clase detectando el evento para que aparezca al volver a pulsar
      });

      hammertime.on('tap',function(ev){
        zone.className='tap';
      });

      hammertime.on('doubletap',function(ev){
        zone.className='doubletap';
      });

      hammertime.on('press', function(ev){
        zone.className='press';
      });

      hammertime.on('swipe', function(ev){
        var clase=undefined
       directions=ev.direction;//Detectamos direccion izquierda=2, derecha=4

        if(directions==4) clase='swiperigth';
        if(directions==2) clase='swipeleft';

        zone.className=clase;
      });

      hammertime.on('rotate', function(ev){
        var treshold=25;
        if(ev.distance > treshold) zone.className='rotate';
      });

      hammertime.on('tap double tap swipe press pinch rotate', function(ev){
        document.querySelector('#infor').innerHTML= ev.type+ '!';//InnerHTML texto que hay dentro, ev representa evento
      });
    },

  setLight: function(){
    document.body.className = 'claire';//className es el class del estilo
  },

  setDark: function(){
    document.body.className = 'fonce';
  },

};

if('addEventListener' in document){
    document.addEventListener('DOMContentLoaded', function(){//DOMContentLoaded: Todos los documentos js,css y html estan cargados en el contenido
      FastClick.attach(document.body);
      app.inicio();
    }, false);
}
