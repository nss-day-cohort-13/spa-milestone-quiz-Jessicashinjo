var CarLot = (function (CarLot) {
	var carInventory = [];

	//loads the request and provides the json info to the callback
	CarLot.loadInventory = function (callback) {
		var inventoryLoader = new XMLHttpRequest();

		inventoryLoader.addEventListener("load", function () {
			carInventory = JSON.parse(this.responseText);
			callback(carInventory);
		});
		inventoryLoader.addEventListener("error", function () {
			throw "data did not load";
		});
		inventoryLoader.open("GET", "inventory.json");
		inventoryLoader.send();
	};

	CarLot.getInventory = function () {
		return carInventory;
	};

	return CarLot;


})(CarLot || {});
