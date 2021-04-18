  // api url
const api_url = 'https://8000-aqua-turtle-q66rq7nx.ws-eu03.gitpod.io/bikes';
console.log("Here");
// Defining async function
async function getapi(url) {
  

// Storing response
const response = await fetch(url);

// Storing data in form of JSON
var data = await response.json();
console.log(data);
if (response) {
  hideloader();
}
show(data);
}
// Calling that async function
getapi(api_url);

// Function to hide the loader
function hideloader() {
document.getElementById('loading').style.display = 'none';
}
// Function to define innerHTML for HTML table
function show(data) {
  console.log(data + "Here");
let tab = 
  `<tr>
    <th>bikes</th>
    <th>kids</th>
    <th>item</th>
    <th>price</th>
   </tr>`;

// Loop to access all rows 
for (let r of data.list) {
  tab += `<tr> 
<td>${r.bikes} </td>
<td>${r.kids}</td>
<td>${r.item}</td> 
<td>${r.price}</td>          
</tr>`;
}
// Setting innerHTML as tab variable
document.getElementById("employees").innerHTML = tab;
console.log(data + "Here");
}
