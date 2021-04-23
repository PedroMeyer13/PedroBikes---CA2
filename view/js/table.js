
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

