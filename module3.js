var CarLot = (function (CarLot) {

  //removes the inline style attributes and changes
  //to the original values
	CarLot.originalValues = function(value){
    value.removeAttribute("style");
	};

  //styles the selected elment with black border and blue background
  CarLot.newValues = function(element, color){
    element.setAttribute("style", `background: ${color}; border: 4px solid black;`);
  };

	return CarLot;

})(CarLot || {});
