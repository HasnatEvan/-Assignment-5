// document.getElementById('noakhali-btn').addEventListener('click', function(event) {
//     event.preventDefault();
    
//     const amountDoneted = getInputFieldValueById('amount-doneted');

//     if (isNaN(amountDoneted) || amountDoneted === ''|| amountDoneted<0) {
//         alert('Something wrong');
//         return;
//     }

//     const mainAmount = getTextFiledValueById('main-amount');

//     if (mainAmount <= 0) {
//         alert('Not Enough Money');
//         return;
//     }

//     const newBalance = mainAmount - amountDoneted;
//     document.getElementById('main-amount').innerText = newBalance;

//     const noakhaliAmount = getTextFiledValueById('noakhali-amount');
//     const newBalanceNoakhali = noakhaliAmount + amountDoneted;
//     document.getElementById('noakhali-amount').innerText = newBalanceNoakhali;

//     const p=document.createElement('p')
//     p.innerText.Added:${amountDoneted} Tk:Balance:${}

//     document.getElementById('model').click();
// });
// document.getElementById('model').addEventListener('click', function() {
//     const modal = document.getElementById('my_modal_1');
//     modal.showModal();
// });
// // .............................................

// document.getElementById('fani-btn').addEventListener('click',function(event){
//     event.preventDefault();
//       const amountDoneted=getInputFieldValueById('fani-amount-donate');

//       if(isNaN(amountDoneted)||amountDoneted===''||amountDoneted<0){
//         alert('SomeThing Wrong')
//         return
//       }

//       const mainAmount=getTextFiledValueById('main-amount')
//        if(mainAmount <=0){
//         alert('Not Enough Money')
//         return;
//        }
//        const newBalance=mainAmount-amountDoneted
//        document.getElementById('main-amount').innerText=newBalance

//        const faniAmount=getTextFiledValueById('fani-amount')
//        const newBalancefani=faniAmount+amountDoneted
//        document.getElementById('fani-amount').innerText=newBalancefani
//     //    alert('Donated Money ')
       
//     document.getElementById('model').click();
// })
// document.getElementById('model').addEventListener('click', function() {
//     const modal = document.getElementById('my_modal_1');
//     modal.showModal();
// });

// // /........................................................................

// document.getElementById('Aid-btn').addEventListener('click',function(event){
//     event.preventDefault()
//     const amountDoneted=getInputFieldValueById('Aid-amount-donate')
//     if(isNaN(amountDoneted)||amountDoneted===''||amountDoneted<0){

//         alert ('Something Wrong')
//     return
//     }
//     const mainAmount=getTextFiledValueById('main-amount')
//     if(mainAmount<=0){
//         alert('Not Enough Money')
//         return;
//     }
//     const newBalance=mainAmount-amountDoneted
//     document.getElementById('main-amount').innerText=newBalance


//     const aidAmount=getTextFiledValueById('Aid-amount')
//     const newBalanceAid=aidAmount+amountDoneted
//     document.getElementById('Aid-amount').innerText=newBalanceAid
//     // alert('Donated Money')
//     document.getElementById('model').click();

// })

// document.getElementById('model').addEventListener('click', function() {
//     const modal = document.getElementById('my_modal_1');
//     modal.showModal();
// });


// document.getElementById('noakhali-btn').addEventListener('click', function(event) {
//     event.preventDefault();
//     const amountDoneted = getInputFieldValueById('amount-doneted');

//     if (isNaN(amountDoneted) || amountDoneted <= 0) {
//         alert('Something is wrong');
//         return;
//     }

//     const mainAmount = getTextFieldValueById('main-amount');
//     if (mainAmount <= 0) {
//         alert('Not Enough Money');
//         return;
//     }

//     document.getElementById('main-amount').innerText = mainAmount - amountDoneted;
//     document.getElementById('noakhali-amount').innerText = getTextFieldValueById('noakhali-amount') + amountDoneted;

//     document.getElementById('my_modal_1').showModal();
// // });

// // Navigation Button Handlers
// document.getElementById('donations').addEventListener('click', function() {
//     showSelectionById('donation-part');
// });
// document.getElementById('history').addEventListener('click', function() {
//     showSelectionById('history-part');
// });



