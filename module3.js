var CarLot = (function (CarLot) {

	CarLot.originalValues = function(value){
    value.removeAttribute("style");
	};

  CarLot.newValues = function(element, color){
    element.setAttribute("style", `background: ${color}; border: 4px solid black;`);
  };

	return CarLot;

})(CarLot || {});
