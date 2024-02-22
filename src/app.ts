import 'dotenv/config'
import express from "express";
import cors from 'cors';
import {router as placesRouter} from './routers/places.router'

import { connect } from './db/mongo';

const app = express();

connect()

app.use(express.json());
app.use(cors());
app.use('/places', placesRouter)

app.listen(8000, ()=>{
  console.log('Server UP running in http://localhost:8000/')
})