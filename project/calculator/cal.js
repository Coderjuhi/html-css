const inputBox = document.getElementById('inputBox')

const buttons = document.querySelectorAll('#button')
document.addEventListener("click",
    function () {
        document.getElementById("button").buttons = '#inputBox'
    });
function fun(e) {
    console.log(e.value);
    value = e.value
    if (e.value == "AC") {
        inputBox.setAttribute("value", " ")
    }

    else if (e.value == "=") {
        inputBox.setAttribute("value", eval(calculatingString))

    }
    else if (e.value == "DE") {
            

    }    
    else {

        calculatingString = inputBox.getAttribute("value") + e.value
        inputBox.setAttribute("value", calculatingString)
    }
    
    
    // if (e.value === "=") {
    //     console.log(calculatingString)
    //     console.log(eval(calculatingString));
    // }

}

