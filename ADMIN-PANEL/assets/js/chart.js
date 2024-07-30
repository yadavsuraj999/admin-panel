

var options = {
    series: [{
        name: 'Income',
        data: [16800, 16800, 15500, 17800, 15500, 17000, 19000, 16000, 15000, 17000, 14000, 17000]
    }, {
        name: 'Expenses',
        data: [16500, 17500, 16200, 17300, 16000, 19500, 16000, 17000, 16000, 19000, 18000, 19000]
    }],
    chart: {

        height: 316,
        type: 'area',
        fontFamily: 'Nunito, sans-serif',
        zoom: {
            enabled: false,
        },
        toolbar: {
            show: false,

        },
    },
    dataLabels: {
        enabled: false,

    },
    stroke: {
        curve: 'smooth',
        width: 2,
        lineCap: 'square',

    },
    dropShadow: {
        enabled: true,
        opacity: 0.2,
        blur: 10,
        left: -7,
        top: 22,
    },
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],



};

var chart = new ApexCharts(document.querySelector("#revenu-chart"), options);
chart.render();

var options2 = {
    series: [44, 55, 41, 17, 15],
    chart: {
        height: 350,
        type: 'donut',
    },
    responsive: [{
        breakpoint: 480,
        options: {
            chart: {
                width: 200
            },
            legend: {
                position: 'bottom'
            }
        }
    }]
};

var chart = new ApexCharts(document.querySelector("#sales-chart"), options2);
chart.render();

var salesOptions = {
    series: [
        {
            name: 'Sales',
            data: [44, 55, 41, 67, 22, 43, 21],
        },
        {
            name: 'Last Week',
            data: [13, 23, 20, 8, 13, 27, 33],
        },
    ],
    chart: {
        height: 160,
        type: 'bar',
        fontFamily: 'Nunito, sans-serif',
        toolbar: {
            show: false,
        },
        stacked: true,
        stackType: '100%',
    },
    dataLabels: {
        enabled: false,
    },
    stroke: {
        show: true,
        width: 1,
    },
    colors: ['#e2a03f', '#e0e6ed'],
    responsive: [
        {
            breakpoint: 480,
            options: {
                legend: {
                    position: 'bottom',
                    offsetX: -10,
                    offsetY: 0,
                },
            },
        },
    ],
    xaxis: {
        labels: {
            show: false,
        },
        categories: ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'],
    },
    yaxis: {
        show: false,
    },
    fill: {
        opacity: 1,
    },
    plotOptions: {
        bar: {
            horizontal: false,
            columnWidth: '25%',
        },
    },
    legend: {
        show: false,
    },
    grid: {
        show: false,
        xaxis: {
            lines: {
                show: false,
            },
        },
        padding: {
            top: 10,
            right: -20,
            bottom: -20,
            left: -20,
        },
    },
};

var chart = new ApexCharts(document.querySelector("#sales-bar"), salesOptions);
chart.render();



// total orders
var options = {
    series: [{
        name: 'sales',
        data: [28, 40, 36, 52, 38, 60, 38, 52, 36, 40]
    },
    ],
    chart: {

        height: 290,
        type: 'area',
        fontFamily: 'Nunito, sans-serif',
        zoom: {
            enabled: false,
        },
        toolbar: {
            show: false,

        },
        sparkline: {
            enabled: true,
        },
    },
    colors: ['#00ab55'],
    dataLabels: {
        enabled: false,

    },
    stroke: {
        curve: 'smooth',
        width: 2,


    },
    yaxis: {
        min: 0,
        show: false,
    },
    grid: {
        padding: {
            top: 125,
            right: 0,
            bottom: 0,
            left: 0,
        },
    },
    fill: {
        opacity: 1,
        type: 'gradient',
        gradient: {
            type: 'vertical',
            shadeIntensity: 1,
            inverseColors: !1,
            opacityFrom: 0.3,
            opacityTo: 0.05,
            stops: [100, 100],
        },
    },
    dropShadow: {
        enabled: true,
        opacity: 0.2,
        blur: 10,
        left: -7,
        top: 22,
    },
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],



};

var chart = new ApexCharts(document.querySelector(".line-chart"), options);
chart.render();