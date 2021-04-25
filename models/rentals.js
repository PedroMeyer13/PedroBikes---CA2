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
       escape(value).toLowerCase()
       value = value.toLowerCase();
       var name = data[i].bike.toLowerCase()

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
$(document).ready(function(){

    // code to read selected table row cell data (values).
    $("#fullTable").on('click','#DetailRemove',function(){
         // get the current row
         var currentRow=$(this).closest("tr"); 
         
         var col1=currentRow.find("td:eq(0)").text(); // get current row 1st TD value
         var col2=currentRow.find("td:eq(1)").text(); // get current row 2nd TD
         var col3=currentRow.find("td:eq(2)").text(); // get current row 3rd TD
         var data=col1+"\n"+col2+"\n"+col3;
         alert(data);
    });
});


$(document).ready(function()
	{
		$("#delete").on(function ()
		{
			$.ajax(
			{
				url: "/post/delete",
				type: "POST",
				data:
				{
					section: sec,
					option: opt
				},
				cache: false,
				success: setTimeout(draw_table, 1000)
			})
		})
	});