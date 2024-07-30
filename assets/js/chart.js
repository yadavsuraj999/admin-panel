let isDark=0;
let isRtl=0;

var options = {
    series: [
        {
            name: 'Income',
            data: [16800, 16800, 15500, 17800, 15500, 17000, 19000, 16000, 15000, 17000, 14000, 17000],
        },
        {
            name: 'Expenses',
            data: [16500, 17500, 16200, 17300, 16000, 19500, 16000, 17000, 16000, 19000, 18000, 19000],
        },
    ],
    chart: {
        height: 325,
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
        show: true,
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
    colors: isDark ? ['#2196f3', '#e7515a'] : ['#1b55e2', '#e7515a'],
    markers: {
        discrete: [
            {
                seriesIndex: 0,
                dataPointIndex: 6,
                fillColor: '#1b55e2',
                strokeColor: 'transparent',
                size: 7,
            },
            {
                seriesIndex: 1,
                dataPointIndex: 5,
                fillColor: '#e7515a',
                strokeColor: 'transparent',
                size: 7,
            },
        ],
    },
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    xaxis: {
        axisBorder: {
            show: false,
        },
        axisTicks: {
            show: false,
        },
        crosshairs: {
            show: true,
        },
        labels: {
            offsetX: isRtl ? 2 : 0,
            offsetY: 5,
            style: {
                fontSize: '12px',
                cssClass: 'apexcharts-xaxis-title',
            },
        },
    },
    yaxis: {
        tickAmount: 7,
        labels: {
            formatter: (value) => {
                return value / 1000 + 'K';
            
            },
            offsetX: isRtl ? -30 : -10,
            offsetY: 0,
            style: {
                fontSize: '12px',
                cssClass: 'apexcharts-yaxis-title',
                
            },
        },
        opposite: isRtl ? true : false,
    },
    grid: {
        borderColor: isDark ? '#191e3a' : '#e0e6ed',
        strokeDashArray: 5,
        xaxis: {
            lines: {
                show: false,
            },
        },
        yaxis: {
            lines: {
                show: false,
            },
        },
        padding: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
        },
    },
    legend: {
        position: 'top',
        horizontalAlign: 'right',
        fontSize: '16px',
        markers: {
            width: 10,
            height: 10,
            offsetX: -2,
        },
        itemMargin: {
            horizontal: 10,
            vertical: 5,
        },
    },
    tooltip: {
        marker: {
            show: true,
        },
        x: {
            show: false,
        },
    },
    fill: {
        type: 'gradient',
        gradient: {
            shadeIntensity: 1,
            inverseColors: !1,
            opacityFrom: isDark ? 0.19 : 0.28,
            opacityTo: 0.05,
            stops: isDark ? [100, 100] : [45, 100],
        },
    },
};

var chart = new ApexCharts(document.querySelector("#revenu-chart"), options);
chart.render();

var salesByCategoryOptions= {
   
        series: [285, 237, 270, 100, 100],
        chart: {
            type: 'donut',
            height: 440,
            fontFamily: 'Nunito, sans-serif',
            
        },
        dataLabels: {
            enabled: false,
        },
        stroke: {
            show: true,
            width: 25,
            
        },
        colors: isDark ? ['#5c1ac3', '#e2a03f', '#e7515a', '#e2a03f'] : ['#e2a03f', '#5c1ac3', '#e7515a'],
        legend: {
            position: 'bottom',
            horizontalAlign: 'center',
            fontSize: '14px',
            markers: {
                width: 10,
                height: 10,
                offsetX: -2,
            },
            height: 50,
            offsetY: 20,
        },
        plotOptions: {
            pie: {
                donut: {
                    size: '65%',
                    background: 'transparent',
                    labels: {
                        show: true,
                        name: {
                            show: true,
                            fontSize: '29px',
                            offsetY: -10,
                        },
                        value: {
                            show: true,
                            fontSize: '26px',
                            color: isDark ? '#bfc9d4' : undefined,
                            offsetY: 16,
                            formatter: (val) => {
                                return val;
                            },
                        },
                        total: {
                            show: true,
                            label: 'Total',
                            color: '#888ea8',
                            fontSize: '29px',
                            formatter: (w) => {
                                return w.globals.seriesTotals.reduce(function (a, b) {
                                    return a + b;
                                }, 0);
                            },
                        },
                    },
                },
            },
        },
        labels: ['Apparel', 'Sports', 'Others', 'test', 'tets1'],
        states: {
            hover: {
                filter: {
                    type: 'none',
                    value: 0.15,
                },
            },
            active: {
                filter: {
                    type: 'none',
                    value: 0.15,
                },
            },
        },
    };



var chart = new ApexCharts(document.querySelector("#sales-chart"), salesByCategoryOptions);
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

        height: 280,
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