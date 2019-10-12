const express = require('express');
const bodyParser = require('body-parser');

const restService = express();

restService.use(
	bodyParser.urlencoded({
		extended: true
	})
);

restService.use(bodyParser.json());

restService.post('/', (request, response) => {

});

restService.listen(process.env.PORT || 8080, () => {
	console.log('Server up and listening on port');
})