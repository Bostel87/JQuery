$(document).ready(function(){
  var base_datos = "<xml version='1.0'><persona> <nombres>Pedro</nombres> <apellidos>Perez</apellidos> </personas></xml>";

  var $xml = $(base_datos);

  var $nombres = $xml.find('nombres');
  var $apellidos = $xml.find('apellidos');

  $("#nombre").html($nombres);
  $("#apellido").html($apellidos);



});
