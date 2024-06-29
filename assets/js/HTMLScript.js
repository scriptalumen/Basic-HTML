function textchecker() {
    var textField1 = document.getElementById('textField1');
    if (textField1.value == "") {
    alert("Please type in the field");
    } else {
      alert("You entered: " + textField1.value);
    }
}
