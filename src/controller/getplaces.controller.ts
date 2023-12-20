import { Request, Response} from "express";
import placesData from "../data/places.json"

export async function getplacescontroller(req:Request, res: Response){
    const name = req.query.name as string
    let places = placesData;
    if (name){
        places = placesData.filter((places)=> places.name.includes(name));
    }
    res.status(200).json(places);
}