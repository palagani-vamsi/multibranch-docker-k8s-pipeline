function bookTicket(movieTitle) {
    alert(`You have selected: ${movieTitle}`);
}

document.getElementById('booking-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const movie = document.getElementById('movie').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    const seats = document.getElementById('seats').value;

    alert(`Booking Confirmed!\nMovie: ${movie}\nDate: ${date}\nTime: ${time}\nSeats: ${seats}`);
});
