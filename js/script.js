function checkConditionFunc() {
  // Get the checkbox
  var checkBox = document.getElementById("checkCondition");
  // Get the output text
  var div = document.getElementById("conditionCheckedDiv");

  // If the checkbox is checked, display the output text
  if (checkBox.checked == true){
    div.style.display = "block";
  } else {
    div.style.display = "none";
  }
}// JavaScript Document// JavaScript Document