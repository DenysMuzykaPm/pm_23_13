fetch("./js/graph.json")
.then(function (response) {
  return response.json();
})
.then(function (data) {
    var p_1 = data.traffic[0].value
    var p_2 = data.traffic[1].value
    var p_3 = data.traffic[2].value


    const ctx = document.getElementById('myChart').getContext('2d');
        const myChart = new Chart(ctx, {
            type: 'doughnut',
            data: {
                datasets: [{
                  label: 'Dataset',
                  data: [p_1, p_2, p_3],
                  backgroundColor: [
                    'rgb(255, 99, 132)',
                    'rgb(54, 162, 235)',
                    'rgb(112,212,202)'
                  ],
                  hoverOffset: 4
                }]
            },
            options:{
                responsive: true,
                aspectRatio:2.2
            }
            
        });
})



