var CarLot = (function (CarLot) {

  CarLot.originalValues = function(value){
    document.getElementById(value).style.border = "4px";
    document.getElementById(value).style.background = "White";
    console.log("2nd");
  };

  return CarLot;

})(CarLot || {});
