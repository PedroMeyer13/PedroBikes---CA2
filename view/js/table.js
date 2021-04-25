var newArray = []
	
	async function getData(){
		const response = await fetch('/bikes');
		const data = await response.json();
		newArray = data;
		buildTable(data)
	}
	getData();

	async function insertData(name, days, user){ 
		$.ajax(
		{
			url: "/bikes",
			type: "POST",
			data:
			{
				bike: name,
   				kids: false,
    			item: user,
    			price: "21"
			},
			cache: false,
		}).then(response => {
			console.log(response);
		  });

	} 
	

	function buildTable(data){
		var table = document.getElementById('myTable')
		for (var i = 0; i < data.length; i++){
			var colname = `name-${i}`
			var colage = `age-${i}`
			var colbirth = `birth-${i}`
	
			var row = `<tr>
							<td>${data[i].bike}</td>
							<td>${data[i].item}</td>
							<td>${data[i].price}</td>
							<td><button type="button" class="btn btn-outline-primary" id="setText">Select<i class="icon-remove"></i></button></td>
					   </tr>`
			table.innerHTML += row
		}
	}
	

	$(document).ready(function(){

		// code to read selected table row cell data (values).
		$("#fullTable").on('click','#setText',function(){
			 // get the current row
			 var currentRow=$(this).closest("tr"); 
			 
			 var col2=currentRow.find("td:eq(1)").text(); // get current row 2nd TD
			 $('#Bike').val(col2);
		});
	});


