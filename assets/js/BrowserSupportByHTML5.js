var datepicker = document.createElement("input");
    var formelement = document.getElementById("thisform");
    datepicker.setAttribute("type", "date");
    formelement.appendChild(datepicker);
    if (datepicker.type == "text") {
      alert("Date input not supported.");
    }
