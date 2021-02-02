function pinGenerate() {
    const generateValue = Math.random() * 10000
    const generateValue2 = generateValue.toFixed(0);
    display();
    clearValue();
    codeMatchVerify();
    initialTryValue();
    document.getElementById('generateForm').value = generateValue2;
}
function submitFunction() {
    const codeInput = document.getElementById('codeInput').value;
    const prev = document.getElementById('generateForm').value;
    if (codeInput == prev && codeInput != '' && prev != '' && codeInput.length==4) {
        display();
        document.getElementById('codeMatch').style.display = "block";
        document.getElementById('codeNotMatch').style.display = "none";
        initialTryValue();
    }
    else {
        let tryValue = document.getElementById('try').innerText;
        tryValue--;
        if (tryValue >= 0 && codeInput != '' && prev != '') {
            document.getElementById('codeNotMatch').style.display = "block";
            document.getElementById('codeMatch').style.display = "none";
            document.querySelector(".action-left").style.display = "block"
            document.getElementById('try').innerText = tryValue;
        }
        else if (tryValue < 0) {
            alert("Khela sesh");
        }
        else if (codeInput == '' || prev == '') {
            alert('Age to value dau')
        }
    }
}
let inputValue;
function numberClick(y) {
    inputValue = document.getElementById('codeInput').value
    if (y == '<') {
        document.getElementById('codeInput').value = Math.floor(inputValue / 10);
    }
    else if(inputValue.length>3){
        alert("Don't try to write more than 4 digit")
    }
    else{
        let x = inputValue + y;
        document.getElementById('codeInput').value = x;
    }
    
}
function clearValue() {
    document.getElementById('codeInput').value = null;
}
function display() {
    document.querySelector(".action-left").style.display = "none"
}
function codeMatchVerify() {
    document.getElementById('codeMatch').style.display = "none";
    document.getElementById('codeNotMatch').style.display = "none";
}
function initialTryValue() {
    document.getElementById('try').innerText = 3;
}
