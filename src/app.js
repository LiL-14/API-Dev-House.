import express from 'express';
import mongoose from 'mongoose';
import routes from './routes';

mongoose.set("strictQuery", true);

class App{
    constructor(){
        this.server = express();

        mongoose.connect("mongodb+srv://Lucas:lucas@devhouse.po27yov.mongodb.net/?retryWrites=true&w=majority", {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        this.middlewares();
        this.routes();
    }

    middlewares(){
        this.server.use(express.json());
    }

    routes(){
        this.server.use(routes)
    }
}

export default new App().server 