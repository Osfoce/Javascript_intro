let txt = document.getElementById('display')

function appendToDisplay(input){
   txt.value += input
}

function clearDisplay(){
    txt.value = ''
}

function calc(){
    try{
        txt.value = eval(txt.value)
    }
    catch(error){
        txt.value = 'Error'
    }

    clearDisplay
}