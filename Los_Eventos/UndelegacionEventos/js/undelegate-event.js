$(document).ready(function(){
  $("body").delegate("p","click",function(){
    $("#parrafo_nuevo").append("Este parrafo nuevo con mismo evento");
  });
  $("#undelegate").click(function(){
    $("body").undelegate();
  });
});
