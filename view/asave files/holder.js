var newArray = []

async function getData(){
    const response = await fetch('/bikes');
    const data = await response.json();
    newArray = data;
    buildTable(data)
}
    getData();

	buildTable(newArray)

	$('th').on('click', function(){
     var column = $(this).data('colname')
     var order = $(this).data('order')
     var text = $(this).html()
     text = text.substring(0, text.length - 1);
     
     
     if (order == 'desc'){
        newArray = newArray.sort((a, b) => a[column] > b[column] ? 1 : -1)
        $(this).data("order","asc");
        text += '&#9660'
     }else{
        newArray = newArray.sort((a, b) => a[column] < b[column] ? 1 : -1)
        $(this).data("order","desc");
        text += '&#9650'
     }

    $(this).html(text)
    buildTable(newArray)
    })

$('#search-input').on('keyup', function(){
    var value = $(this).val()
    console.log("value")
    var data = searchTable(value, newArray)
    buildTable(data)
})

function searchTable(value, data){
    var filteredTable = []

    for(var i = 0; i < data.length; i++){
        value = value.toLowerCase()
        var name = data[i].name.toLowerCase()

        if(name.includes(value)){
            filteredTable.push(data[i])
        }
    }
    return filteredTable
}
    
function buildTable(data){
    var table = document.getElementById('myTable')
    table.innerHTML = ''
    for (var i = 0; i < data.length; i++){
        var colname = `name-${i}`
        var colage = `age-${i}`
        var colbirth = `birth-${i}`

        var row = `<tr>
                        <td>${data[i].bike}</td>
                        <td>${data[i].item}</td>
                        <td>${data[i].price}</td>
                   </tr>`
        table.innerHTML += row
    }
}
