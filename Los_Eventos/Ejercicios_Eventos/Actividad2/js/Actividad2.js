$(document).ready(function(){
  $("#txtNom, #txtApe").focus(function(){
    $(this).css("backgroundColor","blue")
  });
  $("#txtNom, #txtApe").blur(function(){
    $(this).css("backgroundColor","white")
  });
});
