var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];
var element = "fork";

function addElementToBeginningOfArray (chocolateBars, element){
  return [element, ...chocolateBars];
}
function destructivelyAddElementToBeginningOfArray(array, element){
  chocolateBars.unshift(element);
  return chocolateBars;
}