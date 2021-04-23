function fetchData(){
    fetch("https://8000-coral-panda-vr8mugm9.ws-eu03.gitpod.io/bikes")
    .then(response => {
        if(!response.ok){
            throw Error("Error");
        }
        console.log(response)
        return response.json();
    })
    .then( data => {
        const html = data.map(bikes => {
            return bikes;
                    
        }).join("");
        document
        .querySelector("#table_API")
        .insertAdjacentHTML("afterbegin", html);

    })
    .catch(error => {
        console.log(error);
    })
}


fetchData();