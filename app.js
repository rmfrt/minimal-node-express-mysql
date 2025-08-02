// Import required modules
const express = require("express");
const mysql = require("mysql2");
require("dotenv").config(); // Load environment variables from .env file

// Initialize Express application
const app = express();
const port = 3000; // Define the port the server will listen on

// MySQL database configuration using environment variables
const db = mysql.createConnection({
    host: process.env.DB_HOST, // Database host
    user: process.env.DB_USER, // Database username
    password: process.env.DB_PASSWORD, // Database password
    database: process.env.DB_NAME, // Database name
});

// Connect to the MySQL database
db.connect((err) => {
    if (err) {
        console.error("Error connecting to MySQL:", err.message); // Log connection error
        return;
    }
    console.log("Successfully connected to MySQL!"); // Log successful connection
});

// Define the root route to fetch and display data from the "table_test" table
app.get("/", (req, res) => {
    const query = "SELECT id, text FROM table_test"; // SQL query to fetch data

    db.query(query, (err, results) => {
        if (err) {
            console.error("Error fetching data:", err.message); // Log query error
            res.status(500).send("Server error"); // Send error response
            return;
        }

        // Generate a simple HTML page to display the fetched data
        let html = "<!DOCTYPE html><html><head><title>Test</title></head><body>";
        html += "<h1>Node.js, Express, and MySQL Test Page</h1>";
        html += "<p>This page is designed to verify the connection to a MySQL database and display data.</p>";
        html += "<h2>Fetched Data:</h2><ul>";

        results.forEach((row) => {
            html += `<li>ID: ${row.id}, Text: ${row.text}</li>`; // Append each row to the HTML list
        });

        html += "</ul></body></html>";
        res.send(html); // Send the generated HTML as the response
    });
});

// Start the server and listen on the specified port
app.listen(port, () => {
    console.log(`Server is running on port ${port}`); // Log server start
});
