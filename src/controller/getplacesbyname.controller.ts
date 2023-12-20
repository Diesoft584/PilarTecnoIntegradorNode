import { Request, Response} from "express";
import placesData from "../data/places.json"

export async function getplacesbynamecontroller(req:Request, res:Response) {
    const name = req.params.name;
    const place = placesData.find((place) => place.name === name);
    if (!place) {
      return res.status(404).json({
        error: "PLACE_NOT_FOUND",
        message: `Place '${name}' not found in the database`,
      });
    }
    return res.status(200).json(place);
  };