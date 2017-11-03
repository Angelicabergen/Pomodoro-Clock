$(document).ready(function () {
    var sound = $("#sound")[0];
    var count = parseInt($("#breakNum").html());
    var countSession = parseInt($("#sessionNum").html());
    var countBreak = parseInt($("#breakNum").html());
    var countStore = 0;
    var breakStore = 0;
    var counter;

    $("#reset").hide();

    $("#start").click(function () {
        $("#breakMinus, #breakPlus, #sessionMinus, #sessionPlus, #start, #length, #breakNum").hide();
        $("#reset").show();
        $(".times1").css("border", "0px");
        countSession *= 60;
        countStore = countSession;
        $("#sessionNum").html("Session time: " + countSession / 60);
        counter = setInterval(timer, 1000);
        function timer() {
            countSession -= 1;
            if (countSession === 0) {
                sound.play();
                clearInterval(counter);
                startBreak();
            }
            if (countSession % 60 >= 10) {
                $("#sessionNum").html("Session time: " + Math.floor(countSession / 60) + ":" + (countSession % 60));
            }
            else {
                $("#sessionNum").html("Session time: " + Math.floor(countSession / 60) + ":0" + (countSession % 60));
            }
        }
    });


    function startBreak() {
        $("#sessionNum").html("Break time: " + countBreak);
        countBreak *= 60;
        breakStore = countBreak;
        counter = setInterval(timer2, 1000);
        function timer2() {
            countBreak -= 1;
            if (countBreak === 0) {
                clearInterval(counter);
            }
            if (countBreak % 60 >= 10) {
                $("#sessionNum").html("Break time! " + Math.floor(countBreak / 60) + ":" + (countBreak % 60));
            }
            else {
                $("#sessionNum").html("Break time! " + Math.floor(countBreak / 60) + ":0" + (countBreak % 60));
            }
        }
    };


    $("#reset").click(function () {
        $("#breakMinus, #breakPlus, #sessionMinus, #sessionPlus, #start, #length, #breakNum").show();
        $("#reset").hide();
        $(".times1").css("border", "2px solid black");
        clearInterval(counter);
        countBreak = breakStore;
        countSession = countStore/60;
        $("#sessionNum").html(countSession);
    });


    $("#breakMinus").click(function () {
        if (count > 5) {
            count = count - 5;
            $("#breakNum").html(count);
        }
    });

    $("#breakPlus").click(function () {
        count = count + 5;
        $("#breakNum").html(count);

    });

    $("#sessionMinus").click(function () {
        if (countSession > 5) {
            countSession -= 5;
            $("#sessionNum").html(countSession);
        }
    });

    $("#sessionPlus").click(function () {
        countSession += 5;
        $("#sessionNum").html(countSession);
    });
    
});