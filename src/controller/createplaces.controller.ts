import { Request, Response} from "express";
import placesData from "../data/places.json"


export async function createplacescontroller(req:Request, res:Response) {
    const {
      id,
      areas,
      name,
      address,
      description,
      attention_hours,  
      image,
      contact,
    } = req.body;
    const { latitud, length, map } = address || {};
    
    res.status(200).json({
        status:"OKEY",
    });
    }