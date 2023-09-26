const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;


const sampleFlights = [
  { id: 1, airline: 'Stuti Airline 1', departure: 'Delhi', arrival: 'Agra', date: '2023-10-01', price: 200 },
  { id: 2, airline: 'Stuti Airline 2', departure: 'Delhi', arrival: 'Pune', date: '2023-10-01', price: 250 },
  { id: 3, airline: 'Stuti Airline 3', departure: 'Delhi', arrival: 'Jaipur', date: '2023-10-01', price: 180 },
];

app.use(express.static('public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/flights', (req, res) => {
  res.json({ message: 'Welcome to the Flight Booking API' });
});

app.get('/api/hotels', (req, res) => {
  res.json({ message: 'Welcome to the Hotel Booking API' });
});

app.post('/api/flights/search', (req, res) => {
  const { from, to, departureDate, returnDate, passengers, passengerClass } = req.body;

  const searchResults = sampleFlights.filter(flight => {
    return flight.departure === from &&
           flight.arrival === to &&
           flight.date === departureDate &&
           flight.price != passengers * 100; 
  });

  res.json({ flights: searchResults });
  res.redirect('/public/searchresults.html?results=' + JSON.stringify(searchResults));
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
