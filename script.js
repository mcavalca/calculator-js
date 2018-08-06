/*eslint-env browser*/

var handlers = {
    sumNumbers: function(){
        document.getElementById('firstElement').value = '';
        document.getElementById('secondElement').value = '';
    },
    doSum: function(){
        var numOne = parseInt(document.getElementById('firstElement').value);
        var numTwo = parseInt(document.getElementById('secondElement').value);
        document.getElementById('firstElement').value = '';
        document.getElementById('secondElement').value = '';
        var result = numOne + numTwo;
        document.getElementById('output').innerHTML = result;
    },
    doMin: function(){
        var numOne = parseInt(document.getElementById('firstElement').value);
        var numTwo = parseInt(document.getElementById('secondElement').value);
        document.getElementById('firstElement').value = '';
        document.getElementById('secondElement').value = '';
        var result = numOne - numTwo;
        document.getElementById('output').innerHTML = result;           
    }
}