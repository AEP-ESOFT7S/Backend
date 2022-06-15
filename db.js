var mongoose = require('mongoose');
const mongoAtlasUri =
  "mongodb+srv://arthur208:420286Aa@cluster0.dgad1.mongodb.net/Users?retryWrites=true&w=majority";

try {
  // Conecta ao cluster MongoDB
  mongoose.connect(
    mongoAtlasUri,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => console.log(" Mongoose is connected"),
  );
} catch (e) {
  console.log("could not connect");
}

const dbConnection = mongoose.connection;
dbConnection.on("error", (err) => console.log(`Connection error ${err}`));
dbConnection.once("open", () => console.log("Connected to DB!"));