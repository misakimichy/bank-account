// Business Logic
function BankAccount (userName, initialDeposit) {
    this.userName = userName,
    this.balance = initialDeposit
}

// Method to add Deposit
BankAccount.prototype.addDeposit = function(deposit) {
    this.balance += deposit;
}

// Method to subtract Withdrawal
BankAccount.prototype.subtractWithdrawal = function(withdraw) {
    this.balance -= withdraw;
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
        const userAccount = new BankAccount(userName, initialDeposit);

        $(".total").show();
        $("#deposit-transaction").show();
        $("#withdraw-transaction").show();
        $("#user-name").text(userAccount.userName);
        $("#output").text(`$ ${userAccount.balance}`);
        clearInput();

        $("form#deposit-transaction").submit(function(event) {
            event.preventDefault();
            const userDeposit = parseInt($("input#deposit").val());
            userAccount.addDeposit(userDeposit);
            $("#output").text(`$ ${userAccount.balance}`);
            clearInput();
        });

        $("form#withdraw-transaction").submit(function(event) {
            event.preventDefault();
            const userWithdraw = parseInt($("input#withdraw").val());
            userAccount.subtractWithdrawal(userWithdraw);
            $("#output").text(`$ ${userAccount.balance}`);
            clearInput();
        });
    });
});