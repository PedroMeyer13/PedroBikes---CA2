function draw_table()
{
	fetch('https://8000-aqua-turtle-q66rq7nx.ws-eu03.gitpod.io/bikes')
  .then(res => {
    if (res.ok){
      console.log('Sucess')
    } else {
      console.log('Failiure')
    }
  })
  .then(data => console.log(data))
  .catch(error => console.log('Error'))
};


$(document).ready(function ()
{
	
});



