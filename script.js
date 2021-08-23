var cookiesDiv = document.querySelector("#cookies") // Target Cookies Div

function accept(){ // Function when Accept Btn is Pressed
    cookiesDiv.remove()
}

function c2f(temp) {  // Function to update Celsius to Farenheit
    return Math.round(9 / 5 * temp + 32);
}

function f2c(temp) { // Function to update Farenheit to Celcius
    return Math.round((5/9) * (temp - 32));
}


function convert(element){  //Convert references the select button using "this"
    for(var i = 1; i < 9; i++){
        var tempId = document.querySelector("#temp" + i) // Sets a temporary var that will grab each ID of temps iterating through all them
        var tempVal = parseInt(tempId.innerText)  // Will grab the integer associated with the ID and change it into a string
        if(element.value == 'Celcius'){  // Check to see element value is C or F
            tempId.innerText = f2c(tempVal);
        } else {
            tempId.innerText = c2f(tempVal);
        }
    }
}

