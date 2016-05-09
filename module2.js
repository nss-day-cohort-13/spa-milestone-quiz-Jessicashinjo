var CarLot = (function (CarLot) {

  CarLot.activateEvents = function () {
    document.getElementById("insertToDom").addEventListener("click", function (){
    CarLot.originalValues(event.target.id);
    console.log("1st");
    });
  };


  return CarLot;

})(CarLot || {});


// The second IIFE should augment the original one with a function that
// creates all of the eventHandlers that you need for the application.
// Name the function activateEvents.
