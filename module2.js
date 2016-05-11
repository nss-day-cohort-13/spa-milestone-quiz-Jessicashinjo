var CarLot = (function (CarLot) {
  var insertToDom = document.getElementById("insertToDom");
  var inputText = document.getElementById("inputText");
  var button = document.getElementById("submitButton");
  var carDescription;

  function bindHTMLToValue () {
    carDescription.innerHTML = inputText.value;
  }

  function changeText(carDescription){
    if (carDescription !== null) {
    inputText.value = carDescription.innerHTML;
    inputText.addEventListener("input", bindHTMLToValue);
    };
  }

    //calls function to remove the style attribute of the p tag if the value is not null
  function removeStyle(){
    var pStyle = document.querySelector("p[style]");
    var articleStyle = document.querySelector("article[style]");
    if (pStyle !== null) {
      CarLot.originalValues(pStyle);
    }
    if (articleStyle !== null) {
      CarLot.originalValues(articleStyle);
    }
  }

  function buttonClick() {
    var item = carDescription;
    if (item.tagName === "ARTICLE") {
      if (item.innerHTML === "Purchased: false") {
        item.innerHTML = "Purchased: true";
      } else {
        item.innerHTML = "Purchased: false";
      }
    } else {
      alert("Please click on a 'purchased' area");
    }
  }

  function chainReaction(){
    var cardIdDiv = event.target.closest("P");
    carDescription = event.target;
    var color = "LightBlue";
    inputText.value = '';
    removeStyle();
    inputText.focus();
    if (carDescription.tagName === "P" || carDescription.tagName === "ARTICLE") {
    CarLot.newValues(carDescription, color);;
    }
    changeText(cardIdDiv);
    button.addEventListener("click", buttonClick);
  };

  CarLot.activateEvents = function (inventory){
    var cars = inventory.cars;
    cars.forEach(function (car){
      document.getElementById(car.sku).addEventListener("click", chainReaction);
    });
  };

	return CarLot;

})(CarLot || {});


