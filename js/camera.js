var app ={
  init: function(){
    this.initFastClick();
    this.initButton();
  },

  initFastClick: function(){
    FastClick.attach(document.body);
  },

  initButton: function(){
    var buttonAction = document.querySelector('#button-action');
    buttonAction.addEventListener('click', this.takePicture);
  },

  takePicture: function(){/*Acceder al plugin de la camara de PhoneGap*/
    var options = {
      quality: 50,
      destinationType: Camera.DestinationType.FILE_URI,/*Lugar de almacenamiento de la foto*/
      targetWidth: 300,
      targetMeight: 300,
      correctOrientation: true
    };
    navigator.camera.getPicture(app.photoTaked, app.errorTakenPhoto, options);
  },/*Aqui enviamos 1=Success, 2=Failure* 3=Dictionary with several options*/

  photoTaked: function(imageURI){
    var image= document.querySelector('#photo');
    image.src = imageURI;/*Así ponemos la imagen en pantalla*/
  },

  errorTakenPhoto: function(message){
    console.log('Failure taking photo o cancel operation' + message);
  }
};

if('addEventListener' in document){
  document.addEventListener('DOMContentLoaded', function(){
    app.init();
  },false);
}
