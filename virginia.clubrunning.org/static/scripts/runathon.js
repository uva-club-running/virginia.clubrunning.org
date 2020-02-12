var API_ROOT = "http://67.207.81.90/runathonapi";
var runners;
function ready() {
	populateRunners().then(() => {
		// for pledge links: hide runner's table, automatically show pledge window
		var query = window.location.search;
		var params = new URLSearchParams(query);
		if(runners.length > 0) {
			// initialize our pledge view
			updatePledgeSelection(runners[0].runner_id, false);

			// check if we have a specific pledge to show
			var pledgeTo = params.get("pledge_to");
			if(!!pledgeTo && pledgeTo !== "") {
				updatePledgeSelection(pledgeTo);
				// hide the runner table
				document.getElementById("runners-list").remove();
				document.getElementById("pledge-form").scrollIntoView();
			}
		} else {
			document.getElementById("section-runners-pledge").remove();
		}
	}).catch((err) => {
		console.error(err);
		document.getElementById("section-runners-pledge").remove();
	});
}
function populateRunners() {
	return fetch(API_ROOT+"/get_runners")
		.then((response) => {
			return response.json();
		})
		.then((body) => {
			console.log(body);
			runners = body.runners; // update our runners cache
			var table = document.getElementById("runners-body");
			for(var i = 0; i < runners.length; i++) {
				// lord forgive me for what follows
				var runner = runners[i];
				var row = document.createElement("tr");
				var name = document.createElement("td");
				name.innerHTML = "<span class=\"strong\">"+(i + 1)+". </span> "+runner.name;
				var amount = document.createElement("td");
				amount.innerHTML = "<span class=\"strong\">$"+runner.amount_per_lap+"</span> per lap";
				var pledge = document.createElement("td");
				pledge.innerHTML = "<a onclick=\"updatePledgeSelection("+runner.runner_id+", true)\">Pledge</a>";
				row.appendChild(name);
				row.appendChild(amount);
				row.appendChild(pledge);
				table.appendChild(row);
			}
		});
}
function updatePledgeSelection(runner_id, scroll) {
	console.log("Selected "+runner_id);

	var selected;
	for(var i = 0; i < runners.length; i++) {
		if(runners[i].runner_id == runner_id)
		{
			selected = runners[i];
			break;
		}
	}

	if(!!selected) {
		document.getElementById("pledge-selected-name").innerHTML = selected.name;
		document.getElementById("pledge-selected-name-second").innerHTML = selected.name;
		document.getElementById("pledge-selected-id").value = selected.runner_id;
		if(scroll) 
			document.getElementById("pledge-form").scrollIntoView();
	}
}
window.addEventListener("DOMContentLoaded", ready);
