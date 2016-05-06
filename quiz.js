function populatePage (inventory) {
  var carData = inventory.cars;
  var domID = document.getElementById("insertToDom");
  var sum = "";
  carData.forEach(function(item){
  sum += `<div class=\"col-md-4 column\"> <h3>${item.year} ${item.make} ${item.model}
          </h3><section class=\"listItems\"><p>Price: $${item.price}</p> <p>Color: ${item.color}
          </p><p>Purchased: ${item.purchased}</p><p>Description: ${item.description}</p></section></div>`;
  domID.innerHTML = sum;
});

  // Now that the DOM is loaded, establish all the event listeners needed
  // CarLot.activateEvents();
}

// Load the inventory and send a callback function to be
// invoked after the process is complete
CarLot.loadInventory(populatePage);
