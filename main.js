

function myFunction() {
    let lexOrigin = "https://scacorp--scadev3.sandbox.lightning.force.com/lightning/action/quick/Lead.POC_Tarificar?objectApiName&context=RECORD_DETAIL&recordId=00Q1x000006zvGhEAI&backgroundContext=%2Flightning%2Fr%2FLead%2F00Q1x000006zvGhEAI%2Fview";
    console.log("Entra en myFunction");
    let nameVal = document.getElementById("fname").value;
    let lastNameVal = document.getElementById("lname").value;
    let message = "Este es el nombre " +nameVal + " " +  lastNameVal; 
    
    alert("The form was submitted " +message);
            window.parent.postMessage(message, lexOrigin);
  }

function createEvent(){
    console.log("Entra en onload del frame");
     window.addEventListener("message", handleMessage , false);
}

  function handleMessage(){
            console.log('Origin '+ event.origin);
            console.log('data '+ event.data);
      console.log(event.data.campo1);
      console.log(event.data.campo2);
      if(event.data.campo2 ==  "incio"){
      document.getElementById("titulo").innerHTML = event.data.campo1;
      } else if(event.data.campo2 ==  "campoInput"){
      document.getElementById("demo").innerHTML = event.data.campo1;
      }

  }
