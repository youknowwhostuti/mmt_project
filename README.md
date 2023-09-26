#Flight Booking Page

##Overview

The Flight Booking Page project is a web application that allows users to search for and book flights. This README provides an overview of the project's components, including the frontend, backend, exposed APIs, and areas of improvement.

##Frontend
The frontend of the Flight Booking Page is implemented using HTML, CSS, and JavaScript. Key files and directories related to the frontend include:

- `index.html`: The main HTML file that serves as the user interface for flight booking.
- `styles.css`: The CSS file responsible for styling the user interface.
- `script.js`: The JavaScript file responsible for user interactions and making requests to the backend.

##Backend
The backend of the Flight Booking Page is implemented using Node.js and Express.js. Key files related to the backend include:

- `app.js`: The main server file that handles API requests and serves static files.
- `sampleFlights`: An array of sample flight data used for demonstration purposes.

###The backend provides several API endpoints, including:

- `/api/flights`: A GET endpoint that serves as a welcome message for the Flight Booking API.
- `/api/hotels`: A GET endpoint that serves as a welcome message for the Hotel Booking API.
- `/api/flights/search`: A POST endpoint for searching flights based on user input.

To run the backend, make sure you have Node.js installed and execute the `app.js` file. The server will run on port 3000 by default.
The project runs with the help of node app.js

##API Exposed

The Flight Booking Page exposes a few APIs for interaction:
- `/api/flights`: A GET API that welcomes users to the Flight Booking API.
- `/api/hotels`: A GET API that welcomes users to the Hotel Booking API.
- `/api/flights/search`: A POST API for searching flights based on user input. It returns a JSON response with flight search results.

###Example:

POST call on : localhost:3000/api/flights/search

####Sample Request body: 

{
    "from": "Delhi",
    "to": "Pune",
    "departureDate": "2023-10-01",
    "passengers": 2
}
 

####Sample Response:

{
    "flights": [
        {
            "id": 2,
            "airline": "Stuti Airline 2",
            "departure": "Delhi",
            "arrival": "Pune",
            "date": "2023-10-01",
            "price": 250
        }
    ]
}

These APIs can be accessed via HTTP requests, and the flight search results are also redirected to a search results page.

##Areas of Improvement
While the Flight Booking Page is functional, there are areas where it can be improved to enhance user experience and functionality:

1. User Authentication: Implement user authentication to secure user accounts and bookings.

2. Payment Integration: Integrate a payment gateway for users to complete bookings.

3. Error Handling: Enhance error handling to provide better feedback to users and developers.

4. Database Integration: Consider using a database to store and manage real flight data.

6. User Interface Enhancements: Continuously improve the user interface for a more intuitive and enjoyable user experience.


