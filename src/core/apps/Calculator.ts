import { retrieveStoreSessionState, storeSessionState } from "../core";
import { AppHandler } from "../lib/AppHandler";
import "../scss/calculator.scss"

export class Calculator extends AppHandler {

    constructor() {
        super({ icon: "/img/icons/calculator.svg", name: "Calculator", handler: calculatorHandle });
    }

    render() {
        return (
            `<div id="calculator" class="calculator" id="calculator">
                <div class="display">
                    <div id="display">0</div>
                </div>
                <div id="keys">
                    <div class="row-1">
                        <button id="clear" class="top">AC</button>
                        <button class="top" id="negative"><sup>+</sup>/-</button>
                        <button class="top" id="percent">%</button>
                        <button class="operator" value="/">&#247;</button>
                    </div>
                    <div class="row-2">
                        <button class="number" value="7">7</button>
                        <button class="number" value="8">8</button>
                        <button class="number" value="9">9</button>
                        <button class="operator" value="*">&times;</button>
                    </div>
                    <div class="row-3">
                        <button class="number" value="4">4</button>
                        <button class="number" value="5">5</button>
                        <button class="number" value="6">6</button>
                        <button class="operator" value="-">-</button>
                    </div>
                    <div class="row-4">
                        <button class="number" value="1">1</button>
                        <button class="number" value="2">2</button>
                        <button class="number" value="3">3</button>
                        <button class="operator" value="+">+</button>
                    </div>
                    <div class="row-5">
                        <button class="number" value="0" id="zero">0</button>
                        <button id="decimal" value=".">.</button>
                        <button id="equals">=</button>
                    </div>
                    <div class="show-history">
                        <button type="button" id="show-history">Voir l'historique</button>
                        <div id='history_' style="display:none">
                            <button type="button" id="hide-history">Cacher l'historique</button>
                            <div id="history_spans"></div>
                        </div>
                    </div>
                </div>
        
        </div>
    `
        )
    }
}

const handleHistory = () => {
    // Get the button element
    const popupButton = document.getElementById('show-history');

    // Add a click event listener to the button
    popupButton?.addEventListener('click', async function () {
        const history_ = document.getElementById('history_');
        const divD = document.createElement("div");
        divD.style.display = 'flex'
        divD.style.flexDirection = 'column'
        const hideButton = document.getElementById('hide-history');
        
        if (history_?.style.display === "none") {
            const arrSessionResults = await retrieveStoreSessionState()
            history_!.style.display = 'flex'
            hideButton?.addEventListener('click', async function () {
                history_!.style.display = 'none'
            })
            const history_spans = document.getElementById('history_spans');

            for (const string of arrSessionResults!) {
                // Create a new span element for all strings
                const newSpan = document.createElement("span");
                // Set the text content of the span element to the string
                newSpan.textContent = string;
                // Append the span element to the div element
                divD?.appendChild(newSpan);
                divD?.appendChild(newSpan);
                
            }
            history_spans!.innerHTML = '';
            history_spans?.appendChild(divD)
        }
    });

}

