
var newArray = []
	
	async function getData(){
		const response = await fetch('/bikes');
		const data = await response.json();
		newArray = data;
		buildTable(data)
	}
	getData();

	async function insertData(name, days, user){ 
		const formData = {
			'Name': name,
			'days': days,
			'user': user
		};

		const response = axios.post('/bikes', {
			formData
		  });

		console.log(response);

		/*const options = {
			method: 'post',
			mode: 'cors', // no-cors, *cors, same-origin
			credentials: 'same-origin', // include, *same-origin, omit
			headers: {
				'Content-Type': 'application/json'
			},
			body: formData
		};

		console.log(options)
		const response = await fetch('/bikes', options)
		const data  = await response.json();
		console.log(data);*/
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
					   </tr>`
			table.innerHTML += row
		}
	}

function select_row()
{
	$("#menuTable tbody tr[id]").tr(function ()
	{
		$(".selected").removeClass("selected");
		$(this).addClass("selected");
		var section = $(this).prevAll("tr").children("td[colspan='3']").length - 1;
		var option = $(this).attr("id") - 1;
		delete_row(section, option);
		console.log("Hello")
	})
};

function delete_row(sec, opt)
{
	$("#delete").trigger(function ()
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
};
