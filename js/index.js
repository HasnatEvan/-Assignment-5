
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


document.getElementById('blog-btn').addEventListener('click',function(event){
    event.preventDefault();
    
     window.location.href='/home.html'
    
})

// ....
const historyTab = document.getElementById('history');
const donationsTab = document.getElementById('donations');

historyTab.addEventListener('click', function() {
    historyTab.classList.add('bg-lime-500');

    donationsTab.classList.remove('bg-lime-500');
});

donationsTab.addEventListener('click', function() {
    
    donationsTab.classList.add('bg-lime-500');

    historyTab.classList.remove('bg-lime-500');
});
