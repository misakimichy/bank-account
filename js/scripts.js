// Business Logic
function BankAccount (userName, initialDeposit, balance, depositAmount, withdrawalAmount) {
    this.userName = userName,
    this.initialDeposit = initialDeposit,
    this.balance = balance,
    this.depositAmount = depositAmount,
    this.withdrawalAmount = withdrawalAmount
}

BankAccount.prototype.addDeposit = function() {
    balance += this.depositAmount;
}

BankAccount.prototype.subtractWithdrawal = function() {
    balance -= this.withdrawalAmount;
}

// User Interface Logic
