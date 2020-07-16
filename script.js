const ctx = document.getElementById('mygraph').getContext('2d');

getChart()
async function getChart(){
        const data=await getData()
        const  myChart = new Chart(ctx, {
        type: 'line',
        data: {
            
            labels: data.regions,
            datasets: [{
                
                
                label: 'Global Covid Cases',
                data: data.cases,
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                    
            
                borderColor: 'black',
                    
                borderWidth: 1
            },
            {
                
                label: 'Covid Deaths',
                data: data.deaths,
                backgroundColor:'red',
                    
            
                borderColor: 'white',
                    
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
        });
    }



async function getData(){
    const regions=[]
    const cases=[]
    const deaths=[]
    const val=await fetch('mydata.csv')
    const data=await val.text()
    console.log(data)

    const rows=data.split('\n').slice(1)
    rows.forEach(elt=>{
        const row=elt.split(',')
        const region=row[0]
        regions.push(region)
        const confirmed=row[1]
        cases.push(confirmed)
        const death=row[2]
        deaths.push(death)
        console.log(regions,cases,deaths)
    })
    return {regions,cases,deaths}
    //console.log(rows)
}
