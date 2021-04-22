function fetchData(){
    fetch("https://8000-copper-limpet-wg0t85rk.ws-eu03.gitpod.io/bikes")
    .then(response => {
        if(!response.ok){
            throw Error("Error");
        }
        console.log(response)
        return response.json();
    })
    .then( data => {
        const html = data.map(bikes => {
            return '<p>Bikes:' + bikes.item + '</p>'
        })
        console.log(html)
        console.log(data)
        document.querySelector("#table_API")
        .insertAdjacentHTML("afterbegin", '<h1>helloo</h1>');

    })
    .catch(error => {
        console.log(error);
    })
}

fetchData();