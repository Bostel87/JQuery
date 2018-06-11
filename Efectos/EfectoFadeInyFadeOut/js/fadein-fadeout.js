$(document).ready(function(){
  //Evento Click que le asignamos al boton
  $("button").click(function(){
    //Evento fade in asignado dentro del click
    //4000 son los milisegundos del efecto
    $("div").fadeIn(4000, function(){
      $("label").fadeIn(1000);
      $("p").fadeOut(10);
    });
    return false;
  });
});
