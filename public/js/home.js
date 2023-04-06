let b_nums = [2, 3, 4]
let s_nums = [1, 0, 11]
let dates = ['2023-03-02', '2023-03-03', '2023-03-04']

Highcharts.chart("graph", {
    chart: {
        type: 'line',
        backgroundColor: 'rgba(244, 224, 198, 0.4)',
        // border: 'solid 10px white'
    },
    title: {
        text: '歷史紀錄'
    },
    xAxis: {
        categories: dates
    },
    yAxis: {
        title: {
            text: 'Number',
            size: "16px"
        }
    },
    series: [
    {
        name: '批量',
        data: b_nums,
        color: "gold"
    },
    {
        name: '零散',
        data: s_nums,
        color: "rgba(139, 233, 233, 1)"
    }]
});

let c_nums = []
let data = []

for (let idx=1; idx<30; idx++) {
    c_nums.push(idx)
    data.push(100 * Math.random())
}

console.log(data)

Highcharts.chart("situation-graph", {
    chart: {
        type: 'line',
        backgroundColor: 'rgba(198, 244, 239, 0.8)',
        // border: 'solid 10px white'
    },
    title: {
        text: '秤重歷史紀錄'
    },
    xAxis: {
        categories: c_nums
    },
    yAxis: {
        title: {
            text: 'Number',
            size: "16px"
        }
    },
    series: [
    {
        name: '重量()',
        data: data,
        color: "gray"
    }]
});


// https://www.chartjs.org/docs/2.9.4/charts/doughnut.html
var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'pie',
    // type: 'bar',
    // type: 'radar',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    // options: {
    //     scales: {
    //         yAxes: [{
    //             ticks: {
    //                 beginAtZero: true
    //             }
    //         }]
    //     }
    // }
});