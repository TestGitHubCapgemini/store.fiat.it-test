function myFunction() {
            
      var message = document.getElementById('vfMessage').value;
            window.parent.postMessage(message, lexOrigin);
  }
