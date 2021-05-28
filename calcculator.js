var x;
var y;
x = prompt('Enter the 1st no.');
y = prompt('Enter the 2nd no.');
var operator; 
 while(true)
 {
    operator = prompt('Enter the operation','+');
    if(operator === '+')
    {
        alert(+x + +y);
        break;
    }
    else if(operator === '-')
    {
        alert(+x - +y);
        break;
    }
    else if(operator === '*') 
    {
        alert(+x * +y);
        break;
    }
    else if(operator === '/')
    {
        alert(+x / +y);
        break;
    }
    else
    alert('Enter a valid operator');
}