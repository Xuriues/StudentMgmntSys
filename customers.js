$(document).ready(function() {
	var idcount = 0;
	$("#studentform").submit(function(event) {
		event.preventDefault();
		idcount ++;
		var Lastname = $("#lastname").val() ; 
		var Name = $("#name").val() ;
		var Gender = $(".gender:checked").val() ; 
		var Address = $("#address").val();
		var Email = $("#email").val();
		var Phone = $("#phone").val();
		var errorFree = true;
		if(Phone.length != 8){
			errorFree = false;
			$("#nummsg").show();
		}
		if(Lastname == "")
				{
					errorFree = false;
					$("#lastmsg").show();
				}

		
		if(errorFree)
			{
				$("#tblData tbody").append("<tr><td>" + idcount + "</td>" + 
				"<td>" + Lastname + "</td>" +
				"<td>" + Name + "</td>" +
				"<td>" + Gender + "</td>" +
				"<td>" + Address + "</td>" + 
				"<td>" + Email + "</td>" + 
				"<td>" + Phone + "</td>" + 
				"<td><button class='btnEdit'>Edit</button>" + 
				"<button class='btnDelete'>Delete</button></td></tr>");
				$(".btnEdit").bind("click", Edit);
				$(".btnDelete").bind("click", Delete);
				$("#nummsg").hide();
				document.getElementById("address").value = "" ; 
				document.getElementById("name").value = "" ; 
				document.getElementById("lastname").value = "" ; 
				document.getElementById("email").value = "" ; 
				document.getElementById("phone").value = "" ; 
			}
	});
	
		function Edit() 
	{
			var par = $(this).parent().parent();
			var tdlLastname = par.children("td:nth-child(2)");
			var tdName = par.children("td:nth-child(3)");
			var tdGender = par.children("td:nth-child(4)");
			var tdAddress = par.children("td:nth-child(5)");
			var tdEmail = par.children("td:nth-child(6)");
			var tdPhone = par.children("td:nth-child(7)");
			var tdButtons = par.children("td:nth-child(8)");
	
				tdlLastname.html("<input type='text' required value='" + tdlLastname.html() + "'>");
				tdName.html("<input type='text' pattern='[A-Za-z]{1,}' required title ='Alphabets only.' value='" + tdName.html() + "'>");
				tdGender.html("<input type='radio' name='gender' class='gender' checked value='Male'>Male <input type='radio' name='gender' class='gender' value='Female'>Female");
				tdAddress.html("<input type='text' value='" + tdAddress.html() + "'>");
				tdEmail.html("<input type='email' value='" + tdEmail.html() + "'>");
				tdPhone.html("<input type='number' value='" + tdPhone.html() + "'>");
				tdButtons.html("<button class='btnSave'>Save</button>");

				$(".btnSave").bind("click", Save);
				$(".btnEdit").bind("click", Edit);
				$(".btnDelete").bind("click", Delete);

	}
		function Save () 
		{
			var msg = "";
			var par = $(this).parent().parent();
			var tdlLastname = par.children("td:nth-child(2)");
			var tdName = par.children("td:nth-child(3)");
			var tdGender = par.children("td:nth-child(4)");
			var tdAddress = par.children("td:nth-child(5)");
			var tdEmail = par.children("td:nth-child(6)");
			var tdPhone = par.children("td:nth-child(7)");
			var tdButtons = par.children("td:nth-child(8)");

					if(tdlLastname.children("input[type=text]").val() == "")
						{
							msg += " Last name cannot be Empty";
						}
					if(!tdName.children("input[type=text]").val().match(/^[A-Za-z]+$/))
						{
							msg += "\n Name must Alphabets only";
						}
					if(tdAddress.children("input[type=text]").val() == "")
						{
							msg += "\n Address cannot be empty"; 
						}
					if(tdPhone.children("input[type=number]").val().length != 8 )
						{
							msg += "\n Must be valid Number";
						}
					if(tdEmail.children("input[type=email]").val().includes("@") == false)
						{
							msg += "\n Email must be valid";
						}
					if(msg != "")
						{
							alert(msg);
							return;
						}

							tdlLastname.html(tdlLastname.children("input[type=text]").val());
							tdName.html(tdName.children("input[type=text]").val());
							tdGender.html(tdGender.children("input[type='radio'][name='gender']:checked").val());
							tdAddress.html(tdAddress.children("input[type=text]").val());
							tdEmail.html(tdEmail.children("input[type=email]").val());
							tdPhone.html(tdPhone.children("input[type=number]").val());	
							tdButtons.html("<button class='btnEdit'>Edit</button>" + "<button class='btnDelete'>Delete</button")
		

					$(".btnEdit").bind("click", Edit);
					$(".btnDelete").bind("click", Delete);
	}
	function Delete() 
	{
		var par = $(this).parent().parent();
		par.remove();
	}
$(function() {
	var logo = $(".text");
 logo.hide('slow');
	logo.show("slow")
});
	
});