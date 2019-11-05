  $( document ).ready(function() {

    $(".b_suma" ).click(function() {
      var valor=parseInt($(".b_cantidad").val());
      var valor=valor+1;

      $(".b_cantidad").val(valor);
  });

    $(".b_resultado" ).click(function() {
      var valor=parseInt($(".b_cantidad").val());
      var resultado=valor*695;
      $(".total").val(resultado);
  });


});
