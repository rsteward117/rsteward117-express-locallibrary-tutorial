const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const genreSchema = new Schema({
    name: { type: String, required: true, maxLength: 100, minLength: 3},
});

// Virtual for book's URL
genreSchema.virtual("url").get(function () {
    // We don't use an arrow function as we'll need the this object
    return `/catalog/genre/${this._id}`;
  });

//export model
module.exports = mongoose.model("genre", genreSchema);