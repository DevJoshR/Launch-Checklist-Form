// Write your JavaScript code here!
 window.addEventListener("load", function (){

       let pilotName = document.querySelector("input[name=pilotName]");
       let copilotName = document.querySelector("input[name=copilotName]");
       let fuelLevel = document.querySelector("input[name=fuelLevel]");
       let cargoMass = document.querySelector("input[name=cargoMass]");
       let form = document.querySelector("form");

   form.addEventListener("submit", function(event) {
         event.preventDefault();
      if (pilotName.value===""||copilotName.value===""||fuelLevel.value===""||cargoMass.value==="") {
         alert("All fields are required!");       
      }
      
      else if (!isNaN(pilotName.value)||!isNaN(copilotName.value)||isNaN(fuelLevel.value)||isNaN(cargoMass.value)) {
         alert("Make sure to enter in valid information for each field!");
      } 
      else  {
        let pilotStatus = document.getElementById("pilotStatus");
        let copilotStatus = document.getElementById("copilotStatus");
           pilotStatus.innerHTML=`Pilot ${pilotName.value} is Ready`;
           copilotStatus.innerHTML=`Copilot ${copilotName.value} is Ready`;
      
        if (fuelLevel.value<10000) {  
         let faultyItems = document.getElementById("faultyItems");
         let fuelStatus = document.getElementById("fuelStatus");
         let launchStatus = document.getElementById("launchStatus");
         fuelStatus.innerHTML=`Fuel level too low for launch`;
         faultyItems.style.visibility = 'visible';
         launchStatus.style.color = 'red';
         launchStatus.innerHTML=`Shuttle not ready for launch`;
      }
         else {
            fuelStatus.innerHTML=`Fuel level good for launch`;
         }
         if (cargoMass.value>10000) {
         let cargoStatus = document.getElementById("cargoStatus");
         cargoStatus.innerHTML=` too much mass for the shuttle to take off`;
         faultyItems.style.visibility = 'visible';
         launchStatus.style.color = 'red';
         launchStatus.innerHTML=`Shuttle not ready for launch`;  
      }
        else {
         cargoStatus.innerHTML=` good for the shuttle to take off`;
        }
         if (fuelLevel.value>=10000 && cargoMass.value<=10000) {
      launchStatus.style.color = 'green';
      launchStatus.innerHTML=`Shuttle is ready for launch`;
      }   
      }
   });

   fetch("https://handlers.education.launchcode.org/static/planets.json").then(function (response){
         response.json().then(function (json) {
         let missionTarget = document.getElementById("missionTarget");
         missionTarget.innerHTML=`
         <h2>Mission Destination</h2>
           <ol>
             <li>Name: ${json[0].name}</li>
             <li>Diameter: ${json[0].diameter}</li>
             <li>Star: ${json[0].star}</li>
             <li>Distance from Earth: ${json[0].distance}</li>
             <li>Number of Moons: ${json[0].moons}</li>
           </ol>
             <img src="${json[0].image}">`;
      });
   
});

});


