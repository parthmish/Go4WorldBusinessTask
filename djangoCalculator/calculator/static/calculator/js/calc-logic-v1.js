$(document).ready(function () {
    $(".btn").click(function () {
        if (!$(this).hasClass("not")) {
            if ($("#expression").val() == 0)
                $("#expression").val($(this).text());
            else
                $("#expression").val($(
                    "#expression").val() + $(this).text());
        }
    });

    $('#clear').click(function () {
        var value = $("#expression").val();
        if (!(parseInt(parseFloat(value)) == 0 && value.length == 1))
            $("#expression").val(value.slice(0, value.length - 1));
        if (value.length == 1)
            $("#expression").val("0");
    });

});

$("#allClear").click(function () {
    $("#expression").val("0");
    $("#result").val("0");
});

$("#equals").click(function () {
    var result;
    try {
        result = (eval(($("#expression").val())));
    } catch (e) {
        if (e instanceof SyntaxError) {
            alert("Error! Resetting values.");
            $("#expression").val("0");
            $("#result").val("0");
        }
        if (e instanceof TypeError) {
            alert("Error! Resetting values.");
            $("#expression").val("0");
            $("#result").val("0");
        }
    }

    $("#result").val(result);
    $("#expression").val("0");
});