// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {

    let missionTarget = document.getElementById('missionTarget');

   missionTarget.innerHTML = 
               ` <h2>Mission Destination</h2>
                <ol>
                    <li>Name: ${name}</li>
                    <li>Diameter: ${diameter}</li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: ${distance}</li>
                    <li>Number of Moons: ${moons}</li>
                </ol>
                <img src="${imageUrl}">`
   
}

function validateInput(testInput) {
    if(testInput === "") {
        return 'Empty'
       } else if (isNaN(testInput)) {
        return 'Not a Number';
       } else if (!isNaN(testInput)){
        return 'Is a Number'
       }
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoMass) {
  
    let pilotStatus = document.getElementById("pilotStatus");
    let copilotStatus = document.getElementById("copilotStatus");
    let fuelStatus = document.getElementById("fuelStatus");
    let cargoStatus = document.getElementById("cargoStatus");
    let launchStatus = document.getElementById("launchStatus")

    if(validateInput(pilot) === "Empty" || validateInput(copilot) === "Empty" || validateInput(fuelLevel) === "Empty" || validateInput === "Empty"){
        alert("All fields required")
    } else if(validateInput(pilot) === "Is a Number" || validateInput(copilot) === "Is a Number" || validateInput(fuelLevel) === "Not a Number" || validateInput(cargoMass) === "Not a Number") {
        alert("Please enter valid information in each field")
    } else{
        pilotStatus.innerHTML = "Pilot " + pilot + " is ready for launch";
        copilotStatus.innerHTML = "Copilot " + copilot + " is ready for launch";
        list.style.visibility = "hidden";
        fuelStatus.innerHTML = "Fuel level high enough for launch";
        cargoStatus.innerHTML = "Cargo mass low enough for launch";
        if(fuelLevel < 10000 && cargoMass >= 10000) {
            //lowfuel tooheavy
            list.style.visibility = "visible";
            fuelStatus.innerHTML = "Not enough fuel to launch";
            cargoStatus.innerHTML = "Too much cargo to launch";
            launchStatus.innerHTML = "Shuttle not ready for launch";
            launchStatus.style.color = "red";
        }
        
        else if(fuelLevel >= 10000 && cargoMass >= 10000) {//enoughfuel tooheavy
            list.style.visibility = "visible";
            cargoStatus.innerHTML = "Too much cargo to launch";
            launchStatus.innerHTML = "Shuttle not ready for launch";
            launchStatus.style.color = "red";
        }
        
        else if(fuelLevel < 10000 && cargoMass < 10000) {//lowfuel lowmass
            list.style.visibility = "visible";
            fuelStatus.innerHTML = "Not enough fuel to launch";
            launchStatus.innerHTML = "Shuttle not ready for launch";
            launchStatus.style.color = "red";
        }
        
        else{            
            launchStatus.innerHTML = "Shuttle is ready for launch";
            launchStatus.style.color = "green";
        }

    }
   
}


async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
       return response.json()
        });

    return planetsReturned;
}

function pickPlanet(planets) {
   let index = Math.floor(Math.random() * planets.length);
   return planets[index]
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
