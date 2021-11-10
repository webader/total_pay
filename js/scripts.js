$(document).ready(function(){

    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        navText: [ '', ' ' ],

        responsive:{
            0:{
                items:3
            },

            1000:{
                items:3
            }
        }
    });

    $( function() {
        $( "#dialog" ).dialog({
            autoOpen: false,
            show: {
                effect: "blind",
                duration: 1000
            },
            hide: {
                effect: "explode",
                duration: 1000
            }
        });

        $( "#opener" ).on( "click", function() {
            $( "#dialog" ).dialog( "open" );
            $('.ui-dialog .ui-corner-all .ui-widget .ui-widget-content .ui-front .ui-draggable .ui-resizable').css({
                'width':'550px',
                'font-size':'16px'
            });
        });
    } );

});