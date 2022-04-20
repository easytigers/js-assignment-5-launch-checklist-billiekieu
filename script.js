// Write your JavaScript code here!

window.addEventListener("load", function() {

    // Validates user input
    let form = document.querySelector('form');
    form.addEventListener("submit", function(event){
        let pilotNameInput = document.querySelector("input[name=pilotName]").value;
        let copilotNameInput = document.querySelector("input[name=copilotName]").value;
        let fuelLevelInput = document.querySelector("input[name=fuelLevel]").value;
        let cargoMassInput = document.querySelector("input[name=cargoMass]").value;
        if (pilotNameInput ==="" || copilotNameInput ==="" || fuelLevelInput ==="" || cargoMassInput ==="") {
            alert ("All fields are required.");
            event.preventDefault();
            } else if (!isNaN(pilotNameInput) || !isNaN(copilotNameInput)) {
                alert ("Please enter a valid value");
                event.preventDefault();
                } else if (isNaN(fuelLevelInput) || isNaN(cargoMassInput)) {
                    alert ("Please enter a number value");
                    event.preventDefault();
                    }
        

        // Updates faulty items
        
            let pilotStatusUpdate = document.getElementById('pilotStatus').innerHTML;
            pilotStatusUpdate = `Pilot ${pilotNameInput} Ready`;
            
        
     
                    
        });
    });

           
        
   


