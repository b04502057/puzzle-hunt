document.getElementById("lock").hidden=false;

function myFunction() {
    var n = document.getElementById('fname').value;
    var x=document.getElementById('lock');
    if (n=="Luca") {
        x.style.display = "block";
      } 
      else if(n=="luca") {
          alert("uppercase");
      }
      else  {
        alert("nice try");
      }
  }
