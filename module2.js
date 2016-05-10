var CarLot = (function (CarLot) {
  var insertToDom = document.getElementById("insertToDom");
  var inputText = document.getElementById("inputText");

	CarLot.activateEvents = function () {
    changeBorderAndColor();
    // inputText.focus();
	};

  function emptyTextInput (){
    inputText.value = "";
  }

  function changeText(element){
    inputText.addEventListener("input", function(){
      element.innerHTML = inputText.value;
    })
  }

  //event listener which calls function to change color and border of the selected element.
  function changeBorderAndColor() {
    insertToDom.addEventListener("click", function (event) {
      removeStyle();
      emptyTextInput();
      var element = event.target;
      var color = "LightBlue";
      if (element.tagName === "P") {
      CarLot.newValues(element, color);;
      inputText.focus();
      changeText(element);
      }
    });
  }

  //calls function to remove the style attribute of the p tag if the value is not null
  function removeStyle(){
    var element = document.querySelector("p[style]");
    if (element !== null) {
      CarLot.originalValues(element);
    }
  }



	return CarLot;

})(CarLot || {});


