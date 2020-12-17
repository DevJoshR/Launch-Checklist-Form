// Write your JavaScript code here!
window.addEventListener("load", function() {

   let form = document.querySelector("form");
   form.addEventListener("submit", function(event) {
      //grab each button to to make an if statement to insure there is value entered
       //alert("All fields are required!");
       let pilotName = document.querySelector("input[name=pilotName]");
       console.log(pilotName);
   });
});
/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/
