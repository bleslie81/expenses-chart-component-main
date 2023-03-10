const bodydata = document.getElementById('data')
const floatnumber = document.getElementsByClassName('floatnumber')
const hnumber = document.getElementById('hovernumber')
const valuehover = document.getElementsByClassName('valuehover')
let jsondata = []

function render(){
    fetch('./data.json').then(response => {
        return response.json();
      }).then(data => {
        // Work with JSON data here
        let template = ''
        jsondata = data
        console.log(data);
        data.forEach(element=>{
          template += 
          `<div class='col'>
            <div class='floatnumber'>$${element.amount}</div>
            <div class='valuehover' style='height:${element.amount}px;'></div>
            <div class='days'>${element.day}</div>
          </div>`
        })
       
        bodydata.innerHTML = template 
        
        
        // new Chart(
        //   document.getElementById('acquisitions'),
        //   {
        //     type: 'bar',
        //     data: {
        //       labels: data.map(row => row.day),
        //       datasets: [
        //         {
        //           label: '',
        //           data: data.map(row => row.amount),
        //           backgroundColor: [
        //             'hsl(10, 79%, 65%)'
        //           ],
        //           hoverBackgroundColor: 'hsl(186, 34%, 60%)',
        //           hoverOffset: 14
        //         }
        //       ]
        //     }
        //   }
        // );
        
      }).catch(err => {
        bodydata.innerHTML = `<div>Error in fetch!</div>`
      });
}

render()

