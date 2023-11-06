$(document).ready(function () {
    $(".product button").click(function () {
        $("#popup").fadeIn();
        $(".close-popup, .popup").click(function () {
            $("#popup").fadeOut();
        });
    });
});