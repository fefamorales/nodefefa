const express = require ('express')
const app = express();
const config = require ('./settings/config')
const routes = require('./routes/routes')

app.use('/',routes);

app.listen(config.SERVER.port, err => {
	if(err) {
		console.log(err);
	}else {
		console.log("server running in port", config.SERVER.port)
	}
})
