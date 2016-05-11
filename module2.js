var CarLot = (function (CarLot) {
  var insertToDom = document.getElementById("insertToDom");
  var inputText = document.getElementById("inputText");

  function changeText(element){
    inputText.value = "";
    inputText.addEventListener("input", function(event){
      element.innerHTML = inputText.value;
    })
  }

    //calls function to remove the style attribute of the p tag if the value is not null
  function removeStyle(){
    var element = document.querySelector("p[style]");
    if (element !== null) {
      CarLot.originalValues(element);
    }
  }

  //Activates all of the events.
  // CarLot.activateEvents = function (carData) {
  //   insertToDom.addEventListener("click", function (event) {
  //     // var skuDiv = event.target.closest("P");
  //     // console.log(skuDiv);
  //     var element = event.target;
  //     var color = "LightBlue";
  //     removeStyle();
  //     inputText.focus();
  //     changeText(skuDiv);
  //     if (element.tagName === "P") {
  //     CarLot.newValues(element, color);;
  //     }
  //   });
  // }

  CarLot.addEventListenerCarCard = function (inventory){
    var cars = inventory.cars;
    cars.forEach(function (car){
      document.getElementById(car.sku).addEventListener("click", function(){
        var cardIdDiv = event.target.closest("P");
        console.log(cardIdDiv);
        var element = event.target;
        var color = "LightBlue";
        removeStyle();
        inputText.focus();
        changeText(cardIdDiv);
        if (element.tagName === "P") {
        CarLot.newValues(element, color);;
        }
      });
    });
  };


	return CarLot;

})(CarLot || {});


