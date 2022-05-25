import mongoose from "mongoose";


const mongodbURI = `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@cluster0.tg2aj.mongodb.net/${process.env.MONGODB_NAME}?retryWrites=true&w=majority`;


const initDatabase = async () => {
    mongoose.connect( mongodbURI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(db => console.log(`Database connected to ${db.connection.host}`))
    .catch(e => console.error(`Database error : ${e.message}`));
}


export default initDatabase;