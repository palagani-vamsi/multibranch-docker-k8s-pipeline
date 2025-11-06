function processTransaction() {
    const amount = document.getElementById('amount').value;
    const recipient = document.getElementById('recipient').value;
    const account = document.getElementById('account').value;

    if (amount && recipient && account) {
        document.getElementById('transaction-status').innerHTML = `
            <p>Transaction Successful!</p>
            <p>Amount: $${amount}</p>
            <p>Recipient: ${recipient}</p>
            <p>Account: ${account}</p>
        `;
    } else {
        document.getElementById('transaction-status').innerHTML = `<p style="color: red;">Please fill all fields!</p>`;
    }
}
