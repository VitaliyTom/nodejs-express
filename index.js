import express from 'express'
import mongoose from 'mongoose';
import config from 'config';
import colors from 'colors';
import getAllRoutes from './routes/routes.js';

const app = express();

const PORT = process.env.PORT ?? 4321;

app.use('/api', getAllRoutes);

async function start() {
    try {
        await mongoose.connect(config.get('mongoUri'))
        console.log(colors.bgBrightYellow.black(`Server mongoDB has been connected...`));

        app.listen(PORT, () => {
            console.log(colors.bgBrightGreen.black(`Server has been started on port ${PORT}...`));
        })
    } catch (e) {
        console.log('Server Error', e.message);
        process.exit(1);
    }
}

start()

