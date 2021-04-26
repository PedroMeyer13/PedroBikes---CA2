var newArray = []
var priceBike = 0;
	
	async function getData(){
		const response = await fetch('/bikes');
		const data = await response.json();
		newArray = data;
		buildTable(data)
	}
	getData();

	function insertData(bike, user, days){ 

		newValue = days * priceBike;
		console.log(newValue);
		$.ajax(
			{
				url: "/rental",
				type: "post",
				data:
				{
					bike: bike,
					user: user,
                    days: days
				},
				cache: false,
			}).then(response => {
                console.log(response);
              });
			 alert("Your order has been processed!! ")

	} 

	function KidsCheck(){
		var oTable = document.getElementById('Green');
		console.log("Its here")
	}
	

	function buildTable(data){
		var kidsVer = "NotKids";
		var table = document.getElementById('myTable')
		for (var i = 0; i < data.length; i++){
			var colname = `name-${i}`
			var colage = `age-${i}`
			var colbirth = `birth-${i}`

			if(data[i].kids == true){
				kidsVer = "Green"
			}
			
			var row = `<tr ${kidsVer}>
							<td>${data[i].bike}</td>
							<td>${data[i].item}</td>
							<td hidden>${data[i].kids}</td>
							<td>${data[i].price}</td>
							<td><button type="button" class="btn btn-outline-primary" id="setText">Select<i class="icon-remove"></i></button></td>
					   </tr>`
			table.innerHTML += row
			console.log(kidsVer);
		}

	}
	

	$(document).ready(function(){

		// code to read selected table row cell data (values).
		$("#fullTable").on('click','#setText',function(){
			 // get the current row
			 var currentRow=$(this).closest("tr"); 
			 
			 var col2=currentRow.find("td:eq(1)").text(); // get current row for mu order
			 priceBike = currentRow.find("td:eq(2)").text() // get the price for my order
			 $('#Bike').val(col2);
		});
	});


