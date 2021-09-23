init();
function select(rectNumber) {

if(rectNumber !== valgtStolpe){
    valgtStolpe = rectNumber;
    disabled = false;
} 
else {
    valgtStolpe = "";
    disabled = true;
}

init();
}

function addBar() {
    
    let antall=inputValue

    if (inputValue >= 1 && inputValue < 11)
        
    if (antall == Math.round(antall)) {
        
    numbers.push(inputValue);
        
        }
        else
        {
            alert("Feilmelding! Feil verdi");
        }

        else
        {
            alert("Feilmelding! Feil verdi");
        }

    init(); 

    }

function deleteBar() {
    
    const removed = numbers.splice(valgtStolpe -1, 1);
    valgtStolpe = '';

     init();

 }

function changeBar() {
    
    let antall=inputValue

    if (inputValue >= 1 && inputValue < 11)
        
    if (antall == Math.round(antall)) {
        
        numbers[valgtStolpe - 1] = inputValue;
        
        }
        else
        {
            alert("Feilmelding! Feil verdi");
        }

        else
        {
            alert("Feilmelding! Feil verdi");
        }

    init(); 

    }
