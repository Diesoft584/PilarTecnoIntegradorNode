import mongoose from "mongoose";
import { Iplaces } from "../Interfaces/Iplaces"

const addressSchema = new mongoose.Schema({
    latitud: {
        type: Number,
        required: true
    },
    length: {
        type: Number,
        required: true
    },
    map: {
        type: String,
        required: true
    }
});

const contactSchema = new mongoose.Schema({
    contact_phone: {
        type: String,
        required: true
    },
    contact_mail: {
        type: String,
        required: true
    },
    contact_red_social: {
        type: String,
        required: true
    },
    contact_page: {
        type: String,
        required: true
    }
});

const placesSchema = new mongoose.Schema<Iplaces>({
    areas: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    address: addressSchema,
    description: {
        type: String,
        required: true
    },
    attention_hours: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    contact: contactSchema
});

export const Places = mongoose.model('Places', placesSchema)

