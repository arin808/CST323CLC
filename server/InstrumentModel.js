//Model for Instrument object
const { Schma, model } = require("mongoose");

const InstrumentSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  year: {
    type: Number,
    required: true,
  },
  company: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
});

const Instrument = model("instruments", InstrumentSchema);
module.exports = Instrument;
