$(document).ready(function(){
  $("body").delegate("p","click",function(){
    $("#parafo_nuevo").append("Este parrafo es nuevo y tiene el mismo evento");
  });
});
