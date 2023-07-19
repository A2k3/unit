function convertLength(){
    const inputValue = parseFloat(document.getElementById('inputValue').value);
    const fromUnit = document.getElementById('fromUnit').value;
    const toUnit = document.getElementById('toUnit').value;

    let result;

    if (fromUnit === 'cm'){
        if(toUnit === 'cm') result = inputValue;
        else if (toUnit === 'm') result = inputValue / 100;
        else if (toUnit === 'in') result = inputValue / 2.54;
        else if (toUnit === 'ft') result = inputValue / 30.48;
    } else if (fromUnit === 'm') {
        if (toUnit === 'cm') result = inputValue * 100;
        else if (toUnit === 'm') result = inputValue;
        else if (toUnit === 'in') result = inputValue * 39.37;
        else if (toUnit === 'ft') result = inputValue * 3.281;
    } else if (fromUnit === 'in') {
        if (toUnit === 'cm') result = inputValue * 2.54;
        else if (toUnit === 'm') result = inputValue / 39.37;
        else if (toUnit === 'in') result = inputValue;
        else if (toUnit === 'ft') result = inputValue / 12;
    } else if (fromUnit === 'ft') {
        if (toUnit === 'cm') result = inputValue * 30.48;
        else if (toUnit === 'm') result = inputValue / 3.281;
        else if (toUnit === 'in') result = inputValue * 12;
        else if (toUnit === 'ft') result = inputValue;
    }

    document.getElementById('result').textContent=`${inputValue} ${fromUnit} is equal to ${result.toFixed(2)} ${toUnit}`;
}