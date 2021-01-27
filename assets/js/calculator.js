var numbers = new Array()

function add() {
        var operationNumber = prompt("How many numbers you want to add?")
        var sum = 0
        for(let i = 0; i < parseInt(operationNumber);i++){
            numbers[i] = prompt("Enter number " +(i + 1))
            sum = sum + parseInt(numbers[i])
        }
        return sum
    
}
function multilpy(){
        var product = 1;
        var operationNumber = prompt("How many numbers you want to multiply?")
        for(let i = 0; i < parseInt(operationNumber); i++){
            numbers[i] = prompt("Enter number " + (i + 1))
            product = product * numbers[i]
        }
        return product
    
}
function subtraction(){
        var num1 = prompt("Enter first number")
        var num2 = prompt("Enter second number")
        return num1 - num2
    
}
function division(){
    var decision;
        var num1 = prompt("Enter first number");
        var num2 = prompt("Enter second number")
        if(num2 != 0){
            decision =  (num1/num2).toFixed(2)
        }else{
            decision = "Denomenator Can't be zero!"
        }
        return decision
    
}


function Square(){
        var num1 = prompt("Enter number");
        return Math.pow(num1,2)
    
}

(function () {
    while(true){

        var option = parseInt(prompt("Calculator \nchoose operation \n1.Addition\n2.multiplication\n3.subtraction\n4.division\n5.Square \n6.to exit"))
        if(option==1){
            console.log("The sum is: " + add())
        }
        else if (option==2){
            console.log("The product is: " + multilpay())
        }
        else if (option==3){
            console.log("The difference is: " + subtraction())
        }
        else if (option==4){
            console.log("The quotient is: " + division())
        }
        else if(option==5){
            console.log("The square is: " + Square())
        }
        else {
            alert("Good Bye!");
            break; 
        }
    }
})();

    
// ;(function(){
//     if(option == 1){
//         console.log("The sum is: " + add())
//     }else if(option==2){
//         console.log("The difference is: " + subtraction())
//     }else if(option==3){
//         console.log("The product is: " + multilpay())
//     }else if(option==4){
//         console.log("The quotient is: " + division())
//     }else if(option==5){
//         console.log(maximum())
//     }else if(option==6){
//         console.log(minimum())
//     }else if(option==7){
//         console.log(Average())
//     }else if(option==8){
//         console.log(Square())
//     }else{
//         console.log("you didn't choose in range")
//     } 
    
// })();





