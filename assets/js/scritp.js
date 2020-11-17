$(function () {

    
    //tooltip 
    $('[data-toggle="tooltip"]').tooltip()


    //smooth scrolling (navbar)
    $("a").click(function (event) {
        if (this.hash !== "") {
            event.preventDefault();

            var gato = this.hash;

            $("html, body").animate({
                scrollTop: $(gato).offset().top
            }, 800, function () {
                window.location.hash = gato;
            });
        }
    });

    
    $('.title').on("click",(function (){
        $('.card-text').toggle();
    }))


      //cambiar letras a color rojo
      $(document).ready(function () {
        $("#contacto").dblclick(function () {
            $(this).css("color", "magenta");
        });
    });

    //modal
    $('#myModal').on('shown.bs.modal', function () {
        $('#myInput').trigger('focus')
      })

});