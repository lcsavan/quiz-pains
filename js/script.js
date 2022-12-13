$(document).ready(function () {

    $('.step').hide();
    $('.step').first().show();

    const indextotal = parseInt($(".step").length);

    function progresso(index) {
        switch (parseInt(index)) {
            case 0:
                $("#barra").last().removeClass().addClass("barra25");
                break;
            case 1:
                $("#barra").last().removeClass().addClass("barra50");
                break;
            case 2:
                $("#barra").last().removeClass().addClass("barra75");
                break;
            case 3:
                $("#barra").last().removeClass().addClass("barra100");
                break;
            default:
                break
        };
    };

    function passoExibido(index) {
        let total = indextotal;

        if (index == 0) {
            $("#prev").last().addClass("btn-visibility");
        } else {
            $("#prev").last().removeClass("btn-visibility");
        }

        $("#passo").html(index + 1);
        $("#passototal").html(total);
    };

    passoExibido(0);
    progresso(0);

    $(".card").click(function () {
        let step = $(this).data("step");

        if (step == 1) {
            $("#step_1 .card").removeClass("card-selected");
        } else if (step == 2) {
            $("#step_2 .card").removeClass("card-selected");
        } else if (step == 3) {
            $("#step_3 .card").removeClass("card-selected");
        } else if (step == 4) {
            $("#step_4 .card").removeClass("card-selected");
        }

        $(this).addClass("card-selected");

        let currentStep = $(".step:visible").index();
        let nextStep = parseInt(currentStep) + 1;

        progresso(nextStep);
        passoExibido(nextStep);

        $(".step:visible").hide().next().show();

        if (parseInt(step) >= indextotal) {
            window.location.href = '../sucess.html'
        }

    });

    $("#prev").click(function () {
        let currentStep = $(".step:visible").index();

        if (currentStep <= 0) {
            return;
        }

        let prevStep = parseInt(currentStep) - 1;

        progresso(prevStep);
        passoExibido(prevStep);

        $(".step:visible").hide().prev().show();

    });

});