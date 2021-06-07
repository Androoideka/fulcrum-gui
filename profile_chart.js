var articles;
var citations;

window.addEventListener("load", function () {
    articles = document.getElementById('articles').getContext('2d');
    citations = document.getElementById('citations').getContext('2d');
    years = ['2021', '2020', '2019', '2018', '2017', '2016']
    var articlesChart = new Chart(articles, {
        type: 'bar',
        data: {
            labels: years,
            datasets: [
                {
                    label: 'M21a',
                    data: [27, 58, 45, 9, 35, 18],
                    backgroundColor: 'red',
                },
                {
                    label: 'M21',
                    data: [1, 46, 75, 34, 22, 24],
                    backgroundColor: 'blue',
                },
                {
                    label: 'M22',
                    data: [73, 57, 44, 71, 15, 51],
                    backgroundColor: 'green',
                },
                {
                    label: 'M23',
                    data: [26, 8, 56, 79, 9, 43],
                    backgroundColor: 'yellow',
                }
            ]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    display: true,
                    position: 'top'
                }
            }
        }
    });
    var citationsChart = new Chart(citations, {
        type: 'bar',
        data: {
            labels: years,
            datasets: [
                {
                    label: 'Citations',
                    data: [717, 350, 164, 518, 237, 844],
                    backgroundColor: 'red',
                },
                {
                    label: 'h-index',
                    data: [25, 24, 19, 25, 11, 29],
                    backgroundColor: 'blue',
                },
                {
                    label: 'i10-index',
                    data: [17, 14, 4, 9, 19, 18],
                    backgroundColor: 'green',
                }
            ]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    display: true,
                    position: 'top'
                }
            }
        }
    });
});