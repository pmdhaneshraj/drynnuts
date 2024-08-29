const express = require('express')
const app = express();
const mongoose = require('mongoose');
const cors = require('cors')
const productRouter = require('./src/routes/product.router');
const userRouter = require('./src/routes/user.router');
const authRouter = require('./src/routes/auth.router');
require('dotenv').config();

mongoose.connect(process.env.MONGO_DB_URI)
  .then(() => console.log('Connected to DB'))
  .catch((err) => console.log(err));

const PORT = process.env.PORT || 5000;

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use(cors()) //TODO: add url for cors policy

app.use('/product', productRouter);
app.use('/user', userRouter)
app.use('/auth', authRouter)

app.listen(PORT, () => {
  console.log(`Server up and running on ${PORT}`)
})