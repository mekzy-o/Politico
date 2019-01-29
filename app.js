import express from 'express';
import bodyParser from 'body-parser';
import router from './server/routes/index';


//Set up the express app
const app = express();

//Parse incoming resquests data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());

//Set Router instance
app.use(router);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
	console.log(`server running on port ${PORT}`)
});

export default app;
