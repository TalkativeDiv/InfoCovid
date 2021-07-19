const BASE_URL = 'https://corona.lmao.ninja/v2/'

dlgCountry.addEventListener('change', function(){
    var url =BASE_URL +dlgCountry.value; 
// Calling that  function
getapi(url);
})

async function getapi(url) {    
    // Storing response
    const response = await fetch(url);    
    // Storing data in form of JSON
    var data = await response.json();     
    showCovidData(data);
}

// Function to define innerHTML for HTML table
function showCovidData(data) {
   
    let tab = 
        `<tr>
        <thead class = "noShadow">
        <tr>
          <th style="width:25%;"><i class="fas fa-suitcase-rolling"></i> Cases</th>
          <th  style="width:25%;"><i class="fas fa-briefcase"></i> Today's Cases</th>
          <th style="width:25%;"><i class="fas fa-skull-crossbones"></i> Deaths</th>
          <th style="width:25%;"><i class="fas fa-thumbs-up"></i> Recovered</th>
          </tr>
          </thead>
         </tr>`;
         tab += `<tr> 

    <tr class = "hoverable">
    <td >${data.cases} </td>
    <td>${data.todayCases}</td>
    <td >${data.deaths}</td> 
    <td>${data.recovered}</td> </tr>

           
             
     </tr>`
    // Loop to access all rows 
    document.getElementById("covidResults").innerHTML = tab; 

    }
    // Setting innerHTML as tab variable
   
    document.addEventListener('DOMContentLoaded',getapi(BASE_URL + 'all'));false;
