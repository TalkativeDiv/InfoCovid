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
          <th style="width:25%;">Cases</th>
          <th  style="width:25%;">Today's Cases</th>
          <th style="width:25%;">Deaths</th>
          <th style="width:25%;">Recovered</th>
          </tr>
          </thead>
         </tr>`;
         tab += `<tr> 
         <td class = "noShadow">${data.cases} </td>
         <td class = "noShadow">${data.todayCases}</td>
         <td class = "noShadow">${data.deaths}</td> 
         <td >${data.recovered}</td> 

           
             
     </tr>`
    // Loop to access all rows 
    document.getElementById("covidResults").innerHTML = tab; 

    }
    // Setting innerHTML as tab variable
   
    document.addEventListener('DOMContentLoaded',getapi(BASE_URL + 'all'));false;