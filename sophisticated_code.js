/* 
Filename: sophisticated_code.js 
Description: A complex code showcasing various JavaScript functionalities and concepts. 
*/

// Importing external modules
const express = require('express');
const bcrypt = require('bcrypt');
const axios = require('axios');

// Initializing Express.js app
const app = express();

// Middleware to parse JSON and handle CORS
app.use(express.json());
app.use(cors());

// Database connection configuration
const dbConfig = {
  host: 'localhost',
  username: 'admin',
  password: 'password',
  database: 'my_database'
};

// Function to fetch user data from the database
async function fetchUserData(userId) {
  try {
    const user = await db.query('SELECT * FROM users WHERE id = ?', [userId]);
    return user;
  } catch (error) {
    console.error('Error fetching user data:', error);
    throw new Error('Failed to fetch user data');
  }
}

// Route to handle user login
app.post('/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    // Fetch user data from the database
    const user = await fetchUserData(username);

    // Compare password with the hashed password stored in the database
    const isPasswordMatch = await bcrypt.compare(password, user.password);

    if (isPasswordMatch) {
      res.status(200).json({ message: 'Login successful' });
    } else {
      res.status(401).json({ message: 'Invalid username or password' });
    }
  } catch (error) {
    console.error('Login failed:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Function to fetch weather data from an external API
async function fetchWeatherData(city) {
  try {
    const response = await axios.get(`https://api.weather.com/${city}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching weather data:', error);
    throw new Error('Failed to fetch weather data');
  }
}

// Route to get weather information for a specific city
app.get('/weather/:city', async (req, res) => {
  const city = req.params.city;

  try {
    // Fetch weather data from the external API
    const weatherData = await fetchWeatherData(city);
    res.status(200).json(weatherData);
  } catch (error) {
    console.error('Failed to get weather data:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Start the server
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});

// Complex algorithm to calculate Fibonacci series
function fibonacci(n) {
  const fibArray = [0, 1];

  for (let i = 2; i < n; i++) {
    fibArray[i] = fibArray[i - 1] + fibArray[i - 2];
  }

  return fibArray;
}

// Usage of the Fibonacci algorithm
const fibSeries = fibonacci(10);
console.log('Fibonacci series:', fibSeries);

// Complex object manipulation
const complexObject = {
  a: 1,
  b: {
    c: 2,
    d: [3, 4]
  },
  e: 'hello'
};

const { a, b: { c, d }, e } = complexObject;
console.log('Destructured object:', a, c, d, e);

// Other sophisticated code snippets...
// ...
// ...

// End of code