
function updatePhoneNumber(isIncrese){
    const phoneNumberField = document.getElementById('phone-number-field');
    const phoneNumberString = phoneNumberField.value;
    const previousPhoneNumber = parseInt(phoneNumberString);


   let newPhoneNumber;
   if(isIncrese){
        newPhoneNumber = previousPhoneNumber + 1;
   }
   else{
        newPhoneNumber = previousPhoneNumber - 1;
   }
    phoneNumberField.value = newPhoneNumber;
}

document.getElementById('btn-phone-plus').addEventListener('click', function(){

    updatePhoneNumber(true)
})

document.getElementById('btn-phone-minus').addEventListener('click', function(){
   updatePhoneNumber(false)
})