
function binaryAdd(firstNumber, secondNumber, isSigned = false) {
    let stringFirstNumber = firstNumber.toString();
    let stringSecondNumber = secondNumber.toString();


    let arr1 = [];
    for (let i = 0; i < stringFirstNumber.length; i++)
    {
        arr1.push(stringFirstNumber.charAt(i))
    }


    let arr2 = [];
    for (let i = 0; i < stringSecondNumber.length; i++)
    {
        arr2.push(stringSecondNumber.charAt(i));
    }

    while (arr1.length < arr2.length) {
        arr1.unshift("0");
    }
    while (arr2.length < arr1.length) {
        arr2.unshift("0");
    }

    let carry = 0;
    let firstNumberBit;
    let secondNumberBit;
    let sumBit;
    let res = []
    for (let i = arr1.length - 1; i >= 0; i--)
    {

        firstNumberBit = parseInt(arr1[i]);
        secondNumberBit = parseInt(arr2[i]);
        sumBit = firstNumberBit + secondNumberBit + carry;

        if(sumBit % 2 === 0)
        {
            res.unshift(0)
        }
        else
        {
            res.unshift(1);
        }
        if(sumBit > 1)
        {
            carry = 1;   
        }
    }
    if(carry === 1 && !isSigned)
        res.unshift(1);

    return res.join('');
}


function inverseOfBinary(number)
{
    let numAsString = number.toString();
    let res = "";
    for(let i = 0; i < numAsString.length; i++)
    {
        if(numAsString.charAt(i) === "0")
        {
            res = res + "1";
        }
        else
        {
            res = res + "0";
        }
    }
    return res;
}


function twosCompliment(number)
{
    let input = number;
    input = "0" + input; 
    
    return binaryAdd(inverseOfBinary(input), 1, true);
}

console.log(binaryAdd(1001, 10111));
console.log(inverseOfBinary(101001010000));
console.log(twosCompliment(01101));