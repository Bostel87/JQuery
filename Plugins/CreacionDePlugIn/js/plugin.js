//plugin perzonalizado
jQuery.fn.plugIn_hide = function(){
  this.each(function(){
    elemento = $(this);
    elemento.hide(1000);
  });
};
$(document).ready(function(){
  $("#eliminar").click(function(){
    $("#parrafo").plugIn_hide();
  })
})
