const { default: mongoose } = require('mongoose');



const dbConnection = async () => {
  try {
    mongoose.connect(process.env.DB_CNN);

    console.log('DB online');
  } catch (error) {
    console.log(error);
    throw new Error('Error while initializing, check the console log for more information');
  }
}

module.exports = {
  dbConnection
}