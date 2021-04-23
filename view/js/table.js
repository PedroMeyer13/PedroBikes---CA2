var newArray = []

    $.ajax({
		method:'GET',
		url:'https://8000-amethyst-reindeer-blsh2v9e.ws-eu03.gitpod.io/bikes',
		success:function(response){
			newArray = response
			buildTable(newArray)
			console.log(newArray)
		}
	})

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
	$("#menuTable tbody tr[id]").click(function ()
	{
		$(".selected").removeClass("selected");
		$(this).addClass("selected");
		var section = $(this).prevAll("tr").children("td[colspan='3']").length - 1;
		var option = $(this).attr("id") - 1;
		delete_row(section, option);
	})
};

function delete_row(sec, opt) // need to change delete
{
	$("#delete").click(function ()
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
