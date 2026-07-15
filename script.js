const tipAmountText = document.getElementById('tip-amount')
const totalPerPersonText = document.getElementById('total-per-person')
const billAmountInput = document.getElementById('bill-amount')
const numberOfPeopleInput = document.getElementById('number-of-people')
const calculateBtn = document.getElementById('calculate')
// console.log(calculateBtn);

calculateBtn.addEventListener('click', ()=>{
    const origBillAmount = parseFloat(billAmountInput.value)
    // console.log(origBillAmount);
    const numberOfPeoples = parseInt(numberOfPeopleInput.value)
    // console.log(numberOfPeoples);

    const selectedRadioTip = document.querySelector('input[name="tip"]:checked')
    // console.log(selectedRadioTip.value);
    const tipPersentage = parseInt(selectedRadioTip.value.slice(0,-1))
    // console.log(tipPersentage);

    const totalTip = origBillAmount/100*tipPersentage
    // console.log(totalTip);
    
    tipAmountText.textContent = totalTip.toFixed(2)
    
    const totalBill = origBillAmount+totalTip
    console.log(totalBill);
    const perPerson = totalBill/numberOfPeoples
    console.log(perPerson);
    
    totalPerPersonText.textContent = perPerson.toFixed(2)
})