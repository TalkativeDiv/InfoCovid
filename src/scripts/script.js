//variables
//dom elems
const btnRepo = document.getElementById('btnRepo');
const btnContact = document.getElementById('btnContact');
//other
const BASE_URL = 'https://corona.lmao.ninja/v2/'
const email = "mailto: support@abhirath.net"
const ghRepo = 'https://github.com/TalkativeDiv/InfoCovid';
//functions
let getapi = async (url) => {    
    // Storing response
    const response = await fetch(url);    
    // Storing data in form of JSON
    var data = await response.json();     
    showCovidData(data);
}
let showCovidData = (data) => {
   
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
        // Setting innerHTML to the tab variable
    document.getElementById("covidResults").innerHTML = tab; 

    }
//event listeners
dlgCountry.addEventListener('change', () => {
const url = BASE_URL +dlgCountry.value; 
// Calling that  function
getapi(url);
})
document.addEventListener('DOMContentLoaded',getapi(BASE_URL + 'all'));false;
btnRepo.addEventListener('click', (e) =>{
if(e.ctrlKey){
window.open(ghRepo);
}else{
    window.location.href = ghRepo;   
}
})
btnContact.addEventListener('click',(e) =>{
    if(e.ctrlKey){ window.open(email)}
    else{window.location = email}
})