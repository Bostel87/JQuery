$(document).ready(function(){
// Arreglo de tipo String
  var datos = '[{"Marca":"Ford"},{"Marca":"Chevrolet"},{"Marca":"Ferrari"},{"Marca":"Audi"},{"Marca":"Mercedes"}]';
// variable donde se almacenara las marca de los autos
  var cadena = '';
  // Aqui transformamos los datos en tipo JSON
  var base_datos = $.parseJSON(datos);
// Recorremos el JSON ya parseado y se le asigna los valores a la cadena
  $.each(base_datos, function(){
    cadena += "<li>" +this['Marca'] + "<br>";
  });
  $("span").html(cadena);
});
