var xmlhttp = new XMLHttpRequest();
var url = "http://127.0.0.1:5500/jsonData.json";
xmlhttp.open("GET", url, true);
xmlhttp.send();
xmlhttp.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200){
        var data = JSON.parse(this.responseText);
         console.log(data)
        date = data.date_population.map(function(elem){
            return elem.date;
        })
        // console.log(date);
        population = data.date_population.map(function(elem){
            return elem.population;
        })
        // console.log(population);
        
const ctx = document.getElementById('myChart').getContext('2d');
const myChart =  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: date,
      datasets: [{
        label: 'Population',
        data: population,
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
    }
}

     

        // const data = {
        //     labels: date,
        //     datasets: [{
        //         label: 'population',
        //         backgroundColor: '#383CC1',
        //         borderColor: 'rgb(255, 99, 132)',
        //         data: population,
        //     }]
        // };

        // const config = {
        //     type: 'bar',
        //     data: data,
        //     options: {}
        // };
    
        // const myChart = new Chart(
        //     document.getElementById('myChart'),
        //     config
        // );