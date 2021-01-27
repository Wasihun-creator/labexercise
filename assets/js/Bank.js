function account(name1,balance){
    this.name1  = name1;
    this.balance = balance;
    
}
var accounts = [new account("user1",0),new account("user2",0)];

(function () {
    while(true){

        var choice = prompt('AAiT Bank \nEnter Your choice.\n1.Deposit\n2.Withdraw\n3.Balance\n4.Transfer\n5.Exit');
        if(choice=="1"){
            deposit();
        }
        else if (choice=="2"){
            withdraw();
        }
        else if (choice=="3"){
            balance();
        }
        else if (choice=="4"){
            transfer();
        }
        else{
            alert("Good Bye!");
            break; 
        }
    }
})();


function deposit(){
    let amount = parseFloat(prompt('Save & Get Rewareded!\n Enter Amount to be saved:'));
    if(amount>0){
        accounts[0].balance+=amount;
        alert("Birr " + amount + " is added to the account " + accounts[0].name1 + "\n your loto number is 5473638");
    }
}
function  balance(){
    alert('Balance\n '+accounts[0].name1 +'\'s account balance is ' + accounts[0].balance+"\n"+accounts[1].name1 +'\'s account balance is ' + accounts[1].balance);
}
function transfer(){
    let amount = parseFloat(prompt('Transfer\n Enter amount to be transferred:'));
    if(accounts[0].balance-amount<0){
        alert("Insufficient balance to do so!");
    }
    else{
        accounts[0].balance-=amount;
        accounts[1].balance+=amount;
        alert("A transfer of " + amount + " to " + accounts[1].name1 + "is done!");
    }
}

function withdraw(){
    let amount = parseFloat(prompt('Withdrawa\n Enter amount to withdraw:'));
    if(accounts[0].balance-amount>50){
        if(amount>25 && amount<100000){
            accounts[0].balance+=amount;
            alert("Birr " + amount + " is withdrawn from your account!");
        }
        else{
            alert("Not allowed to withdraw this amount!");
        }
    }
    else{
        alert("Insufficient amount!")
    }
}