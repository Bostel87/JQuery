$(document).ready(function(){

  $("#b_click").click(function(){
    $("#p_click").append("Texto Nuevo. ");
  });

  $("#b_mouseenter").mouseenter(function(){
    alert("Has Pasado el Mouse por el Boton")
  });

  $("#b_mouseleave").mouseleave(function(){
    alert("El mouse dejo de estar sobre el boton")
  });

  $("#t_focus").focus(function(){
    $(this).css("backgroundColor", "red");
  });

  $("#t_focus").blur(function(){
    $(this).css("backgroundColor", "yellow");
  });

  $("#b_dblclick").dblclick(function(){
    $("#p_dblclick").append("Texto Nuevo. ");
  });
});
