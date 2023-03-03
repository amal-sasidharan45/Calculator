function DisplayNumber(num){
    display.value +=num
}
function DisplayNumberzero(num,num){
    display.value +=num+num
}



function clearDisplay(){
    display.value=""
}


function Evaluate(){
display.value=eval(display.value)
}


function RemoveLastItem(){
    display.value=display.value.slice(0,-1)
}