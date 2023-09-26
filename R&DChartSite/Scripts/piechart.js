
window.onload = function () {
    const table = document.getElementById('tblforchart2');

    const projects = [];
    const hours = [];

    for (let i = 1; i < table.rows.length; i++) {
        const row = table.rows[i];
        const project = row.cells[0].textContent;
        const hour = row.cells[1].textContent;
        projects.push(project);
        hours.push(hour);
    }
    var xValues = projects;
    var yValues = hours;
    var barColors = [
        "#b91d47",
        "#00aba9",
        "#2b5797",
        "#e8c3b9",
        "#1e7145"
    ];
    if (barColors.length < projects.length) {
        var randomColor = generateRandomColors();
        barColors.push(randomColor);
    }
    new Chart("myChart2", {
        type: "pie",
        data: {
            labels: xValues,
            datasets: [{
                backgroundColor: barColors,
                data: yValues
            }]
        },
        options: {
            plugins: {
                title: {
                    display: true,
                    text: 'Projelerin Saatlik Dagilimi',

                }
            },
            responsive: true,
        }
    });
    chart.render();

    function generateRandomColors() {
        const randomColor = "#" +
            Math.floor(Math.random() * 16777215).toString(16);
        return randomColor;
    }
}