let firstNumber = '';
let secondNumber = '';
let operatorUsed = '';
let result = '';
// display clear karva 
// empppty variable banavi tene first second result levana
function cleardisplay() {
    firstNumber = '';
    secondNumber = '';
    operatorUsed = '';
    result = '';
    document.getElementById('first').value = '';
    document.getElementById('second').value = '';
    document.getElementById('result').value = '';
}
// opeartor click no kariye tyare 
// jo op used na(false) hoy to first input ma jaay ane fn ma show kare 
function number(no) {
    if(!operatorUsed) {
        firstNumber += no;
        document.getElementById('first').value = firstNumber;
    }
    // jo op used thato(true) hoy to second input ma jaay ane sn ma show kare
     else {
        secondNumber += no;
        document.getElementById('second').value = secondNumber;
    }
}
// jo firstnumber ma value hoy to niche no code run thaay
function operator(op) {
    if (firstNumber) {
        // jo operator click thaay to operator used ma store thaay
        operatorUsed = op;
        // je first input ma show thase
        document.getElementById('first').value = firstNumber;
        // have first input lakhiye etle second input clear thaay 
        document.getElementById('second').value = '';
        // ane aa variable ma second input je lakhiye te store thaay
        secondNumber = '';
    }
}

function calculate() {
    // jo first second ane operator input karela hoy to niche no code use karvo.
    if (firstNumber && secondNumber && operatorUsed) {
        // variable ni valur ne number ma convert kari const no 1 ane 2 ma store karse
        const no1 = Number(firstNumber);
        const no2 = Number(secondNumber);
        if (operatorUsed === '+') {
            result = no1 + no2;
        } 
        else if (operatorUsed === '/') {
            result = no1 / no2;
        }   
         else if (operatorUsed === '-') {
            result = no1 - no2;
        } 
        else if (operatorUsed === '*') {
            result = no1 * no2;
        }
        // result ma show karse answer upar ni calculation ne
        document.getElementById('result').value = result;
    }
}

