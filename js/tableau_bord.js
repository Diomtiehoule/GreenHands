
var options = {
    chart: {
      height: 350,
      type: "bar",
      stacked: false
    },
    dataLabels: {
      enabled: false
    },
    colors: ["#FF1654", "#247BA0"],
    series: [
      {
        name: "Exportation",
        data: [1.4, 2, 2.5, 1.5, .5, .5, 1.1]
      },
      {
        name: "Production",
        data: [20, 29, 29, 26, 27, 14, 30]
      }
    ],
    stroke: {
      width: [4, 4]
    },
    plotOptions: {
      bar: {
        columnWidth: "30%"
      }
    },
    xaxis: {
      categories: [2016, 2017, 2018, 2019, 2020, 2021, 2022]
    },
    yaxis: [
      {
        axisTicks: {
          show: true
        },
        axisBorder: {
          show: true,
          color: "#FF1654"
        },
        labels: {
          style: {
            colors: "#FF1654"
          }
        },
        title: {
          text: "Exportation",
          style: {
            color: "#FF1654"
          }
        }
      },
      {
        opposite: true,
        axisTicks: {
          show: true
        },
        axisBorder: {
          show: true,
          color: "#247BA0"
        },
        labels: {
          style: {
            colors: "#247BA0"
          }
        },
        title: {
          text: "Production",
          style: {
            color: "#247BA0"
          }
        }
      }
    ],
    // tooltip: {
    //   shared: false,
    //   intersect: true,
    //   x: {
    //     show: false
    //   }
    // },
    legend: {
      horizontalAlign: "left",
      offsetX: 40
    }
  };
  
  var chart = new ApexCharts(document.querySelector("#chart"), options);
  
  chart.render();
  








// let mychart = new chart(ctx ,{
//   type: 'pie',
//   data: {
//     labels :["terminer","en cours","non executé"],
//     datasets: [{
//       label : "Efficacité",
//       data :[70,20,10]

//     }]
//   }
// })