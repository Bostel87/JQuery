$(document).ready(function(){
  //Evento para obtener las coordenadas del mouse
  $(document).mousemove(function(){
    $("#parrafo").text("La posicion del mouse X es: "+ event.pageX+", Y: "+event.pageY);
  });
  //Metodo para deshabilitar el click
  $("#enlace").click(function(){
    event.preventDefault();
  });
});