const calculatorHandle = () => {
    handleHistory();
    const display: HTMLDivElement | null = document.querySelector('#display');
    const keys: HTMLDivElement | null = document.querySelector('#keys');
    //const operators = document.querySelectorAll('.operator');
    const cleared: HTMLButtonElement | null = document.querySelector('#clear');
    //const cross: HTMLButtonElement | null = document.querySelector('#app-main')

    //Declare variables to be used later
    let firstOperand: number | null,
        operatorValue: string,
        secondOperand: number | null = null,
        tempOperand: number | null = null,
        tempOperator: string,
        result = 0,
        holder,
        isNegative = false,
        wasEqualed = false;

    keys?.addEventListener('click', (e: any) => {
        let value = e?.target!.value;
        let buttonId = e.target.id;
        let buttonClass = e.target.className;

        //Determine which button was clicked and run the corresponding function
        if (buttonClass === 'number') currentNumber(+value)
        else if (buttonClass === 'operator') currentOperator(value)
        else if (buttonId === 'equals') equals();
        else if (buttonId === 'decimal') decimal();
        else if (buttonId === 'percent') percent();
        else if (buttonId === 'negative') negative();
        else if (buttonId === 'clear') cleared?.innerText === 'C' ? clear() : clearAll();
        e.target.blur()
    })

    //Listen for keyboard events
    document.addEventListener('keyup', e => {
        let value = e.key;
        if (/[0-9]/.test(value)) currentNumber(+value);
        else if (/[-+/*]/.test(value)) currentOperator(value);
        else if (value === 'Equal' || value === 'Enter') equals();
        else if (value === '.') decimal();
        else if (value === '%') percent();
        else if (value === 'Backspace') clear();
        else if (value === 'Delete') clearAll();
    })

    //Calculate and format the input
    function calculate(operand1: number, operator: string, operand2: number) {
        //The switch statement is used to evaluate the equation based on its operator
        switch (operator) {
            case '-':
                result = operand1 - operand2;
                break;
            case '+':
                result = +operand1 + +operand2;
                break;
            case '/':
                result = operand1 / operand2;
                break;
            case '*':
                result = operand1 * operand2;
        }

        //The following code aims to correct floating point imprecision
        result = Math.round(parseFloat(result.toString()) * Math.pow(10, 10)) / Math.pow(10, 10);
        storeSessionState(`${operand1} ${operator} ${operand2} = ${result}`)
        display!.innerHTML = format(result).toString();
        return result;
    }

    //Format the input
    function format(num: number) {
        num = +num;
        //If the result is too long, round it to 8 decimal places or 10 digits.
        if ((num <= 999999999 && num >= -999999999) || num.toString().replace(/[-\.]/g, '').length < 10) {
        
            //toLocaleString is used to format the number with the correct places complete with appropriate commas.
            num =  parseFloat(num.toString().replace(/\B(?=(\d{4})+(?!\d))/g, '.'));

        } 
        //Adjust the font size of the display so the number fits.
        if (num.toString().replace(/[-\.]/g, '').length >= 8) { display!.style.fontSize = '53px'; }
        return num;
    }
    

    //This function takes the current number value of a click or keypress event.
    function currentNumber(num: number) {
        display!.style.fontSize = '64px'
        cleared!.innerText = 'C';
        //This line resets the first operand after a calculation is performed.
        if (wasEqualed === true && !operatorValue) firstOperand = null;
        //The value will be added to the first operand if one does not yet exist or if an operator has not yet been selected.
        if (!operatorValue || (operatorValue && !firstOperand)) {
            firstOperand = parseInt(operands(firstOperand, num)?.toString() ?? "");
            operatorValue = '';
        }
        //The value will be added to the temporary operand if there already exists a temporary operator.
        else if (tempOperator) tempOperand = parseInt(operands(tempOperand, num)?.toString() ?? "");
        //The value will be added to the second operand.
        else secondOperand = parseInt(operands(secondOperand, num)?.toString() ?? "");
        wasEqualed = false;
    }

    //Add the current input to the operand unless it exceeds the size limit
    function operands(operand: string | number | null, value: number | null) {
        if (operand && operand.toString().replace(/[-\.]/g, '').length >= 7) display!.style.fontSize = '53px';
        if (operand && operand.toString().replace(/[-\.]/g, '').length >= 9) {
            return operand;
        }
        let result: string | undefined = operand ? operand + '' + value : value?.toString();
        result = (isNegative && parseInt(result ?? "") > 0) ? (-result!).toString() : result?.toString();
        if (format(parseInt(result ?? "")) === 0 || format(parseInt(result ?? "")) === 0) display!.innerHTML = result!;
        else display!.innerHTML = format(parseInt(result ?? "")).toString();
        return result;
    }

    //Perform the final calculation
    function finalResult(operator: string) {
        firstOperand ??= 0;
        holder = calculate(firstOperand, operatorValue, secondOperand!);
        clearAll();
        firstOperand = holder;
        operatorValue = operator;
        display!.innerHTML = format(firstOperand).toString();
    }

    //Assign the operator
    function currentOperator(operator: string) {
        isNegative = false;
        if (!secondOperand) operatorValue = operator;
        else if (secondOperand && (/[-+]/.test(operator) || /[\*\/]/.test(operatorValue))) {
            if (tempOperand) {
                secondOperand = calculate(secondOperand, tempOperator, tempOperand)
            }
            finalResult(operator);
        } else if (secondOperand && tempOperand) {
            secondOperand = calculate(secondOperand, tempOperator, tempOperand);
            tempOperand = 0;
            tempOperator = operator;
        } else if (!tempOperand) {
            tempOperator = operator;
        };
    }

    //Determine where to begin calculations and calculate
    function equals() {
        cleared!.innerText = 'AC'
        if (!secondOperand && secondOperand != 0 && operatorValue) calculate(firstOperand!, operatorValue, firstOperand!);
        if (tempOperand) secondOperand = calculate(secondOperand!, tempOperator, tempOperand);
        operatorValue && finalResult(operatorValue);
        operatorValue = '';
        wasEqualed = true;
    }

    //Add a decimal point if one is not already present and the number does not exceed size limits
    function addDecimal(num: number | null) {
        if (num) { if ((num.toString().includes('.') && !wasEqualed) || num.toString().replace(/[-\.]/g, '').length >= 9) return num; }
        if (wasEqualed) num = null
        num ??= 0;
        //num += '.'.;
        // num = isNegative ? `-${num}` : `${num}`
        display!.innerHTML = `${Object.is(num, -0) ? '-0.' : format(num) == 0 ? num : format(num) + '.'} `;
        wasEqualed = false;
        return num
    }

    //Determine which operand is active to receive a decimal point
    function decimal() {
        if (!operatorValue) firstOperand = addDecimal(firstOperand);
        else if (!tempOperator) secondOperand = addDecimal(secondOperand);
        else tempOperand = addDecimal(tempOperand);
    }

    //Determine how to calculate percent, then calculate
    function percent() {
        wasEqualed = false;
        if (!tempOperand && (operatorValue === '+' || operatorValue === '-')) {
            secondOperand = calculate(firstOperand!, '*', (calculate(secondOperand!, '/', 100)));
            display!.innerText = secondOperand.toString();
        } else if (tempOperand) {
            tempOperand = calculate(tempOperand, '/', 100);
            display!.innerText = tempOperand.toString();
        } else if (secondOperand) {
            secondOperand = calculate(secondOperand, '/', 100);
            display!.innerText = secondOperand.toString();
        } else {
            firstOperand = calculate(firstOperand!, '/', 100);
            display!.innerText = firstOperand.toString();
        }
    }

    //Determine which is the active operand and make it negative.
    function negative() {
        wasEqualed = false;
        if (!operatorValue) firstOperand = negOrPos(firstOperand);
        else if (!tempOperator) secondOperand = negOrPos(secondOperand);
        else tempOperand = negOrPos(tempOperand);
    }

    //Add or remove negative from operand
    function negOrPos(num: number | null) {
        num ??= 0;
        isNegative = isNegative ? false : true;
        num = -(num);
        display!.innerHTML = `${Object.is(num, -0) ? '-0' : format(num)} `;
        wasEqualed = false;
        return num;
    }

    //Clear last input
    function clear() {
        display!.style.fontSize = '4rem'
        if (tempOperand) {
            tempOperand = null;
        } else if (secondOperand) {
            secondOperand = null;

            cleared!.innerText = 'AC';
        } else {
            firstOperand = null;
            cleared!.innerText = 'AC';
        }
        display!.innerText = '0';
    }

    //Clear all input
    function clearAll() {
        display!.style.fontSize = '4rem'
        cleared!.innerHTML = 'AC';
        firstOperand = null;
        secondOperand = null;
        tempOperand = null;
        operatorValue = '';
        tempOperator = '';
        display!.innerHTML = '0';
        isNegative = false;
        wasEqualed = false;
    }
}

