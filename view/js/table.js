var newArray = []
	
	async function getData(){
		const response = await fetch('/bikes');
		const data = await response.json();
		newArray = data;
		buildTable(data)
	}
	getData();

	function insertData(bike, user, days){ 

	
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

	function KidsCheck(bShowKids){

		 // if bShowKids is true, then we're highlighting the bike for kids
		 var i = 0;
		 var oTable = document.getElementById('myTable');
		 var aTRs = oTable.getElementsByTagName('tr');
		 // walk through each of the table rows and see if it has a 
		 // "Kids" attribute on it.
		 for (i = 0; i < aTRs.length; i++) {
			 if (aTRs[i].getAttribute('kids') == "green") {
				 if (bShowKids = 0) {
					aTRs[i].style.backgroundColor = "";
				 } else {
					aTRs[i].style.backgroundColor = "lightGreen";
				 };
			 };
		 };
	 };
	

	function buildTable(data){
		var table = document.getElementById('myTable')
		for (var i = 0; i < data.length; i++){
			var colname = `name-${i}`
			var colage = `age-${i}`
			var colbirth = `birth-${i}`
			var kidsVer = "NotKids";
		
			if(data[i].kids == true){
				kidsVer = "green"
			}
			
			var row = `<tr kids ='${kidsVer}'>
							<td>${data[i].bike}</td>
							<td>${data[i].item}</td>
							<td hidden>${data[i].kids}</td>
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
			 var col2=currentRow.find("td:eq(1)").text(); // get current row for the order
			 $('#Bike').val(col2);
		});
	});


