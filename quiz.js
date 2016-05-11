
function borderColor (inventory) {
var colorValue = inventory.cars;
	colorValue.forEach(function (item){
		document.getElementById(item.sku).style.borderColor = item.color;
	});
}

function populatePage (inventory) {
	function loopToDom(item){
		sum += `<div id="${item.sku}" class="col-md-4 column carCard">
		<h3>${item.year} ${item.make} ${item.model}</h3>
		<section class="listItems">
		<div>Sku: ${item.sku}</div>
		<div>Price: $${item.price}</div>
		<div>Color: ${item.color}</div>
		<div>Purchased: ${item.purchased}</div>
		</section>
		<h4>Description:</h4>
		<p>${item.description}</p></div>`;
	}
	var carData = inventory.cars;
	var domID = document.getElementById("insertToDom");
	var sum = "";
	// CarLot.activateEvents(carData);
	carData.forEach(function(item, index){
		if ((index + 1) % 3 === 0) {
			sum += `<div class="row">`;
			loopToDom(item);
			sum += `</div>`;
		} else {
			loopToDom(item);
		}

	});
	domID.innerHTML = sum;
	borderColor(inventory);
	CarLot.activateEvents(inventory);
}


	// Now that the DOM is loaded, establish all the event listeners needed
	// CarLot.activateEvents();

// Load the inventory and send a callback function to be
// invoked after the process is complete
CarLot.loadInventory(populatePage);


