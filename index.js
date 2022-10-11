const express = require("express");
var user = require('./users_module');
const port = 8080;

const app = express();
app.use(express.json());

var cors = require('cors');
app.use(cors());



app.use('/user', user);
//app.use('/user2', user);
app.get('/search', function(req, res){
	const response = searchData()
    res.send(response);
});

//app.use('/getHTNames', user);
app.use(function(req, res, next) {
	res.status(404);
	res.send('404: File Not Found');
});


app.listen(process.env.PORT || port, () => {
	console.log("listening 8080...");
});

