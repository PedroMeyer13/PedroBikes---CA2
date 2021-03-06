// code based from what we have learned in class, youtube tutorial, Jquery documentation and my last CA

var newArray = []
	
	async function getData(){
		const response = await fetch('/rental');
		const data = await response.json();
		newArray = data;
		buildTable(data)
	}
	getData();
 
 // youtube tutorial and Jquery documentation
 function buildTable(data){
    var table = document.getElementById('myTable')
    table.innerHTML = ''
    for (var i = 0; i < data.length; i++){

        var row = `<tr>
                        <td hidden>${data[i]._id}</td>
                        <td>${data[i].bike}</td>
                        <td>${data[i].user}</td>
                        <td>${data[i].days}</td>
                        <td><button type="button" class="btn btn-danger" id="DeleteOrder">Delete<i class="icon-remove"></i></button></td>
                   </tr>`
        table.innerHTML += row
    }
}

// stack overflow code
$(document).ready(function(){
    // code to read selected table row cell data (values).
    $("#fullTable").on('click','#DeleteOrder',function(){
         // get the current row
         var currentRow=$(this).closest("tr"); 
         
         // get the element of wich cell of the row
         var col1=currentRow.find("td:eq(0)").text(); 
         var col2=currentRow.find("td:eq(1)").text();
         var col3=currentRow.find("td:eq(2)").text();
         var col4=currentRow.find("td:eq(3)").text(); 
            console.log(col1);

         $.ajax(
			{
				url: "/rental/"+col1,
				type: "DELETE",
				cache: false,
			}).then(response => {
                console.log(response);
              });

            var data=col1+"\n"+col2+"\n"+col3 +"\n"+col4;
            alert(data + " \n You have deleted one order");
             location.reload();
    });
});

// Jquery documentation
$(document).ready(function()
	{
        $('#search-input').on('keyup', function(){
            var value = $(this).val()
            console.log(value)
            var data = searchTable(value, newArray)
            buildTable(data)
        })		
	});

    // Jquery documentation and youtube tutorial
    $(document).ready(function()
	{	
        $('th').on('click', function(){
            var column = $(this).data('column')
            var order = $(this).data('order')
            var text = $(this).html()
            text = text.substring(0, text.length - 1);
            
            
            if (order == 'desc'){
                console.log(column)
                console.log(order)
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
			
	});
  
   // youtube tutorial
   function searchTable(value, data){
       var filteredTable = []
   
       for(var i = 0; i < data.length; i++){
           escape(value).toLowerCase()
           value = value.toLowerCase();
           var user = data[i].user.toLowerCase()
           var bikes =  data[i].bike.toLowerCase()
           if(user.includes(value)){
               filteredTable.push(data[i])
           }else if (bikes.includes(value)){
                filteredTable.push(data[i])
           }
       }
       return filteredTable
   }
    