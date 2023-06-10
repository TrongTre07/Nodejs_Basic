const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const categorySchema = new Schema({
  id: { type: ObjectId },
  name: {
    type: String,
    require: true,
    trim: true,
    minLength: 3,
    default: "No Name",
  },
});

module.exports =mongoose.models.category || mongoose.model("category", categorySchema);
