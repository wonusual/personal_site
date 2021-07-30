$(function () {

    var countOptions = {
        useEasing: false,
    };

    var countUp = new CountUp("statistic1", 0, 70, 0, 2.5, countOptions);

    countUp.start();

    var countUp2 = new CountUp("statistic2", 0, 70, 0, 2.5, countOptions);

    countUp2.start();

    var countUp3 = new CountUp("statistic3", 0, 70, 0, 2.5, countOptions);

    countUp3.start();

    var countUp4 = new CountUp("statistic4", 0, 50, 0, 2.5, countOptions);

    countUp4.start();

});
