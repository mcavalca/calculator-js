/*eslint-env browser*/

var handlers = {
    getNumbers: function(){
        var numOne = parseInt(document.getElementById('firstElement').value);
        var numTwo = parseInt(document.getElementById('secondElement').value);
        document.getElementById('firstElement').value = '';
        document.getElementById('secondElement').value = '';
        return [numOne, numTwo];
    },
    doSum: function(){
        var calc = this.getNumbers();
        var result = calc[0] + calc[1];
        if (isNaN(result)) result = 0;
        document.getElementById('output').innerHTML = result;
    },
    doMinus: function(){
        var calc = this.getNumbers();
        var result = calc[0] - calc[1];
        if (isNaN(result)) result = 0;
        document.getElementById('output').innerHTML = result;     
    },
    doTimes: function(){
        var calc = this.getNumbers();
        var result = calc[0] * calc[1];
        if (isNaN(result)) result = 0;
        document.getElementById('output').innerHTML = result;
    },
    doDivide: function(){
        var calc = this.getNumbers();
        var result = calc[0] / calc[1];
        if (isNaN(result)) result = 0;
        document.getElementById('output').innerHTML = result;
    }
}