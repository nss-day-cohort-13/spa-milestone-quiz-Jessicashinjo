var CarLot = (function (CarLot) {
	var carInventory = [];

	CarLot.getInventory = function () {
		return carInventory;
	};

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

	return CarLot;


})(CarLot || {});
