document.addEventListener('DOMContentLoaded', function() {
    
    Chart.register(ChartDataLabels);

    const contextoEstadisticas = document.getElementById('graficaEstadisticas');
    if (contextoEstadisticas) {
        new Chart(contextoEstadisticas, {
            type: 'bar',
            data: {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
                datasets: [{
                    label: 'Statistics',
                    data: [4, 6, 3, 7, 5, 6],
                    backgroundColor: [
                        '#FEEED0',
                        '#D2E4DF',
                        '#FEEED0',
                        '#D2E4DF',
                        '#FEEED0',
                        '#D2E4DF'
                    ],
                    borderColor: [
                        '#D4A846',
                        '#5BB09D',
                        '#D4A846',
                        '#5BB09D',
                        '#D4A846',
                        '#5BB09D'
                    ],
                    borderWidth: 1,
                    borderRadius: 5,
                    barThickness: 15
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false
                    },
                    tooltip: {
                        enabled: true
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        grid: {
                            display: true,
                            color: 'rgba(0,0,0,0.05)'
                        },
                        ticks: {
                            stepSize: 1,
                            color: '#AAAAAA'
                        }
                    },
                    x: {
                        grid: {
                            display: false
                        },
                        ticks: {
                            color: '#AAAAAA'
                        }
                    }
                }
            }
        });
    }

    const contextoDistribucion = document.getElementById('graficaDistribucionVuelos');
    if (contextoDistribucion) {
        new Chart(contextoDistribucion, {
            type: 'doughnut',
            data: {
                labels: ['Flight Share'],
                datasets: [{
                    data: [70, 30],
                    backgroundColor: [
                        '#D4A846',
                        '#4A5F57'
                    ],
                    borderColor: '#FFFFFF',
                    borderWidth: 5
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                cutout: '70%',
                plugins: {
                    legend: {
                        display: false
                    },
                    tooltip: {
                        enabled: false
                    },
                    beforeDraw: function(grafica) {
                        const ctx = grafica.ctx;
                        const ancho = grafica.width;
                        const alto = grafica.height;
                        ctx.restore();
                        const tamanoFuente = (alto / 120).toFixed(2);
                        ctx.font = `${tamanoFuente}em Arial`;
                        ctx.textBaseline = 'middle';

                        const texto = 'Flight Share';
                        const textoX = Math.round((ancho - ctx.measureText(texto).width) / 2);
                        const textoY = alto / 2;

                        ctx.fillStyle = '#AAAAAA';
                        ctx.fillText(texto, textoX, textoY);
                        ctx.save();
                    }
                },
                elements: {
                    arc: {
                        borderRadius: 0
                    }
                }
            }
        });
    }

    const contextoCalendario = document.getElementById('graficaCalendarioVuelos');
    if (contextoCalendario) {
        new Chart(contextoCalendario, {
            type: 'line',
            data: {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
                datasets: [{
                    label: 'Passengers',
                    data: [3, 5, 3.5, 4, 6, 3],
                    fill: true,
                    backgroundColor: 'rgba(212, 168, 70, 0.2)',
                    borderColor: '#D4A846',
                    tension: 0.4,
                    pointBackgroundColor: '#D4A846',
                    pointBorderColor: '#FFFFFF',
                    pointBorderWidth: 2,
                    pointRadius: 5,
                    pointHoverRadius: 7
                },
                {
                    label: 'Other',
                    data: [4, 4.2, 3, 3.5, 4.2, 2.8],
                    fill: false,
                    borderColor: '#DDDDDD',
                    tension: 0.4,
                    pointBackgroundColor: '#DDDDDD',
                    pointBorderColor: '#FFFFFF',
                    pointBorderWidth: 2,
                    pointRadius: 5,
                    pointHoverRadius: 7
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false
                    },
                    tooltip: {
                        callbacks: {
                            label: function(contexto) {
                                return contexto.dataset.label + ': ' + contexto.raw + 'K';
                            }
                        }
                    },
                    datalabels: {
                        display: (contexto) => {
                            return contexto.dataIndex === 2 && contexto.datasetIndex === 0;
                        },
                        align: 'top',
                        offset: 8,
                        backgroundColor: '#4A5F57',
                        color: 'white',
                        borderRadius: 4,
                        padding: { top: 4, bottom: 4, left: 8, right: 8 },
                        font: {
                            size: 10,
                            weight: 'bold'
                        },
                        formatter: (valor) => {
                            return (valor * 1000) + ' Passengers';
                        }
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        grid: {
                            display: true,
                            color: 'rgba(0,0,0,0.05)'
                        },
                        ticks: {
                            stepSize: 1,
                            color: '#AAAAAA'
                        }
                    },
                    x: {
                        grid: {
                            display: false
                        },
                        ticks: {
                            color: '#AAAAAA'
                        }
                    }
                }
            }
        });
    }
});