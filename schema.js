const mongoose = require("mongoose");

// Define the User Preferences Schema
const userPreferencesSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true, // removes leading/trailing spaces
  },
  preferences: {
    theme: {
      type: String,
      enum: ["light", "dark"],
      default: "light",
    },
    language: {
      type: String,
      default: "en",
    },
    notifications: {
      email: {
        type: Boolean,
        default: true,
      },
      sms: {
        type: Boolean,
        default: false,
      },
    },
  },
});

// Compile the schema into a model
const UserPreferences = mongoose.model("UserPreferences", userPreferencesSchema);

module.exports = UserPreferences;
