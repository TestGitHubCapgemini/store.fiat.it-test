function myFunction() {
            
    let nameVal = document.getElementById("fname").value;
    let lastNameVal = document.getElementById("lname").value;
    alert("The form was submitted " + nameVal + " " + lastNameVal);
  }

  if (window.addEventListener) {
    // For standards-compliant web browsers
    window.addEventListener("message", handleMessage, false);
  } else {
    window.attachEvent("onmessage", handleMessage);
  }

  function handleMessage(evt){
    
  }
