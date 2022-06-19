//selectors
const tips = document.querySelectorAll('.tip')
const bill = document.getElementById('bill')
const people = document.getElementById('people')
const selectTipDiv = document.getElementById('select-tip')
const resetButton = document.getElementById('reset')
const totalNumber = document.getElementById('total-number')
const tipAmountNumber = document.getElementById('tip-amount-number')

let lastActiveTipButton = null

//events
tips.forEach(tip => {
    tip.addEventListener('click', () => {
        tip.classList.add('active') 
        if (tip.classList['1'] == 'custom') {
            if (!selectTipDiv.childNodes['5']) {
                let input = document.createElement('input')
                input.id = 'custom-tip'
                input.type = 'number'   
                selectTipDiv.appendChild(input)
            }
            tip.style.background = 'lightgrey'
        }
        if (lastActiveTipButton != null && lastActiveTipButton != tip) {
            lastActiveTipButton.classList.remove('active')
            if (lastActiveTipButton.classList['1'] == 'custom') {
                lastActiveTipButton.style.background = 'var(--Light-grayish-cyan2)'
                selectTipDiv.removeChild(selectTipDiv.lastChild)
            }
        }
        lastActiveTipButton = tip
    })
})

resetButton.addEventListener('click', () => {
    let billValue = Number(bill.value)
    let peopleValue = Number(people.value)
    let activeTip = null
    for (let tip of Object.values(tips)) {
        if (tip.classList['1'] == 'active') activeTip = Number(tip.innerHTML.slice(0, tip.innerHTML.length - 1))
        else if (tip.classList['2'] == 'active') activeTip = Number(document.getElementById('custom-tip').value)
    }
    let tipAmount = (billValue*activeTip)/(100*peopleValue)
    let total = billValue/peopleValue + tipAmount
    totalNumber.innerHTML = total.toFixed(2)
    tipAmountNumber.innerHTML = tipAmount.toFixed(2)
})


