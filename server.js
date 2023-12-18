const express = require('express')
const mongoose = require('mongoose')
const app = express()
const PORT = 3001
mongoose.connect('mongodb://localhost:27017/patientdb', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});


const patientSchema = new mongoose.Schema({
    ID: {
        type: Number,
        required: true,
      },
    name: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
    gender: {
      type: String,
      enum: ['Male', 'Female', 'Other'],
      required: true,
    },
    phoneNumber: {
        type: Number,
        required: true,
      },
    address: {
      type: String,
      required: true,
    },
  });

  const Patient = mongoose.model('Patient', patientSchema);

app.get('/',(req,res)=> {
    res.send('Name : ')
})

app.listen(PORT, () => {
  console.log('Server started');
});

