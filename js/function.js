 function getInputFieldValueById(id){
    const inputValue=document.getElementById(id).value 
    const inputNumber=parseFloat(inputValue)
    return inputNumber
 }



 function getTextFiledValueById(id){
   const textValue=document.getElementById(id).innerText
   const textNumber= parseFloat(textValue)
   return textNumber
 }


 function showSelectionById(id){
  document.getElementById('model').classList.add('hidden');
  document.getElementById(id).classList.remove('hidden');
}