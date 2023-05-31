var express = require('express');

const app = express();
const port = 3000;


const workingHoursMiddleware = (req, res, next) => {
    const date = new Date();
    const day = date.getDay();
    const hour = date.getHours();

    if (day >= 1 && day <= 5 && hour >= 9 && hour < 18) {
        next(); // Proceed to the next middleware 
    } else {
        res.send('Sorry, the web application is only available on (Monday to Friday, from 9 to 17).');
    }
    };


//Middleware to serve static files

app.use(express.static('public'));


//Apply the working hours middleware to all routes
app.use(workingHoursMiddleware);





/* GET home page. */

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/home.html')});

/* GET services page. */

app.get('/services', (req, res) => {
  res.sendFile(__dirname + '/views/services.html')});

/* GET contact page. */

app.get('/contact', (req, res) => {
res.sendFile(__dirname + '/views/contact.html')});

//module.exports = router;


// Start the server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});