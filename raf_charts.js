var mql = window.matchMedia('(max-width: 992px)');
var departments;
var vocations;
var yearlyPerformance;
var yearlyChart;

window.addEventListener("load", function () {
    departments = document.getElementById('departments').getContext('2d');
    vocations = document.getElementById('vocations').getContext('2d');
    yearlyPerformance = document.getElementById('yearly-performance').getContext('2d');
    var departmentsChart = new Chart(departments, {
        type: 'bar',
        data: {
            labels: ['Departments'],
            datasets: [
                {
                    label: 'Computer Science',
                    data: [12],
                    backgroundColor: 'red',
                },
                {
                    label: 'Computer Engineering',
                    data: [14],
                    backgroundColor: 'blue',
                },
                {
                    label: 'Computer Networks',
                    data: [18],
                    backgroundColor: 'green',
                },
                {
                    label: 'Computer Design',
                    data: [11],
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
    var vocations = new Chart(vocations, {
        type: 'pie',
        data: {
            labels: ['Research Trainee', 'Research Associate', 'Research Assistant', 'Research Professor'],
            datasets: [
                {
                    label: 'RAF',
                    data: [12, 18, 12, 11],
                    backgroundColor: [
                        'red',
                        'blue',
                        'green',
                        'yellow'
                    ]
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: true,
                    position: 'top'
                }
            }
        }
    });
    if(mql.matches) {
        mobileChart();
    }
    else {
        desktopChart();
    }
    mql.addEventListener( "change", (e) => {
        if (e.matches) {
            yearlyChart.destroy();
            mobileChart();
        }
        else {
            yearlyChart.destroy();
            desktopChart();
        }
    })
});

function desktopChart() {
    yearlyChart = new Chart(yearlyPerformance, {
        type: 'bar',
        data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
            datasets: [
                {
                    label: 'M21a',
                    data: [41, 81, 86, 92, 82, 65, 54, 58, 48, 39, 98, 80],
                    backgroundColor: 'red',
                },
                {
                    label: 'M21',
                    data: [18, 39, 11, 10, 68, 88, 17, 93, 24, 86, 56, 63],
                    backgroundColor: 'blue',
                },
                {
                    label: 'M22',
                    data: [70, 70, 90, 73, 56, 77, 84, 94, 58, 71, 7, 80],
                    backgroundColor: 'green',
                },
                {
                    label: 'M23',
                    data: [11, 36, 43, 96, 12, 79, 18, 8, 43, 97, 80, 48],
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
}

function mobileChart() {
    yearlyChart = new Chart(yearlyPerformance, {
        type: 'bar',
        data: {
            labels: ['January'],
            datasets: [
                {
                    label: 'M21a',
                    data: [31],
                    backgroundColor: 'red',
                },
                {
                    label: 'M21',
                    data: [28],
                    backgroundColor: 'blue',
                },
                {
                    label: 'M22',
                    data: [90],
                    backgroundColor: 'green',
                },
                {
                    label: 'M23',
                    data: [95],
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
}