// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   let missionTarget = document.getElementById("missionTarget");
   missionTarget.innerHTML = `
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: ${name}</li>
                    <li>Diameter: ${diameter}</li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: ${distance}</li>
                    <li>Number of Moons: ${moons}</li>
                </ol>
                <img src="${imageUrl}">
            
`}


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
       
       let pilotStatusUpdate = document.getElementById('pilotStatus');
       let copilotStatusUpdate = document.getElementById('copilotStatus');
       let fuelStatusUpdate = document.getElementById('fuelStatus');
       let cargoStatusUpdate = document.getElementById('cargoStatus');
       
       let status = document.getElementById('launchStatus');
       let list = document.getElementById("faultyItems");
       list.style.visibility = "visible";

       pilotStatusUpdate.innerHTML = `Pilot ${pilot} Ready`;
       copilotStatusUpdate.innerHTML = `Copilot ${copilot} is ready for launch.`
       if (fuelLevel < 10000) {
            fuelStatusUpdate.innerHTML = "There is not enough fuel for the journey.";
            status.innerHTML = "Shuttle not ready for launch";
            status.style.color = "red";
         
        } else if (cargoLevel > 10000) {
            cargoStatusUpdate.innerHTML = "There is too much mass for the shuttle to take off.";
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

    planetsReturned = await fetch('https://handlers.education.launchcode.org/static/planets.json').then( function(response) {
        return response.json();
    });

    return planetsReturned;
}

function pickPlanet(planets) {
    let randomIndex = Math.floor(Math.random()*planets.length);
    let randomPlanet = planets[randomIndex];
    console.log(randomPlanet);
    return randomPlanet;
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
