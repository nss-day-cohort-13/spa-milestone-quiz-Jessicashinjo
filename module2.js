var CarLot = (function (CarLot) {
  var insertToDom = document.getElementById("insertToDom");
  var inputText = document.getElementById("inputText");
  var button = document.getElementById("submitButton");
  var carDescription;

  //changes the description to match the changes in the input field
  function bindHTMLToValue () {
    carDescription.innerHTML = inputText.value;
  }

  //changes the input field to match the description text
  function changeTextInDescription(carDescription){
    if (carDescription !== null) {
    inputText.value = carDescription.innerHTML;
    inputText.addEventListener("input", bindHTMLToValue);
    };
  }

  //calls function to remove the style attribute of the p tag and article tag
  //if the value is not null
  function removeInlineStyling(){
    var pStyle = document.querySelector("p[style]");
    var articleStyle = document.querySelector("article[style]");
    if (pStyle !== null) {
      CarLot.originalValues(pStyle);
    }
    if (articleStyle !== null) {
      CarLot.originalValues(articleStyle);
    }
  }

  //changes the purchased value to true or false by clicking button
  function buttonClick() {
    var item = carDescription;
    if (item.tagName === "ARTICLE") {
      if (item.innerHTML === "Purchased: false") {
        item.innerHTML = "Purchased: true";
      } else {
        item.innerHTML = "Purchased: false";
      }
    } else {
      alert("Please click on the 'purchased' field");
    }
  }

  function chainReaction(){
    var cardIdDiv = event.target.closest("P");
    carDescription = event.target;
    var color = "LightBlue";
    inputText.value = '';
    removeInlineStyling();
    inputText.focus();
    if (carDescription.tagName === "P" || carDescription.tagName === "ARTICLE") {
    CarLot.newValues(carDescription, color);;
    }
    changeTextInDescription(cardIdDiv);
    button.addEventListener("click", buttonClick);
  };

  //activates event listeners
  CarLot.activateEvents = function (inventory){
    var cars = inventory.cars;
    cars.forEach(function (car){
      document.getElementById(car.sku).addEventListener("click", chainReaction);
    });
  };

	return CarLot;

})(CarLot || {});
