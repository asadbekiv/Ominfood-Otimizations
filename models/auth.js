const mongoos = require("mongoose");

const authSchema = new mongoos.Schema({
  full_name: {
    type: String,
    required: [true, "Enter your full name ✍️"],
    minLength: 16,
    unique: true,
  },
  email: {
    type: String,
    unique: true,
    minLength: 16,
    required: [true, "email aadress required ✍️"],
    lowercase: true,
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "Please enter a valid email address",
    ],
  },
});

const Auth = mongoose.model("Auth", authSchema);

module.exports = Auth;
