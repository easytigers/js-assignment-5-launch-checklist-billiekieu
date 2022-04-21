// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   /*
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: </li>
                    <li>Diameter: </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: </li>
                    <li>Number of Moons: </li>
                </ol>
                <img src="">
   */
}


// function validates input to determine its type
function validateInput(testInput){
    let numberInput = Number(testInput);
    if (testInput === "") {
        return "Empty";
    } else if (isNaN(numberInput)) { 
        return "Not a Number";
    } else if (isNaN(numberInput) === false); {
        return "Is a Number";
    }
}



function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
   if (validateInput(pilot) === "Empty" || validateInput(copilot) === "Empty" || validateInput(fuelLevel) === "Empty" || validateInput(cargoLevel) === "Empty") {
       window.alert("All fields are required");
   } else if (validateInput(pilot) === "Is a Number" || validateInput(copilot) === "Is a Number" || validateInput(fuelLevel) === "Not a Number" || validateInput(cargoLevel) === "Not a Number") {
       window.alert("Not a valid value");
   } else {
       
       let pilotStatusUpdate = document.getElementById('pilotStatus').innerHTML;
       let copilotStatusUpdate = document.getElementById('copilotStatus').innerHTML;
       let fuelStatusUpdate = document.getElementById('fuelStatus').innerHTML;
       let cargoStatusUpdate = document.getElementById('cargoStatus').innerHTML;
       
       let status = document.getElementById('launchStatus');
       document.style.visibility = "visible";

       pilotStatusUpdate = `Pilot ${pilot.value} Ready`;
       copilotStatusUpdate = `Copilot ${copilot.value} is ready for launch.`
       if (fuelLevel < 10000) {
            fuelStatusUpdate = "There is not enough fuel for the journey.";
            status.innerHTML = "Shuttle not ready for launch";
            status.style.color = "red";
        } else {
            status.innerHTML = "Shuttle is ready for launch";
            status.style.color = "green";
        }

   
       
   }
}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch().then( function(response) {
        });

    return planetsReturned;
}

function pickPlanet(planets) {
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
