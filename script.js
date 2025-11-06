function bookTicket(route) {
    alert(`You have selected: ${route}`);
}

document.getElementById('booking-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const route = document.getElementById('route').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    const seats = document.getElementById('seats').value;

    alert(`Booking Confirmed!\nRoute: ${route}\nDate: ${date}\nTime: ${time}\nSeats: ${seats}`);
});
