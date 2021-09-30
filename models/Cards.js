import mongoose from 'mongoose';

const {Schema, model} = mongoose

const shema = new Schema({
    title: {type: String, required: true},
    about: {type: String, required: true},
    linkImg: {type: String, required: true},
    city: {type: String, required: true}
})

export default model('Cards', shema);
