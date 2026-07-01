/*
		Your Name: <Enter Your Name>
		Last Modified Date: <Enter The Date in mm/dd/yyyy format>
		File: event_registration.js
		File Description: <Enter a brief paragraph to describe the purpose of this file>
*/

// Set the minimum and maximum number of tickets able to be purchased
var minTickets = 1;
var maxTickets = 3;
// Set variables for the ticket cost
var costPerTicket = 5.00;
var ticketSurcharge = 0.50;

/*** YOUR CODE STARTS BELOW HERE ***/
// This sets the timer to 10 minutes in seconds.
var timeLeft = 10 * 60;

// This starts the countdown timer and runs it every second.
var timerInterval = setInterval(function () {

    // This calculates how many full minutes are left.
    var minutes = Math.floor(timeLeft / 60);

    // This calculates how many seconds are left.
    var seconds = timeLeft % 60;

    // This checks if the seconds are less than 10.
    if (seconds < 10) {

        // This adds a zero in front of seconds less than 10.
        seconds = "0" + seconds;
    }

    // This displays the timer on the webpage.
    document.getElementById("timer").innerHTML = minutes + ":" + seconds;

    // This subtracts one second from the timer.
    timeLeft--;

    // This checks if the timer has expired.
    if (timeLeft < 0) {

        // This stops the timer.
        clearInterval(timerInterval);

        // This tells the user their time has expired.
        alert("Your timer has expired.");

        // This reloads the current webpage.
        location.href = location.href;
    }

// This makes the timer update every 1000 milliseconds.
}, 1000);

// This hides the contact information section when the page first opens.
document.getElementById("contactInformation").style.display = "none";

// This function changes the background color of a form field.
function changeColor(fieldId, hasError) {

    // This checks if the field has an error.
    if (hasError) {

        // This changes the field background color to light red.
        document.getElementById(fieldId).style.backgroundColor = "#ffcccc";

    // This runs when the field does not have an error.
    } else {

        // This changes the field background color back to white.
        document.getElementById(fieldId).style.backgroundColor = "white";
    }
}

// This function calculates the total cost of the tickets.
function calculateTotal() {

    // This gets the ticket value entered by the user.
    var numTickets = document.getElementById("numTickets").value;

    // This changes the ticket value into a number.
    var tickets = Number(numTickets);

    // This checks if the ticket value is blank, not a number, not a whole number, less than 1, or greater than 3.
    if (numTickets === "" || isNaN(tickets) || tickets < minTickets || tickets > maxTickets || tickets % 1 !== 0) {

        // This displays an error message beside the ticket field.
        document.getElementById("msgTickets").innerHTML = "Invalid entry. Please enter a whole number between 1 and 3. You may only purchase 1, 2, or 3 tickets.";
		document.getElementById("msgTickets").style.color = "red";
		document.getElementById("msgTickets").style.display = "inline";

        // This changes the ticket field color to show an error.
        changeColor("numTickets", true);

        // This resets the total cost to zero.
        document.getElementById("totalCost").value = "$0.00";

        // This hides the contact information section.
        document.getElementById("contactInformation").style.display = "none";

    // This runs when the ticket value is valid.
    } else {

        // This calculates the total cost using the ticket price and surcharge.
        var total = tickets * (costPerTicket + ticketSurcharge);

        // This displays the total cost with a dollar sign and two decimal places.
        document.getElementById("totalCost").value = "$" + total.toFixed(2);

        // This clears the ticket error message.
        document.getElementById("msgTickets").innerHTML = "";

        // This changes the ticket field color back to white.
        changeColor("numTickets", false);

        // This shows the contact information section.
        document.getElementById("contactInformation").style.display = "block";
    }
}

// This function completes the ticket purchase.
function completePurchase() {

    // This creates a variable to track if errors exist.
    var hasError = false;

    // This gets the name entered by the user.
    var name = document.getElementById("name").value;

    // This gets the email entered by the user.
    var email = document.getElementById("email").value;

    // This gets the total cost from the total cost field.
    var totalCost = document.getElementById("totalCost").value;

    // This checks if the name field is blank.
    if (name === "") {

        // This displays an error message beside the name field.
        document.getElementById("msgname").innerHTML = "Name is required.";

        // This changes the name field color to show an error.
        changeColor("name", true);

        // This records that an error exists.
        hasError = true;

    // This runs when the name field is not blank.
    } else {

        // This clears the name error message.
        document.getElementById("msgname").innerHTML = "";

        // This changes the name field color back to white.
        changeColor("name", false);
    }

    // This checks if the email field is blank.
    if (email === "") {

        // This displays an error message beside the email field.
        document.getElementById("msgemail").innerHTML = "Email is required.";

        // This changes the email field color to show an error.
        changeColor("email", true);

        // This records that an error exists.
        hasError = true;

    // This runs when the email field is not blank.
    } else {

        // This clears the email error message.
        document.getElementById("msgemail").innerHTML = "";

        // This changes the email field color back to white.
        changeColor("email", false);
    }

    // This checks if there are no errors.
    if (hasError === false) {

        // This stops the countdown timer.
        clearInterval(timerInterval);

        // This thanks the user for the purchase and shows the total amount.
        alert("Thank you for your purchase. Your total cost is " + totalCost + ". Please allow 1 hour for electronic delivery.");
    }
}

// This runs code when the reset button is clicked.
document.getElementById("reset").addEventListener("click", function () {

    // This clears the ticket error message.
    document.getElementById("msgTickets").innerHTML = "";

    // This clears the name error message.
    document.getElementById("msgname").innerHTML = "";

    // This clears the email error message.
    document.getElementById("msgemail").innerHTML = "";

    // This resets the ticket field background color.
    changeColor("numTickets", false);

    // This resets the name field background color.
    changeColor("name", false);

    // This resets the email field background color.
    changeColor("email", false);

    // This resets the total cost field.
    document.getElementById("totalCost").value = "$0.00";

    // This hides the contact information section.
    document.getElementById("contactInformation").style.display = "none";
});