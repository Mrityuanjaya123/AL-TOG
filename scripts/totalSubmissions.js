google.charts.load('current', { 'packages': ['corechart'] });
google.charts.setOnLoadCallback(drawChart);

function drawChart() {

    var data = google.visualization.arrayToDataTable([
        ['Problem', 'Accuracy'],
        ['Runtime Error', 4],
        ['Wrong Answer', 2],
        ['Runtime Error', 4],
        ['Accepted', 19],
    ]);

    var options = {
        title: 'Total Submissions'
    };

    var chart = new google.visualization.PieChart(document.getElementById('piechart'));

    chart.draw(data, options);
}
var cross = document.querySelector('.cross');
var ham = document.querySelector('.ham');
var sidebar = document.querySelector('.sidebar');
cross.style.display = 'none';
ham.addEventListener("click", () => {
    sidebar.classList.remove('sidebarGo');
    setTimeout(() => {
        cross.style.display = 'inline';
    }, 200);
    document.querySelector('.ham').style.display = 'none';
})
cross.addEventListener("click", () => {
    sidebar.classList.add('sidebarGo');
    setTimeout(() => {
        ham.style.display = 'inline';
    }, 200);
    cross.style.display = 'none';
})