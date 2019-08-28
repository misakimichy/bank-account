// Business Logic
function BankAccount (userName, initialDeposit, balance, depositAmount, withdrawalAmount) {
    this.userName = userName,
    this.initialDeposit = initialDeposit,
    this.balance = balance,
    this.depositAmount = depositAmount,
    this.withdrawalAmount = withdrawalAmount
}

// Method to add Deposit
BankAccount.prototype.addDeposit = function() {
    balance += this.depositAmount;
}

// Method to subtract Withdrawal
BankAccount.prototype.subtractWithdrawal = function() {
    balance -= this.withdrawalAmount;
}

// User Interface Logic
// Method to clear the input form
function clearInput() {
    $("input").val('');
}
$(document).ready(function(){
    $("form#create-account").submit(function(event) {
        event.preventDefault();

        const userName = $("input#name").val();
        const initialDeposit = parseInt($("input#initial-deposit").val());
        let currentBalance = initialDeposit;

        const newAccount = new BankAccount(userName, initialDeposit, currentBalance);
        $(".total").show();
        $("#transaction").show();
        clearInput();
        $("#output").text(`$ ${currentBalance}`);
    });
});