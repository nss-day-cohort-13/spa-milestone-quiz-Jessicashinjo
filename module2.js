var CarLot = (function (CarLot) {
  var insertToDom = document.getElementById("insertToDom");
  var inputText = document.getElementById("inputText");
  var button = document.getElementById("submitButton");
  var carDescription;

  function bindHTMLToValue () {
    console.log(carDescription);
    carDescription.innerHTML = inputText.value;
  }

  function changeText(carDescription){
    inputText.value = carDescription.innerHTML;
    inputText.addEventListener("input", bindHTMLToValue);
  }

    //calls function to remove the style attribute of the p tag if the value is not null
  function removeStyle(){
    var pStyle = document.querySelector("p[style]");
    if (pStyle !== null) {
      CarLot.originalValues(pStyle);
    }
  }

  function chainReaction(){
    var cardIdDiv = event.target.closest("P");
    console.log(cardIdDiv);
    carDescription = event.target;
    var color = "LightBlue";
    removeStyle();
    inputText.focus();
    if (carDescription.tagName === "P") {
    CarLot.newValues(carDescription, color);;
    }
    changeText(cardIdDiv);
  };

  CarLot.activateEvents = function (inventory){
    var cars = inventory.cars;
    cars.forEach(function (car){
      document.getElementById(car.sku).addEventListener("click", chainReaction);
    });
  };

	return CarLot;

})(CarLot || {});


