$(function () {

    var countOptions = {
        useEasing: false,
    };

    var countUp = new CountUp("statistic1", 0, 75, 0, 2.5, countOptions);

    $(".countup").click(function () {
        countUp.start();
    });

    var countUp2 = new CountUp("statistic2", 0, 80, 0, 3, countOptions);

    $(".countup").click(function () {
        countUp2.start();
    });

    var countUp3 = new CountUp("statistic3", 0, 80, 0, 3, countOptions);

    $(".countup").click(function () {
        countUp3.start();
    });

    var countUp4 = new CountUp("statistic4", 0, 70, 0, 1.5, countOptions);

    $(".countup").click(function () {
        countUp4.start();
    });

});
