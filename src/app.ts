
import './styles.css';
import { add, multiply } from "./math";

export function runApp() {

const userBill = document.getElementById('userBill') as HTMLInputElement;
const billAmount = document.getElementById('billAmount') as HTMLInputElement;
const tipPercentage = document.getElementById('tipPercentage') as HTMLInputElement;
const headerTip = document.getElementById('headerTip') as HTMLInputElement;

const amountOfTip = document.getElementById('amountOfTip');
const totalPaid = document.getElementById('totalPaid');

const tenPercentButton = document.getElementById('tenPercent') as HTMLInputElement;
const fifteenPercentButton = document.getElementById('fifteenPercent') as HTMLInputElement;
const twentyPercentButton = document.getElementById('twentyPercent') as HTMLInputElement;

const tenPercentSelected = document.getElementById('tenPercent') as HTMLDivElement;
const fifteenPercentSelected = document.getElementById('fifteenPercent') as HTMLDivElement;
const twentyPercentSelected = document.getElementById('twentyPercent') as HTMLDivElement;

retrieveSavedButton();

function retrieveSavedButton() {

    const savedTipButton = localStorage.getItem('tipButton');
    
    if (savedTipButton === '10') {
        tenPercentSelected.classList.add('selected');
    }

    if (savedTipButton === '15') {
        fifteenPercentSelected.classList.add('selected');
    }

    if (savedTipButton === '20') {
        twentyPercentSelected.classList.add('selected');
    }
}

function doTipPercent(percent: number) {
  
    if (userBill.value.length !== 0) {

        const billAmt = userBill.valueAsNumber;
        const tip = (multiply(billAmt, multiply(.01, percent)));

        headerTip.innerText = `${percent}%`;
        billAmount.innerText = `$${billAmt.toFixed(2)}`;
        tipPercentage.innerText = `${percent}%`;
        amountOfTip.innerText = `$${tip.toFixed(2)}`;
        totalPaid.innerText = `$${(add( billAmt, tip)).toFixed(2)}`;
    } 

    setButtons(percent);
}

function setButtons (percent: number) {

    if (percent === 10) {

        tenPercentSelected.classList.add('selected');
        fifteenPercentSelected.classList.remove('selected');
        twentyPercentSelected.classList.remove('selected');
        localStorage.setItem('tipButton', '10');
    }

    if (percent === 15) {

        tenPercentSelected.classList.remove('selected');
        fifteenPercentSelected.classList.add('selected');
        twentyPercentSelected.classList.remove('selected');
        localStorage.setItem('tipButton', '15');
    }

    if (percent === 20) {

        tenPercentSelected.classList.remove('selected');
        fifteenPercentSelected.classList.remove('selected');
        twentyPercentSelected.classList.add('selected');
        localStorage.setItem('tipButton', '20');
    }
}

function clearCalculator() {

    if (userBill.value.length === 0) {
  
    headerTip.innerText = '';
    billAmount.innerText = '';
    tipPercentage.innerText = '';
    amountOfTip.innerText = '';
    totalPaid.innerText = '';
    }
}

tenPercentButton.addEventListener('click', () => doTipPercent(10));
fifteenPercentButton.addEventListener('click', () => doTipPercent(15));
twentyPercentButton.addEventListener('click', () => doTipPercent(20));
userBill.addEventListener('keyup', clearCalculator);

}
