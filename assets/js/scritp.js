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


    //modal
    $('#myModal').on('shown.bs.modal', function () {
        $('#myInput').trigger('focus')
      })

});