$(document).ready(function(){
  //funcion para esconder el parrafo
  $("#hide").click(function(){
    $("#parrafo").hide();
  });
  $("#show").click(function(){
    //Funcion para motrar el parrafo con efecto de tiempo
    $("#parrafo").show(5000, function(){
      alert("El Parrafo ya no esta oculto");
    });
  });
  $("#animate").click(function(){
    // funcion para mover el div
    $("#caja").animate({"left":"+=50px", "width":"+=5px"});
  });
  $("#start").click(function(){
    //funcion para aumentar el div de ancho
    $("#caja2").animate({"width":"2000px"}, 10000);
  });
  $("#stop").click(function(){
    //funcion para detener el aumento del div en anchura
    $("#caja2").stop();
  });
});
