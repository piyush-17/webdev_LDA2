function calculateFee() {
    const age = document.getElementById('age').value;
    let fee = 0;

    if (age >= 15) {
        fee = 600;
    } else if (age < 14 && age > 0) {
        fee = 300;
    }

    document.getElementById('feeDisplay').innerText = `Fee: Rs.${fee}`;
}

document.getElementById('registrationForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form from submitting

    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const contact = document.getElementById('contact').value;
    const workshop = document.getElementById('workshop').value;
    const fee = age >= 15 ? 600 : 300;

    const confirmationMessage = `
        Thank you, ${name}, for registering for the ${workshop} workshop!
        You need to pay Rs.${fee}. 
        We will contact you at ${contact} with further details.
    `;

    document.getElementById('confirmationDetails').innerText = confirmationMessage;
    document.getElementById('confirmationMessage').classList.remove('hidden');
    document.getElementById('registrationForm').classList.add('hidden');
});
