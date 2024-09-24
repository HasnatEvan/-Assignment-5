document.getElementById('noakhali-btn').addEventListener('click', function(event) {
    event.preventDefault();
    
    const amountDoneted = getInputFieldValueById('amount-doneted');

    if (isNaN(amountDoneted) || amountDoneted === ''|| amountDoneted<0) {
        alert('Something wrong');
        return;
    }

    const mainAmount = getTextFiledValueById('main-amount');

    if (mainAmount <= 0) {
        alert('Not Enough Money');
        return;
    }

    const newBalance = mainAmount - amountDoneted;
    document.getElementById('main-amount').innerText = newBalance;

    const noakhaliAmount = getTextFiledValueById('noakhali-amount');
    const newBalanceNoakhali = noakhaliAmount + amountDoneted;
    document.getElementById('noakhali-amount').innerText = newBalanceNoakhali;

    document.getElementById('model').click();
});
document.getElementById('model').addEventListener('click', function() {
    const modal = document.getElementById('my_modal_1');
    modal.showModal();
});
// .............................................

document.getElementById('fani-btn').addEventListener('click',function(event){
    event.preventDefault();
      const amountDoneted=getInputFieldValueById('fani-amount-donate');

      if(isNaN(amountDoneted)||amountDoneted===''||amountDoneted<0){
        alert('SomeThing Wrong')
        return
      }

      const mainAmount=getTextFiledValueById('main-amount')
       if(mainAmount <=0){
        alert('Not Enough Money')
        return;
       }
       const newBalance=mainAmount-amountDoneted
       document.getElementById('main-amount').innerText=newBalance

       const faniAmount=getTextFiledValueById('fani-amount')
       const newBalancefani=faniAmount+amountDoneted
       document.getElementById('fani-amount').innerText=newBalancefani
    //    alert('Donated Money ')
       
    document.getElementById('model').click();
})
document.getElementById('model').addEventListener('click', function() {
    const modal = document.getElementById('my_modal_1');
    modal.showModal();
});

// /........................................................................

document.getElementById('Aid-btn').addEventListener('click',function(event){
    event.preventDefault()
    const amountDoneted=getInputFieldValueById('Aid-amount-donate')
    if(isNaN(amountDoneted)||amountDoneted===''||amountDoneted<0){

        alert ('Something Wrong')
    return
    }
    const mainAmount=getTextFiledValueById('main-amount')
    if(mainAmount<=0){
        alert('Not Enough Money')
        return;
    }
    const newBalance=mainAmount-amountDoneted
    document.getElementById('main-amount').innerText=newBalance


    const aidAmount=getTextFiledValueById('Aid-amount')
    const newBalanceAid=aidAmount+amountDoneted
    document.getElementById('Aid-amount').innerText=newBalanceAid
    // alert('Donated Money')
    document.getElementById('model').click();

})

document.getElementById('model').addEventListener('click', function() {
    const modal = document.getElementById('my_modal_1');
    modal.showModal();
});