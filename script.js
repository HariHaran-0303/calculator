let input = document.querySelector("input")


 function addValue(elemantval){

    input.value +=elemantval
}

function clearval(){
    input.value=""
}

function deletecharacter(){
    input.value = input.value.slice(0, input.value.length-1)
}
function evelauteval(){
    input.value = eval(input.value)
}