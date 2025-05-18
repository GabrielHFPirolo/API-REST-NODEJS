import mongoose, { mongo } from "mongoose"

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true //Name passa a ser obrigatorio
  },
  age: {
    type: Number,
    required: true
  },
  email: {
    type: String,
    require: false
  },
  createdAt: {
    type: Date,
    default: Date.now()
  }

})

export default mongoose.model("User", userSchema)