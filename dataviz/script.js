function createChart() {
  new Chart(document.getElementById("chart"), {
      type: 'bar',
      data: {
        labels: ["CSD 01", "CSD 02", "CSD 03", "CSD 04", "CSD 05"],
        datasets: [
          {
            label: "Percent female students",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: [0.36, 0.56, 0.68, 0.65, 0.57]
          }
        ]
      },
      options: {
        legend: { display: false },
        title: {
          display: true,
          text: 'Percentage of female students in NYC school districts in 2019'
        }
      }
  });
}

document.addEventListener('DOMContentLoaded', createChart);
