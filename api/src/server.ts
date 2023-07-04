import express from "express";
import cors from 'cors';
import {banksRouter} from './routes/index';

var app = express();


let port = process.env.PORT || 5000;
let environment = process.env.NODE_ENV;

//APP USE
app.use(express.urlencoded({extended: true}));
app.use(express.json());

var whitelist = [
  'http://localhost:4200',
  'http://localhost:5173'
];


var corsOptions = {
  origin: 'http://localhost:5173',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

app.use(cors());
app.options('*', cors(corsOptions));

//routes
app.use('/banks' , banksRouter);

console.log('About to crank up node');
console.log('PORT=' + port);
console.log('NODE_ENV=' + environment);

app.get('/ping', function(req, res, next) {
    console.log(req.body);
    res.send('pong');
});

app.listen(port, function () {
  console.log('Example app listening on port ' + port)
});