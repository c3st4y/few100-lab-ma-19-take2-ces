
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

function doTenPercent() {

    const billAmt = userBill.valueAsNumber;
    const tip = (multiply(billAmt, .10));
    
    headerTip.innerText = "10%";
    billAmount.innerText = '$' + billAmt.toFixed(2);
    tipPercentage.innerText = "10%";
    amountOfTip.innerText = '$' +tip.toFixed(2);
    totalPaid.innerText = '$' + (add( billAmt, tip)).toFixed(2);
}

function doFifteenPercent() {

    const billAmt = userBill.valueAsNumber;
    const tip = (multiply(billAmt, .15));
    
    headerTip.innerText = "15%";
    billAmount.innerText = '$' + billAmt.toFixed(2);
    tipPercentage.innerText = "15%";
    amountOfTip.innerText = '$' +tip.toFixed(2);
    totalPaid.innerText = '$' + (add( billAmt, tip)).toFixed(2);
}

function doTwentyPercent() {

    const billAmt = userBill.valueAsNumber;
    const tip = (multiply(billAmt, .20));
    
    headerTip.innerText = "20%";
    billAmount.innerText = '$' + billAmt.toFixed(2);
    tipPercentage.innerText = "20%";
    amountOfTip.innerText = '$' +tip.toFixed(2);
    totalPaid.innerText = '$' + (add( billAmt, tip)).toFixed(2);
}

tenPercentButton.addEventListener('click', doTenPercent);
fifteenPercentButton.addEventListener('click', doFifteenPercent);
twentyPercentButton.addEventListener('click', doTwentyPercent);

}
