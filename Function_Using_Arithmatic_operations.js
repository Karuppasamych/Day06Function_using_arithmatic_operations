
// Function using arithmatic operations
let num1 = prompt('Enter the number');
let num2 = prompt('Enter the number');
let opr = prompt('Enter the operands');

console.log("num1 = ",num1,",", "num2 = ",num2)
function arithmatic(num1, num2, opr){

        if(opr == '+'){

            let total = Number(num1) + Number(num2)
            console.log('Sum value = ',total)
            return total;
        }

        else if(opr == '-'){
            let total = Number(num1) - Number(num2)
            console.log('Substraction value = ',total)
            return total;
        }

        else if(opr == '*'){
            let total = Number(num1) * Number(num2)
            console.log('Multiplication value = ',total)
            return total;
        }

        else if(opr == '/'){
            let total = Number(num1) / Number(num2)
            console.log('Division value = ',total)
            return total;
        }
}

var result = arithmatic(num1 ,num2 , opr)
console.log(result);