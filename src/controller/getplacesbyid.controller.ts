import { Request, Response} from "express";
import placesData from "../data/places.json"

export async function getplacesbyidcontroller(req:Request, res:Response) {
    const id = parseInt(req.params.name);
    const place = placesData.find((place) => place.id === id);
    if (!place) {
      return res.status(404).json({
        error: "PLACE_NOT_FOUND",
        message: `Place '${id}' not found in the database`,
      });
    }
    return res.status(200).json(place);
  };