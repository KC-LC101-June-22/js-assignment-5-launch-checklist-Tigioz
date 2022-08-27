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

function validateInput(testInput) {
    if(testInput === "") {
        return 'Empty'
       } else if (isNaN(testInput)) {
        return 'Not a Number';
       } else if (!isNaN(testInput)){
        return 'Is a Number'
       }
}

function formSubmission(/*documnet, list,*/pilot, copilot, fuelLevel, cargoLevel) {
    window.alert("function")
    let validPilot = validateInput(pilot);
    let validCopilot = validateInput(copilot);
    let validFuelLevel = validateInput(fuelLevel);
    let validCargoLevel = validateInput(cargoLevel);


        if (validPilot === 'Empty' || validCopilot === 'Empty' || validFuelLevel === 'Empty' || validCargoLevel === 'Empty') {
          alert("All fields required") 
          //event.preventDefault()
        
         } //else { //(validPilot === 'Is a Number' || validCopilot === 'Is a Number') {
    //       alert("No numbers in this field")
    //      // event.preventDefault()
    // //   }else if(validateInput(fuelLevel) === 'Not a Number' || validateInput(cargoLevel) === 'Not a Number') {
    // //       alert("Please enter a number");
    // //       //event.preventDefault()
    //  } 
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
