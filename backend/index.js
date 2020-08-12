const express = require('express');
const app = express();
const port = 3000;
const cors =  require('cors');
const connectDB = require('./connection');
const Car = require('./Car');
const bodyParser = require('body-parser');


app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(cors());
// connect to DB
connectDB();

app.get('/cars', async (req, res) => {
  const r = await Car.find();
  return res.json(r).status(200);
});

app.get('/cars/:id', async (req, res) => {
  const r = await Car.find()
  return res.json(req.params.id !== undefined ? r.filter(obj => obj._id == req.params.id): r).status(200);
});

app.post('/add-car', async (req, res) => {
  try {
    const { name, image, mileage, hp, quarter } = req.body;
    let car = {};
    car.name = name;
    car.image = image;
    car.mileage = mileage;
    car.hp = hp;
    car.quarter = quarter;
    let carModel = new Car(car);
    await carModel.save();
    res.json(carModel).status(200);
  } catch(e) {
    return res.json({ message: 'Error'}).status(500);
  }
});

app.listen(port, () => {
  console.log(`Server Running on PORT: ${port}`);
});