const express = require('express');
const mongoose = require('mongoose');

//init
const app = express();

//express middleware
app.use(express.static('dist'))
app.use(express.urlencoded({ extended:false }));
app.use(express.json());

//database key
const db = require('./config/keys').mongoURI;

//connect to mongoDB
mongoose.connect(db)
 .then(() => console.log("db is connected"))
 .catch(err => console.log(err));

// load URL model
const ShortUrl = require('./models/shortUrl');

//routes
const shorten = require('./routes/api/shorten');
app.use('/api/shorten', shorten);

//const redirect = require('./routes/api/redirect');
//app.use('/api/redirect', redirect);

app.get('/:shortUrl', async (req, res) => {
  const shortUrl = await ShortUrl.findOne({ shortCode: req.params.shortUrl })
  if (shortUrl == null) return res.sendStatus(404)

  const CHECK_HTTP = /http(s)?:\/\/.+/g;

  const checkLink = (string) => {
    return string.match(CHECK_HTTP);
  };

  if(checkLink(shortUrl.full)){
    res.redirect(shortUrl.full); 
  } else {
    res.redirect("https://" + shortUrl.full);
  } 
});

//port
const port = process.env.PORT || 1234
app.listen (port, () => console.log (`Server is running on port ${port}`));