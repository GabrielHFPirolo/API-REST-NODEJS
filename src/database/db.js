import mongoose from "mongoose"

async function connectDB(){
  await mongoose.connect(
    "mongodb+srv://gabrielpirolo:Nhw3Cd5Dgz8DguP@myfirstdatabase.nwr8dnj.mongodb.net/?retryWrites=true&w=majority&appName=MyFirstDataBase")
}

export default connectDB //export default por exportar apenas uma função