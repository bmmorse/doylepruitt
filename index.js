const express = require('express');
const path = require('path');

const app = express();

// static assets
app.use(express.static(path.join(__dirname, 'client/build')));

// Always serve React's index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/client/build/index.html'));
});

// catch any errors
app.use((err, req, res, next) => {
  if (err) {
    res.sendStatus(400);
  } else {
    next();
  }
});

// start the app
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`${process.env.NODE_ENV} || ${PORT}`);
});