document.getElementById('donate-now-btn').addEventListener('click', function(event){
    event.preventDefault()
     const enterDonateAmount=getInputFieldValueById('enter-donate-amount') 
     if (isNaN(enterDonateAmount) || enterDonateAmount === ''|| enterDonateAmount<0) {
                alert('Something wrong');
                return;
            }
            const mainAmount = getTextFiledValueById('main-amount');

    if (mainAmount <= 0) {
        alert('Not Enough Money');
        return;
    }
    const newBalance = mainAmount - enterDonateAmount;
    document.getElementById('main-amount').innerText = newBalance;

    const amountArea=getTextFiledValueById('area-amount')
       const newAmount=amountArea+enterDonateAmount



       document.getElementById('area-amount').innerText=newAmount
    //    alert('Donated Money ')
    const currentDate = new Date();
const formattedDate = `Date: ${currentDate.toDateString()} ${currentDate.toLocaleTimeString()} GMT +${currentDate.getTimezoneOffset() / -60}`;

const p = document.createElement('p');
p.innerText = `Donate: ${enterDonateAmount} Tk. New Balance: ${newBalance}\nDonated For Noakhali-2024, Bangladesh\n${formattedDate}`;

document.getElementById('history-contanier').appendChild(p);

document.getElementById('history-contanier').appendChild(p);

// ............................................................................

       document.getElementById('model').click();
        
})
document.getElementById('model').addEventListener('click', function() {
        const modal = document.getElementById('my_modal_1');
        modal.showModal()
    })

// .................................................................................
document.getElementById('donate-now-btn-fani').addEventListener('click', function(event){
    event.preventDefault()
     const enterDonateAmount=getInputFieldValueById('enter-donate-amount-fani') 
     if (isNaN(enterDonateAmount) || enterDonateAmount === ''|| enterDonateAmount<0) {
                alert('Something wrong');
                return;
            }
            const mainAmount = getTextFiledValueById('main-amount');

    if (mainAmount <= 0) {
        alert('Not Enough Money');
        return;
    }
    const newBalance = mainAmount - enterDonateAmount;
    document.getElementById('main-amount').innerText = newBalance;

    const amountArea=getTextFiledValueById('area-amount-fani')
       const newAmount=amountArea+enterDonateAmount
       document.getElementById('area-amount-fani').innerText=newAmount
    //    alert('Donated Money ')
    const currentDate = new Date();
const formattedDate = `Date: ${currentDate.toDateString()} ${currentDate.toLocaleTimeString()} GMT +${currentDate.getTimezoneOffset() / -60}`;

const p = document.createElement('p');
p.innerText = `Donate: ${enterDonateAmount} Tk. New Balance: ${newBalance}\nDonated For Fani-2024, Bangladesh\n${formattedDate}`;

document.getElementById('history-contanier-2').appendChild(p);

document.getElementById('history-contanier-2').appendChild(p);








       document.getElementById('model').click();
        
})
document.getElementById('model').addEventListener('click', function() {
        const modal = document.getElementById('my_modal_1');
        modal.showModal()
    })
// ...............................................................
document.getElementById('donate-now-btn-injuared').addEventListener('click', function(event){
    event.preventDefault()
     const enterDonateAmount=getInputFieldValueById('enter-donate-amount-injuared') 
     if (isNaN(enterDonateAmount) || enterDonateAmount === ''|| enterDonateAmount<0) {
                alert('Something wrong');
                return;
            }
            const mainAmount = getTextFiledValueById('main-amount');

    if (mainAmount <= 0) {
        alert('Not Enough Money');
        return;
    }
    const newBalance = mainAmount - enterDonateAmount;
    document.getElementById('main-amount').innerText = newBalance;

    const amountArea=getTextFiledValueById('area-amount-injured')
       const newAmount=amountArea+enterDonateAmount
       document.getElementById('area-amount-injured').innerText=newAmount
    //    alert('Donated Money ')


    const currentDate = new Date();
    const formattedDate = `Date: ${currentDate.toDateString()} ${currentDate.toLocaleTimeString()} GMT +${currentDate.getTimezoneOffset() / -60}`;
    
    const p = document.createElement('p');
    p.innerText = `Donate: ${enterDonateAmount} Tk. New Balance: ${newBalance}\nDonated For Aid for Injured in the Quota Movement-2024, Bangladesh\n${formattedDate}`;
    
    document.getElementById('history-contanier-3').appendChild(p);
    
    document.getElementById('history-contanier-3').appendChild(p);
    












       document.getElementById('model').click();
        
})
document.getElementById('model').addEventListener('click', function() {
        const modal = document.getElementById('my_modal_1');
        modal.showModal()
    })

// .................................................................
